class SimpleElementPage {
    constructor(page) {
        this.page = page;
        this.clickMeButton = page.locator('button:has-text("Click Me!")');
    }

    async clickButton() {
        await this.clickMeButton.click();
    }
}

export default SimpleElementPage;  // Default export
