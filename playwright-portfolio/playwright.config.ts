import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  timeout: 30_000,
  expect: { timeout: 5000 },
  reporter: [['list'], ['html', { outputFolder: 'playwright-report' }]],
  projects: [
    {
      name: 'rahulshetty',
      testDir: 'rahulshetty/tests',
      use: {
        baseURL: 'https://automationexercise.com',
        headless: true,
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        trace: 'retain-on-failure',
        ...devices['Desktop Chrome'],
      },
    },
    {
      name: 'demo-site',
      testDir: 'demo-site',
      use: {
        baseURL: 'https://padraic79.github.io/AutomationProjects/', // GitHub Pages URL for demo site
        headless: true,
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        trace: 'retain-on-failure',
        ...devices['Desktop Chrome'],
      },
    },
    {
      name: 'personal-site',
      testDir: 'personal-site/tests',
      use: {
        baseURL: 'https://padraic79.github.io/AutomationProjects/',
        headless: true,
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        trace: 'retain-on-failure',
        ...devices['Desktop Chrome'],
      },
    },
  ],
});
