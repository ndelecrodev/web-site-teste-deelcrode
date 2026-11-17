import { expect, test, type Page } from '@playwright/test';

const EMAIL = ['nicolas17delecrodepf', 'gmail.com'].join('@');

const trackErrors = (page: Page): string[] => {
  const errors: string[] = [];
  page.on('console', (message) => {
    if (message.type() === 'error') errors.push(message.text());
  });
  page.on('pageerror', (error) => errors.push(error.message));
  return errors;
};

test.beforeEach(async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
});

test('página em português carrega sem erros de console', async ({ page }) => {
  const errors = trackErrors(page);
  await page.goto('/');
  await expect(page.locator('html')).toHaveAttribute('lang', 'pt-BR');
  await expect(page).toHaveTitle('Nicolas Zampieri');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(/Nicolas\s+Delecrode\s+Zampieri/);
  await expect(page.getByRole('heading', { level: 1 })).toHaveCount(1);
  await expect(page.getByRole('link', { name: 'Ver projetos' })).toBeVisible();
  expect(errors).toEqual([]);
});

test('página em inglês carrega sem erros de console', async ({ page }) => {
  const errors = trackErrors(page);
  await page.goto('/en/');
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await expect(page.getByRole('link', { name: 'View projects' })).toBeVisible();
  await expect(page.getByRole('heading', { level: 2, name: 'Projects' })).toBeVisible();
  expect(errors).toEqual([]);
});

test('seletor de idioma troca a rota e guarda a escolha', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('banner').getByRole('link', { name: 'English' }).click();
  await expect(page).toHaveURL(/\/en\/(#.*)?$/);
  expect(await page.evaluate(() => localStorage.getItem('lang'))).toBe('en');
});

test('filtro de projetos mostra só a categoria escolhida', async ({ page }) => {
  await page.goto('/');
  const cards = page.locator('[data-card]');
  await expect(cards).toHaveCount(5);

  await page.getByRole('button', { name: 'Java', exact: true }).click();
  await expect(cards.filter({ visible: true })).toHaveCount(1);
  await expect(cards.filter({ visible: true })).toContainText('Quimia, painel administrativo');
  await expect(page.locator('[data-projects-count]')).toHaveText('1 projeto');
  await expect(page.getByRole('button', { name: 'Java', exact: true })).toHaveAttribute(
    'aria-pressed',
    'true',
  );

  await page.getByRole('button', { name: 'Todos' }).click();
  await expect(cards.filter({ visible: true })).toHaveCount(5);
});

test('botão copia o e-mail e confirma', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Copiar e-mail' }).click();
  await expect(page.locator('[data-toast]')).toHaveText('E-mail copiado');
  expect(await page.evaluate(() => navigator.clipboard.readText())).toBe(EMAIL);
});

test('e-mail não aparece inteiro no HTML servido', async ({ request }) => {
  const html = await (await request.get('/')).text();
  expect(html).not.toContain(EMAIL);
});

test('estudo de caso abre a partir do card', async ({ page }) => {
  const errors = trackErrors(page);
  await page.goto('/');
  await page.getByRole('link', { name: 'Ler estudo de caso: Task Time Sync' }).click();
  await expect(page).toHaveURL(/\/cases\/task-time-sync\/$/);
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Task Time Sync');
  expect(errors).toEqual([]);
});
