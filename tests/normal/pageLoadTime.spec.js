import { test, expect } from '@playwright/test';
import HomePage from '../pages/HomePage';

test('Home Page Load Performance', async ({ page }) => {
  const homePage = new HomePage(page);
  const startTime = Date.now();
  const maxLoadTime = 5000; 

  await homePage.visit();

  const loadTime = Date.now() - startTime;

  expect(loadTime).toBeLessThan(maxLoadTime);
});
