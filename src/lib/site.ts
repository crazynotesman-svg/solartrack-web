// ---------------------------------------------------------------------------
// SolarTrack — 站点级常量与工具函数
// ---------------------------------------------------------------------------

// App Store 应用 ID（SolarTrack iOS）
const APP_ID = 'id6789409918';

// 归因参数（App Store Connect 下载统计：pt=provider token, ct=campaign）
const TRACKING = 'pt=128027998&ct=web&mt=8';

// 语言 → App Store 地区码映射
// zh→cn, ja→jp, de→de, es→es, fr→fr；en 与其他（含 pt）→ us
// 注：如需面向巴西葡语市场，可将 pt 映射为 'br'
const REGION_MAP: Record<string, string> = {
	zh: 'cn',
	ja: 'jp',
	de: 'de',
	es: 'es',
	fr: 'fr',
	en: 'us',
};

/**
 * 返回当前语言对应的地区化 App Store 下载链接
 * 例：getAppStoreUrl('ja') → https://apps.apple.com/jp/app/apple-store/id6789409918?pt=128027998&ct=web&mt=8
 */
export function getAppStoreUrl(locale: string = 'en'): string {
	const region = REGION_MAP[locale] ?? 'us';
	return `https://apps.apple.com/${region}/app/apple-store/${APP_ID}?${TRACKING}`;
}

// 正式生产域名（astro.config.mjs 的 site 同步更新）
export const SITE_URL = 'https://solartrack.100ideas.net';

// OG 分享图（真实 App icon 合成的 1200×630 暗色图）
export const OG_IMAGE_PATH = '/og.png';
