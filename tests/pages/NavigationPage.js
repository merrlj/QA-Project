export class NavigationPage {
    constructor(page) {
      this.page = page;
      this.servicesLink = page.locator('text=Services');
      this.aboutLink = page.locator('role=link[name="About"]').first();
      this.blogLink = page.locator('role=link[name="Blog"]').first();
      this.newsletterLink = page.locator('text=Newsletter');
      this.educationLink = page.locator('text=Education');
    }
  
    async goToServices() {
      await this.servicesLink.click();
    }
  
    async goToAbout() {
      await this.aboutLink.click();
    }
  
    async goToBlog() {
      await this.blogLink.click();
    }
  
    async goToNewsletter() {
      await this.newsletterLink.click();
    }
  
    async goToEducation() {
      await this.educationLink.click();
    }
  }
  