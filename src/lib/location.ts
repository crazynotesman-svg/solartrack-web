// ---------------------------------------------------------------------------
// SolarTrack — 位置获取（客户端，隐私优先）
//  1) 优先使用已缓存的精确位置（localStorage）
//  2) 否则用设备时区粗略估算经度（不弹授权框，立即可用）
//  3) “使用我的位置”按钮才触发地理授权，成功后写回缓存
// 绝不向任何服务器发送位置：估算与计算全部在本地完成。
// ---------------------------------------------------------------------------

export interface Located {
	lat: number;
	lng: number;
	source: 'geolocation' | 'timezone' | 'default';
}

const KEY = 'solartrack:loc';

export function getCachedLocation(): Located | null {
	try {
		const raw = localStorage.getItem(KEY);
		return raw ? (JSON.parse(raw) as Located) : null;
	} catch {
		return null;
	}
}

function cacheLocation(l: Located): void {
	try {
		localStorage.setItem(KEY, JSON.stringify(l));
	} catch {
		/* 隐私模式或配额限制时静默忽略 */
	}
}

/**
 * 时区 → 粗略经度：本地时钟正午 ≈ 太阳正午（忽略时差方程与 DST 近似）。
 * 纬度无法从时区推断，取温和中纬度 20°（北半球常驻用户默认）。
 * 结果用于“无授权”情况下的近似日出日落，误差通常在 ±1 小时内。
 */
function estimateFromTimezone(): Located {
	const offsetMin = -new Date().getTimezoneOffset(); // 本地相对 UTC 的分钟偏移
	const lng = (offsetMin / 60) * 15;
	return { lat: 20, lng, source: 'timezone' };
}

/** 初始位置：优先缓存，否则时区估算（不弹授权框） */
export function estimateLocation(): Located {
	return getCachedLocation() ?? estimateFromTimezone();
}

/** 精确位置：弹地理授权框，失败/拒绝回退时区估算；成功写入缓存 */
export function requestPreciseLocation(): Promise<Located> {
	const fallback = estimateLocation();
	if (!('geolocation' in navigator)) return Promise.resolve(fallback);
	return new Promise((resolve) => {
		navigator.geolocation.getCurrentPosition(
			(pos) => {
				const l: Located = {
					lat: pos.coords.latitude,
					lng: pos.coords.longitude,
					source: 'geolocation',
				};
				cacheLocation(l);
				resolve(l);
			},
			() => resolve(fallback),
			{ timeout: 8000, maximumAge: 60 * 60 * 1000 },
		);
	});
}
