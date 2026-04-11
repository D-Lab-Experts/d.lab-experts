// Chart.js initialization for the "Campanhas Afirmativas no Mercado de Games"
// research post. All charts are interactive: hover for tooltips with values
// and contextual labels. Loaded once per page; re-runs on DOMContentLoaded
// just in case Chart.js needs to wait.

(function () {
  // Share buttons
  document.querySelectorAll('[data-share]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var kind = btn.dataset.share;
      var url = window.location.href;
      if (kind === 'copy') navigator.clipboard.writeText(url);
      if (kind === 'linkedin')
        window.open('https://www.linkedin.com/sharing/share-offsite/?url=' + encodeURIComponent(url));
      if (kind === 'twitter')
        window.open('https://twitter.com/intent/tweet?url=' + encodeURIComponent(url));
    });
  });

  function applyDefaults() {
    Chart.defaults.color = 'rgba(234,234,240,0.55)';
    Chart.defaults.borderColor = 'rgba(234,234,240,0.06)';
    Chart.defaults.font.family = "'Satoshi','Helvetica Neue',sans-serif";
    Chart.defaults.font.size = 12;
    Chart.defaults.plugins.tooltip = Object.assign({}, Chart.defaults.plugins.tooltip, {
      backgroundColor: 'rgba(26,26,34,0.96)',
      titleColor: '#EAEAF0',
      titleFont: { weight: 700, size: 13 },
      bodyColor: 'rgba(234,234,240,0.85)',
      bodyFont: { size: 12, weight: 500 },
      borderColor: 'rgba(177,140,255,0.25)',
      borderWidth: 1,
      padding: 12,
      cornerRadius: 8,
      displayColors: true,
      boxPadding: 6,
      caretSize: 6,
    });
  }

  // Color tokens
  var LILAC = 'rgba(177,140,255,0.75)';
  var LILAC_BORDER = '#B18CFF';
  var BLUE = 'rgba(120,165,240,0.70)';
  var BLUE_BORDER = '#78A5F0';
  var GREEN = 'rgba(120,200,170,0.75)';
  var GREEN_BORDER = '#78C8AA';
  var CYAN = 'rgba(110,190,220,0.70)';
  var CYAN_BORDER = '#6EBEDC';
  var YELLOW = 'rgba(255,209,102,0.70)';
  var YELLOW_BORDER = '#FFD166';
  var DIM = 'rgba(234,234,240,0.30)';

  function gridStyle() {
    return {
      color: 'rgba(234,234,240,0.04)',
      drawTicks: false,
    };
  }

  function makeBars(canvasId, opts) {
    var el = document.getElementById(canvasId);
    if (!el) return;
    new Chart(el, {
      type: 'bar',
      data: {
        labels: opts.labels,
        datasets: [
          {
            label: opts.datasetLabel || '%',
            data: opts.data,
            backgroundColor: opts.colors || opts.labels.map(function () { return LILAC; }),
            borderColor: opts.borders || opts.labels.map(function () { return LILAC_BORDER; }),
            borderWidth: 1.2,
            borderRadius: 6,
            borderSkipped: false,
            maxBarThickness: 38,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: opts.horizontal ? 'y' : 'x',
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              title: function (items) { return items[0].label; },
              label: function (c) {
                var line = ' ' + c.formattedValue + (opts.unit || '%');
                if (opts.context && opts.context[c.dataIndex]) {
                  return [line, ' ' + opts.context[c.dataIndex]];
                }
                return line;
              },
            },
          },
        },
        scales: {
          x: opts.horizontal
            ? { grid: gridStyle(), ticks: { callback: function (v) { return v + (opts.unit || '%'); } }, max: opts.max }
            : { grid: { display: false }, ticks: { font: { size: 11 } } },
          y: opts.horizontal
            ? { grid: { display: false }, ticks: { font: { size: 12 } } }
            : { grid: gridStyle(), ticks: { callback: function (v) { return v + (opts.unit || '%'); } }, max: opts.max },
        },
      },
    });
  }

  function init() {
    if (typeof Chart === 'undefined') {
      setTimeout(init, 80);
      return;
    }
    applyDefaults();

    // 1. Profile of the player (Casual / Hardcore / Profissional)
    makeBars('cagPlayerType', {
      labels: ['Casual', 'Hardcore', 'Profissional'],
      data: [61.2, 37.8, 1.0],
      colors: [LILAC, BLUE, CYAN],
      borders: [LILAC_BORDER, BLUE_BORDER, CYAN_BORDER],
      datasetLabel: '% da amostra',
      horizontal: true,
      max: 100,
      context: [
        'Jogam em dispositivos casuais e por entretenimento.',
        'Jogadores frequentes, com tempo dedicado.',
        'Geram renda jogando.',
      ],
    });

    // 2. Age distribution
    makeBars('cagAge', {
      labels: ['18-24 anos', '25-34 anos', '35-44 anos', '45-49 anos'],
      data: [38.8, 53.1, 7.1, 1.0],
      colors: [BLUE, BLUE, BLUE, BLUE],
      borders: [BLUE_BORDER, BLUE_BORDER, BLUE_BORDER, BLUE_BORDER],
      datasetLabel: '% da amostra',
      horizontal: true,
      max: 100,
      context: [
        'Geração Z entrando no mercado.',
        'Millennials, com poder de compra estabelecido.',
        'Geração X, decisão familiar.',
        'Adultos maduros, minoria na amostra.',
      ],
    });

    // 3. Race / color
    makeBars('cagRace', {
      labels: ['Branca', 'Parda', 'Preta', 'Indígena', 'Amarela'],
      data: [71.4, 21.4, 5.1, 1.0, 1.0],
      colors: [GREEN, GREEN, GREEN, GREEN, GREEN],
      borders: [GREEN_BORDER, GREEN_BORDER, GREEN_BORDER, GREEN_BORDER, GREEN_BORDER],
      datasetLabel: '% da amostra',
      horizontal: true,
      max: 100,
      context: [
        'Maioria da amostra autodeclarada branca.',
        'Segundo maior grupo (cor parda).',
        'Pessoas pretas, sub-representadas vs. censo IBGE.',
        'Indígenas, sub-representados.',
        'Pessoas amarelas, sub-representadas.',
      ],
    });

    // 4. Positive responses by item (P1-P6)
    makeBars('cagPerception', {
      labels: [
        'P4 Impacto percebido',
        'P5 Branding empático',
        'P1 Proximidade',
        'P3 Confiança',
        'P6 Troca de marca',
        'P2 Sinceridade',
      ],
      data: [87.8, 84.7, 81.6, 67.3, 61.2, 16.3],
      colors: [GREEN, LILAC, LILAC, BLUE, CYAN, YELLOW],
      borders: [GREEN_BORDER, LILAC_BORDER, LILAC_BORDER, BLUE_BORDER, CYAN_BORDER, YELLOW_BORDER],
      datasetLabel: '% Sim',
      horizontal: true,
      max: 100,
      context: [
        'Acredita que campanhas geram oportunidades reais.',
        'Prefere marcas que entendem suas vivências.',
        'Marcas que resolvem problemas da comunidade.',
        'Confia em empresas com ações para grupos minorizados.',
        'Disposto a trocar por concorrente mais comprometido.',
        'Acredita em motivação genuína da marca (baixo).',
      ],
    });

    // 5. Minoria vs Não-minoria (clustered)
    var minVsNonEl = document.getElementById('cagMinVsNon');
    if (minVsNonEl) {
      new Chart(minVsNonEl, {
        type: 'bar',
        data: {
          labels: ['Proximidade', 'Sinceridade', 'Confiança', 'Impacto', 'Branding empático', 'Troca de marca'],
          datasets: [
            {
              label: 'Grupo minorizado',
              data: [86.4, 18.6, 74.6, 86.4, 88.1, 72.9],
              backgroundColor: LILAC,
              borderColor: LILAC_BORDER,
              borderWidth: 1.2,
              borderRadius: 5,
              maxBarThickness: 26,
            },
            {
              label: 'Grupo não-minorizado',
              data: [74.4, 12.8, 56.4, 89.7, 79.5, 43.6],
              backgroundColor: BLUE,
              borderColor: BLUE_BORDER,
              borderWidth: 1.2,
              borderRadius: 5,
              maxBarThickness: 26,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: true,
              position: 'top',
              align: 'end',
              labels: { boxWidth: 10, boxHeight: 10, padding: 14, font: { size: 11 } },
            },
            tooltip: {
              callbacks: {
                label: function (c) { return ' ' + c.dataset.label + ': ' + c.formattedValue + '%'; },
              },
            },
          },
          scales: {
            x: { grid: { display: false }, ticks: { font: { size: 11 } } },
            y: { grid: gridStyle(), ticks: { callback: function (v) { return v + '%'; } }, max: 100 },
          },
        },
      });
    }

    // 6. Logistic regression odds ratios (single bar with reference line at OR=1)
    var orEl = document.getElementById('cagOR');
    if (orEl) {
      new Chart(orEl, {
        type: 'bar',
        data: {
          labels: ['Status de minoria', 'Idade', 'Gamer hardcore'],
          datasets: [
            {
              label: 'Odds Ratio',
              data: [3.36, 1.05, 0.65],
              backgroundColor: [LILAC, 'rgba(234,234,240,0.18)', 'rgba(234,234,240,0.18)'],
              borderColor: [LILAC_BORDER, DIM, DIM],
              borderWidth: 1.2,
              borderRadius: 5,
              maxBarThickness: 32,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          indexAxis: 'y',
          plugins: {
            legend: { display: false },
            tooltip: {
              callbacks: {
                title: function (items) { return items[0].label; },
                label: function (c) {
                  var ic = [
                    'IC 95%: 1,41 a 8,01 · p = 0,006',
                    'IC 95%: 0,97 a 1,14 · p = 0,216 (n.s.)',
                    'IC 95%: 0,27 a 1,57 · p = 0,334 (n.s.)',
                  ];
                  return [' OR = ' + c.formattedValue + 'x', ' ' + ic[c.dataIndex]];
                },
              },
            },
          },
          scales: {
            x: {
              grid: gridStyle(),
              min: 0,
              max: 9,
              ticks: { callback: function (v) { return v + 'x'; } },
              title: { display: true, text: 'Odds Ratio (1 = sem efeito)', color: 'rgba(234,234,240,0.4)', font: { size: 11 } },
            },
            y: { grid: { display: false }, ticks: { font: { size: 12 } } },
          },
        },
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
