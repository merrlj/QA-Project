import { test, expect } from '@playwright/test';
import HomePage from '../pages/HomePage';

test('Home Page Accessibility', async ({ page }) => {
  // Declare variables first
  const homePage = new HomePage(page);

  // Visit the homepage
  await homePage.visit();

  // Check if the header is visible
  const isHeaderVisible = await homePage.isHeaderVisible();
  expect(isHeaderVisible).toBeTruthy();

  // Check if the navigation links are visible
  const navLinksCount = await homePage.getNavLinksCount();
  expect(navLinksCount).toBeGreaterThan(0);  // Ensure there are navigation links

  // Optionally: Check if a specific navigation link is visible
  const isFirstNavLinkVisible = await homePage.isNavLinkVisible(0);
  expect(isFirstNavLinkVisible).toBeTruthy();
});
