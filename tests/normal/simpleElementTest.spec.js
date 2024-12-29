import { test, expect } from '@playwright/test';
import SimpleElementPage from '../pages/SimpleElementPage'; 

test.describe('Simple HTML Elements Test Suite', () => {
    let simplePage;

    test.beforeEach(async ({ page }) => {
        simplePage = new SimpleElementPage(page);
        await page.goto('https://ultimateqa.com/simple-html-elements-for-automation/');
    });

    test('Verify Button Redirects to Homepage', async ({ page }) => {
        await simplePage.clickButton();

        await expect(page).toHaveURL('https://ultimateqa.com/?');
    });
});
