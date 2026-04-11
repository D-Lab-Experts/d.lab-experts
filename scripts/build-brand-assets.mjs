// One-shot brand asset generator. Produces:
//
//   1. public/d.lab-mark.{png,webp}   — trimmed wordmark used by header/footer
//   2. public/favicon-16.png          — browser tab favicon (small)
//   3. public/favicon-32.png          — browser tab favicon (retina)
//   4. public/apple-touch-icon.png    — iOS / Android home screen icon (180×180)
//   5. .github/banner.png             — wordmark on dark panel for the README
//
// The sources live as large square PNGs (480×480 and 256×256) with significant
// transparent padding around the actual glyph. Sharp's .trim() crops the
// padding so the resized output fills its target box instead of rendering
// a tiny glyph in the middle of an empty canvas.
//
// Run: `node scripts/build-brand-assets.mjs`
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC = join(__dirname, '..', 'public');
const GITHUB_DIR = join(__dirname, '..', '.github');

// Dark site background — matches var(--black) in global.css. Used as the
// opaque fill behind the white glyph so the favicon is legible regardless
// of whether the browser tab is in light or dark theme.
const DARK_BG = { r: 11, g: 11, b: 15, alpha: 1 };

/** ─── 1. Wordmark ─────────────────────────────────────────────────── */
async function buildWordmark() {
  const src = join(PUBLIC, 'd.lab.png');
  const trimmed = await sharp(src)
    .trim({ threshold: 10 })
    .toBuffer({ resolveWithObject: true });
  console.log(`[wordmark] source trimmed to ${trimmed.info.width}×${trimmed.info.height}`);

  await sharp(trimmed.data).png({ compressionLevel: 9 }).toFile(join(PUBLIC, 'd.lab-mark.png'));
  await sharp(trimmed.data).webp({ quality: 92 }).toFile(join(PUBLIC, 'd.lab-mark.webp'));
  console.log('[wordmark] wrote d.lab-mark.png + d.lab-mark.webp');
}

/** ─── 2. Favicons ─────────────────────────────────────────────────── */
// Glyph fills this fraction of each favicon canvas. 0.82 leaves a touch
// of breathing room so antialiased edges don't kiss the canvas border.
const GLYPH_RATIO = 0.82;

async function buildFavicons() {
  const src = join(PUBLIC, 'd.lab-icon2.png');
  const trimmed = await sharp(src)
    .trim({ threshold: 10 })
    .toBuffer({ resolveWithObject: true });
  console.log(`[favicon] source trimmed to ${trimmed.info.width}×${trimmed.info.height}`);

  const sizes = [
    { size: 16,  file: 'favicon-16.png' },
    { size: 32,  file: 'favicon-32.png' },
    { size: 180, file: 'apple-touch-icon.png' },
  ];

  for (const { size, file } of sizes) {
    const glyphSize = Math.round(size * GLYPH_RATIO);
    // Resize the trimmed glyph to the target inner size.
    const glyph = await sharp(trimmed.data)
      .resize(glyphSize, glyphSize, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .toBuffer();

    // Composite on a square dark canvas, centered.
    await sharp({
      create: {
        width: size,
        height: size,
        channels: 4,
        background: DARK_BG,
      },
    })
      .composite([{ input: glyph, gravity: 'center' }])
      .png({ compressionLevel: 9 })
      .toFile(join(PUBLIC, file));

    console.log(`[favicon] wrote ${file} (${size}×${size}, glyph ${glyphSize}px)`);
  }
}

/** ─── 3. README banner ────────────────────────────────────────────── */
// The wordmark is white-on-transparent, so it vanishes on GitHub's light
// theme. This generates a rectangular PNG with the wordmark centered on a
// dark panel, suitable for embedding at the top of README.md. The banner
// goes to .github/ (conventional place for repo meta-assets) so it doesn't
// pollute the deployed `public/` tree.
import { mkdir } from 'node:fs/promises';

const BANNER_WIDTH = 860;
const BANNER_HEIGHT = 240;

async function buildReadmeBanner() {
  await mkdir(GITHUB_DIR, { recursive: true });

  const src = join(PUBLIC, 'd.lab.png');
  const trimmed = await sharp(src)
    .trim({ threshold: 10 })
    .toBuffer({ resolveWithObject: true });
  console.log(`[banner] wordmark trimmed to ${trimmed.info.width}×${trimmed.info.height}`);

  // Scale the wordmark to fit a comfortable width inside the banner,
  // preserving aspect ratio. Leaving ~35% of canvas width as horizontal
  // padding gives the mark room to breathe.
  const innerMaxWidth = Math.round(BANNER_WIDTH * 0.62);
  const aspectRatio = trimmed.info.height / trimmed.info.width;
  const innerHeight = Math.round(innerMaxWidth * aspectRatio);

  const glyph = await sharp(trimmed.data)
    .resize(innerMaxWidth, innerHeight, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  await sharp({
    create: {
      width: BANNER_WIDTH,
      height: BANNER_HEIGHT,
      channels: 4,
      background: DARK_BG,
    },
  })
    .composite([{ input: glyph, gravity: 'center' }])
    .png({ compressionLevel: 9 })
    .toFile(join(GITHUB_DIR, 'banner.png'));

  console.log(`[banner] wrote .github/banner.png (${BANNER_WIDTH}×${BANNER_HEIGHT})`);
}

/** ─── entrypoint ──────────────────────────────────────────────────── */
async function run() {
  await buildWordmark();
  await buildFavicons();
  await buildReadmeBanner();
  console.log('\n✓ brand assets regenerated');
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
