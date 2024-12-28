export default class HomePage {
  constructor(page) {
    this.page = page;
    this.header = 'h1'; 
    this.navLinks = 'nav a'; 
    this.searchInput = 'input[type="search"]'; 
    this.searchResults = '.search-results'; 
    this.searchButton = 'button[aria-label="Search"]'; 
    this.searchContainer = '.et_pb_menu__search'; 
  }

  async visit() {
    await this.page.goto('https://ultimateqa.com/automation');
  }

  async isHeaderVisible() {
    return this.page.isVisible(this.header);
  }

  async navigateTo(linkText) {
    await this.page.click(`text=${linkText}`);
  }

  
  async performSearch(term) {
    await this.page.locator(this.searchContainer).getByRole('button', { name: 'U', exact: true }).click();

    const searchInput = this.page.locator(this.searchContainer).getByPlaceholder('Search …');
    await searchInput.fill(term);
    await this.page.keyboard.press('Enter');
  }

  async assertSearchResults(expectedUrl) {
    await this.page.waitForURL(expectedUrl);
    return this.page.url() === expectedUrl;
  }

  async getNavLinksCount() {
    return await this.page.locator(this.navLinks).count();
  }

  async isNavLinkVisible(index) {
    return await this.page.locator(this.navLinks).nth(index).isVisible();
  }
}
