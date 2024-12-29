export class NavigationPage {
  constructor(page) {
    this.page = page;
    this.servicesLink = page.locator('text=Services');
    this.aboutLink = page.locator('role=link[name="About"]').first();
    this.blogLink = page.locator('role=link[name="Blog"]').first();
    this.newsletterLink = page.locator('text=Newsletter');
    this.educationLink = page.locator('text=Education');
  }

  async navigateAndWait(clickAction) {
    await Promise.all([
      this.page.waitForNavigation(), // Wait for navigation to complete
      clickAction(),                // Perform the click action
    ]);
  }

  async goToServices() {
    await this.navigateAndWait(() => this.servicesLink.click());
  }

  async goToAbout() {
    await this.navigateAndWait(() => this.aboutLink.click());
  }

  async goToBlog() {
    await this.navigateAndWait(() => this.blogLink.click());
  }

  async goToNewsletter() {
    await this.navigateAndWait(() => this.newsletterLink.click());
  }

  async goToEducation() {
    await this.navigateAndWait(() => this.educationLink.click());
  }
}
