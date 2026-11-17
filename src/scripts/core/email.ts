const DONE_MS = 2200;

const readAddress = (): string | undefined => {
  const source = document.querySelector<HTMLElement>('[data-email]');
  const { user, domain, tld } = source?.dataset ?? {};
  return user && domain && tld ? `${user}@${domain}.${tld}` : undefined;
};

const showToast = (message: string): void => {
  const toast = document.querySelector<HTMLElement>('[data-toast]');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('is-on');
  setTimeout(() => toast.classList.remove('is-on'), DONE_MS);
};

/** Monta o e-mail no cliente: preenche o `mailto:` do CTA e liga o botão "Copiar e-mail". */
export const initCopyEmail = (): void => {
  const address = readAddress();
  if (!address) return;

  document
    .querySelectorAll<HTMLAnchorElement>('[data-mailto]')
    .forEach((link) => (link.href = `mailto:${address}`));

  document.querySelectorAll<HTMLButtonElement>('[data-copy-email]').forEach((button) => {
    button.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(address);
        button.classList.add('is-done');
        showToast(button.dataset['copied'] ?? '');
        setTimeout(() => button.classList.remove('is-done'), DONE_MS);
      } catch {
        showToast(button.dataset['failed'] ?? '');
      }
    });
  });
};
