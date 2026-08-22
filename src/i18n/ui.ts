// ---------------------------------------------------------------------------
// SolarTrack — i18n 翻译字典（7 种语言）
// 结构参考 Astro 官方 i18n 教程：ui.ts + useTranslations
// ---------------------------------------------------------------------------

export const languages = {
	en: 'English',
	zh: '中文',
	ja: '日本語',
	de: 'Deutsch',
	es: 'Español',
	pt: 'Português',
	fr: 'Français',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'en';

export const showDefaultLang = false;

export const ui = {
	en: {
		// --- 站点通用 ---
		'site.title': 'SolarTrack — Track the Sun, Live in Light',
		'site.description':
			'SolarTrack is an iOS app that tracks sunrise, sunset and golden hours wherever you are.',

		// --- 导航栏 ---
		'nav.home': 'Home',
		'nav.features': 'Features',
		'nav.privacy': 'Privacy',
		'nav.appstore': 'Download',

		// --- 首页 Hero ---
		'hero.badge': 'Now available on the App Store',
		'hero.title': 'Never miss a golden hour again',
		'hero.subtitle':
			'SolarTrack gives you sunrise, sunset and golden-hour times that follow the light — anywhere in the world.',
		'hero.cta': 'Download on the App Store',
		'hero.cta.sub': 'Free on iOS',
		'hero.dragHint': 'Drag the sun to shape the light',

		// --- 手机 Mockup 界面 ---
		'mockup.sunrise': 'Sunrise',
		'mockup.sunset': 'Sunset',
		'mockup.goldenHour': 'Golden hour',

		// --- Features（功能） ---
		'feature.ar.title': 'AR Trajectory',
		'feature.ar.desc':
			'Point your camera at the sky and watch the sun’s path overlay the real world in augmented reality.',
		'feature.alerts.title': 'Golden Hour Alerts',
		'feature.alerts.desc':
			'Get notified the moment golden hour begins, so you never miss the light.',
		'feature.map.title': 'Global Map Planning',
		'feature.map.desc':
			'Plan shoots anywhere on Earth with precise sun and moon times for any location.',

		// --- Education（科普） ---
		'education.title': 'Photography Light Guide',
		'education.lead':
			'Light is everything in photography. SolarTrack helps you chase the two most beautiful windows of the day.',
		'education.golden.title': 'Golden Hour',
		'education.golden.desc':
			'The hour after sunrise and before sunset, when the sun sits low and light turns warm and soft — perfect for portraits and landscapes.',
		'education.blue.title': 'Blue Hour',
		'education.blue.desc':
			'The twilight window right before sunrise or after sunset, when the sky glows deep blue and city lights begin to sparkle.',
		'education.imageAlt': 'Golden hour landscape illustration',

		// --- Download CTA ---
		'cta.title': 'Chase the light. Download SolarTrack.',
		'cta.subtitle':
			'Free on the App Store. Sunrise, sunset and golden hours — anywhere in the world.',
		'cta.button': 'Download on the App Store',

		// --- Privacy（隐私政策） ---
		'privacy.title': 'Privacy Policy',
		'privacy.updated': 'Last updated: August 2026',
		'privacy.statement':
			'SolarTrack respects your privacy. We do not collect, store, or share any of your personal location information. All trajectory calculations happen locally on your device.',

		// --- 页脚 ---
		'footer.tagline': 'Made for people who chase the light.',
		'footer.rights': 'All rights reserved.',
	},
	zh: {
		'site.title': 'SolarTrack — 追踪太阳，沐浴晨光',
		'site.description': 'SolarTrack 是一款 iOS 应用，随时随地为你追踪日出、日落与黄金时刻。',

		'nav.home': '首页',
		'nav.features': '功能',
		'nav.privacy': '隐私',
		'nav.appstore': '下载',

		'hero.badge': '现已上架 App Store',
		'hero.title': '再也不错过任何黄金时刻',
		'hero.subtitle': 'SolarTrack 为你提供全球任何地方的日出、日落与黄金时刻时间，追随光的方向。',
		'hero.cta': '前往 App Store 下载',
		'hero.cta.sub': 'iOS 免费',
		'hero.dragHint': '拖动太阳，改变光影',

		'mockup.sunrise': '日出',
		'mockup.sunset': '日落',
		'mockup.goldenHour': '黄金时刻',

		'feature.ar.title': 'AR 轨迹预测',
		'feature.ar.desc': '将相机对准天空，太阳的运行轨迹将以增强现实的方式叠加在真实世界中。',
		'feature.alerts.title': '黄金时刻提醒',
		'feature.alerts.desc': '黄金时刻开始的那一刻即刻通知你，绝不错过最好的光线。',
		'feature.map.title': '全球地图规划',
		'feature.map.desc': '在地球任何位置规划拍摄，获取精确的日出日落与月光时刻。',

		'education.title': '摄影光影指南',
		'education.lead': '光线是摄影的灵魂。SolarTrack 帮你追到一天中最美的两段时间。',
		'education.golden.title': '黄金时刻 Golden Hour',
		'education.golden.desc': '日出后与日落前的一小时，太阳低垂、光线温暖柔和——人像与风光的最佳时机。',
		'education.blue.title': '蓝调时刻 Blue Hour',
		'education.blue.desc': '日出前与日落后的暮光窗口，天空泛起深蓝，城市灯光开始闪烁。',
		'education.imageAlt': '黄金时刻风景插画',

		'cta.title': '追光而行，下载 SolarTrack',
		'cta.subtitle': 'App Store 免费下载。日出、日落与黄金时刻——随时随地。',
		'cta.button': '前往 App Store 下载',

		'privacy.title': '隐私政策',
		'privacy.updated': '最后更新：2026 年 8 月',
		'privacy.statement':
			'SolarTrack 尊重您的隐私。我们不收集、不存储也不分享您的任何个人位置信息。所有的轨迹计算都在您的设备本地完成。',

		'footer.tagline': '为追光的人而造。',
		'footer.rights': '保留所有权利。',
	},
	ja: {
		'site.title': 'SolarTrack — 太陽を追いかけ、光とともに生きる',
		'site.description':
			'SolarTrack は、どこにいても日の出・日の入り・ゴールデンアワーを追跡できる iOS アプリです。',

		'nav.home': 'ホーム',
		'nav.features': '機能',
		'nav.privacy': 'プライバシー',
		'nav.appstore': 'ダウンロード',

		'hero.badge': 'App Store で配信中',
		'hero.title': 'ゴールデンアワーをもう逃さない',
		'hero.subtitle':
			'SolarTrack は、世界中どこでも日の出・日の入り・ゴールデンアワーの時刻をお届けします。',
		'hero.cta': 'App Store からダウンロード',
		'hero.cta.sub': 'iOS 無料',
		'hero.dragHint': '太陽をドラッグして光を変える',

		'mockup.sunrise': '日の出',
		'mockup.sunset': '日の入り',
		'mockup.goldenHour': 'ゴールデンアワー',

		'feature.ar.title': 'AR 軌跡予測',
		'feature.ar.desc': 'カメラを空に向けると、太陽の軌道が拡張現実で実世界に重なって見えます。',
		'feature.alerts.title': 'ゴールデンアワー通知',
		'feature.alerts.desc': 'ゴールデンアワーが始まった瞬間にお知らせ。最高の光を逃しません。',
		'feature.map.title': '世界地図プランニング',
		'feature.map.desc': '地球上のどこでも、正確な日の出・日の入り・月の時刻で撮影を計画。',

		'education.title': '写真ライトガイド',
		'education.lead': '光こそ写真のすべて。SolarTrack は一日で最も美しい時間帯へ導きます。',
		'education.golden.title': 'ゴールデンアワー',
		'education.golden.desc':
			'日の出後・日の入り前の1時間。太陽が低く、光は暖かく柔らかく——ポートレートや風景に最適です。',
		'education.blue.title': 'ブルーアワー',
		'education.blue.desc': '日の出直前・日の入り後の薄明。空は深い青に染まり、街の灯りが輝き始めます。',
		'education.imageAlt': 'ゴールデンアワーの風景イラスト',

		'cta.title': '光を追いかけよう。SolarTrack をダウンロード',
		'cta.subtitle': 'App Store で無料。日の出・日の入り・ゴールデンアワー——どこでも。',
		'cta.button': 'App Store からダウンロード',

		'privacy.title': 'プライバシーポリシー',
		'privacy.updated': '最終更新：2026年8月',
		'privacy.statement':
			'SolarTrack はお客様のプライバシーを尊重します。個人の位置情報を収集・保存・共有することは一切ありません。すべての軌道計算は端末上でローカルに行われます。',

		'footer.tagline': '光を追いかける人のために。',
		'footer.rights': 'All rights reserved.',
	},
	de: {
		'site.title': 'SolarTrack — Der Sonne folgen, im Licht leben',
		'site.description':
			'SolarTrack ist eine iOS-App, die Sonnenaufgang, Sonnenuntergang und goldene Stunden überall für dich verfolgt.',

		'nav.home': 'Start',
		'nav.features': 'Funktionen',
		'nav.privacy': 'Datenschutz',
		'nav.appstore': 'Download',

		'hero.badge': 'Jetzt im App Store',
		'hero.title': 'Verpasse nie wieder die goldene Stunde',
		'hero.subtitle':
			'SolarTrack liefert dir Zeiten für Sonnenaufgang, Sonnenuntergang und goldene Stunden — überall auf der Welt.',
		'hero.cta': 'Im App Store herunterladen',
		'hero.cta.sub': 'Kostenlos auf iOS',
		'hero.dragHint': 'Ziehe die Sonne, um das Licht zu formen',

		'mockup.sunrise': 'Sonnenaufgang',
		'mockup.sunset': 'Sonnenuntergang',
		'mockup.goldenHour': 'Goldene Stunde',

		'feature.ar.title': 'AR-Trajektorie',
		'feature.ar.desc':
			'Richte die Kamera auf den Himmel und sieh den Sonnenverlauf in Augmented Reality über der Realität.',
		'feature.alerts.title': 'Golden-Hour-Alarme',
		'feature.alerts.desc':
			'Werde genau dann benachrichtigt, wenn die goldene Stunde beginnt — verpasse nie das Licht.',
		'feature.map.title': 'Weltweite Planung',
		'feature.map.desc':
			'Plane Aufnahmen an jedem Ort der Erde mit präzisen Sonnen- und Mondzeiten.',

		'education.title': 'Lichtführer für Fotografie',
		'education.lead':
			'Licht ist alles in der Fotografie. SolarTrack hilft dir, die zwei schönsten Fenster des Tages zu erwischen.',
		'education.golden.title': 'Goldene Stunde',
		'education.golden.desc':
			'Die Stunde nach Sonnenaufgang und vor Sonnenuntergang — warmes, weiches Licht, perfekt für Porträts und Landschaften.',
		'education.blue.title': 'Blaue Stunde',
		'education.blue.desc':
			'Das Dämmerungsfenster vor Sonnenaufgang und nach Sonnenuntergang, wenn der Himmel tiefblau glüht.',
		'education.imageAlt': 'Landschaftsillustration zur goldenen Stunde',

		'cta.title': 'Jag das Licht. Lade SolarTrack herunter.',
		'cta.subtitle':
			'Kostenlos im App Store. Sonnenaufgang, Sonnenuntergang und goldene Stunden — überall.',
		'cta.button': 'Im App Store herunterladen',

		'privacy.title': 'Datenschutzerklärung',
		'privacy.updated': 'Zuletzt aktualisiert: August 2026',
		'privacy.statement':
			'SolarTrack respektiert Ihre Privatsphäre. Wir erfassen, speichern und teilen keinerlei persönliche Standortdaten. Alle Trajektorienberechnungen erfolgen lokal auf Ihrem Gerät.',

		'footer.tagline': 'Für Menschen, die dem Licht folgen.',
		'footer.rights': 'Alle Rechte vorbehalten.',
	},
	es: {
		'site.title': 'SolarTrack — Sigue al sol, vive en la luz',
		'site.description':
			'SolarTrack es una app para iOS que sigue el amanecer, el atardecer y la hora dorada estés donde estés.',

		'nav.home': 'Inicio',
		'nav.features': 'Funciones',
		'nav.privacy': 'Privacidad',
		'nav.appstore': 'Descargar',

		'hero.badge': 'Ya disponible en el App Store',
		'hero.title': 'No te pierdas nunca la hora dorada',
		'hero.subtitle':
			'SolarTrack te da las horas de amanecer, atardecer y hora dorada que siguen a la luz — en cualquier lugar del mundo.',
		'hero.cta': 'Descargar en el App Store',
		'hero.cta.sub': 'Gratis en iOS',
		'hero.dragHint': 'Arrastra el sol para dar forma a la luz',

		'mockup.sunrise': 'Amanecer',
		'mockup.sunset': 'Atardecer',
		'mockup.goldenHour': 'Hora dorada',

		'feature.ar.title': 'Trayectoria AR',
		'feature.ar.desc':
			'Apunta la cámara al cielo y observa la trayectoria del sol superpuesta al mundo real en realidad aumentada.',
		'feature.alerts.title': 'Alertas de hora dorada',
		'feature.alerts.desc':
			'Recibe un aviso en el instante en que empieza la hora dorada: nunca pierdas la luz.',
		'feature.map.title': 'Planificación global',
		'feature.map.desc':
			'Planifica tus tomas en cualquier lugar de la Tierra con horas exactas de sol y luna.',

		'education.title': 'Guía de luz fotográfica',
		'education.lead':
			'La luz lo es todo en fotografía. SolarTrack te ayuda a capturar las dos ventanas más bellas del día.',
		'education.golden.title': 'Hora dorada',
		'education.golden.desc':
			'La hora tras el amanecer y antes del atardecer, cuando el sol está bajo y la luz es cálida y suave, ideal para retratos y paisajes.',
		'education.blue.title': 'Hora azul',
		'education.blue.desc':
			'La ventana crepuscular justo antes del amanecer o después del atardecer, cuando el cielo brilla en azul profundo.',
		'education.imageAlt': 'Ilustración de paisaje en hora dorada',

		'cta.title': 'Persigue la luz. Descarga SolarTrack.',
		'cta.subtitle':
			'Gratis en el App Store. Amaneceres, atardeceres y horas doradas — en cualquier lugar.',
		'cta.button': 'Descargar en el App Store',

		'privacy.title': 'Política de Privacidad',
		'privacy.updated': 'Última actualización: agosto de 2026',
		'privacy.statement':
			'SolarTrack respeta tu privacidad. No recopilamos, almacenamos ni compartimos ninguna de tus ubicaciones personales. Todos los cálculos de trayectoria se realizan localmente en tu dispositivo.',

		'footer.tagline': 'Hecha para quienes persiguen la luz.',
		'footer.rights': 'Todos los derechos reservados.',
	},
	pt: {
		'site.title': 'SolarTrack — Siga o sol, viva na luz',
		'site.description':
			'SolarTrack é um app para iOS que acompanha o nascer e o pôr do sol e a hora dourada, onde quer que você esteja.',

		'nav.home': 'Início',
		'nav.features': 'Recursos',
		'nav.privacy': 'Privacidade',
		'nav.appstore': 'Baixar',

		'hero.badge': 'Já disponível na App Store',
		'hero.title': 'Nunca mais perca a hora dourada',
		'hero.subtitle':
			'SolarTrack traz horários de nascer e pôr do sol e de hora dourada que acompanham a luz — em qualquer lugar do mundo.',
		'hero.cta': 'Baixar na App Store',
		'hero.cta.sub': 'Grátis no iOS',
		'hero.dragHint': 'Arraste o sol para moldar a luz',

		'mockup.sunrise': 'Nascer do sol',
		'mockup.sunset': 'Pôr do sol',
		'mockup.goldenHour': 'Hora dourada',

		'feature.ar.title': 'Trajetória AR',
		'feature.ar.desc':
			'Aponte a câmera para o céu e veja a trajetória do sol sobreposta ao mundo real em realidade aumentada.',
		'feature.alerts.title': 'Alertas de hora dourada',
		'feature.alerts.desc':
			'Seja avisado no instante em que a hora dourada começa — nunca perca a luz.',
		'feature.map.title': 'Planejamento global',
		'feature.map.desc':
			'Planeje fotos em qualquer lugar da Terra com horários precisos de sol e lua.',

		'education.title': 'Guia de luz fotográfica',
		'education.lead':
			'Luz é tudo na fotografia. O SolarTrack ajuda você a aproveitar as duas janelas mais bonitas do dia.',
		'education.golden.title': 'Hora dourada',
		'education.golden.desc':
			'A hora após o nascer e antes do pôr do sol, quando a luz é quente e suave — perfeita para retratos e paisagens.',
		'education.blue.title': 'Hora azul',
		'education.blue.desc':
			'A janela crepuscular antes do nascer ou depois do pôr do sol, quando o céu ganha um azul profundo.',
		'education.imageAlt': 'Ilustração de paisagem na hora dourada',

		'cta.title': 'Siga a luz. Baixe o SolarTrack.',
		'cta.subtitle':
			'Grátis na App Store. Nascer e pôr do sol e horas douradas — em qualquer lugar.',
		'cta.button': 'Baixar na App Store',

		'privacy.title': 'Política de Privacidade',
		'privacy.updated': 'Última atualização: agosto de 2026',
		'privacy.statement':
			'O SolarTrack respeita sua privacidade. Não coletamos, armazenamos nem compartilhamos nenhuma informação de localização pessoal. Todos os cálculos de trajetória são feitos localmente no seu dispositivo.',

		'footer.tagline': 'Feito para quem persegue a luz.',
		'footer.rights': 'Todos os direitos reservados.',
	},
	fr: {
		'site.title': 'SolarTrack — Suivez le soleil, vivez dans la lumière',
		'site.description':
			'SolarTrack est une app iOS qui suit le lever et le coucher du soleil et l’heure dorée, où que vous soyez.',

		'nav.home': 'Accueil',
		'nav.features': 'Fonctionnalités',
		'nav.privacy': 'Confidentialité',
		'nav.appstore': 'Télécharger',

		'hero.badge': 'Disponible sur l’App Store',
		'hero.title': 'Ne ratez plus jamais l’heure dorée',
		'hero.subtitle':
			'SolarTrack vous donne les heures de lever, de coucher du soleil et d’heure dorée qui suivent la lumière — partout dans le monde.',
		'hero.cta': 'Télécharger sur l’App Store',
		'hero.cta.sub': 'Gratuit sur iOS',
		'hero.dragHint': 'Faites glisser le soleil pour façonner la lumière',

		'mockup.sunrise': 'Lever du soleil',
		'mockup.sunset': 'Coucher du soleil',
		'mockup.goldenHour': 'Heure dorée',

		'feature.ar.title': 'Trajectoire AR',
		'feature.ar.desc':
			'Pointez la caméra vers le ciel et voyez la trajectoire du soleil se superposer au monde réel en réalité augmentée.',
		'feature.alerts.title': 'Alertes heure dorée',
		'feature.alerts.desc':
			'Soyez notifié dès que l’heure dorée commence — ne ratez plus la lumière.',
		'feature.map.title': 'Planification mondiale',
		'feature.map.desc':
			'Planifiez vos prises de vue n’importe où sur Terre avec des heures de soleil et de lune précises.',

		'education.title': 'Guide de la lumière photo',
		'education.lead':
			'La lumière est tout en photographie. SolarTrack vous aide à attraper les deux plus belles fenêtres de la journée.',
		'education.golden.title': 'Heure dorée',
		'education.golden.desc':
			'L’heure après le lever et avant le coucher du soleil, quand la lumière est chaude et douce — idéale pour les portraits et les paysages.',
		'education.blue.title': 'Heure bleue',
		'education.blue.desc':
			'La fenêtre crépusculaire juste avant le lever ou après le coucher du soleil, quand le ciel brille d’un bleu profond.',
		'education.imageAlt': 'Illustration de paysage à l’heure dorée',

		'cta.title': 'Chassez la lumière. Téléchargez SolarTrack.',
		'cta.subtitle':
			'Gratuit sur l’App Store. Levers, couchers et heures dorées — partout dans le monde.',
		'cta.button': 'Télécharger sur l’App Store',

		'privacy.title': 'Politique de Confidentialité',
		'privacy.updated': 'Dernière mise à jour : août 2026',
		'privacy.statement':
			'SolarTrack respecte votre vie privée. Nous ne collectons, ne stockons ni ne partageons aucune de vos données de localisation personnelles. Tous les calculs de trajectoire sont effectués localement sur votre appareil.',

		'footer.tagline': 'Conçu pour ceux qui chassent la lumière.',
		'footer.rights': 'Tous droits réservés.',
	},
} as const;

export type UI = (typeof ui)[Lang];

// 从 URL 推断当前语言（/ → en，/zh/ → zh，……）
export function getLangFromUrl(url: URL): Lang {
	const [, lang] = url.pathname.split('/');
	if (lang in ui) return lang as Lang;
	return defaultLang;
}

// 生成指定语言下的页面 URL（默认语言无前缀）
export function getLocalizedUrl(path: string, lang: Lang): string {
	if (lang === defaultLang) return `/${path.replace(/^\//, '')}`;
	return `/${lang}/${path.replace(/^\//, '')}`;
}

export function useTranslations(lang: Lang) {
	return function t(key: keyof UI): string {
		return ui[lang][key] ?? ui[defaultLang][key];
	};
}
