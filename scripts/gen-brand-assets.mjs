// Gera os assets de marca a partir das fontes em scripts/brand-src/
// (logo.png = wordmark D.Lab branco transparente; icon.png = marca "D").
// Saídas em public/: favicons em tile escuro (visíveis em qualquer aba),
// ícones de card transparentes, OG com o logo sobre fundo escuro.
//   node scripts/gen-brand-assets.mjs
import sharp from 'sharp';

const BG = '#0B0B0F';
const TRANSP = { r: 0, g: 0, b: 0, alpha: 0 };
const ICON = 'scripts/brand-src/icon.png';
const LOGO = 'scripts/brand-src/logo.png';

// Favicon: marca branca sobre tile escuro (não some em abas claras).
async function favicon(size, out) {
  const inner = Math.round(size * 0.72);
  const mark = await sharp(ICON)
    .resize(inner, inner, { fit: 'contain', background: TRANSP })
    .png()
    .toBuffer();
  await sharp({ create: { width: size, height: size, channels: 4, background: BG } })
    .composite([{ input: mark, gravity: 'center' }])
    .png()
    .toFile(`public/${out}`);
  console.log('✓', out, `${size}×${size}`);
}

// Ícone transparente (cards em vidro escuro / press kit).
async function iconTransparent(size, out) {
  await sharp(ICON)
    .resize(size, size, { fit: 'contain', background: TRANSP })
    .toFile(`public/${out}`);
  console.log('✓', out, `${size}×${size}`);
}

// OG / social: logo centralizado sobre fundo escuro (1200×675).
async function og(out) {
  const w = 1200, h = 675;
  const logo = await sharp(LOGO)
    .resize(Math.round(w * 0.6), Math.round(h * 0.64), { fit: 'contain', background: TRANSP })
    .png()
    .toBuffer();
  await sharp({ create: { width: w, height: h, channels: 4, background: BG } })
    .composite([{ input: logo, gravity: 'center' }])
    .png()
    .toFile(`public/${out}`);
  console.log('✓', out, `${w}×${h}`);
}

await favicon(180, 'apple-touch-icon.png');
await favicon(32, 'favicon-32.png');
await favicon(16, 'favicon-16.png');
await iconTransparent(256, 'd.lab-icon.webp');
await iconTransparent(256, 'd.lab-icon2.webp');
await iconTransparent(512, 'd.lab-icon.png');
// Logo horizontal recortado (trim das bordas transparentes) para uso
// inline na nav, footer e hero. Altura fixa, largura natural do wordmark.
await sharp(LOGO).trim().resize({ height: 240 }).png().toFile('public/d.lab-logo.png');
{
  const meta = await sharp('public/d.lab-logo.png').metadata();
  console.log('✓ d.lab-logo.png (trim)', `${meta.width}×${meta.height}`);
}
await og('d.lab.png');
console.log('Brand assets gerados.');
