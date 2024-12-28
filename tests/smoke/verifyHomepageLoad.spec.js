import { test, expect } from '@playwright/test';
import HomePage from '../pages/HomePage';

test('Home Page Accessibility', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.visit();
  const isHeaderVisible = await homePage.isHeaderVisible();
  expect(isHeaderVisible).toBeTruthy();
});