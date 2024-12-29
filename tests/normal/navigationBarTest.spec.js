import { test, expect } from '@playwright/test';
import { NavigationPage } from '../pages/NavigationPage';

test.describe('Usability Test Case: Navigation Links', () => {
  let navigationPage;
  test.setTimeout(60000);

  test.beforeEach(async ({ page }) => {
    navigationPage = new NavigationPage(page);
    await page.goto('https://ultimateqa.com/automation/');
  });

  test('Verify Navigation Links are Functional', async ({ page }) => {
    // Verify "Services" link
    await Promise.all([
      page.waitForNavigation(), // Wait for navigation to complete
      navigationPage.goToServices(), // Trigger the navigation
    ]);
    await expect(page).toHaveURL('https://ultimateqa.com/consulting/');

    // Go back to Automation page
    await page.goto('https://ultimateqa.com/automation/');

    // Verify "About" link
    await Promise.all([
      page.waitForNavigation(),
      navigationPage.goToAbout(),
    ]);
    await expect(page).toHaveURL('https://ultimateqa.com/about/');

    // Go back to Automation page
    await page.goto('https://ultimateqa.com/automation/');

    // Verify "Blog" link
    await Promise.all([
      page.waitForNavigation(),
      navigationPage.goToBlog(),
    ]);
    await expect(page).toHaveURL('https://ultimateqa.com/blog/');

    // Go back to Automation page
    await page.goto('https://ultimateqa.com/automation/');

    // Verify "Newsletter" link
    await Promise.all([
      page.waitForNavigation(),
      navigationPage.goToNewsletter(),
    ]);
    await expect(page).toHaveURL('https://ultimateqa.kit.com/profile');

    // Go back to Automation page
    await page.goto('https://ultimateqa.com/automation/');
  });
});
