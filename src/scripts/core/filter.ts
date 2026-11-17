import { isFilterId, matchesFilter, parseCategories, type FilterId } from '@/lib/filter';
import { ease, prefersReducedMotion } from '@/lib/motion';

const MOVE = { duration: 550, easing: ease.cssExpo } as const;
const ENTER = { duration: 450, easing: ease.cssOut } as const;

/** Filtro de projetos com reordenação FLIP: mede antes, aplica, mede depois e anima a diferença. */
export const initFilter = (): void => {
  const root = document.querySelector<HTMLElement>('[data-projects]');
  if (!root) return;

  const cards = [...root.querySelectorAll<HTMLElement>('[data-card]')];
  const buttons = [...root.querySelectorAll<HTMLButtonElement>('[data-filter]')];
  const count = root.querySelector<HTMLElement>('[data-projects-count]');
  const empty = root.querySelector<HTMLElement>('[data-projects-empty]');

  const announce = (visible: number): void => {
    if (!count) return;
    const template = visible === 1 ? root.dataset['countOne'] : root.dataset['countMany'];
    count.textContent = (template ?? '{n}').replace('{n}', String(visible));
  };

  const apply = (filter: FilterId): void => {
    const animate = !prefersReducedMotion();
    const before = new Map(
      cards.map((card) => [card, card.hidden ? undefined : card.getBoundingClientRect()]),
    );

    let visible = 0;
    cards.forEach((card) => {
      const show = matchesFilter(parseCategories(card.dataset['cats']), filter);
      card.hidden = !show;
      if (show) {
        visible += 1;
        card.classList.add('is-in', 'is-done');
      }
    });
    buttons.forEach((button) =>
      button.setAttribute('aria-pressed', String(button.dataset['filter'] === filter)),
    );
    if (empty) empty.hidden = visible > 0;
    announce(visible);

    if (!animate) return;
    cards.forEach((card) => {
      if (card.hidden) return;
      const first = before.get(card);
      const last = card.getBoundingClientRect();
      if (!first) {
        card.animate(
          [
            { opacity: 0, transform: 'scale(0.96)' },
            { opacity: 1, transform: 'none' },
          ],
          ENTER,
        );
        return;
      }
      const dx = first.left - last.left;
      const dy = first.top - last.top;
      if (dx !== 0 || dy !== 0) {
        card.animate([{ transform: `translate(${dx}px, ${dy}px)` }, { transform: 'none' }], MOVE);
      }
    });
  };

  buttons.forEach((button) =>
    button.addEventListener('click', () => {
      const filter = button.dataset['filter'];
      if (isFilterId(filter)) apply(filter);
    }),
  );
};
