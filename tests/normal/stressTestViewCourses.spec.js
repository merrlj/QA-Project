import { test, expect } from '@playwright/test';
import FakeLandingPage from '../pages/FakeLandingPage';

const userCount = 10;
const expectedUrl = 'https://ultimateqa.com/fake-landing-page';

test(`Stress test with ${userCount} users clicking "View Courses"`, async ({ browser }) => {
    const context = await browser.newContext(); // Single context for all users
    test.setTimeout(60000);
    const users = [];

    for (let i = 0; i < userCount; i++) {
        users.push(async () => {
            const page = await context.newPage();
            const fakeLandingPage = new FakeLandingPage(page);

            try {
                await fakeLandingPage.visit();
                const currentUrl = await fakeLandingPage.clickViewCoursesButton();

                expect(currentUrl).toBe(expectedUrl);
            } catch (error) {
                console.error(`User ${i + 1} encountered an error: ${error.message}`);
                console.error(error.stack); // Log stack trace for debugging
                throw error;
            } finally {
                await page.close(); // Ensure the page is closed
            }
        });
    }

    try {
        await Promise.all(users.map((user) => user())); // Run all users in parallel
    } finally {
        await context.close(); // Clean up the context
    }
});
