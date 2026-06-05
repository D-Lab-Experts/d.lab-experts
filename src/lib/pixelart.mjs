/**
 * Engine de pixel art P&B (compartilhado por PixelArt.astro e pelo
 * gerador de capas dos posts). Cenas com narrativa, modeladas com LUZ,
 * SOMBRA e GRANULADO via dithering ordenado (Bayer 8×8) em alta
 * resolução — formas têm volume e nuance, não blocos chapados de branco.
 */

export const SCENES = {
  signal: { cols: 308, rows: 132 },
  attack: { cols: 184, rows: 184 },
  market: { cols: 216, rows: 162 },
  audience: { cols: 216, rows: 162 },
  cyber: { cols: 216, rows: 162 },
  lab: { cols: 156, rows: 195 },
  'cover-gaming': { cols: 288, rows: 162 },
  'cover-cycling': { cols: 288, rows: 162 },
};

const B8 = [
  [0, 48, 12, 60, 3, 51, 15, 63], [32, 16, 44, 28, 35, 19, 47, 31],
  [8, 56, 4, 52, 11, 59, 7, 55], [40, 24, 36, 20, 43, 27, 39, 23],
  [2, 50, 14, 62, 1, 49, 13, 61], [34, 18, 46, 30, 33, 17, 45, 29],
  [10, 58, 6, 54, 9, 57, 5, 53], [42, 26, 38, 22, 41, 25, 37, 21],
];

