import { watchVisibility } from '@/lib/motion';

const STEP_MS = 620;
const HOLD_MS = 4200;
const FIRST_RUN_MS = 2600;

/** Reexecuta em loop as 7 etapas do Task Time Sync no terminal do hero. Pausa fora da tela e com a aba oculta. */
export const initTerminal = (): void => {
  const root = document.querySelector<HTMLElement>('[data-terminal]');
  const bar = root?.querySelector<HTMLElement>('[data-terminal-bar]');
  const steps = [...(root?.querySelectorAll<HTMLElement>('[data-step]') ?? [])];
  if (!root || !bar || steps.length === 0) return;

  let index = steps.length;
  let timer: ReturnType<typeof setTimeout> | undefined;
  let pending: (() => void) | undefined;
  let inView = false;

  const setState = (step: HTMLElement | undefined, state: 'wait' | 'run' | 'done'): void => {
    if (step) step.dataset['state'] = state;
  };
  const setBar = (done: number): void => bar.style.setProperty('--bar', String(done / steps.length));

  const schedule = (task: () => void, delay: number): void => {
    pending = task;
    clearTimeout(timer);
    if (inView && !document.hidden) timer = setTimeout(task, delay);
  };

  const advance = (): void => {
    setState(steps[index], 'done');
    index += 1;
    setBar(index);
    if (index < steps.length) {
      setState(steps[index], 'run');
      schedule(advance, STEP_MS);
    } else {
      root.classList.remove('is-running');
      schedule(restart, HOLD_MS);
    }
  };

  const restart = (): void => {
    steps.forEach((step) => setState(step, 'wait'));
    root.classList.add('is-running');
    index = 0;
    setBar(0);
    setState(steps[0], 'run');
    schedule(advance, STEP_MS);
  };

  const resume = (): void => {
    if (pending) schedule(pending, STEP_MS);
  };

  pending = restart;
  watchVisibility(root, (visible) => {
    inView = visible;
    if (visible) schedule(pending ?? restart, index === steps.length ? FIRST_RUN_MS : STEP_MS);
    else clearTimeout(timer);
  });
  document.addEventListener('visibilitychange', () => (document.hidden ? clearTimeout(timer) : resume()));
};
