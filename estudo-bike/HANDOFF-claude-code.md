# HANDOFF — Publicação do estudo de ciclismo no site D.Lab (Claude Code)

> Documento de contexto para o Claude Code integrar o estudo "Quem morre pedalando no Brasil" ao site Astro do D.Lab (dlabexperts.com) e servir de molde para futuras publicações de estudos.

---

## 0. O que você recebeu neste bundle

| Arquivo | O que é | Uso |
|---|---|---|
| `estudo-ciclismo-brasil.md` | Estudo completo em markdown, com frontmatter | Fonte de conteúdo para a content collection do Astro |
| `estudo-ciclismo-brasil.html` | Mesma publicação, já renderizada no padrão visual do D.Lab, com gráficos em SVG inline e meta tags de citação | Referência de layout e fallback estático. NÃO precisa de imagens externas |
| `grafico_*.png` (7) | Versões em imagem dos gráficos (matplotlib, padrão de marca) | OG image, redes sociais, ou alternativa aos SVGs inline |
| `*.csv` e `componente_*.py` | Dados e scripts reproduzíveis | Página de método/replicação e auditoria |

A página HTML é **autônoma**: os gráficos estão em SVG e CSS inline, então ela funciona sem nenhuma imagem. Os PNGs são extras (sociais/OG).

---

## 1. Contexto do projeto

- **Site:** dlabexperts.com, construído em **Astro**, idioma **pt-BR**.
- **D.Lab Experts:** laboratório de inteligência de decisão (Decision Intelligence Research). Posicionamento: não é consultoria, é pesquisa aplicada.
- **Este estudo:** pesquisa independente de **dados secundários**, em parceria com o **Instituto Movimento Pedal Seguro (IMPS)**. Acesso aberto, sem submissão a periódico, sem DOI. Os estudos vivem só no site do D.Lab.
- **Rota sugerida:** `/estudos/ciclismo-brasil`.

---

## 2. Onde colocar os arquivos (estrutura Astro sugerida)

```
src/
  content/
    estudos/
      ciclismo-brasil.md         <- conteúdo (este .md), ajustar caminhos de imagem
  pages/
    estudos/
      [slug].astro               <- template que renderiza a collection (se já existir, reutilize)
  components/
    CitationBlock.astro          <- bloco de citação ABNT/APA (criar, ver seção 6)
public/
  img/estudos/ciclismo-brasil/
    grafico_obitos_ciclistas_BR.png
    grafico_validacao_cruzada.png
    grafico_piramide_gravidade.png
    grafico_urbano_vs_esportivo.png
    grafico_venn_metodo.png
    grafico_mapa_confianca.png
    og.png                       <- gerar imagem OG (ver seção 7)
```

No `.md`, os caminhos de imagem estão como `./img/...`. Ajuste para o caminho público real, por exemplo `/img/estudos/ciclismo-brasil/...`. Se o template usar SVG inline (recomendado, copie do `.html`), as imagens viram opcionais.

---

## 3. Tokens de marca (usar exatamente)

```css
:root {
  --bg: #0B0B0F;          /* fundo principal */
  --surface: #1A1A22;     /* cards */
  --surface2: #22222C;    /* elevação 2 */
  --text: #EAEAF0;        /* texto principal */
  --muted: rgba(234,234,240,0.55);
  --lilac: #B18CFF;       /* primária, acentos, CTA */
  --blue: #4DA3FF;        /* secundária */
  --border: rgba(234,234,240,0.08);
  --border-strong: rgba(234,234,240,0.14);
  --green: #3ECF8E; --red: #FF5F5F; --amber: #F5A623;
}
```

- **Fonte:** Satoshi (via Fontshare). Mono: DM Mono. Títulos 700, `letter-spacing: -0.03em`. Corpo 400, `line-height: 1.75`.
- **Tom visual:** dark, denso, técnico. Glow lilás sutil. Sem valores/preços visíveis.
- **Regra de copy:** **sem travessões (em dash)**. Usar vírgula, dois-pontos ou parênteses.

---

## 4. Frontmatter (schema da content collection)

O `.md` já traz este frontmatter. Se a collection do Astro tiver um schema Zod, alinhe a estes campos:

```yaml
title: string
subtitle: string
description: string          # usado na meta description e OG
authors: string[]
date: date                   # ISO
type: string                 # "Estudo de dados secundários"
tags: string[]
lang: "pt-BR"
canonical: url
```

---

## 5. SEO e GEO (otimização para busca e para IA)

