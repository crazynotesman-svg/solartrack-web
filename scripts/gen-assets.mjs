// Generate web-optimized assets from the real App Store screenshots + icon.
import sharp from 'sharp';
import { mkdirSync } from 'node:fs';

const SRC = 'C:/Users/liulu/Desktop/AI/solar';
const OUT = 'D:/workbuddy/2026-08-22-23-07-33/solartrack-web/public';

mkdirSync(`${OUT}/shots`, { recursive: true });

const shots = [1, 2, 3, 4, 5];

for (const n of shots) {
	const buf = await sharp(`${SRC}/${n}.png`).resize({ width: 1000, withoutEnlargement: true }).webp({ quality: 82 }).toBuffer();
	await sharp(buf).toFile(`${OUT}/shots/${n}.webp`);
	console.log(`shots/${n}.webp`, buf.length);
}

// Favicon: 256 square PNG
await sharp(`${SRC}/icon1024x1024bb.png`).resize(256, 256).png().toFile(`${OUT}/icon-256.png`);
console.log('icon-256.png done');

// OG image: 1200x630, dark gradient + centered icon
const icon360 = await sharp(`${SRC}/icon1024x1024bb.png`).resize(360, 360).png().toBuffer();
const og = await sharp({
	create: { width: 1200, height: 630, channels: 3, background: { r: 11, g: 18, b: 32 } },
})
	.composite([{ input: icon360, gravity: 'center' }])
	.png()
	.toFile(`${OUT}/og.png`);
console.log('og.png done', og.size);
