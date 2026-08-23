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
		'hero.summary': 'SolarTrack is a free iOS app that shows sunrise, sunset, golden hour and blue hour times for any location. It includes a sun-path dial, an AI photography assistant, and a weather and blue-hour forecast — and all sun calculations run on your device, so your location never leaves your phone.',
		'education.def.golden': 'Golden hour is the roughly 60-minute window just after sunrise and just before sunset, when sunlight is warm, soft and directional — ideal for portraits and landscapes.',
		'education.def.blue': 'Blue hour is the roughly 20–30 minute window of even, saturated twilight after sunset (and before sunrise), when the sky turns deep blue — best for cityscapes and long exposures.',
		'education.col.duration': 'Duration',
		'education.col.light': 'Light',
		'education.col.best': 'Best for',
		'education.row.golden.duration': '≈ 60 min',
		'education.row.golden.light': 'Warm (golden)',
		'education.row.golden.best': 'Portraits, landscapes',
		'education.row.blue.duration': '≈ 20–30 min',
		'education.row.blue.light': 'Cool (blue)',
		'education.row.blue.best': 'Cityscapes, long exposure',
		'education.note.source': 'Durations are typical approximations; the exact length varies by latitude and season (based on standard solar-position algorithms).',
		'footer.updated': 'Last updated: August 2026',
		'footer.by': 'Made by 100ideas.net',
		'faq.title': 'Frequently asked questions',
		'faq.q1': 'Is SolarTrack free?',
		'faq.a1': 'Yes. SolarTrack is free to download on iOS. Core sun times, the sun-path dial and the light timeline cost nothing.',
		'faq.q2': 'Does SolarTrack work offline?',
		'faq.a2': 'Yes. All sunrise, sunset and golden-hour calculations run locally on your device. You only need a connection for the optional weather forecast.',
		'faq.q3': 'Which countries does it cover?',
		'faq.a3': 'Everywhere. SolarTrack computes times for any latitude and longitude in the world — from your current location or any saved spot.',
		'faq.q4': 'Does it collect my location?',
		'faq.a4': 'No. Your location stays on your device. SolarTrack does not collect, store or share any personal location data.',
		'faq.q5': 'What is golden hour?',
		'faq.a5': 'Golden hour is the soft, warm light shortly after sunrise and before sunset — the most flattering window for photography.',
		'faq.q6': 'How accurate are the times?',
		'faq.a6': 'Times come from standard solar-position algorithms used in astronomy and photography apps, accurate to about a minute for most places.',

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
		'hero.summary': 'SolarTrack 是一款免费的 iOS 应用，随时随地为你显示日出、日落、黄金时刻与蓝调时刻。它包含太阳轨迹罗盘、AI 摄影助手，以及天气与蓝调预报——所有太阳计算都在你的设备本地完成，位置绝不会离开手机。',
		'education.def.golden': '黄金时刻是日出后不久与日落前不久约 60 分钟的光线窗口，此时阳光温暖、柔和且具方向感——最适合人像与风光拍摄。',
		'education.def.blue': '蓝调时刻是日落后（与日出前）约 20–30 分钟均匀饱和的暮光窗口，天空转为深蓝——最适合城市风光与长曝光。',
		'education.col.duration': '时长',
		'education.col.light': '光线',
		'education.col.best': '适合题材',
		'education.row.golden.duration': '≈ 60 分钟',
		'education.row.golden.light': '暖（金黄）',
		'education.row.golden.best': '人像、风光',
		'education.row.blue.duration': '≈ 20–30 分钟',
		'education.row.blue.light': '冷（蓝）',
		'education.row.blue.best': '城市、长曝光',
		'education.note.source': '时长为典型近似值；具体长度随纬度与季节变化（基于标准太阳位置算法）。',
		'footer.updated': '最后更新：2026 年 8 月',
		'footer.by': '由 100ideas.net 打造',
		'faq.title': '常见问题',
		'faq.q1': 'SolarTrack 免费吗？',
		'faq.a1': '是的。SolarTrack 在 iOS 上免费下载。核心的太阳时间、太阳罗盘与光影时间轴均不收费。',
		'faq.q2': 'SolarTrack 可以离线使用吗？',
		'faq.a2': '可以。所有日出、日落与黄金时刻计算都在你的设备本地完成。仅可选的天气预报需要联网。',
		'faq.q3': '它覆盖哪些国家？',
		'faq.a3': '全球任何地方。SolarTrack 可为世界上任意经纬度计算时间——无论是你当前位置还是任意收藏地点。',
		'faq.q4': '它会收集我的位置吗？',
		'faq.a4': '不会。你的位置保留在设备本地。SolarTrack 不收集、不存储、不分享任何个人位置数据。',
		'faq.q5': '什么是黄金时刻？',
		'faq.a5': '黄金时刻是日出后不久与日落前不久柔和温暖的阳光——摄影中最讨喜的窗口。',
		'faq.q6': '时间有多准？',
		'faq.a6': '时间来自天文与摄影应用通用的标准太阳位置算法，对大多数地点误差约在一分钟内。',

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
		'hero.summary': 'SolarTrack は、世界中どこでも日の出・日の入り・ゴールデンアワー・ブルーアワーの時刻を表示する無料の iOS アプリです。太陽の軌道ダイヤル、AI 撮影アシスタント、天気とブルーアワー予報を備え、すべての計算は端末内で行われるため位置情報が外部に出ることはありません。',
		'education.def.golden': 'ゴールデンアワーは日の出直後と日の入り直前の約 60 分間の光の窓で、光は暖かく柔らかく方向性を持ちます——ポートレートや風景に最適です。',
		'education.def.blue': 'ブルーアワーは日の入り後（と日の出前）の約 20–30 分間、均一で彩度の高いたそがれの窓で、空が深い青に染まります——都市風景や長時間露光に最適です。',
		'education.col.duration': '時間',
		'education.col.light': '光',
		'education.col.best': 'おすすめ',
		'education.row.golden.duration': '約 60 分',
		'education.row.golden.light': '暖かい（金）',
		'education.row.golden.best': 'ポートレート、風景',
		'education.row.blue.duration': '約 20–30 分',
		'education.row.blue.light': '涼しい（青）',
		'education.row.blue.best': '都市、長時間露光',
		'education.note.source': '所要時間は典型的な目安です。正確な長さは緯度と季節によって異なります（標準的な太陽位置アルゴリズムに基づく）。',
		'footer.updated': '最終更新：2026年8月',
		'footer.by': '100ideas.net が制作',
		'faq.title': 'よくある質問',
		'faq.q1': 'SolarTrack は無料ですか？',
		'faq.a1': 'はい。SolarTrack は iOS で無料ダウンロードできます。太陽の時刻、太陽ダイヤル、光のタイムラインの中核機能はすべて無料です。',
		'faq.q2': 'SolarTrack はオフラインで使えますか？',
		'faq.a2': 'はい。すべての日の出・日の入り・ゴールデンアワーの計算は端末内で行われます。任意の天気予報のみ通信が必要です。',
		'faq.q3': 'どの国に対応していますか？',
		'faq.a3': '世界中です。SolarTrack は任意の緯度・経度の時刻を計算します——現在地でも保存した場所でも。',
		'faq.q4': '位置情報を収集しますか？',
		'faq.a4': 'いいえ。位置情報は端末内に留まります。SolarTrack は個人の位置データを収集・保存・共有しません。',
		'faq.q5': 'ゴールデンアワーとは何ですか？',
		'faq.a5': 'ゴールデンアワーは日の出直後と日の入り直前の柔らかく暖かい光——写真に最も似合う窓です。',
		'faq.q6': '時刻の精度はどの程度ですか？',
		'faq.a6': '時刻は天文・写真アプリで広く使われる標準的な太陽位置アルゴリズムに基づき、多くの場所で約 1 分の精度です。',

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
		'hero.summary': 'SolarTrack ist eine kostenlose iOS-App, die Sonnenaufgang, Sonnenuntergang, goldene und blaue Stunde für jeden Ort anzeigt. Sie bietet ein Sonnen-Dial, einen KI-Foto-Assistenten sowie Wetter- und Blaue-Stunde-Vorhersage — alle Berechnungen laufen lokal auf deinem Gerät, dein Standort verlässt das Telefon nie.',
		'education.def.golden': 'Die goldene Stunde ist das etwa 60-minütige Fenster kurz nach Sonnenaufgang und vor Sonnenuntergang, wenn das Licht warm, weich und gerichtet ist — ideal für Porträts und Landschaften.',
		'education.def.blue': 'Die blaue Stunde ist das etwa 20–30-minütige Fenster gleichmäßigen, satten Dämmerlichts nach Sonnenuntergang (und vor Sonnenaufgang), wenn der Himmel tiefblau wird — ideal für Stadtansichten und Langzeitbelichtungen.',
		'education.col.duration': 'Dauer',
		'education.col.light': 'Licht',
		'education.col.best': 'Geeignet für',
		'education.row.golden.duration': '≈ 60 min',
		'education.row.golden.light': 'Warm (golden)',
		'education.row.golden.best': 'Porträts, Landschaften',
		'education.row.blue.duration': '≈ 20–30 min',
		'education.row.blue.light': 'Kühl (blau)',
		'education.row.blue.best': 'Stadt, Langzeit',
		'education.note.source': 'Die Dauern sind typische Näherungswerte; die genaue Länge variiert je nach Breitengrad und Jahreszeit (basierend auf Standard-Solarstand-Algorithmen).',
		'footer.updated': 'Zuletzt aktualisiert: August 2026',
		'footer.by': 'Erstellt von 100ideas.net',
		'faq.title': 'Häufig gestellte Fragen',
		'faq.q1': 'Ist SolarTrack kostenlos?',
		'faq.a1': 'Ja. SolarTrack ist kostenlos im App Store erhältlich. Sonnenzeiten, Sonnen-Dial und Lichtzeitstrahl sind ohne Zusatzkosten nutzbar.',
		'faq.q2': 'Funktioniert SolarTrack offline?',
		'faq.a2': 'Ja. Alle Berechnungen von Sonnenaufgang, -untergang und goldener Stunde laufen lokal auf deinem Gerät. Nur die optionale Wettervorhersage braucht eine Verbindung.',
		'faq.q3': 'Welche Länder werden abgedeckt?',
		'faq.a3': 'Alle. SolarTrack berechnet Zeiten für jede Breite und Länge weltweit — von deinem aktuellen Standort oder einem gespeicherten Ort.',
		'faq.q4': 'Erfasst es meinen Standort?',
		'faq.a4': 'Nein. Dein Standort bleibt auf deinem Gerät. SolarTrack erfasst, speichert und teilt keine persönlichen Standortdaten.',
		'faq.q5': 'Was ist die goldene Stunde?',
		'faq.a5': 'Die goldene Stunde ist das weiche, warme Licht kurz nach Sonnenaufgang und vor Sonnenuntergang — das schmeichelhafteste Fenster für Fotografie.',
		'faq.q6': 'Wie genau sind die Zeiten?',
		'faq.a6': 'Die Zeiten stammen aus Standard-Solarstand-Algorithmen, wie sie in Astronomie- und Foto-Apps genutzt werden, und sind für die meisten Orte auf etwa eine Minute genau.',

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
		'hero.summary': 'SolarTrack es una app gratuita para iOS que muestra la hora del amanecer, el atardecer, la hora dorada y la hora azul en cualquier lugar. Incluye un dial solar, un asistente de fotografía IA y un pronóstico del tiempo y de la hora azul — y todos los cálculos se ejecutan en tu dispositivo, por lo que tu ubicación nunca sale del teléfono.',
		'education.def.golden': 'La hora dorada es la ventana de unos 60 minutos justo después del amanecer y justo antes del atardecer, cuando la luz es cálida, suave y direccional — ideal para retratos y paisajes.',
		'education.def.blue': 'La hora azul es la ventana de unos 20–30 minutos de crepúsculo uniforme y saturado tras el atardecer (y antes del amanecer), cuando el cielo se vuelve azul profundo — ideal para cityscapes y exposiciones largas.',
		'education.col.duration': 'Duración',
		'education.col.light': 'Luz',
		'education.col.best': 'Ideal para',
		'education.row.golden.duration': '≈ 60 min',
		'education.row.golden.light': 'Cálida (dorada)',
		'education.row.golden.best': 'Retratos, paisajes',
		'education.row.blue.duration': '≈ 20–30 min',
		'education.row.blue.light': 'Frío (azul)',
		'education.row.blue.best': 'Urbano, larga exp.',
		'education.note.source': 'Las duraciones son aproximaciones típicas; la longitud exacta varía según la latitud y la estación (según algoritmos estándar de posición solar).',
		'footer.updated': 'Última actualización: agosto de 2026',
		'footer.by': 'Creado por 100ideas.net',
		'faq.title': 'Preguntas frecuentes',
		'faq.q1': '¿SolarTrack es gratis?',
		'faq.a1': 'Sí. SolarTrack se descarga gratis en iOS. Los horarios solares, el dial solar y la línea de luz no cuestan nada.',
		'faq.q2': '¿Funciona SolarTrack sin conexión?',
		'faq.a2': 'Sí. Todos los cálculos de amanecer, atardecer y hora dorada se ejecutan localmente en tu dispositivo. Solo el pronóstico del tiempo opcional necesita conexión.',
		'faq.q3': '¿Qué países cubre?',
		'faq.a3': 'Todos. SolarTrack calcula horarios para cualquier latitud y longitud del mundo — desde tu ubicación actual o cualquier lugar guardado.',
		'faq.q4': '¿Recopila mi ubicación?',
		'faq.a4': 'No. Tu ubicación permanece en tu dispositivo. SolarTrack no recopila, almacena ni comparte datos de ubicación personales.',
		'faq.q5': '¿Qué es la hora dorada?',
		'faq.a5': 'La hora dorada es la luz cálida y suave poco después del amanecer y antes del atardecer — la ventana más favorecedora para la fotografía.',
		'faq.q6': '¿Qué tan precisos son los horarios?',
		'faq.a6': 'Los horarios provienen de algoritmos estándar de posición solar usados en apps de astronomía y fotografía, con una precisión de unos un minuto en la mayoría de los lugares.',

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
		'hero.summary': 'SolarTrack é um app gratuito para iOS que mostra os horários de nascer e pôr do sol, hora dourada e hora azul em qualquer lugar. Inclui um dial solar, um assistente de fotografia IA e uma previsão do tempo e da hora azul — e todos os cálculos rodam no seu dispositivo, então sua localização nunca sai do telefone.',
		'education.def.golden': 'A hora dourada é a janela de cerca de 60 minutos logo após o nascer e logo antes do pôr do sol, quando a luz é quente, suave e direcional — ideal para retratos e paisagens.',
		'education.def.blue': 'A hora azul é a janela de cerca de 20–30 minutos de crepúsculo uniforme e saturado após o pôr do sol (e antes do nascer), quando o céu fica azul profundo — ideal para cidades e exposições longas.',
		'education.col.duration': 'Duração',
		'education.col.light': 'Luz',
		'education.col.best': 'Ideal para',
		'education.row.golden.duration': '≈ 60 min',
		'education.row.golden.light': 'Quente (dourada)',
		'education.row.golden.best': 'Retratos, paisagens',
		'education.row.blue.duration': '≈ 20–30 min',
		'education.row.blue.light': 'Fria (azul)',
		'education.row.blue.best': 'Urbano, longa exp.',
		'education.note.source': 'As durações são aproximações típicas; a duração exata varia com a latitude e a estação (com base em algoritmos padrão de posição solar).',
		'footer.updated': 'Última atualização: agosto de 2026',
		'footer.by': 'Feito por 100ideas.net',
		'faq.title': 'Perguntas frequentes',
		'faq.q1': 'O SolarTrack é gratuito?',
		'faq.a1': 'Sim. O SolarTrack é gratuito para baixar no iOS. Os horários solares, o dial solar e a linha do tempo de luz não custam nada.',
		'faq.q2': 'O SolarTrack funciona offline?',
		'faq.a2': 'Sim. Todos os cálculos de nascer, pôr do sol e hora dourada rodam localmente no seu dispositivo. Apenas a previsão do tempo opcional precisa de conexão.',
		'faq.q3': 'Quais países ele cobre?',
		'faq.a3': 'Todos. O SolarTrack calcula horários para qualquer latitude e longitude do mundo — da sua localização atual ou de qualquer lugar salvo.',
		'faq.q4': 'Ele coleta minha localização?',
		'faq.a4': 'Não. Sua localização fica no seu dispositivo. O SolarTrack não coleta, armazena nem compartilha dados de localização pessoais.',
		'faq.q5': 'O que é a hora dourada?',
		'faq.a5': 'A hora dourada é a luz quente e suave pouco depois do nascer e antes do pôr do sol — a janela mais favorecedora para fotografia.',
		'faq.q6': 'Quão precisos são os horários?',
		'faq.a6': 'Os horários vêm de algoritmos padrão de posição solar usados em apps de astronomia e fotografia, com precisão de cerca de um minuto na maioria dos lugares.',

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
		'hero.summary': 'SolarTrack est une app iOS gratuite qui affiche les heures de lever, de coucher du soleil, d’heure dorée et d’heure bleue partout dans le monde. Elle comprend un cadran solaire, un assistant photo IA et une météo avec heure bleue — et tous les calculs s’exécutent sur votre appareil, votre position ne quitte donc jamais le téléphone.',
		'education.def.golden': 'L’heure dorée est la fenêtre d’environ 60 minutes juste après le lever et juste avant le coucher du soleil, quand la lumière est chaude, douce et directionnelle — idéale pour les portraits et les paysages.',
		'education.def.blue': 'L’heure bleue est la fenêtre d’environ 20–30 minutes de crépuscule uniforme et saturé après le coucher (et avant le lever), quand le ciel vire au bleu profond — idéale pour les paysages urbains et les poses longues.',
		'education.col.duration': 'Durée',
		'education.col.light': 'Lumière',
		'education.col.best': 'Idéal pour',
		'education.row.golden.duration': '≈ 60 min',
		'education.row.golden.light': 'Chaude (dorée)',
		'education.row.golden.best': 'Portraits, paysages',
		'education.row.blue.duration': '≈ 20–30 min',
		'education.row.blue.light': 'Froide (bleue)',
		'education.row.blue.best': 'Urbain, pose longue',
		'education.note.source': 'Les durées sont des approximations typiques ; la longueur exacte varie selon la latitude et la saison (selon les algorithmes standards de position solaire).',
		'footer.updated': 'Dernière mise à jour : août 2026',
		'footer.by': 'Conçu par 100ideas.net',
		'faq.title': 'Questions fréquentes',
		'faq.q1': 'SolarTrack est-il gratuit ?',
		'faq.a1': 'Oui. SolarTrack se télécharge gratuitement sur iOS. Les heures solaires, le cadran solaire et la timeline lumineuse sont sans frais.',
		'faq.q2': 'SolarTrack fonctionne-t-il hors ligne ?',
		'faq.a2': 'Oui. Tous les calculs de lever, de coucher et d’heure dorée s’exécutent localement sur votre appareil. Seule la météo optionnelle nécessite une connexion.',
		'faq.q3': 'Quels pays sont couverts ?',
		'faq.a3': 'Tous. SolarTrack calcule les heures pour toute latitude et longitude du monde — depuis votre position actuelle ou tout lieu enregistré.',
		'faq.q4': 'Collecte-t-il ma position ?',
		'faq.a4': 'Non. Votre position reste sur votre appareil. SolarTrack ne collecte, ne stocke ni ne partage aucune donnée de localisation personnelle.',
		'faq.q5': 'Qu’est-ce que l’heure dorée ?',
		'faq.a5': 'L’heure dorée est la lumière douce et chaude peu après le lever et avant le coucher du soleil — la fenêtre la plus flatteuse en photographie.',
		'faq.q6': 'À quelle précision sont les heures ?',
		'faq.a6': 'Les heures proviennent d’algorithmes standards de position solaire utilisés dans les apps d’astronomie et de photo, avec une précision d’environ une minute dans la plupart des lieux.',

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
