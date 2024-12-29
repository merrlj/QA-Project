import { expect } from '@playwright/test';

export class ComplicatedPage {
  constructor(page) {
    this.page = page;

    // Locator for the Twitter follow link
    this.twitterLink = page.locator('a[title="Follow on Twitter"]'); // Locator for Twitter button

    // Locator for the Facebook follow link
    this.facebookLink = page.locator('#post-579').getByRole('link', { name: '' }); // Locator for Facebook button
  }

  // Open the complicated page
  async open() {
    await this.page.goto('https://ultimateqa.com/complicated-page');
  }

  // Method to click on the Twitter follow link
  async clickTwitterLink() {
    const twitterLinkToClick = this.twitterLink.first(); // Use `.first()` to get the first Twitter link
    await expect(twitterLinkToClick).toBeVisible(); // Ensure the Twitter link is visible
    await twitterLinkToClick.click(); // Click the Twitter link
  }

  // Method to click on the Facebook follow link
  async clickFacebookLink() {
    const facebookLinkToClick = this.facebookLink.first(); // Use `.first()` to get the first Facebook link
    await expect(facebookLinkToClick).toBeVisible(); // Ensure the Facebook link is visible
    await facebookLinkToClick.click(); // Click the Facebook link
  }

  // Method to navigate back to the complicated page
  async navigateBack() {
    await this.page.goBack(); // Go back to the previous page
    await this.page.waitForURL('https://ultimateqa.com/complicated-page'); // Ensure we're back on the complicated page
  }
}
