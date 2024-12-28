class LoginPage {
  constructor(page) {
    this.page = page;
    this.loginPageUrl = 'https://courses.ultimateqa.com/users/sign_in';
    this.emailField = 'input[placeholder="Email"]';
    this.passwordField = 'input[placeholder="Password"]';
    this.signInButton = 'button[type="submit"]';
  }

  async navigateToLoginPage() {
    await this.page.goto(this.loginPageUrl, { waitUntil: 'networkidle' });
  }

  async login(email, password) {
    await this.page.fill(this.emailField, email);
    await this.page.fill(this.passwordField, password);
    await this.page.click(this.signInButton);
  }
}

export default LoginPage;
