import { expect } from '@playwright/test';

export class ComplicatedPage {
  constructor(page) {
    this.page = page;

    this.twitterLink = page.locator('a[title="Follow on Twitter"]'); 
    this.facebookLink = page.locator('#post-579').getByRole('link', { name: '' }); 
  }

  async open() {
    await this.page.goto('https://ultimateqa.com/complicated-page');
  }

  async clickTwitterLink() {
    const twitterLinkToClick = this.twitterLink.first(); 
    await expect(twitterLinkToClick).toBeVisible(); 
    await twitterLinkToClick.click(); 
  }

  async clickFacebookLink() {
    const facebookLinkToClick = this.facebookLink.first(); 
    await expect(facebookLinkToClick).toBeVisible(); 
    await facebookLinkToClick.click(); 
  }

  async navigateBack() {
    await this.page.goBack(); 
    await this.page.waitForURL('https://ultimateqa.com/complicated-page'); 
  }
}
