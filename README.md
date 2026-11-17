# nicolasdelecrode.dev

Portfólio de Nicolas Delecrode Zampieri, desenvolvedor backend. Site estático em Astro, em português (`/`) e inglês (`/en/`), com tema escuro e claro.

## Como rodar

Requer Node.js 20.3 ou mais novo (o CI usa o 22).

```bash
npm install
npm run dev        # http://localhost:4321
```

| Comando            | O que faz                                                    |
| ------------------ | ------------------------------------------------------------ |
| `npm run dev`      | servidor de desenvolvimento                                  |
| `npm run build`    | gera o site em `dist/` (HTML, imagens, OG, sitemap, headers) |
| `npm run preview`  | serve o `dist/` localmente                                   |
| `npm run check`    | typecheck de `.astro` e `.ts`                                |
| `npm run lint`     | ESLint + verificação do Prettier                             |
| `npm run format`   | aplica o Prettier                                            |
| `npm test`         | testes unitários (Vitest): i18n, filtros e dados             |
| `npm run test:e2e` | smoke tests (Playwright) contra o `preview`                  |

Para os smoke tests, rode `npm run build` antes. Na primeira vez, instale o navegador com `npx playwright install chromium`, ou use um já instalado: `PW_CHANNEL=chrome npm run test:e2e` (`msedge` também serve).

Para auditar: `npm run build && npm run preview` e, em outro terminal, `npx lighthouse http://localhost:4321/ --view`.

## Como editar o conteúdo

Todo o conteúdo fica separado da apresentação. Nenhum fato, número ou link deve existir fora destes arquivos.

| Arquivo                  | Conteúdo                                                                |
| ------------------------ | ----------------------------------------------------------------------- |
| `src/i18n/pt.ts`         | todos os textos em português (é ele que define o formato do dicionário) |
| `src/i18n/en.ts`         | os mesmos textos em inglês; o TypeScript acusa chave faltando           |
| `src/data/site.ts`       | nome, GitHub, LinkedIn, e-mail, caminhos do CV                          |
| `src/data/projects.ts`   | projetos: categorias do filtro, stack, destaque, repositório, demo      |
| `src/data/cases.ts`      | estudos de caso: stack, links, diagrama e print                         |
| `src/data/skills.ts`     | grupos de habilidades e a faixa de tecnologias                          |
| `src/data/tech.ts`       | tecnologias e seus ícones                                               |
| `src/data/experience.ts` | entradas da timeline                                                    |
| `src/data/proofs.ts`     | números da faixa de provas                                              |
| `public/assets/cv.pdf`   | currículo em português (`cv-en.pdf` é a versão em inglês)               |

Para adicionar um projeto: inclua o item em `src/data/projects.ts` e o texto correspondente em `projects.items` nos dois dicionários. Os testes unitários conferem se os idiomas têm as mesmas chaves e se todo estudo de caso linkado existe.

## Estrutura

```
src/
  pages/        rotas: /, /en/, /cases/[slug]/, /en/cases/[slug]/, 404, og-*.png, sitemap.xml
  layouts/      Base.astro (head, SEO, fontes, tema, cabeçalho, rodapé)
  components/   primitivos (Button, Tag, Section, Reveal, Marquee) e seções
  data/         conteúdo estruturado
  i18n/         dicionários e helpers de rota
  lib/          motion.ts (tokens de animação), filter.ts, inline.ts, brand-image.ts
  scripts/      core/ (carrega sempre) e enhance/ (GSAP, Lenis e ponteiro, sob demanda)
  styles/       global.css (tokens) e components.css
integrations/   csp-headers.mjs: grava os hashes da CSP em dist/_headers
public/         _headers, _redirects, robots.txt, favicon, CV
tests/          unit/ (Vitest) e e2e/ (Playwright)
docs/           design-system.md e decisions.md
```

## Publicar no Cloudflare Pages

1. Crie um projeto em **Workers & Pages → Create → Pages** e conecte o repositório.
2. Build command: `npm run build`. Output directory: `dist`. Variável de ambiente `NODE_VERSION=22`.
3. Em **Custom domains**, aponte `nicolasdelecrode.dev` para o projeto.

