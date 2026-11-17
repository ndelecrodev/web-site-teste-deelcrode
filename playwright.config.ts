import { defineConfig, devices } from '@playwright/test';

const channel = process.env['PW_CHANNEL'];

export default defineConfig({
  testDir: 'tests/e2e',
  fullyParallel: true,
  forbidOnly: Boolean(process.env['CI']),
  retries: process.env['CI'] ? 1 : 0,
  reporter: process.env['CI'] ? 'github' : 'list',
  use: { baseURL: 'http://localhost:4321', trace: 'on-first-retry' },
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        ...(channel ? { channel } : {}),
        permissions: ['clipboard-read', 'clipboard-write'],
      },
    },
  ],
  webServer: {
    command: 'npm run preview',
    url: 'http://localhost:4321',
    reuseExistingServer: !process.env['CI'],
    timeout: 60_000,
  },
});
