export default class FakeLandingPage {
    constructor(page) {
        this.page = page;
        this.viewCoursesButton = this.page.getByRole('link', { name: 'View Courses' });
    }

    async visit() {
        const url = 'https://ultimateqa.com/fake-landing-page';
        await this.page.goto(url, { waitUntil: 'load' });
    }

    async clickViewCoursesButton() {
        await this.viewCoursesButton.click();
        return this.page.url();
    }
}
