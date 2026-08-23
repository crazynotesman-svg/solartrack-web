// ---------------------------------------------------------------------------
// inject-xdefault.mjs — 在 astro build 后给 sitemap 注入 x-default hreflang
// 原因：@astrojs/sitemap 3.7.3 不支持 x-default，但 Google 推荐为非列表语言
//       提供兜底。Cloudflare Pages 以 `npm run build` 构建，故本脚本会随之执行。
// ---------------------------------------------------------------------------
import { readFileSync, writeFileSync, existsSync } from 'node:fs';

const file = 'dist/sitemap-0.xml';
if (!existsSync(file)) {
	console.warn('[inject-xdefault] sitemap not found, skip');
	process.exit(0);
}

let xml = readFileSync(file, 'utf8');
if (/hreflang="x-default"/.test(xml)) {
	console.log('[inject-xdefault] x-default already present, skip');
	process.exit(0);
}

xml = xml.replace(/<url>([\s\S]*?)<\/url>/g, (block) => {
	const en = block.match(/<xhtml:link rel="alternate" hreflang="en" href="([^"]+)"/);
	if (!en) return block;
	const xdefault = `<xhtml:link rel="alternate" hreflang="x-default" href="${en[1]}"/>`;
	return block.replace(/<\/url>/, `  ${xdefault}\n  </url>`);
});

writeFileSync(file, xml);
console.log('[inject-xdefault] x-default injected into', file);
