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
		'mockup.solarNoon': 'Solar noon',
		'hero.readoutTitle': 'Today’s sun',
		'hero.locButton': 'Use my location',
		'hero.locApprox': 'Approx. · from your timezone',
		'hero.locPrecise': 'Live · your location',

		// --- Features（真实功能，对应 App 截图 1–5） ---
		'feature.sunpath.title': 'Solar Dial & Sun Path',
		'feature.sunpath.desc':
			'See the sun’s arc for any date and place — plan the perfect shot before you arrive.',
		'feature.ai.title': 'AI Photography Assistant',
		'feature.ai.desc':
			'Pick a scene and get the best time to shoot, with ready-to-use camera settings.',
		'feature.weather.title': 'Weather & Blue Hour Forecast',
		'feature.weather.desc':
			'A daily quality score and the best shooting windows, so you never waste a trip.',
		'feature.explore.title': 'Explore Worldwide',
		'feature.explore.desc':
			'Save favorite spots with precise coordinates and check the light anywhere.',

		// --- Education（科普：当日 6 段光影） ---
		'education.title': 'Today’s Light, Hour by Hour',
		'education.lead':
			'Light is everything in photography. SolarTrack breaks the day into the windows that matter most.',
		'education.phase.golden': 'Golden Hour',
		'education.phase.blue': 'Blue Hour',
		'education.phase.daylight': 'Daylight',
		'education.phase.night': 'Night',
		'education.timelineNote': 'Times update live for your location.',
		'education.imageAlt': 'SolarTrack Today screen — sun-path dial and light timeline',

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
		'mockup.solarNoon': '太阳正午',
		'hero.readoutTitle': '今日太阳',
		'hero.locButton': '使用我的位置',
		'hero.locApprox': '近似值 · 按你的时区估算',
		'hero.locPrecise': '实时 · 你的位置',

		// --- Features（真实功能，对应 App 截图 1–5） ---
		'feature.sunpath.title': '太阳罗盘与轨迹',
		'feature.sunpath.desc': '查看任意日期与地点的太阳弧线——到场前就规划好最佳拍摄时机。',
		'feature.ai.title': 'AI 摄影助手',
		'feature.ai.desc': '选择场景，得到最佳拍摄时段与可直接套用的相机参数。',
		'feature.weather.title': '天气与蓝调预报',
		'feature.weather.desc': '每日质量评分与最佳拍摄窗口，让每次出门都不白跑。',
		'feature.explore.title': '全球探索',
		'feature.explore.desc': '收藏常用地点并保存精确坐标，随时查看任何地方的光线。',

		// --- Education（科普：当日 6 段光影） ---
		'education.title': '今日光影，逐小时',
		'education.lead': '光线是摄影的灵魂。SolarTrack 把一天拆成最关键的几个窗口。',
		'education.phase.golden': '黄金时刻',
		'education.phase.blue': '蓝调时刻',
		'education.phase.daylight': '日间',
		'education.phase.night': '夜晚',
		'education.timelineNote': '时间会按你的当前位置实时更新。',
		'education.imageAlt': 'SolarTrack 今日界面——太阳轨迹罗盘与光影时间轴',

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
		'mockup.solarNoon': '太陽の南中',
		'hero.readoutTitle': '今日の太陽',
		'hero.locButton': '現在地を使用',
		'hero.locApprox': '概算 · タイムゾーンから',
		'hero.locPrecise': 'リアルタイム · 現在地',

		// --- Features（真实功能，对应 App 截图 1–5） ---
		'feature.sunpath.title': '太陽ダイヤルと軌道',
		'feature.sunpath.desc': '任意の日付・場所の太陽の弧を確認。到着前に最高のショットを計画できます。',
		'feature.ai.title': 'AI 撮影アシスタント',
		'feature.ai.desc': 'シーンを選ぶと最適な撮影時間と、そのまま使えるカメラ設定を提案。',
		'feature.weather.title': '天気とブルーアワー予報',
		'feature.weather.desc': '毎日の品質スコアと最適な撮影ウィンドウで、無駄な外出をなくします。',
		'feature.explore.title': '世界中を探索',
		'feature.explore.desc': 'お気に入りの場所を正確な座標で保存し、どこでも光をチェック。',

		// --- Education（科普：当日 6 段光影） ---
		'education.title': '今日の光を、時系列に',
		'education.lead': '写真において光はすべて。SolarTrack は一日を大切な窓に分けます。',
		'education.phase.golden': 'ゴールデンアワー',
		'education.phase.blue': 'ブルーアワー',
		'education.phase.daylight': '日中',
		'education.phase.night': '夜',
		'education.timelineNote': '時刻はあなたの現在地に合わせてリアルタイムに更新されます。',
		'education.imageAlt': 'SolarTrack の「今日」画面——太陽軌道ダイヤルと光のタイムライン',

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
		'mockup.solarNoon': 'Sonnenhöchststand',
		'hero.readoutTitle': 'Die Sonne heute',
		'hero.locButton': 'Meinen Standort verwenden',
		'hero.locApprox': 'Näherung · aus Zeitzone',
		'hero.locPrecise': 'Live · dein Standort',

		// --- Features（真实功能，对应 App 截图 1–5） ---
		'feature.sunpath.title': 'Sonnen-Dial & Pfad',
		'feature.sunpath.desc':
			'Sieh den Sonnenbogen für jedes Datum und jeden Ort — plane den perfekten Shot vorab.',
		'feature.ai.title': 'KI-Foto-Assistent',
		'feature.ai.desc':
			'Wähle eine Szene und erhalte die beste Zeit plus direkt nutzbare Kameraeinstellungen.',
		'feature.weather.title': 'Wetter- & Blaue-Stunde-Vorhersage',
		'feature.weather.desc':
			'Ein täglicher Qualitäts-Score und die besten Fenster, damit keine Fahrt umsonst ist.',
		'feature.explore.title': 'Weltweit erkunden',
		'feature.explore.desc':
			'Speichere Lieblingsorte mit exakten Koordinaten und prüfe das Licht überall.',

		// --- Education（科普：当日 6 段光影） ---
		'education.title': 'Das heutige Licht, Stunde für Stunde',
		'education.lead':
			'Licht ist alles in der Fotografie. SolarTrack teilt den Tag in die wichtigsten Fenster.',
		'education.phase.golden': 'Goldene Stunde',
		'education.phase.blue': 'Blaue Stunde',
		'education.phase.daylight': 'Tageslicht',
		'education.phase.night': 'Nacht',
		'education.timelineNote': 'Die Zeiten aktualisieren sich live für deinen Standort.',
		'education.imageAlt': 'SolarTrack „Heute“ — Sonnen-Dial und Lichtzeitstrahl',

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
		'mockup.solarNoon': 'Mediodía solar',
		'hero.readoutTitle': 'El sol de hoy',
		'hero.locButton': 'Usar mi ubicación',
		'hero.locApprox': 'Aprox. · según tu zona horaria',
		'hero.locPrecise': 'En vivo · tu ubicación',

		// --- Features（真实功能，对应 App 截图 1–5） ---
		'feature.sunpath.title': 'Dial y trayectoria solar',
		'feature.sunpath.desc':
			'Ve el arco del sol para cualquier fecha y lugar — planea la toma perfecta antes de llegar.',
		'feature.ai.title': 'Asistente de fotografía IA',
		'feature.ai.desc':
			'Elige una escena y obtén el mejor momento, con ajustes de cámara listos para usar.',
		'feature.weather.title': 'Pronóstico del tiempo y hora azul',
		'feature.weather.desc':
			'Una puntuación diaria de calidad y las mejores ventanas, para no malgastar un viaje.',
		'feature.explore.title': 'Explora el mundo',
		'feature.explore.desc':
			'Guarda lugares favoritos con coordenadas exactas y consulta la luz en cualquier sitio.',

		// --- Education（科普：当日 6 段光影） ---
		'education.title': 'La luz de hoy, hora a hora',
		'education.lead':
			'La luz lo es todo en fotografía. SolarTrack divide el día en las ventanas que importan.',
		'education.phase.golden': 'Hora dorada',
		'education.phase.blue': 'Hora azul',
		'education.phase.daylight': 'Luz diurna',
		'education.phase.night': 'Noche',
		'education.timelineNote': 'Los horarios se actualizan en vivo para tu ubicación.',
		'education.imageAlt': 'Pantalla «Hoy» de SolarTrack — dial solar y línea de tiempo de luz',

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
		'mockup.solarNoon': 'Meio-dia solar',
		'hero.readoutTitle': 'O sol de hoje',
		'hero.locButton': 'Usar minha localização',
		'hero.locApprox': 'Aprox. · pelo seu fuso',
		'hero.locPrecise': 'Ao vivo · sua localização',

		// --- Features（真实功能，对应 App 截图 1–5） ---
		'feature.sunpath.title': 'Dial e trajetória solar',
		'feature.sunpath.desc':
			'Veja o arco do sol para qualquer data e lugar — planeje a foto perfeita antes de chegar.',
		'feature.ai.title': 'Assistente de fotografia IA',
		'feature.ai.desc':
			'Escolha uma cena e receba o melhor horário, com ajustes de câmera prontos para usar.',
		'feature.weather.title': 'Previsão do tempo e hora azul',
		'feature.weather.desc':
			'Um score diário de qualidade e as melhores janelas, para não perder uma viagem.',
		'feature.explore.title': 'Explore o mundo',
		'feature.explore.desc':
			'Salve lugares favoritos com coordenadas exatas e veja a luz em qualquer lugar.',

		// --- Education（科普：当日 6 段光影） ---
		'education.title': 'A luz de hoje, hora a hora',
		'education.lead':
			'Luz é tudo na fotografia. O SolarTrack divide o dia nas janelas que importam.',
		'education.phase.golden': 'Hora dourada',
		'education.phase.blue': 'Hora azul',
		'education.phase.daylight': 'Luz do dia',
		'education.phase.night': 'Noite',
		'education.timelineNote': 'Os horários são atualizados em tempo real para a sua localização.',
		'education.imageAlt': 'Tela «Hoje» do SolarTrack — dial solar e linha do tempo de luz',

		'cta.title': 'Siga a luz. Baixe o SolarTrack.',
		'cta.subtitle':
			'Grátis na App Store. Nascer e pôr do sol e horas douradas — em qualquer lugar.',
		'cta.button': 'Baixar na App Store',

		'privacy.title': 'Política de Privacidade',
		'privacy.updated': 'Última atualização: agosto de 2026',
		'privacy.statement':
			'O SolarTrack respeita sua privacidade. Não coletamos, armazenamos nem compartilhamos nenhuma informação de localização pessoal. Todos os cálculos de trajetória são feitos localmente no seu dispositivo.',

		'footer.tagline': 'Feito para quem persegue a luz.',
		'footer.rights': 'Todos os direchos reservados.',
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
		'mockup.solarNoon': 'Midi solaire',
		'hero.readoutTitle': 'Le soleil aujourd’hui',
		'hero.locButton': 'Utiliser ma position',
		'hero.locApprox': 'Approx. · depuis ton fuseau',
		'hero.locPrecise': 'En direct · ta position',

		// --- Features（真实功能，对应 App 截图 1–5） ---
		'feature.sunpath.title': 'Cadran et trajectoire solaire',
		'feature.sunpath.desc':
			'Voyez l’arc du soleil pour toute date et tout lieu — planifiez la prise parfaite à l’avance.',
		'feature.ai.title': 'Assistant photo IA',
		'feature.ai.desc':
			'Choisissez une scène et obtenez le meilleur moment, avec des réglages photo prêts à l’emploi.',
		'feature.weather.title': 'Météo et heure bleue',
		'feature.weather.desc':
			'Un score de qualité quotidien et les meilleures fenêtres, pour ne plus perdre un déplacement.',
		'feature.explore.title': 'Explorez le monde',
		'feature.explore.desc':
			'Enregistrez vos lieux favoris avec des coordonnées précises et vérifiez la lumière partout.',

		// --- Education（科普：当日 6 段光影） ---
		'education.title': 'La lumière du jour, heure par heure',
		'education.lead':
			'La lumière est tout en photo. SolarTrack découpe la journée en fenêtres essentielles.',
		'education.phase.golden': 'Heure dorée',
		'education.phase.blue': 'Heure bleue',
		'education.phase.daylight': 'Lumière du jour',
		'education.phase.night': 'Nuit',
		'education.timelineNote': 'Les horaires se mettent à jour en direct pour votre position.',
		'education.imageAlt': 'Écran « Aujourd’hui » de SolarTrack — cadran solaire et timeline lumineuse',

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
