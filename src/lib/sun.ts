// ---------------------------------------------------------------------------
// SolarTrack — 太阳时刻计算内核（客户端，纯算法，无运行时 API）
// 基于 suncalc（NOAA 算法的轻量实现）。所有计算在用户设备本地完成。
// ---------------------------------------------------------------------------
import * as SunCalcNS from 'suncalc';

// suncalc 为 CommonJS（module.exports = { getTimes, ... }），rolldown 不合成 default 导出，
// 故取命名空间下的 default（即 module.exports 对象）。
const SunCalc: { getTimes: (date: Date, lat: number, lng: number) => Record<string, Date> } =
	(SunCalcNS as unknown as { default?: typeof SunCalcNS }).default ?? (SunCalcNS as never);

/** 4 个主题档，与 global.css / Layout.astro 的 data-theme 取值一致 */
export type Phase = 'morning' | 'noon' | 'golden-hour' | 'night';

/** suncalc 计算出的当日关键太阳时刻（均为本地时区 Date） */
export interface SunTimes {
	sunrise: Date;
	sunset: Date;
	solarNoon: Date;
	goldenHourEnd: Date; // 晨间黄金时刻结束（太阳升至 +6°）
	goldenHour: Date; // 傍晚黄金时刻开始（日落前太阳降至 +6°）
	dawn: Date; // 民用晨光（蓝调结束，太阳 -6°）
	dusk: Date; // 民用暮光（蓝调结束，太阳 -6°）
}

export function getSunTimes(date: Date, lat: number, lng: number): SunTimes {
	const t = SunCalc.getTimes(date, lat, lng);
	return {
		sunrise: t.sunrise,
		sunset: t.sunset,
		solarNoon: t.solarNoon,
		goldenHourEnd: t.goldenHourEnd,
		goldenHour: t.goldenHour,
		dawn: t.dawn,
		dusk: t.dusk,
	};
}

/**
 * 把"当前时间 + 真实太阳时刻"映射到 4 个主题档：
 *  - morning      : 日出 → 晨间黄金时刻结束（含金色 + 蓝调）
 *  - noon         : 晨间黄金结束 → 傍晚黄金开始（明亮日间）
 *  - golden-hour  : 傍晚黄金开始 → 日落（暖调余晖）
 *  - night        : 其余（日落后至日出前）
 */
export function resolvePhase(now: Date, s: SunTimes): Phase {
	const ms = now.getTime();
	if (ms >= s.sunrise.getTime() && ms < s.goldenHourEnd.getTime()) return 'morning';
	if (ms >= s.goldenHourEnd.getTime() && ms < s.goldenHour.getTime()) return 'noon';
	if (ms >= s.goldenHour.getTime() && ms < s.sunset.getTime()) return 'golden-hour';
	return 'night';
}

/** 按页面语言格式化时间为 HH:MM（24 小时制） */
export function formatTime(date: Date, lang: string): string {
	const opts: Intl.DateTimeFormatOptions = {
		hour: '2-digit',
		minute: '2-digit',
		hour12: false,
	};
	try {
		return new Intl.DateTimeFormat(lang || undefined, opts).format(date);
	} catch {
		return new Intl.DateTimeFormat(undefined, opts).format(date);
	}
}

/** Education 6 段光影的键，对应 i18n education.phase.* */
export type PhaseKey =
	| 'morning-golden'
	| 'morning-blue'
	| 'daylight'
	| 'evening-golden'
	| 'evening-blue'
	| 'night';

export interface PhaseRange {
	key: PhaseKey;
	start: Date;
	end: Date;
}

/** 由太阳时刻推导当日 6 段光影窗口（晨金 / 晨蓝 / 日间 / 晚金 / 晚蓝 / 夜） */
export function buildPhases(s: SunTimes): PhaseRange[] {
	return [
		{ key: 'morning-golden', start: s.sunrise, end: s.goldenHourEnd },
		{ key: 'morning-blue', start: s.dawn, end: s.sunrise },
		{ key: 'daylight', start: s.goldenHourEnd, end: s.goldenHour },
		{ key: 'evening-golden', start: s.goldenHour, end: s.sunset },
		{ key: 'evening-blue', start: s.sunset, end: s.dusk },
		{ key: 'night', start: s.dusk, end: s.dawn },
	];
}
