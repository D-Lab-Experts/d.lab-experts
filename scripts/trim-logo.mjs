// One-shot logo trimmer. Source d.lab.png is 480x480 with huge transparent
// padding around a small wordmark. Sharp's .trim() crops the transparent
// margin so the rendered logo actually fills the <img> box it's given.
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC = join(__dirname, '..', 'public');

const src = join(PUBLIC, 'd.lab.png');

async function run() {
  const input = sharp(src);
  const inputMeta = await input.metadata();
  console.log(`source: ${inputMeta.width}x${inputMeta.height}`);

  // trim() crops any border of near-solid color (honors alpha).
  // threshold: 10 is lenient enough for near-transparent edges.
  const trimmed = await sharp(src).trim({ threshold: 10 }).toBuffer({ resolveWithObject: true });
  console.log(`trimmed: ${trimmed.info.width}x${trimmed.info.height}`);

  // Save the trimmed PNG (original fidelity) and a webp version for delivery.
  await sharp(trimmed.data).png({ compressionLevel: 9 }).toFile(join(PUBLIC, 'd.lab-mark.png'));
  await sharp(trimmed.data).webp({ quality: 92 }).toFile(join(PUBLIC, 'd.lab-mark.webp'));

  console.log('wrote public/d.lab-mark.png and public/d.lab-mark.webp');
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
