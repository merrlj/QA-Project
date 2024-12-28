import { test, expect } from '@playwright/test';
import { NavigationPage } from '../pages/NavigationPage';

test.describe('Usability Test Case: Navigation Links', () => {
  let navigationPage;

  test.beforeEach(async ({ page }) => {
    // Initialize the POM for navigation
    navigationPage = new NavigationPage(page);
    // Navigate to the Automation page
    await page.goto('https://ultimateqa.com/automation/');
  });

  test('Verify Navigation Links are Functional', async ({ page }) => {
    // Verify Services Link works
    await navigationPage.goToServices();
    await expect(page).toHaveURL('https://ultimateqa.com/consulting/');  // Verify the Services page URL

    // Navigate back to the Automation page
    await page.goto('https://ultimateqa.com/automation/');

    // Verify About Link works
    await navigationPage.goToAbout();
    await expect(page).toHaveURL('https://ultimateqa.com/about/');  // Verify the About page URL

    // Navigate back to the Automation page
    await page.goto('https://ultimateqa.com/automation/');

    // Verify Blog Link works
    await navigationPage.goToBlog();
    await expect(page).toHaveURL('https://ultimateqa.com/blog/');  // Verify the Blog page URL

    // Navigate back to the Automation page
    await page.goto('https://ultimateqa.com/automation/');

    // Verify Newsletter Link works
    await navigationPage.goToNewsletter();
    await expect(page).toHaveURL('https://ultimateqa.kit.com/profile');  // Verify the Newsletter page URL

    // Navigate back to the Automation page
    await page.goto('https://ultimateqa.com/automation/');
  });
});
