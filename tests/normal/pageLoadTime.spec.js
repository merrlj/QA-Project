import { test, expect } from '@playwright/test';
import HomePage from '../pages/HomePage';

test('Home Page Load Performance', async ({ page }) => {
  const homePage = new HomePage(page);

  const start = Date.now();
  await homePage.visit();
  const loadTime = Date.now() - start;

  // Ensure the page loads in under 3.5 seconds
  expect(loadTime).toBeLessThan(3500);
});
