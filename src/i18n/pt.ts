/*
 * Headline do hero, opções avaliadas:
 *   1. "Construo APIs e integrações que não quebram em silêncio."  (escolhida)
 *   2. "Conecto sistemas com APIs testadas, observáveis e prontas para rodar todo dia."
 *   3. "Integro sistemas que rodam todo dia, com testes, CI e alertas."
 */
export const pt = {
  meta: {
    title: 'Nicolas Zampieri',
    titleSuffix: 'Desenvolvedor backend',
    description:
      'Nicolas Delecrode Zampieri, desenvolvedor backend em São Paulo. APIs e integrações entre sistemas em Python (FastAPI, Django) e Java (Spring Boot), com testes e CI desde o primeiro commit.',
    ogAlt: 'Nicolas Delecrode Zampieri, desenvolvedor de software com foco em backend',
    ogRole: 'Desenvolvedor backend · São Paulo, SP',
    ogTagline: 'APIs e integrações que não quebram em silêncio.',
  },
  a11y: {
    skip: 'Pular para o conteúdo',
    sections: 'Seções',
    home: 'Nicolas Zampieri, voltar ao início',
    theme: 'Alternar entre tema escuro e claro',
    language: 'Idioma',
    menuOpen: 'Abrir menu',
    menuClose: 'Fechar menu',
  },
  nav: {
    about: 'Sobre',
    skills: 'Habilidades',
    experience: 'Experiência',
    projects: 'Projetos',
    education: 'Formação',
    contact: 'Contato',
  },
  hero: {
    role: 'Desenvolvedor de software · Backend',
    status: 'Aberto a oportunidades',
    headline: 'Construo APIs e integrações que não quebram em silêncio.',
    lead: 'Trabalho com Python (FastAPI, Django) e Java (Spring Boot) integrando sistemas, com testes e CI desde o primeiro commit.',
    ctaProjects: 'Ver projetos',
    ctaCv: 'Baixar CV',
    cvNote: '(PDF, em português)',
    scroll: 'Role para ver',
    terminal: {
      aria: 'Ilustração: as 7 etapas de uma execução diária do Task Time Sync, todas concluídas.',
      title: 'task-time-sync',
      schedule: 'GitHub Actions · todo dia às 06:50',
      steps: [
        'Baixa a planilha do bucket',
        'Sincroniza funcionários no Postgres',
        'Coleta tarefas do Jira',
        'Coleta horas do Clockify',
        'Envia a planilha atualizada',
        'Alerta prazos em 8 canais do Teams',
        'Dispara o heartbeat',
      ],
      ok: 'ok',
      done: '7 de 7 etapas concluídas',
      note: 'Falhas vão para o Sentry. O heartbeat confirma o fim no Better Stack.',
    },
  },
  proofs: {
    title: 'Números dos projetos',
    items: {
      tests: { label: 'testes automatizados', source: 'Quimia, painel administrativo' },
      steps: { label: 'etapas em cada execução diária', source: 'Task Time Sync' },
      channels: { label: 'canais do Teams com alertas de prazo', source: 'Task Time Sync' },
      screens: { label: 'telas de CRUD com auditoria', source: 'Quimia, painel administrativo' },
      lockout: { label: 'falhas seguidas de login até o bloqueio', source: 'Quimia, painel administrativo' },
    },
  },
  about: {
    title: 'Sobre',
    lead: 'Sou desenvolvedor backend. Boa parte do que faço é integrar sistemas: consumir APIs REST, normalizar os dados e gravar em PostgreSQL, com testes e CI rodando desde o início.',
    body: [
      'No Task Time Sync, mantenho um pipeline que roda todos os dias e consolida Jira e Clockify em Excel e Postgres. As etapas são independentes: se o Jira sai do ar, a coleta do Clockify continua e o erro vai para o Sentry.',
      'O Quimia é um projeto em equipe da ExpoTech 2026, com painel administrativo em Java e site institucional. Estou aberto a conversas e oportunidades em diferentes áreas.',
    ],
    facts: [
      { key: 'Local', value: 'São Paulo, SP' },
      { key: 'Foco', value: 'Backend, APIs e integrações' },
      { key: 'Linguagens', value: 'Python, Java, SQL' },
      { key: 'Frameworks', value: 'FastAPI, Django, Spring Boot' },
      { key: 'Status', value: 'Aberto a oportunidades' },
    ],
  },
  skills: {
    title: 'Habilidades',
    intro: 'O que uso para construir, testar, entregar e monitorar.',
    marquee: 'Tecnologias em destaque',
    groups: {
      languages: 'Linguagens',
      backend: 'Back-end',
      data: 'Dados e integrações',
      quality: 'Qualidade e entrega',
      observability: 'Observabilidade',
      soft: 'Trabalho em equipe',
    },
    techLabels: { rest: 'APIs REST', github: 'Git e GitHub' } as Record<string, string>,
    soft: {
      communication: 'Comunicação',
      autonomy: 'Autonomia',
      feedback: 'Abertura a feedback',
      detail: 'Atenção a detalhes',
    },
  },
  experience: {
    title: 'Experiência',
    items: {
      quimia: {
        title: 'Quimia',
        org: 'ExpoTech 2026 · projeto em equipe',
        bullets: [
          'Painel administrativo em Java e Spring Boot, com auditoria de alterações, restauração de exclusões e mais de 160 testes automatizados.',
          'Site institucional responsivo e acessível, publicado em quimia.tech.',
          'Dashboard de tarefas e horas com login e controle de acesso por Row Level Security.',
        ],
      },
      tts: {
        title: 'Task Time Sync',
        org: 'Projeto próprio',
        bullets: [
          'Pipeline em Python com arquitetura em camadas, modelos Pydantic e upserts no Postgres.',
          'Etapas isoladas entre si, com falhas enviadas ao Sentry e heartbeat no Better Stack.',
          'CI com pylint, black e pytest, cobertura no Codecov e execução diária agendada no GitHub Actions.',
        ],
      },
    },
  },
  projects: {
    title: 'Projetos',
    intro: 'Cinco projetos, cada um com o problema, a solução e o que garante a qualidade.',
    filterAria: 'Filtrar projetos',
    filters: {
      all: 'Todos',
      python: 'Python',
      java: 'Java',
      frontend: 'Front-End',
      integrations: 'Integrações',
    },
    labels: {
      problem: 'Problema',
      solution: 'Solução',
      quality: 'Qualidade',
      stack: 'Stack',
      team: 'Projeto em equipe',
      solo: 'Projeto próprio',
    },
    links: { case: 'Ler estudo de caso', repo: 'Repositório', demo: 'Ver site' },
    countOne: '1 projeto',
    countMany: '{n} projetos',
    empty: 'Nenhum projeto nesta categoria por enquanto.',
    items: {
      tts: {
        title: 'Task Time Sync',
        kind: 'Pipeline de integração',
        problem: 'Tarefas no Jira e horas no Clockify ficavam em lugares separados.',
        solution:
          'Pipeline diário de 7 etapas no GitHub Actions que consolida tudo em Excel e Postgres e alerta prazos em 8 canais do Microsoft Teams.',
        quality:
          'Etapas isoladas, falhas enviadas ao Sentry e heartbeat no Better Stack. CI com pylint, black e pytest.',
      },
      'quimia-admin': {
        title: 'Quimia, painel administrativo',
        kind: 'Aplicação web',
        problem: 'Um painel que apaga e altera dados de verdade precisa ser seguro e reversível.',
        solution: 'CRUD com 11 telas, auditoria de alterações e restauração de exclusões.',
        quality: 'Bloqueio após 5 falhas seguidas de login e mais de 160 testes com JUnit 5.',
      },
      'quimia-dashboard': {
        title: 'Quimia Dashboard',
        kind: 'Dashboard estático',
        problem: 'O time precisava acompanhar tarefas e horas por colaborador sem expor os dados.',
        solution: 'Dashboard estático com login que consulta 8 tabelas e exporta CSV e XLSX.',
        quality:
          'Acesso controlado por Row Level Security. São 3 dependências de front-end e nenhuma etapa de build.',
      },
      'quimia-site': {
        title: 'Quimia, site institucional',
        kind: 'Site',
        problem: 'Apresentar o Quimia, app que ajuda a evitar misturas perigosas de produtos de limpeza.',
        solution: 'Site institucional publicado em quimia.tech.',
        quality: 'Layout responsivo de 360 a 1440 px, com atributos de acessibilidade.',
      },
      'tts-docs': {
        title: 'Task Time Sync, documentação',
        kind: 'Documentação',
        problem: 'Explicar como o pipeline e o dashboard funcionam e por que foram desenhados assim.',
        solution: 'Documentação bilíngue em MkDocs, com arquitetura e modelo de dados.',
        quality: 'Cada decisão de design vem acompanhada da sua justificativa.',
      },
    },
  },
  education: {
    title: 'Formação',
    items: [
      { title: 'Ensino Médio', detail: 'Instituto J&F, São Paulo, SP' },
      { title: 'GitHub Foundations', detail: 'DataCamp, 2026 (em andamento)' },
      { title: 'Python', detail: 'Instituto J&F, 2026' },
      { title: 'HTML e CSS', detail: 'IFFRS, 2026' },
    ],
  },
  contact: {
    title: 'Contato',
    big: 'Vamos conversar',
    text: 'Aberto a conversas e oportunidades em diferentes áreas. Me escreva por e-mail.',
    cta: 'Vamos conversar',
    ctaAria: 'Vamos conversar: escrever um e-mail para Nicolas',
    copy: 'Copiar e-mail',
    copied: 'E-mail copiado',
    copyFail: 'Não deu para copiar. Selecione o endereço acima.',
    cv: 'Baixar CV',
    emailLabel: 'E-mail',
  },
  footer: {
    rights: '© 2026 Nicolas Delecrode Zampieri',
    place: 'São Paulo, SP',
    top: 'Voltar ao topo',
  },
  notFound: {
    title: 'Página não encontrada',
    line: 'Esta rota não está no mapa.',
    text: 'O endereço pode ter mudado ou nunca ter existido. O resto do site continua no lugar.',
    cta: 'Voltar ao início',
  },
  cases: {
    back: 'Voltar aos projetos',
    eyebrow: 'Estudo de caso',
    stack: 'Stack',
    context: 'Contexto',
    problem: 'Problema',
    decisions: 'Decisões',
    result: 'Resultado',
    limits: 'Limitações e próximos passos',
    links: 'Links',
    linkKinds: { repo: 'Repositório', docs: 'Documentação', site: 'Site do projeto (quimia.tech)' },
    diagram: 'Arquitetura',
    items: {
      'task-time-sync': {
        title: 'Task Time Sync: do Jira e Clockify para uma planilha que o time usa',
        summary:
          'Pipeline diário que consolida tarefas e horas em Excel e Postgres e avisa o time no Teams sobre prazos.',
        context:
          'O time acompanhava tarefas no Jira e horas no Clockify, em lugares separados. A planilha Excel era o produto final que o time já usava, então o desafio era alimentá-la com dados confiáveis, todos os dias, sem trabalho manual.',
        problem:
          'Juntar duas APIs com identidades diferentes (o mesmo colaborador aparece com nomes distintos no Jira e no Clockify), manter a planilha e um banco relacional coerentes e avisar sobre prazos, sem que a falha de uma fonte derrubasse a execução inteira.',
        decisions: [
          {
            h: 'Excel é o produto.',
            t: 'As fórmulas e os indicadores ficam na planilha; o pipeline só atualiza as tabelas de dados. O mesmo dado é espelhado em Postgres, para consultas relacionais.',
          },
          {
            h: 'Uma fonte única para pessoas.',
            t: 'A aba de funcionários é a única origem editável de identidade, compartilhada pela planilha e pelo banco. Isso normaliza responsáveis do Jira e usuários do Clockify para um mesmo nome. E-mails repetidos vão para uma aba de duplicados removidos, em vez de sobrescrever dados.',
          },
          {
            h: 'Etapas isoladas.',
            t: 'Jira, Clockify e alertas rodam separados. Uma indisponibilidade do Jira não impede a coleta do Clockify. Falhas são registradas e enviadas ao Sentry.',
          },
          {
            h: 'Camadas com responsabilidade clara.',
            t: 'Os clients só falam HTTP; as regras ficam nos services; modelos Pydantic validam os dados.',
          },
          {
            h: 'Observabilidade barata.',
            t: 'Um heartbeat no Better Stack confirma que a execução chegou ao fim.',
          },
        ],
        extras: [
          {
            h: 'Como funciona (uma execução, 7 passos)',
            ordered: true,
            text: '',
            items: [
              'Baixa a planilha do bucket.',
              'Sincroniza funcionários no Postgres.',
              'Coleta tarefas do Jira.',
              'Coleta horas do Clockify.',
              'Envia a planilha atualizada de volta.',
              'Dispara alertas de prazo nos canais do Teams (8 webhooks, um por área).',
              'Dispara o heartbeat.',
            ],
          },
          {
            h: 'Entrega e qualidade',
            ordered: false,
            text: '',
            items: [
              'CI em todo push e pull request: pylint, verificação de formatação com black e pytest com cobertura enviada ao Codecov.',
              'Execução agendada todo dia às 06:50 (horário de Brasília) por workflow, com credenciais em secrets do repositório.',
              'Documentação própria, bilíngue, com arquitetura, modelo de dados e decisões de design.',
            ],
          },
        ],
        result:
          'Um fluxo diário e automático que entrega a planilha atualizada e os alertas de prazo, sem intervenção manual. Por estimativa, evita cerca de 2 horas por dia de digitação manual de informações.',
        limits:
          'O README não registra um percentual de cobertura de testes, e não há um script para obter o `WORKSPACE_ID` do Clockify (hoje ele vem da resposta da API). Dois pontos claros de melhoria.',
        diagramAlt: '',
        shotAlt: '',
        shotCaption: '',
      },
      'quimia-admin': {
        title: 'Quimia: painel administrativo com auditoria e restauração de exclusões',
        summary:
          'Painel em Spring Boot para gerenciar o Quimia, com login seguro, log de tudo que muda e desfazer exclusões.',
        context:
          'O Quimia ajuda pessoas a evitar misturas perigosas de produtos de limpeza, registrando estoque, usos, misturas e descartes. Empresas parceiras cadastram seus produtos e acompanham o uso. O painel administra usuários, empresas, produtos, prateleiras, históricos e descartes. Projeto em equipe, desenvolvido para a ExpoTech 2026.',
        problem:
          'Um painel que apaga e altera dados de verdade precisa ser seguro e reversível. Era preciso saber quem mudou o quê, conseguir desfazer uma exclusão com dependências em cascata e não abrir brechas em login, formulários e upload de fotos.',
        decisions: [
          {
            h: 'Auditoria completa.',
            t: 'Toda criação, edição e exclusão feita pela interface é registrada com o admin responsável e os dados anteriores. Senhas nunca entram no log.',
          },
          {
            h: 'Exclusão reversível.',
            t: 'Antes de apagar, o conjunto de linhas vai para o log em JSON. Isso permite restaurar com os IDs originais. Exclusão e restauração rodam em uma única transação: se um passo falha (por exemplo, e-mail já em uso), nada muda.',
          },
          {
            h: 'O banco é a fonte do esquema.',
            t: 'Com `ddl-auto=validate`, a aplicação só sobe se as entidades batem com o banco real.',
          },
          {
            h: 'CRUD genérico reaproveitado.',
            t: '`CrudService`, `GenericController` e `ListController` atendem as 11 telas; adicionar uma tela nova é preencher um roteiro conhecido (entidade, DTO, mapper, service, controller e template).',
          },
          {
            h: 'Segurança em camadas:',
            t: 'senhas com Argon2id; bloqueio de 15 minutos após 5 falhas seguidas de login; só admins com status ATIVO entram; CSRF ligado e logout só por POST; Content Security Policy restrita ao mesmo domínio; cookie de sessão HttpOnly e SameSite=Lax, com expiração de 30 minutos.',
          },
          {
            h: 'Upload de foto defensivo.',
            t: 'O tipo do arquivo é identificado pelos bytes, e não pela extensão; a imagem é recodificada (o que remove metadados e conteúdo escondido); o nome é aleatório; limite de 2 MB e 4096 px por lado.',
          },
          {
            h: 'Nomes de coluna em ações em massa vêm de uma lista permitida,',
            t: 'porque entram em SQL.',
          },
          {
            h: 'Painel rápido.',
            t: 'O dashboard lê uma view materializada em uma consulta só, atualizada a cada 2 horas por um workflow e sob demanda por um botão, e as proteções impedem um segundo clique durante a atualização.',
          },
        ],
        extras: [
          {
            h: 'Qualidade',
            ordered: false,
            text: 'Mais de 160 testes (JUnit 5, `@WebMvcTest`, `@SpringBootTest` e Spring Security Test) que rodam sem banco. Há testes que pegam desalinhamento entre telas e repositórios, e um teste opcional que apaga e restaura um registro de cada tipo no banco real, dentro de uma transação sempre revertida.',
            items: [],
          },
          {
            h: 'Processo da equipe',
            ordered: false,
            text: 'Branches a partir de `develop` com prefixos (`feat/`, `fix/`, `refactor/`, `test/`, `chore/`), Conventional Commits e pull request com revisão. Nada vai direto para a `main`.',
            items: [],
          },
        ],
        result:
          'Um painel com 11 telas, auditoria de ponta a ponta e exclusões reversíveis, coberto por mais de 160 testes automatizados.',
        limits:
          'O SQL da view materializada não está versionado em nenhum dos repositórios, e o contador de tentativas de login fica em memória. Ambos são melhorias claras.',
        diagramAlt:
          'Diagrama da arquitetura do painel administrativo Quimia: navegador, Spring Security, controllers, services, repositórios e PostgreSQL, com o GitHub Actions atualizando a view materializada a cada 2 horas.',
        shotAlt:
          'Tela inicial do painel administrativo Quimia, com atalhos de navegação, cartões de resumo de usuários, empresas, consultas e alertas, gráfico de atividade de uso e gráfico de consultas por tipo.',
        shotCaption: 'Tela do painel',
      },
      'quimia-dashboard': {
        title: 'Quimia Dashboard: acesso protegido no banco, sem servidor próprio',
        summary:
          'Dashboard estático que o navegador consulta direto no Postgres, com acesso controlado por Row Level Security.',
        context:
          'O time precisava ver tarefas e horas por pessoa e do projeto inteiro. Os dados já chegavam ao Postgres por um pipeline separado (o task-time-sync), então o painel podia ser somente de leitura.',
        problem:
          'Entregar um painel simples de hospedar (sem servidor, sem build) sem expor dados a quem não deveria ver, e ainda integrar com o Excel que o time usa.',
        decisions: [
          {
            h: 'Sem servidor e sem API intermediária.',
            t: 'O navegador fala direto com o Supabase (Auth por e-mail e senha e PostgREST). Agregações, gráficos e exportação rodam no navegador. São 3 dependências de frontend e nenhuma etapa de build.',
          },
          {
            h: 'Segurança no banco, não no site.',
            t: 'A chave pública do Supabase no código é pública por definição e sozinha não dá acesso. Políticas de Row Level Security liberam linhas só para quem está logado e cadastrado como funcionário; sessões anônimas e e-mails não cadastrados veem zero linhas.',
          },
          {
            h: 'Regras de negócio explícitas.',
            t: 'Tarefas com vários responsáveis aparecem na lista de cada pessoa e uma vez na tabela do projeto; subtarefas ficam recolhidas sob a tarefa pai, e a exportação é plana com uma coluna de tarefa pai; tarefas arquivadas ficam fora de tudo.',
          },
          {
            h: 'Exportação pensada para o Excel brasileiro.',
            t: 'CSV com `;` e BOM UTF-8, para abrir certo no Excel em português, e `.xlsx` de verdade.',
          },
          {
            h: 'Download protegido de planilhas.',
            t: 'Duas funções do Cloudflare Pages entregam a planilha de dados (lida pelo Excel via Power Query) e o dashboard `.xlsm`. As credenciais do armazenamento nunca chegam ao navegador. Cada pessoa gera uma chave pessoal (prefixo `qxl_`), mostrada uma única vez, que revoga a anterior; as funções devolvem 401 com o cabeçalho certo só quando o Excel precisa pedir credenciais, para o navegador não abrir uma caixa de login.',
          },
          {
            h: 'Registro de cadastros não autorizados',
            t: 'por um gatilho no banco, com e-mail e horário.',
          },
        ],
        extras: [],
        result:
          'Um painel hospedado de graça, sem servidor para manter, em que o controle de acesso mora no banco, e as planilhas chegam ao Excel por chaves pessoais revogáveis. Foram 8 tabelas consultadas e 5 migrações SQL.',
        limits:
          'Só uma das políticas de RLS está versionada em `sql/`; as demais foram aplicadas direto no editor do Supabase e precisam entrar no repositório. Também não há notificação automática para cadastros não autorizados.',
        diagramAlt:
          'Diagrama da arquitetura do Quimia Dashboard: o pipeline task-time-sync grava no Postgres com RLS, o Supabase serve o navegador, e funções do Cloudflare Pages entregam as planilhas do Backblaze B2 ao Excel.',
        shotAlt:
          'Tela do Quimia Dashboard com o progresso geral do projeto, gráfico de tarefas por área, status geral das tarefas, horas por funcionário e lista de tarefas mais urgentes. Nomes e fotos de pessoas estão borrados.',
        shotCaption: 'Tela do dashboard',
      },
    },
  },
};

export type Dictionary = typeof pt;
