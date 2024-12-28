import { test, expect } from '@playwright/test';
import SimpleElementPage from '../pages/SimpleElementPage';  // Default import

test.describe('Simple HTML Elements Test Suite', () => {
    let simplePage;

    test.beforeEach(async ({ page }) => {
        // Initialize the POM
        simplePage = new SimpleElementPage(page);
        // Navigate to the test page
        await page.goto('https://ultimateqa.com/simple-html-elements-for-automation/');
    });

    test('Verify Button Redirects to Homepage', async ({ page }) => {
        // Click the button
        await simplePage.clickButton();

        // Verify that the current URL is the homepage
        await expect(page).toHaveURL('https://ultimateqa.com/?');
    });
});
