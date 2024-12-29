import { test, expect } from '@playwright/test';
import HomePage from '../pages/HomePage';

test('Home Page Load Performance', async ({ page }) => {
  // Declare variables first
  const homePage = new HomePage(page);
  const startTime = Date.now();
  const maxLoadTime = 3500; // Max allowed load time in milliseconds

  // Navigate to the homepage
  await homePage.visit();

  // Calculate the load time
  const loadTime = Date.now() - startTime;

  // Ensure the page loads in under the specified time
  expect(loadTime).toBeLessThan(maxLoadTime);
});