- `<title>` e `<meta name="description">` já no HTML. Mantenha a description em torno de 155 caracteres, com os números-âncora (1.300 mortes/ano, +71%).
- `<link rel="canonical">` apontando para a URL final.
- **Open Graph** completo (title, description, type=article, url, image, locale=pt_BR).
- **JSON-LD** do tipo `Report` (já incluído no HTML). Considere também `Dataset` para os CSVs.
- Incluir a página no **sitemap.xml** e garantir `lang="pt-BR"` no `<html>`.
- Para GEO (citação por modelos de IA): manter a estrutura de pergunta-resposta clara, números com fonte explícita e a seção "Como citar" visível.

---

## 6. Citação acadêmica

- **Meta tags Google Scholar / Highwire** já no `<head>` do HTML (`citation_title`, `citation_author` ×2, `citation_publication_date`, `citation_public_url`, `citation_language`). Replicar no template Astro.
- Criar **`CitationBlock.astro`** que recebe `title`, `authors`, `year`, `url` e renderiza ABNT e APA dinamicamente. O bloco de exemplo (texto pronto) está no fim do `.md` e do `.html`.
- Perfil Google Scholar do D.Lab: `h-4I42oAAAAJ` (para vincular, se aplicável).

---

## 7. Imagem OG (social)

Gerar `og.png` (1200×630) com fundo `#0B0B0F`, logo D.Lab, título do estudo e o número-âncora "~1.300 mortes/ano". Pode-se reaproveitar o `grafico_piramide_gravidade.png` como base ou compor um card novo no padrão de marca.

---

## 8. Restrições de conteúdo (não violar)

- **Sem travessões (em dash)** em nenhum texto.
- **Sem preços** e **sem prazos de entrega** (nunca usar "72 horas").
- Manter a **escala de confiança** (alta / média-alta / média) e a seção de **limitações**. A honestidade metodológica é parte do produto.
- Manter a nota de **tema sensível** (mortes e lesões) e a de **transparência / conflito de interesse**.
- É um estudo de **dados secundários**. Não descrever como survey nem como pesquisa primária.
- Não somar indicadores de fontes diferentes (SIM, SIH, atropelamento) sem a ressalva de definição.

---

## 9. Reprodutibilidade (opcional, recomendado)

Considerar uma página ou seção "Método e dados" linkando os scripts e CSVs:

- `componente_b_analise.py` (mortalidade e gráfico de série)
- `componente_c_estimativa.py` (urbano vs esportivo)
- `componente_d_confiabilidade.py` (reconciliação, validação cruzada, taxas)
- `componente_e_metodo_split.py` (armadilha da sobreposição)
- `componente_f_fontes.py` (hierarquia de fontes)
- `componente_g_dossie.py` (dossiê e auditoria 7/7)
- `extracao_datasus_ciclistas.py` (pipeline para microdados, rodar fora do site)
- CSVs: `serie_obitos_ciclistas_BR.csv`, `estimativa_urbano_vs_esportivo.csv`, `reconciliacao_indicadores.csv`, `registro_de_fontes.csv`, `dossie_achados.csv`

---

## 10. Checklist para o Claude Code

- [ ] Criar `src/content/estudos/ciclismo-brasil.md` a partir do `.md` fornecido.
- [ ] Ajustar caminhos de imagem para `/img/estudos/ciclismo-brasil/` OU portar os SVGs inline do `.html`.
- [ ] Colocar os 6 PNGs em `public/img/estudos/ciclismo-brasil/`.
- [ ] Garantir que o template `[slug].astro` aplique os tokens de marca e a fonte Satoshi.
- [ ] Adicionar as meta tags de citação e o JSON-LD ao `<head>`.
- [ ] Criar/usar `CitationBlock.astro` com ABNT e APA.
- [ ] Gerar e referenciar `og.png` (1200×630).
- [ ] Incluir a rota no sitemap e validar `lang="pt-BR"`.
- [ ] Revisar: nenhum travessão, nenhum preço, nenhum "72 horas", escala de confiança e limitações presentes.
- [ ] Validar JSON-LD (Rich Results Test) e a meta description (~155 caracteres).

---

## 11. Molde para futuros estudos

Este conjunto (md de conteúdo + html de referência + handoff) é o **template** das próximas publicações. Para um novo estudo, reutilizar a estrutura de seções (Resumo, Contexto, Achados, Confiabilidade, Implicações, Limitações, Referências, Como citar), os tokens de marca, as meta tags de citação e a escala de confiança.
