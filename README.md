# SolarTrack Web

Official landing site for **SolarTrack** — an iOS app that tracks sunrise, sunset and golden hours anywhere in the world.

Built with **Astro 7 + Tailwind CSS 4**, fully static, SEO-optimized, and localized into **7 languages**.

## ✨ Highlights

- **7-language i18n** — en (default, no prefix) / zh / ja / de / es / pt / fr, with hreflang sitemap
- **Time-based UI** — page theme shifts with the visitor's local time (morning / noon / golden hour / night), FOUC-guarded
- **Interactive Light & Shadow** — drag the sun and watch the shadow on the hero mockup project in real time (Vanilla JS, no framework)
- **App SEO** — `SoftwareApplication` JSON-LD (PhotographyApplication, iOS, free), Open Graph & Twitter Card
- **Geo-localized App Store links** — download buttons route to the visitor's region store (`getAppStoreUrl(locale)`)
- **7-language privacy policy** pages

## 🚀 Commands

| Command          | Action                                |
| :--------------- | :------------------------------------ |
| `npm install`    | Install dependencies                  |
| `npm run dev`    | Dev server at `localhost:4321`        |
| `npm run build`  | Static build to `./dist/`             |
| `npm run preview`| Preview production build              |

## 🗂 Structure

```
src/
├── components/   # SEO, Navbar, InteractiveHero, Features, Education, DownloadCTA…
├── i18n/ui.ts    # 7-language dictionary + helpers
├── layouts/      # Layout (FOUC guard + theme)
├── lib/site.ts   # App Store URL helpers, site constants
└── pages/        # index + privacy for all 7 locales
```

## 📄 License

© 2026 SolarTrack · 100ideas.net — All rights reserved.
