// One-shot brand asset generator. Produces:
//
//   1. public/d.lab-mark.{png,webp}   — trimmed wordmark used by header/footer
//   2. public/favicon-16.png          — browser tab favicon (small)
//   3. public/favicon-32.png          — browser tab favicon (retina)
//   4. public/apple-touch-icon.png    — iOS / Android home screen icon (180×180)
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

/** ─── entrypoint ──────────────────────────────────────────────────── */
async function run() {
  await buildWordmark();
  await buildFavicons();
  console.log('\n✓ brand assets regenerated');
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
