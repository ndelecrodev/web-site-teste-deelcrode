import { onIdle } from '@/lib/motion';

/*
 * As seções abaixo da dobra nascem com `content-visibility: auto` (atributo `data-cv`), para o
 * primeiro layout cobrir só o que está na tela. Na primeira interação elas são liberadas uma a
 * uma, em tarefas curtas de tempo ocioso, até a página ter as medidas reais; só então entram os
 * efeitos que dependem dessas medidas (ScrollTrigger, Lenis). Um clique em âncora libera tudo de
 * uma vez, para o destino da rolagem já estar no lugar certo.
 */
const root = document.documentElement;
const isReleased = (): boolean => root.classList.contains('cv-off');

let pending: HTMLElement[] = [];

const flushLayout = (): void => {
  pending = [];
  root.classList.add('cv-off');
};

/** Libera as seções aos poucos e chama `done` quando o layout inteiro estiver medido. */
export const releaseLayout = (done: () => void): void => {
  if (isReleased()) {
    done();
    return;
  }
  pending = [...document.querySelectorAll<HTMLElement>('[data-cv]')];
  const next = (): void => {
    const section = pending.shift();
    if (!section) {
      root.classList.add('cv-off');
      done();
      return;
    }
    section.removeAttribute('data-cv');
    onIdle(next);
  };
  onIdle(next);
};

export const initAnchorFlush = (): void => {
  document.addEventListener(
    'click',
    (event) => {
      if (isReleased() || !(event.target instanceof Element)) return;
      if (event.target.closest('a[href^="#"]')) flushLayout();
    },
    { capture: true },
  );
};
