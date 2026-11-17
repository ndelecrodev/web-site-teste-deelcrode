# Design system

Conceito: **engenharia de precisão**. Grid visível, índices numerados, réguas e coordenadas usados com parcimônia; tipografia grande fazendo o papel de imagem; um único acento.

Os tokens vivem em `src/styles/global.css` (`:root` e `@theme`). Os tokens de motion têm espelho em `src/lib/motion.ts`.

## Cor

Cada token é declarado uma vez com `light-dark(claro, escuro)`. O tema segue `prefers-color-scheme` e pode ser fixado por `data-theme` no `<html>`.

| Token                   | Uso                                 | Claro (OKLCH)    | Escuro (OKLCH)    |
| ----------------------- | ----------------------------------- | ---------------- | ----------------- |
| `--n-1` / `bg`          | fundo da página                     | `0.972 0.008 85` | `0.165 0.006 260` |
| `--n-2` / `surface`     | cards, faixas                       | `0.95 0.009 85`  | `0.195 0.007 260` |
| `--n-3` / `surface-2`   | hover de superfícies                | `0.925 0.01 85`  | `0.225 0.008 260` |
| `--n-4` / `line`        | linhas finas, bordas                | `0.875 0.011 85` | `0.275 0.009 260` |
| `--n-5` / `line-strong` | bordas de controles, réguas         | `0.78 0.012 85`  | `0.36 0.01 260`   |
| `--n-6` / `faint`       | só decoração (nunca texto)          | `0.62 0.012 85`  | `0.5 0.01 260`    |
| `--n-7` / `muted`       | metadados, rótulos mono             | `0.47 0.012 85`  | `0.68 0.01 260`   |
| `--n-8` / `soft`        | corpo de texto secundário           | `0.38 0.012 85`  | `0.78 0.008 260`  |
| `--n-9` / `fg`          | corpo de texto                      | `0.24 0.012 85`  | `0.9 0.006 260`   |
| `--n-10` / `strong`     | títulos                             | `0.16 0.012 85`  | `0.97 0.004 260`  |
| `--accent`              | preenchimento de ação e dados-chave | `0.7 0.19 42`    | `0.7 0.19 42`     |
| `--accent-text`         | acento usado como texto             | `0.5 0.17 38`    | `0.76 0.16 48`    |
| `--accent-ink`          | texto sobre o acento                | `0.17 0.03 45`   | `0.17 0.03 45`    |
| `--ok`                  | status "aberto" e "ok" do terminal  | `0.48 0.13 155`  | `0.8 0.17 155`    |

O acento é um vermelhão-laranja (≈ `#fb6c2b`): a cor do lápis de marcação em desenho técnico. Aparece só em ação, foco e dados-chave.

### Contraste medido (WCAG 2.x)

| Par                           | Claro  | Escuro | Nível |
| ----------------------------- | ------ | ------ | ----- |
| `fg` sobre `bg`               | 15.2:1 | 14.3:1 | AAA   |
| `soft` sobre `surface`        | 8.7:1  | 9.1:1  | AAA   |
| `muted` sobre `surface-2`     | 5.5:1  | 5.9:1  | AA    |
| `accent-text` sobre `surface` | 5.6:1  | 8.0:1  | AA    |
| `accent-ink` sobre `accent`   | 6.7:1  | 6.7:1  | AA    |

## Tipografia

| Papel   | Fonte                                    | Uso                                          |
| ------- | ---------------------------------------- | -------------------------------------------- |
| Display | Bricolage Grotesque Variable (200 a 800) | títulos e corpo de texto                     |
| Mono    | JetBrains Mono Variable                  | metadados, índices, botões, terminal, código |

Auto-hospedadas via Fontsource, subset latino, `font-display: swap`, com preload.

| Token       | Valor                        | Uso                       |
| ----------- | ---------------------------- | ------------------------- |
| `--step--1` | `clamp(0.75rem … 0.8125rem)` | rótulos mono              |
| `--step-0`  | `clamp(1rem … 1.125rem)`     | corpo                     |
| `--step-1`  | `clamp(1.15rem … 1.45rem)`   | lead, intro de seção      |
| `--step-2`  | `clamp(1.45rem … 2.2rem)`    | headline, títulos de card |
| `--step-3`  | `clamp(1.9rem … 3.4rem)`     | títulos de destaque       |
| `--step-4`  | `clamp(2.6rem … 6.25rem)`    | títulos de seção, números |
| hero        | `clamp(3.4rem … 11.5rem)`    | nome no hero              |

Tracking fecha conforme o tamanho cresce (de `-0.02em` a `-0.06em`); entrelinha vai de `1.6` no corpo a `0.86` no hero.

## Espaço, grid e forma

| Token            | Valor                                         |
| ---------------- | --------------------------------------------- |
| Base             | 4 px (escala do Tailwind, múltiplos de 4 e 8) |
| `--gutter`       | `clamp(1.25rem … 3.5rem)`                     |
| `--container`    | `90rem`                                       |
| `--section-y`    | `clamp(4.5rem … 8.5rem)`                      |
| Grid             | 4 colunas até 1023 px, 12 a partir de 1024 px |
| `--radius-sm`    | 4 px (botões, tags)                           |
| `--radius-md`    | 8 px (terminal, previews)                     |
| `--radius-lg`    | 14 px (cards)                                 |
| `--shadow-raise` | uma sombra só, para o terminal                |

## Motion

| Token           | CSS / JS                                     | Uso                      |
| --------------- | -------------------------------------------- | ------------------------ |
| `--dur-micro`   | 150 ms / `duration.micro`                    | hover, clique, foco      |
| `--dur-base`    | 400 ms / `duration.base`                     | transições de componente |
| `--dur-section` | 850 ms / `duration.section`                  | entrada de seção         |
| `--ease-out`    | `cubic-bezier(.22,1,.36,1)` / `power3.out`   | padrão                   |
| `--ease-expo`   | `cubic-bezier(.16,1,.3,1)` / `expo.out`      | máscaras de texto, FLIP  |
| `--ease-in-out` | `cubic-bezier(.65,0,.35,1)` / `power2.inOut` | preloader, menu, tema    |
| limites         | parallax 10%, tilt 4°, magnético 0.28        | `limits` em `motion.ts`  |

Regras: animar só `transform` e `opacity` (e `clip-path` nas revelações); estados iniciais ocultos só existem com a classe `motion` no `<html>`, adicionada por JS; `prefers-reduced-motion` desliga smooth scroll, parallax, tilt, marquee e loops; loops pausam fora da viewport e com a aba oculta.