O Cloudflare Pages lê `dist/_headers` (CSP, cache e cabeçalhos de segurança), `dist/_redirects` (URLs do site antigo) e serve `dist/404.html` para rotas inexistentes. Sem repositório conectado, dá para publicar direto: `npm run build && npx wrangler pages deploy dist`.

## Publicar no GitHub Pages (subcaminho)

O site também roda num subcaminho, como `usuario.github.io/repositorio/`. O build lê três variáveis:

| Variável         | Exemplo                         | Efeito                                           |
| ---------------- | ------------------------------- | ------------------------------------------------ |
| `SITE_URL`       | `https://ndelecrodev.github.io` | origem usada em canonical, OG e sitemap          |
| `BASE_PATH`      | `/web-site-teste-deelcrode`     | prefixo de todos os links e arquivos             |
| `PUBLIC_NOINDEX` | `true`                          | marca as páginas como `noindex` (cópia de teste) |

Sem essas variáveis o build sai para a raiz de `nicolasdelecrode.dev`. A cópia de teste é publicada enviando o conteúdo de `dist/` para a branch `gh-pages`. No GitHub Pages os arquivos `_headers` e `_redirects` não têm efeito.

## Dependências

| Pacote                                                             | Por que está aqui                                             |
| ------------------------------------------------------------------ | ------------------------------------------------------------- |
| `astro`                                                            | gerador do site estático                                      |
| `tailwindcss`, `@tailwindcss/vite`                                 | reset, utilitários e tokens em `@theme`                       |
| `gsap`                                                             | ScrollTrigger (parallax, timeline) e efeitos de ponteiro      |
| `lenis`                                                            | smooth scroll em desktop                                      |
| `@fontsource-variable/bricolage-grotesque`                         | fonte de títulos e texto, auto-hospedada                      |
| `@fontsource-variable/jetbrains-mono`                              | fonte monoespaçada, auto-hospedada                            |
| `@fontsource/*` (estáticas)                                        | arquivos `.woff` que o `satori` usa para desenhar a imagem OG |
| `satori`, `sharp`                                                  | geram OG e ícones PNG no build; `sharp` otimiza as imagens    |
| `simple-icons`                                                     | caminhos SVG dos ícones de tecnologia (só no build)           |
| `typescript`, `@astrojs/check`                                     | typecheck estrito                                             |
| `eslint`, `@eslint/js`, `typescript-eslint`, `eslint-plugin-astro` | lint                                                          |
| `prettier`, `prettier-plugin-astro`                                | formatação                                                    |
| `vitest`                                                           | testes unitários                                              |
| `@playwright/test`                                                 | smoke tests no navegador                                      |

## Pendências

Itens que dependem do Nicolas. Nada aqui está quebrado no site: o que falta fica oculto.

- [ ] **LinkedIn.** O site antigo apontava para `linkedin.com/in/seu-usuario` (texto de exemplo). Preencha `LINKEDIN_URL` em `src/data/site.ts` com a URL real; enquanto estiver vazia, o botão não aparece e o perfil fica fora do JSON-LD.
- [ ] **Papel no Quimia.** O estudo de caso do painel administrativo não descreve o que o Nicolas implementou no projeto em equipe (pendência herdada do site antigo). Com uma ou duas frases, o texto entra em `cases.items['quimia-admin'].context` nos dois dicionários.
- [ ] **Conferir os PDFs do CV.** `public/assets/cv.pdf` e `cv-en.pdf` foram copiados do repositório antigo sem alteração. Vale confirmar que são as versões atuais.
- [ ] **Estimativa do Task Time Sync.** "Cerca de 2 horas por dia" aparece só no estudo de caso e escrito como estimativa. Se houver medição, atualize `cases.items['task-time-sync'].result`.
- [ ] **Domínio.** Ao publicar, mover o domínio do GitHub Pages para o Cloudflare Pages e conferir os redirecionamentos de `public/_redirects`.

Analytics está desligado de propósito. Se um dia fizer falta, use uma opção sem cookies (Cloudflare Web Analytics) e libere o domínio na CSP de `public/_headers`.
