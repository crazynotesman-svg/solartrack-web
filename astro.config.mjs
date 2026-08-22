// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	// TODO: 上线前替换为正式域名
	site: 'https://solartrack.100ideas.net',
	i18n: {
		defaultLocale: 'en',
		locales: ['en', 'zh', 'ja', 'de', 'es', 'pt', 'fr'],
		routing: {
			// prefixOtherLocales 策略：默认语言 en 无前缀，其余 6 种语言带前缀
			prefixDefaultLocale: false,
			redirectToDefaultLocale: false,
		},
	},
	integrations: [
		sitemap({
			// 为每个 URL 生成 xhtml:link hreflang alternate 系列（多语言 SEO）
			i18n: {
				defaultLocale: 'en',
				locales: {
					en: 'en',
					zh: 'zh-CN',
					ja: 'ja',
					de: 'de',
					es: 'es',
					pt: 'pt',
					fr: 'fr',
				},
			},
		}),
	],
	vite: {
		plugins: [tailwindcss()],
	},
});
