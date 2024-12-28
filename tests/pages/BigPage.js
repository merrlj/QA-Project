// pages/BigPage.js
class BigPage {
  constructor(page) {
      this.page = page;
      this.pageUrl = 'https://ultimateqa.com/complicated-page'; // URL for the Big Page
  }

  // Method to visit the page directly
  async visit() {
    await this.page.goto(this.pageUrl, { timeout: 60000 }); // Set timeout to 60 seconds
  }

}

export default BigPage;
