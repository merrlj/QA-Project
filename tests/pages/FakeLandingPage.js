export default class FakeLandingPage {
    constructor(page) {
        this.page = page;
        this.viewCoursesButton = this.page.getByRole('link', { name: 'View Courses' });
    }

    async visit() {
        const url = 'https://ultimateqa.com/fake-landing-page';
        await this.page.goto(url);
        await this.page.waitForLoadState('load'); // Ensure the page is fully loaded
    }

    async clickViewCoursesButton() {
        await this.viewCoursesButton.waitFor(); // Wait for the button to be visible
        await this.viewCoursesButton.click(); // Click the button
        await this.page.waitForLoadState('load'); // Ensure the navigation finishes
        return this.page.url(); // Return the current URL for validation
    }
}
