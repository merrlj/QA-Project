import { test, expect } from '@playwright/test';
import FakeLandingPage from '../pages/FakeLandingPage'; // Import the page object

const userCount = 10; // Number of concurrent users
const expectedUrl = 'https://ultimateqa.com/fake-landing-page'; // Expected target URL

test(`Stress test with ${userCount} users clicking "View Courses"`, async ({ browser }) => {
    const users = [];

    for (let i = 0; i < userCount; i++) {
        users.push(async () => {
            const context = await browser.newContext();
            const page = await context.newPage();
            const fakeLandingPage = new FakeLandingPage(page);

            try {
                // Visit the landing page
                await fakeLandingPage.visit();

                // Click the "View Courses" button and get the current URL
                const currentUrl = await fakeLandingPage.clickViewCoursesButton();

                // Assert the URL matches the expected target
                expect(currentUrl).toBe(expectedUrl);
            } catch (error) {
                console.error(`User ${i + 1} encountered an error: ${error.message}`);
                throw error; // Rethrow to fail the test if any user fails
            } finally {
                await page.close(); // Close the page to free up resources
            }
        });
    }

    // Execute all user actions concurrently
    await Promise.all(users.map((user) => user()));
});
