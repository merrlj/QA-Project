import { test, expect } from '@playwright/test';
import FakeLandingPage from '../pages/FakeLandingPage'; 

const userCount = 10; 
const expectedUrl = 'https://ultimateqa.com/fake-landing-page'; 

test(`Stress test with ${userCount} users clicking "View Courses"`, async ({ browser }) => {
    const users = [];

    for (let i = 0; i < userCount; i++) {
        users.push(async () => {
            const context = await browser.newContext();
            const page = await context.newPage();
            const fakeLandingPage = new FakeLandingPage(page);

            try {
                await fakeLandingPage.visit();
                const currentUrl = await fakeLandingPage.clickViewCoursesButton();

                expect(currentUrl).toBe(expectedUrl);
            } catch (error) {
                console.error(`User ${i + 1} encountered an error: ${error.message}`);
                throw error; 
            } finally {
                await page.close(); 
            }
        });
    }

    await Promise.all(users.map((user) => user()));
});
