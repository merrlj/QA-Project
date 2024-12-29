export default class FakeLandingPage {
    constructor(page) {
        this.page = page;
        this.viewCoursesButton = this.page.getByRole('link', { name: 'View Courses' });
    }

    async visit() {
        const url = 'https://ultimateqa.com/fake-landing-page';
        await this.page.goto(url);
        await this.page.waitForLoadState('load'); 
    }

    async clickViewCoursesButton() {
        await this.viewCoursesButton.waitFor(); 
        await this.viewCoursesButton.click(); 
        await this.page.waitForLoadState('load'); 
        return this.page.url(); 
    }
}
