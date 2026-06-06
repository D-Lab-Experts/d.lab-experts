// Gera as capas P&B (pixel art) dos posts a partir do engine compartilhado.
// Rode com:  node scripts/gen-covers.mjs
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { toSVG } from '../src/lib/pixelart.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const MAP = {
  'cover-gaming': 'public/posts/campanhas-afirmativas-gaming-cover.svg',
  'cover-cycling': 'public/posts/ciclismo-brasil-cover.svg',
};

for (const [variant, rel] of Object.entries(MAP)) {
  writeFileSync(join(root, rel), toSVG(variant));
  console.log('wrote', rel);
}
