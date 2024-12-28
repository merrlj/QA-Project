import { test, expect } from '@playwright/test';
import HomePage from '../pages/HomePage'; // Adjust the path to match your project structure

test.describe('Responsive Design Test', () => {
  const viewports = [
    { device: 'Mobile', width: 375, height: 667 }, // iPhone SE
    { device: 'Tablet', width: 768, height: 1024 }, // iPad
    { device: 'Desktop', width: 1920, height: 1080 }, // Standard desktop
  ];

  test.beforeEach(async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.visit(); // Use the existing `visit` method to navigate to the page
  });

  for (const viewport of viewports) {
    test(`Verify layout on ${viewport.device}`, async ({ page }) => {
      // Set the viewport size
      await page.setViewportSize({ width: viewport.width, height: viewport.height });

      const homePage = new HomePage(page);

      // Verify the header is visible
      const isHeaderVisible = await homePage.isHeaderVisible();
      expect(isHeaderVisible).toBe(true);

      // Verify each navigation link is visible
      const navLinks = page.locator(homePage.navLinks);
      const navLinkCount = await navLinks.count();

      for (let i = 0; i < navLinkCount; i++) {
        const navLink = navLinks.nth(i);
        await expect(navLink).toBeVisible();
      }

      // Verify no horizontal scroll bar (page should fit within viewport)
      const hasHorizontalScroll = await page.evaluate(() => {
        return document.documentElement.scrollWidth > document.documentElement.clientWidth;
      });
      expect(hasHorizontalScroll).toBe(false);
    });
  }
});
