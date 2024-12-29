class BigPage {
  constructor(page) {
      this.page = page;
      this.pageUrl = 'https://ultimateqa.com/complicated-page'; 
  }

  async visit() {
    await this.page.goto(this.pageUrl, { timeout: 60000 }); 
  }

}

export default BigPage;
