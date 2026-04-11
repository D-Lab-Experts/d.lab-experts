// Chart.js initialization for the "Decisão no Escuro" research post
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

  function initCharts() {
    if (typeof Chart === 'undefined') {
      setTimeout(initCharts, 60);
      return;
    }

    Chart.defaults.color = 'rgba(234,234,240,0.5)';
    Chart.defaults.borderColor = 'rgba(234,234,240,0.06)';
    Chart.defaults.font.family = "'Satoshi',sans-serif";
    Chart.defaults.font.size = 12;

    var causasEl = document.getElementById('causasChart');
    if (causasEl) {
      new Chart(causasEl, {
        type: 'bar',
        data: {
          labels: [
            'Capital\ninsuficiente',
            'Falta de\nplanejamento',
            'Desconhecimento\ndo mercado',
            'Concorrência\nnão prevista',
            'Gestão\nfinanceira fraca',
            'Precificação\ninadequada',
            'Público-alvo\nmal definido',
          ],
          datasets: [
            {
              label: 'Causa principal (%)',
              data: [42, 39, 34, 28, 26, 22, 19],
              backgroundColor: 'rgba(177,140,255,0.75)',
              borderColor: '#B18CFF',
              borderWidth: 1,
              borderRadius: 4,
            },
            {
              label: 'Fator agravante (%)',
              data: [15, 18, 24, 19, 21, 17, 22],
              backgroundColor: 'rgba(77,163,255,0.45)',
              borderColor: '#4DA3FF',
              borderWidth: 1,
              borderRadius: 4,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          indexAxis: 'y',
          plugins: {
            legend: { display: false },
            tooltip: { callbacks: { label: function (c) { return ' ' + c.dataset.label + ': ' + c.raw + '%'; } } },
          },
          scales: {
            x: { grid: { color: 'rgba(234,234,240,0.04)' }, ticks: { callback: function (v) { return v + '%'; } }, max: 70 },
            y: { grid: { display: false }, ticks: { font: { size: 11 } } },
          },
        },
      });
    }

    var matEl = document.getElementById('maturidadeChart');
    if (matEl) {
      new Chart(matEl, {
        type: 'doughnut',
        data: {
          labels: ['Intuição pura', 'Pesquisa informal', 'Dado público bruto', 'Análise estruturada'],
          datasets: [
            {
              data: [41, 33, 17, 9],
              backgroundColor: ['rgba(255,92,92,0.7)', 'rgba(245,166,35,0.7)', 'rgba(77,163,255,0.7)', 'rgba(177,140,255,0.8)'],
              borderColor: ['#FF5C5C', '#F5A623', '#4DA3FF', '#B18CFF'],
              borderWidth: 1,
              hoverOffset: 8,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          cutout: '65%',
          plugins: {
            legend: { display: false },
            tooltip: { callbacks: { label: function (c) { return ' ' + c.label + ': ' + c.raw + '%'; } } },
          },
        },
      });
    }

    var custoEl = document.getElementById('custoChart');
    if (custoEl) {
      new Chart(custoEl, {
        type: 'bar',
        data: {
          labels: [
            'Investimento\ninicial',
            'Capital\nimobilizado',
            'Estoque\nmal calibrado',
            'Capital de giro\nconsumido',
            'Receita perdida\n(24 meses)',
            'Tempo do\ngestor',
          ],
          datasets: [
            {
              label: 'Custo direto (R$ mil)',
              data: [45, 30, 25, 35, 0, 0],
              backgroundColor: 'rgba(177,140,255,0.75)',
              borderColor: '#B18CFF',
              borderWidth: 1,
              borderRadius: 4,
            },
            {
              label: 'Custo de oportunidade (R$ mil)',
              data: [0, 0, 0, 0, 40, 15],
              backgroundColor: 'rgba(77,163,255,0.5)',
              borderColor: '#4DA3FF',
              borderWidth: 1,
              borderRadius: 4,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: { callbacks: { label: function (c) { return ' ' + c.dataset.label + ': R$ ' + c.raw + 'k'; } } },
          },
          scales: {
            x: { grid: { display: false } },
            y: { grid: { color: 'rgba(234,234,240,0.04)' }, ticks: { callback: function (v) { return 'R$ ' + v + 'k'; } } },
          },
        },
      });
    }

    var sobEl = document.getElementById('sobrevivenciaChart');
    if (sobEl) {
      new Chart(sobEl, {
        type: 'line',
        data: {
          labels: ['Abertura', '6 meses', '12 meses', '18 meses', '24 meses', '36 meses', '48 meses', '60 meses'],
          datasets: [
            {
              label: 'Análise estruturada',
              data: [100, 97, 95, 92, 88, 82, 76, 71],
              borderColor: '#B18CFF',
              backgroundColor: 'rgba(177,140,255,0.06)',
              borderWidth: 2,
              tension: 0.4,
              fill: true,
              pointBackgroundColor: '#B18CFF',
              pointRadius: 4,
              pointHoverRadius: 6,
            },
            {
              label: 'Dado público bruto',
              data: [100, 90, 83, 76, 70, 63, 57, 52],
              borderColor: '#4DA3FF',
              backgroundColor: 'rgba(77,163,255,0.04)',
              borderWidth: 2,
              borderDash: [6, 3],
              tension: 0.4,
              fill: true,
              pointBackgroundColor: '#4DA3FF',
              pointRadius: 3,
              pointHoverRadius: 5,
            },
            {
              label: 'Intuição / informal',
              data: [100, 84, 75, 65, 58, 50, 44, 38],
              borderColor: 'rgba(234,234,240,0.35)',
              backgroundColor: 'rgba(234,234,240,0.02)',
              borderWidth: 2,
              borderDash: [3, 3],
              tension: 0.4,
              fill: true,
              pointBackgroundColor: 'rgba(234,234,240,0.35)',
              pointRadius: 3,
              pointHoverRadius: 5,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: { callbacks: { label: function (c) { return ' ' + c.dataset.label + ': ' + c.raw + '% ativos'; } } },
          },
          scales: {
            y: { min: 30, max: 105, grid: { color: 'rgba(234,234,240,0.04)' }, ticks: { callback: function (v) { return v + '%'; } } },
            x: { grid: { color: 'rgba(234,234,240,0.04)' } },
          },
        },
      });
    }

    var landEl = document.getElementById('landscapeChart');
    if (landEl) {
      new Chart(landEl, {
        type: 'bubble',
        data: {
          datasets: [
            { label: 'Consultorias estratégicas', data: [{ x: 88, y: 15000, r: 20 }], backgroundColor: 'rgba(234,234,240,0.12)', borderColor: 'rgba(234,234,240,0.35)', borderWidth: 1 },
            { label: 'Plataformas BI enterprise', data: [{ x: 78, y: 8000, r: 18 }], backgroundColor: 'rgba(245,166,35,0.6)', borderColor: '#F5A623', borderWidth: 1 },
            { label: 'Analytics SaaS', data: [{ x: 60, y: 3500, r: 14 }], backgroundColor: 'rgba(255,92,92,0.5)', borderColor: '#FF5C5C', borderWidth: 1 },
            { label: 'Pesquisa de mercado tradicional', data: [{ x: 65, y: 12000, r: 16 }], backgroundColor: 'rgba(77,163,255,0.35)', borderColor: '#4DA3FF', borderWidth: 1 },
            { label: 'D.Lab', data: [{ x: 20, y: 700, r: 18 }], backgroundColor: 'rgba(177,140,255,0.8)', borderColor: '#B18CFF', borderWidth: 2 },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          layout: { padding: 20 },
          plugins: {
            legend: { display: true, position: 'bottom', labels: { padding: 16, font: { size: 11 }, boxWidth: 10 } },
            tooltip: {
              callbacks: {
                label: function (c) {
                  var d = c.raw;
                  return ' ' + c.dataset.label + '. Porte: ' + d.x + '/100 · Custo: R$ ' + d.y.toLocaleString('pt-BR') + '/mês';
                },
              },
            },
          },
          scales: {
            x: {
              min: 0,
              max: 100,
              title: { display: true, text: 'Porte do cliente (0=micro, 100=enterprise)', color: 'rgba(234,234,240,0.35)', font: { size: 11 } },
              grid: { color: 'rgba(234,234,240,0.04)' },
              ticks: { display: false },
            },
            y: {
              min: 0,
              max: 18000,
              title: { display: true, text: 'Custo mensal estimado (R$)', color: 'rgba(234,234,240,0.35)', font: { size: 11 } },
              grid: { color: 'rgba(234,234,240,0.04)' },
              ticks: { callback: function (v) { return 'R$ ' + (v / 1000).toFixed(0) + 'k'; } },
            },
          },
        },
      });
    }
  }

  initCharts();
})();
