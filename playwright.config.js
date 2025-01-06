// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config({ path: path.resolve(__dirname, '.env') });

/**
 * 
 */
export default defineConfig({
  testDir: './tests', // Directory where your test files are located
  retries: 1, // Number of retries for failing tests
  timeout: 60000, // Increase global test timeout
  workers: 2,
  use: {
    headless: true, // Optional: Run tests in headless mode
    testDir: './tests', // Directory containing your tests
    baseURL: 'https://ultimateqa.com/automation', // Base URL for your tests
    viewport: { width: 1280, height: 720 }, // Set browser window size
    ignoreHTTPSErrors: true,
    screenshot: 'only-on-failure', // Take screenshots on failures
    video: 'retain-on-failure', // Record videos on failures
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

