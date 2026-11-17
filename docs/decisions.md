# Decisões

Uma linha por decisão reversível tomada durante a construção.

- **Fonte do conteúdo:** o repositório `curriculum_website` é o que publica nicolasdelecrode.dev (tem o `CNAME`), então textos e links vieram dele; nada foi inventado.
- **Estudos de caso portados:** as três páginas de `casos/` viraram rotas do site novo (`/cases/<slug>/` e `/en/cases/<slug>/`), porque o site novo substitui o antigo no mesmo domínio e os links quebrariam.
- **Mesmo segmento `/cases/` nos dois idiomas:** simplifica `hreflang`, sitemap e a troca de idioma; as URLs antigas (`/casos/*.html`) redirecionam em `public/_redirects`.
- **Rótulos "Problema / Solução / Qualidade" nos cards:** "Solução" em vez de "O que construí" porque três dos cinco projetos são em equipe e o papel individual no Quimia ainda não está confirmado.
- **Acento vermelhão-laranja:** foge de azul e roxo, remete a marcação de desenho técnico e mantém contraste AA nos dois temas.
- **Uma família para títulos e corpo (Bricolage Grotesque) + JetBrains Mono:** duas fontes, dois arquivos; o contraste vem de peso e tamanho, não de uma terceira família.
- **Tema com `light-dark()`:** cada cor é declarada uma vez; sem JS o site segue o tema do sistema.
- **Animações de entrada em CSS, GSAP sob demanda:** revelações, máscaras de texto e contadores usam IntersectionObserver + CSS; GSAP, ScrollTrigger e Lenis só carregam no primeiro gesto de rolagem, e os efeitos de mouse no primeiro movimento.
- **Títulos divididos em palavras no build:** `SplitText.astro` gera os spans no servidor, sem custo de runtime nem dependência de plugin.
- **Filtro com FLIP via Web Animations API:** a reordenação não precisa do GSAP, então funciona antes de ele carregar.
- **Troca de idioma com View Transitions nativas entre documentos:** cross-fade sem roteador no cliente; navegadores sem suporte fazem a navegação normal.
- **Troca de tema com `document.startViewTransition`:** revelação circular a partir do botão; sem suporte, a troca é imediata.
- **`content-visibility` progressivo:** seções fora da tela entram no layout em tarefas ociosas depois do load, o que tirou o bloqueio da thread principal no carregamento (`src/scripts/core/layout.ts`).
- **Preloader só em CSS:** 1,15 s no máximo, uma vez por sessão, pulável com clique ou tecla, e some sozinho mesmo se o JS falhar.
- **Ícones em sprite SVG local:** os caminhos do `simple-icons` entram uma vez por página (`TechSprite.astro`) e são referenciados com `<use>`; Java usa o ícone do OpenJDK, e tecnologias sem ícone ficam só com o nome.
- **Sem cor de marca muito escura no hover:** marcas quase pretas (GitHub, Django, Sentry) usam a cor de texto forte para não sumirem no tema escuro.
- **Diagramas dos estudos de caso:** os SVGs de arquitetura foram copiados e recoloridos para a paleta nova; o fluxo do Task Time Sync foi refeito como lista numerada em HTML.
- **CSP com hashes gerados no build:** `integrations/csp-headers.mjs` calcula o SHA-256 dos scripts inline e preenche `_headers`; `style-src` mantém `'unsafe-inline'` porque o CSS crítico vai inline e há variáveis em atributos `style`.
- **E-mail em partes:** o endereço nunca aparece inteiro no HTML; o cliente monta o `mailto:` e o texto copiado.
- **Preferência de idioma:** quem escolheu um idioma e volta por um link externo é levado à versão escolhida; navegação interna nunca é redirecionada.
- **Sitemap próprio (`src/pages/sitemap.xml.ts`):** dez linhas resolvem `sitemap.xml` com alternates, sem mais uma dependência.
- **OG e ícones gerados no build:** `satori` + `sharp` desenham `og-pt.png`, `og-en.png` e os PNGs de favicon a partir dos mesmos tokens.
- **CV por idioma:** `/assets/cv.pdf` (português) e `/assets/cv-en.pdf` (inglês), copiados do repositório de referência.
- **Coordenadas no hero e no rodapé:** são as da cidade de São Paulo, usadas como detalhe gráfico.
- **Sem analytics:** nenhum script de terceiros; a nota de como ligar uma opção sem cookies está em `src/data/site.ts`.
- **Base configurável:** `src/lib/url.ts` prefixa links e URLs absolutas com `BASE_PATH`/`SITE_URL`, para o mesmo código publicar na raiz do domínio (Cloudflare Pages) ou num subcaminho (GitHub Pages).
