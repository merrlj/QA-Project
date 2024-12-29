import { test, expect } from '@playwright/test';
import HomePage from '../pages/HomePage';

test('Home Page Accessibility', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.visit();

  const isHeaderVisible = await homePage.isHeaderVisible();
  expect(isHeaderVisible).toBeTruthy();

  const navLinksCount = await homePage.getNavLinksCount();
  expect(navLinksCount).toBeGreaterThan(0);  

  const isFirstNavLinkVisible = await homePage.isNavLinkVisible(0);
  expect(isFirstNavLinkVisible).toBeTruthy();
});