export function buildScene(variant) {
  const cfg = SCENES[variant] || SCENES.signal;
  const W = cfg.cols, H = cfg.rows;
  const px = new Uint8Array(W * H);

  const clamp = (n, a = 0, b = 1) => Math.max(a, Math.min(b, n));
  const set = (xr, yr, v = 1) => { const x = Math.round(xr), y = Math.round(yr); if (x >= 0 && y >= 0 && x < W && y < H) px[y * W + x] = v; };
  const got = (x, y) => (x >= 0 && y >= 0 && x < W && y < H ? px[y * W + x] : 0);
  let seed = 0x9e3779 ^ (W * 131 + H * 17 + variant.length * 7);
  const rnd = () => { seed = (seed * 1103515245 + 12345) & 0x7fffffff; return seed / 0x7fffffff; };
  const grain = (x, y) => { let h = (x * 374761393 + y * 668265263) | 0; h = (h ^ (h >> 13)) * 1274126177; return ((h >>> 0) % 1024) / 1024; };
  // dither ordenado: liga o pixel se nível (0..1) passa o limiar Bayer
  const dith = (x, y, level) => { if (level <= 0) return 0; if (level >= 1) return 1; const yi = ((Math.round(y) % 8) + 8) % 8, xi = ((Math.round(x) % 8) + 8) % 8; return level * 64 > B8[yi][xi] ? 1 : 0; };
  // nível com granulado
  const shade = (x, y, level, g = 0.07) => dith(x, y, clamp(level + (grain(x, y) - 0.5) * g));

  function rectF(x0, y0, w, h, v = 1) { for (let y = y0; y < y0 + h; y++) for (let x = x0; x < x0 + w; x++) set(x, y, v); }
  function bres(x0, y0, x1, y1, v = 1) {
    x0 = Math.round(x0); y0 = Math.round(y0); x1 = Math.round(x1); y1 = Math.round(y1);
    const dx = Math.abs(x1 - x0), dy = -Math.abs(y1 - y0), sx = x0 < x1 ? 1 : -1, sy = y0 < y1 ? 1 : -1;
    let err = dx + dy;
    for (;;) { set(x0, y0, v); if (x0 === x1 && y0 === y1) break; const e2 = 2 * err; if (e2 >= dy) { err += dy; x0 += sx; } if (e2 <= dx) { err += dx; y0 += sy; } }
  }
  function ring(cx, cy, r, a0 = 0, a1 = Math.PI * 2, dash = 0) { for (let a = a0; a <= a1; a += 0.7 / r) { if (dash && Math.round(a * r) % dash >= dash / 2) continue; set(cx + Math.cos(a) * r, cy + Math.sin(a) * r); } }
  function discFill(cx, cy, r, v = 1) { for (let y = Math.floor(cy - r); y <= cy + r; y++) for (let x = Math.floor(cx - r); x <= cx + r; x++) if ((x - cx) ** 2 + (y - cy) ** 2 <= r * r) set(x, y, v); }
  // esfera modelada com luz + granulado
  function sphere(cx, cy, r, lx = -0.6, ly = -0.62) {
    const lz = 0.52;
    for (let y = Math.floor(cy - r); y <= cy + r; y++) for (let x = Math.floor(cx - r); x <= cx + r; x++) {
      const dx = (x - cx) / r, dy = (y - cy) / r, d2 = dx * dx + dy * dy; if (d2 > 1) continue;
      const nz = Math.sqrt(1 - d2);
      const b = (dx * lx + dy * ly + nz * lz + 1) / 2;
      set(x, y, shade(x, y, b * b)); // b² = mais contraste/escuro no terminador
    }
    ring(cx, cy, r);
  }
  function stars(n, maxY = H) { for (let i = 0; i < n; i++) { const x = Math.floor(rnd() * W), y = Math.floor(rnd() * maxY); if (rnd() > 0.7) { set(x, y); set(x + 1, y); set(x, y + 1); } else set(x, y); } }

  // Preenche um bitmap com sombreado direcional + granulado + contorno nítido.
  function shadedBitmap(map, ox, oy, opt = {}) {
    const lx = opt.lx ?? -0.7, ly = opt.ly ?? -0.45, base = opt.base ?? 0.5, g = opt.g ?? 0.09;
    const h = map.length, w = Math.max(...map.map((r) => r.length));
    const on = (i, j) => i >= 0 && j >= 0 && j < h && i < (map[j] ? map[j].length : 0) && map[j][i] === '#';
    for (let j = 0; j < h; j++) for (let i = 0; i < map[j].length; i++) {
      if (map[j][i] !== '#') continue;
      const edge = !on(i - 1, j) || !on(i + 1, j) || !on(i, j - 1) || !on(i, j + 1);
      if (edge) { set(ox + i, oy + j, 1); continue; } // contorno sólido
      const nx = i / (w - 1) - 0.5, ny = j / (h - 1) - 0.5;
      const b = base + (-nx) * lx * 0.9 + (-ny) * ly * 0.9;
      set(ox + i, oy + j, shade(ox + i, oy + j, b, g));
    }
  }
  // gradiente de brilho (halo/glow) por dithering, dentro de um raio
  function glow(cx, cy, r, peak = 0.6) { for (let y = Math.floor(cy - r); y <= cy + r; y++) for (let x = Math.floor(cx - r); x <= cx + r; x++) { const d = Math.hypot(x - cx, y - cy); if (d > r) continue; const lv = peak * (1 - d / r) ** 1.6; if (got(x, y) === 0 && shade(x, y, lv, 0.05)) set(x, y); } }

  // ── BITMAPS ──
  const FIG = [ // pesquisador(a) — silhueta com forma; sombreado dá volume
    '......######......', '.....########.....', '.....########.....', '.....########.....',
    '......######......', '.......####.......', '....###....###....', '...####....####...',
    '..######..######..', '..##############..', '..##############..', '..##############..',
    '..##############..', '..##############..', '..##############..', '..##############..',
    '..##############..', '..##############..', '..##############..', '...############...',
    '...############...', '...############...', '...####....####...', '...####....####...',
    '...####....####...', '...####....####...', '...####....####...', '...####....####...',
    '...####....####...', '...####....####...', '..#####....#####..', '..#####....#####..',
  ];
  const HOOD = [
    '.......######.......', '.....##########.....', '....############....', '...##############...',
    '...##############...', '..################..', '..################..', '..####......####..',
    '..################..', '.##################.', '.##################.', '####################',
    '####################', '####################', '####################', '####################',
    '####################', '####################', '####################', '####################',
    '.##################.', '.##################.', '.##################.', '..################..',
    '..################..', '..################..', '...##############...', '...##############...',
  ];

  function run() {
    if (variant === 'signal') signal();
    else if (variant === 'attack') attack();
    else if (variant === 'market') market();
    else if (variant === 'audience') audience();
    else if (variant === 'cyber') cyber();
    else if (variant === 'lab') lab();
    else if (variant === 'cover-gaming') coverGaming();
    else if (variant === 'cover-cycling') coverCycling();
    else signal();
  }

  // tubo sombreado (cilindro) entre dois pontos, com raio dado
  function tube(x0, y0, x1, y1, rad, base = 0.6) {
    const dxv = x1 - x0, dyv = y1 - y0, L = Math.hypot(dxv, dyv), ux = dxv / L, uy = dyv / L, pxn = -uy, pyn = ux;
    for (let t = 0; t <= L; t++) for (let r = -rad; r <= rad; r++) { const X = x0 + ux * t + pxn * r, Y = y0 + uy * t + pyn * r; if (Math.abs(r) === rad) set(X, Y, 1); else set(X, Y, shade(X, Y, base - (r / rad) * 0.45, 0.08)); }
  }

  // HERO — observatório: telescópio mirando uma estrela (research hub)
  function signal() {
    const hor = Math.round(H * 0.82);
    stars(150, hor - 6);
    // estrela-alvo brilhante no alto-direita
    const tx = Math.round(W * 0.82), ty = Math.round(H * 0.20);
    discFill(tx, ty, 2); for (const d of [4, 6, 9]) { set(tx - d, ty); set(tx + d, ty); set(tx, ty - d); set(tx, ty + d); }
    glow(tx, ty, 16, 0.3);
    for (let x = 0; x < W; x++) set(x, hor);
    // tripé + tubo do telescópio apontando à estrela
    const ax = Math.round(W * 0.30), ay = Math.round(H * 0.52);
    tube(ax, ay, ax + Math.round(W * 0.20), ay - Math.round(H * 0.30), 7);
    discFill(ax + Math.round(W * 0.20), ay - Math.round(H * 0.30), 4); // lente
    bres(ax, ay + 2, ax - 16, hor); bres(ax, ay + 2, ax + 18, hor); bres(ax + 4, ay + 4, ax + 2, hor);
    rectF(ax - 2, ay - 1, 6, 6); // junta
    // pesquisador(a) observando, à direita
    shadedBitmap(FIG, Math.round(W * 0.50), hor - 32, { base: 0.46, g: 0.1 });
  }

  function attack() {
    const cx = W / 2, cy = H / 2; stars(110);
    const pr = Math.round(W * 0.25);
    sphere(cx, cy, pr);
    discFill(cx - pr * 0.30, cy - pr * 0.28, Math.round(pr * 0.20), 0);
    discFill(cx - pr * 0.03, cy - pr * 0.46, Math.round(pr * 0.12), 0);
    discFill(cx - pr * 0.46, cy + pr * 0.00, Math.round(pr * 0.13), 0);
    discFill(cx - pr * 0.20, cy + pr * 0.12, Math.round(pr * 0.10), 0);
    ring(cx, cy, pr);
    const shr = Math.round(pr * 1.55);
    for (let a = 0; a < Math.PI * 2; a += 0.7 / shr) { if (a > 2.2 && a < 3.2) continue; if (Math.round(a * shr) % 4 < 2) set(cx + Math.cos(a) * shr, cy + Math.sin(a) * shr); }
    ring(cx, cy, Math.round(pr * 1.95), -1.3, -0.1, 2);
    const sx = Math.round(cx + pr * 1.45), sy = Math.round(cy - pr * 1.62);
    shadedBitmap(['.####.', '######', '######', '.####.'], sx, sy, { base: 0.55 });
    rectF(sx - 7, sy, 5, 4); rectF(sx + 6, sy, 5, 4);
    const aa = 2.7; bres(cx + Math.cos(aa) * (shr + 16), cy + Math.sin(aa) * (shr + 16), cx + Math.cos(aa) * (pr + 3), cy + Math.sin(aa) * (pr + 3));
  }

  // INTELIGÊNCIA COMPETITIVA — um rei de xadrez sob luz lateral
  function market() {
    const floor = Math.round(H * 0.84);
    stars(26, floor - 50);
    for (let x = 0; x < W; x++) set(x, floor);
    const KING = [
      '..........##..........', '..........##..........', '........######........', '..........##..........',
      '.........####.........', '........######........', '.......########.......', '......##########......',
      '.......########.......', '........######........', '.......########.......', '......##########......',
      '.....############.....', '......##########......', '.......########.......', '.......########.......',
      '......##########......', '.....############.....', '......##########......', '.......########.......',
      '......##########......', '.....############.....', '....##############....', '.....############.....',
      '......##########......', '.......########.......', '......##########......', '.....############.....',
      '....##############....', '...################...', '..##################..', '...################...',
      '.####################.', '######################', '######################',
    ];
    const kx = Math.round(W * 0.36), kh = KING.length, ky = floor - kh;
    // sombra projetada (à direita, luz da esquerda)
    for (let i = 2; i < 40; i++) { const w = Math.max(0, 11 - Math.round(i * 0.25)); for (let x = -w; x <= w; x++) if (shade(kx + 11 + i, floor - 1 - Math.round(Math.abs(x) * 0.1), 0.34 - i * 0.008, 0.1)) set(kx + 11 + i, floor - 1, 1); }
    for (let i = 0; i < 38; i++) if (shade(kx + 11 + i, floor - 1, 0.4 - i * 0.01, 0.12)) { } // (sombra fina)
    for (let i = 0; i < 40; i++) for (let yy = 0; yy < 2; yy++) if (shade(kx + 12 + i, floor - 1 - yy, 0.42 - i * 0.01, 0.1)) set(kx + 12 + i, floor - 1 - yy);
    shadedBitmap(KING, kx, ky, { base: 0.52, lx: -0.95, g: 0.1 });
    // peão caído à direita
    shadedBitmap(['..####..', '.######.', '..####..', '.######.', '.######.', '########'], kx + 54, floor - 8, { base: 0.42 });
  }

  // COMPORTAMENTO & AUDIÊNCIA — um pequeno grupo de pessoas, uma em destaque
  function audience() {
    const floor = Math.round(H * 0.86);
    stars(24, floor - 60);
    for (let x = 0; x < W; x++) set(x, floor);
    const xs = [0.15, 0.30, 0.46, 0.63, 0.80];
    xs.forEach((fx, i) => {
      const X = Math.round(W * fx) - 9, lit = i === 2;
      const off = i % 2 ? 0 : 3;
      shadedBitmap(FIG, X, floor - 32 - off, { base: lit ? 0.82 : 0.40, g: 0.1, lx: lit ? -0.4 : -0.7 });
    });
    // leve halo atrás da pessoa destacada (atenção)
    glow(Math.round(W * 0.46), floor - 20, 26, 0.16);
  }

  function cyber() {
    for (let x = 4; x < W * 0.28; x += 5) { const len = 14 + Math.floor(rnd() * (H - 20)), off = Math.floor(rnd() * 14); for (let yy = off; yy < off + len && yy < H; yy++) if (yy % 3 < 2) set(x, yy); }
    const floor = H - 12; for (let x = 0; x < W; x++) set(x, floor);
    const mx = Math.round(W * 0.54), my = Math.round(H * 0.22), mw = Math.round(W * 0.38), mh = Math.round(H * 0.42);
    for (let t = 0; t < 2; t++) { for (let x = mx - t; x <= mx + mw + t; x++) { set(x, my - t); set(x, my + mh + t); } for (let yy = my - t; yy <= my + mh + t; yy++) { set(mx - t, yy); set(mx + mw + t, yy); } }
    rectF(mx + Math.round(mw / 2) - 2, my + mh, 5, floor - (my + mh)); rectF(mx + Math.round(mw / 2) - 14, floor - 2, 29, 3);
    const lock = ['..######..', '.##....##.', '##......##', '##......##', '##########', '##########', '###....###', '##.####.##', '###....###', '##########', '##########'];
    shadedBitmap(lock, mx + Math.round(mw / 2) - 5, my + Math.round(mh / 2) - 6, { base: 0.62, g: 0.06 });
    shadedBitmap(HOOD, Math.round(W * 0.22), floor - 28, { base: 0.4, g: 0.1 });
  }

  function lab() {
    for (let y = 12; y < H * 0.42; y += 14) for (let x = 8; x < W; x += 12) set(x, y);
    const bench = Math.round(H * 0.74); for (let x = 0; x < W; x++) set(x, bench); rectF(0, bench + 1, W, 4);
    const wx = W - 54, wy = 16, ww = 40, wh = 30;
    for (let x = wx; x <= wx + ww; x++) { set(x, wy); set(x, wy + wh); } for (let y = wy; y <= wy + wh; y++) { set(wx, y); set(wx + ww, y); set(wx + Math.round(ww / 2), y); }
    shadedBitmap(['##...##', '.##.##.', '..#.#..'], wx + 12, wy + 11, { base: 0.7 });
    shadedBitmap(FIG, 16, bench - 32, { base: 0.46, g: 0.1 });
    // lâmpada (objeto, sem cone gigante; só um glow pequeno na cabeça)
    const lampX = 50, lampTop = Math.round(H * 0.38);
    bres(lampX, bench - 1, lampX, lampTop + 8); rectF(lampX - 5, bench - 3, 11, 3);
    bres(lampX, lampTop + 8, lampX + 18, lampTop); shadedBitmap(['#####', '#...#', '.###.'], lampX + 14, lampTop - 2, { base: 0.72 });
    glow(lampX + 16, lampTop + 4, 12, 0.3);
    // frasco com líquido sombreado
    const fx = Math.round(W * 0.56), fTop = bench - 42, fh = 42;
    for (let j = 0; j < fh; j++) { const half = j < 13 ? 5 : Math.round(5 + (j - 13) * 0.62); set(fx - half, fTop + j); set(fx + half, fTop + j); if (j === fh - 1) for (let x = fx - half; x <= fx + half; x++) set(x, fTop + j); if (j > fh * 0.5) for (let x = fx - half + 1; x < fx + half; x++) set(x, fTop + j, shade(x, fTop + j, 0.55 - (fx - x) / 36, 0.12)); }
    for (let x = fx - 5; x <= fx + 5; x++) set(x, fTop);
    const tr = Math.round(W * 0.82); for (let k = 0; k < 3; k++) { const tx = tr + k * 9; for (let y = bench - 20; y < bench; y++) { set(tx, y); set(tx + 5, y); } set(tx, bench - 20); set(tx + 5, bench - 20); for (let y = bench - 8; y < bench; y++) for (let x = tx + 1; x < tx + 5; x++) set(x, y, shade(x, y, 0.5, 0.12)); }
  }

  // CAPA gaming — jogador(a) com headset diante de tela; campanha/afeto
  function coverGaming() {
    const floor = H - 8; stars(30, H * 0.4);
    glow(Math.round(W * 0.66), Math.round(H * 0.42), Math.round(W * 0.3), 0.34);
    // tela à direita com barras + coração (campanha afirmativa)
    const sx = Math.round(W * 0.50), sy = Math.round(H * 0.16), sw = Math.round(W * 0.42), sh = Math.round(H * 0.56);
    for (let t = 0; t < 2; t++) { for (let x = sx - t; x <= sx + sw + t; x++) { set(x, sy - t); set(x, sy + sh + t); } for (let y = sy - t; y <= sy + sh + t; y++) { set(sx - t, y); set(sx + sw + t, y); } }
    for (let i = 0; i < 5; i++) { const bh = 8 + i * 7; rectF(sx + 12 + i * 14, sy + sh - 12 - bh, 8, bh, 1); }
    // coração na tela
    const hx = sx + sw - 34, hy = sy + 26, s = 16;
    for (let y = -s; y <= s; y++) for (let x = -s; x <= s; x++) { const xn = x / s, yn = -y / s, f = xn * xn + yn * yn - 1; if (f * f * f - xn * xn * yn * yn * yn < 0) set(hx + x, hy + y, shade(hx + x, hy + y, 0.7, 0.08)); }
    // jogador de perfil c/ headset à esquerda
    const GAMER = ['....######....', '..##########..', '.############.', '.####....####.', '.####....####.', '.############.', '..##########..', '...########...', '....######....', '...########...', '..##########..', '.############.', '############..', '############..', '#############.', '#############.', '############..', '.##########...', '.#######......'];
    const gx = Math.round(W * 0.16), gy = Math.round(H * 0.24);
    shadedBitmap(GAMER, gx, gy, { base: 0.5, lx: 0.7, g: 0.1 }); // luz vinda da tela (direita)
    // arco do headset
    ring(gx + 7, gy + 7, 9, Math.PI * 1.1, Math.PI * 2); rectF(gx - 1, gy + 5, 3, 6);
    for (let x = 0; x < W; x++) set(x, floor);
  }

  // CAPA ciclismo — ciclista de perfil na estrada, sob grande céu + dado
  function coverCycling() {
    const hor = Math.round(H * 0.70);
    sphere(Math.round(W * 0.74), Math.round(H * 0.28), Math.round(H * 0.16)); // sol/lua
    stars(40, hor - 20);
    for (let x = 0; x < W; x++) set(x, hor);
    // estrada (faixa em perspectiva) + linha de dado tracejada
    for (let y = hor + 1; y < H; y++) { const t = (y - hor) / (H - hor); const cw = Math.round(4 + t * (W * 0.5)); for (let x = Math.round(W / 2 - cw); x < W / 2 + cw; x++) if (shade(x, y, 0.12 + t * 0.12, 0.1)) set(x, y); }
    for (let y = hor + 4; y < H; y += 6) rectF(Math.round(W / 2 - 1), y, 2, 3, 0);
    // ciclista (perfil) sombreado
    const cx = Math.round(W * 0.30), wheelY = hor - 2, wr = 16;
    ring(cx - 16, wheelY, wr); ring(cx + 16, wheelY, wr); ring(cx - 16, wheelY, Math.round(wr * 0.35)); ring(cx + 16, wheelY, Math.round(wr * 0.35));
    for (let a = 0; a < Math.PI * 2; a += Math.PI / 6) { bres(cx - 16, wheelY, cx - 16 + Math.cos(a) * wr, wheelY + Math.sin(a) * wr); bres(cx + 16, wheelY, cx + 16 + Math.cos(a) * wr, wheelY + Math.sin(a) * wr); }
    bres(cx - 16, wheelY, cx + 2, wheelY - 14); bres(cx + 16, wheelY, cx + 2, wheelY - 14); bres(cx + 2, wheelY - 14, cx - 10, wheelY - 14); bres(cx - 16, wheelY, cx - 10, wheelY - 14); // quadro
    bres(cx - 10, wheelY - 14, cx - 12, wheelY - 26); bres(cx - 12, wheelY - 26, cx - 4, wheelY - 26); // guidão
    const RIDER = ['..####..', '.######.', '.######.', '..####..', '###########', '############', '.##########.', '..####..##..', '..###...##..', '.####...##..', '.###....##..'];
    shadedBitmap(RIDER, cx - 6, wheelY - 44, { base: 0.5, lx: 0.6, g: 0.1 });
  }

  run();

  // run-length por linha
  const rects = [];
  for (let y = 0; y < H; y++) { let x = 0; while (x < W) { if (got(x, y)) { let w = 1; while (got(x + w, y)) w++; rects.push([x, y, w]); x += w; } else x++; } }
  return { W, H, rects };
}

export function toSVG(variant) {
  const { W, H, rects } = buildScene(variant);
  const body = rects.map(([x, y, w]) => `<rect x="${x}" y="${y}" width="${w}" height="1"/>`).join('');
  return `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="none" shape-rendering="crispEdges" xmlns="http://www.w3.org/2000/svg"><rect width="${W}" height="${H}" fill="#000"/><g fill="#fff">${body}</g></svg>`;
}
