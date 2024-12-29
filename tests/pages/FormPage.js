class FormPage {
  constructor(page) {
    this.page = page;
    this.formPageUrl = 'https://ultimateqa.com/filling-out-forms';
    this.nameField = '#et_pb_contact_name_0'; 
    this.messageField = '#et_pb_contact_message_0'; 
    this.submitButton = 'button[type="submit"]'; 
    this.successMessage = 'text=Thanks for contacting us'; 
    this.validationMessage = 'Please, fill in the following'; 
  }

  async navigateToFormPage() {
    await this.page.goto(this.formPageUrl, { waitUntil: 'networkidle' });
  }

  async fillForm(fields) {
    for (const [selector, value] of Object.entries(fields)) {
      await this.page.fill(selector, value);
    }
  }

  async submitForm() {
    await this.page.click(this.submitButton);
  }

  async getSuccessMessage() {
    const successMessageLocator = this.page.locator(this.successMessage);
    await successMessageLocator.waitFor({ state: 'visible', timeout: 10000 });
    return successMessageLocator.textContent();
  }

  async navigateToFillOutForms() {
    await this.page.getByRole('link', { name: 'Fill out forms' }).click();
  }

  async submitEmptyForm() {
    await this.page.locator('#et_pb_contact_form_1').getByRole('button', { name: 'Submit' }).click();
  }

  async checkValidationMessages() {
    const validationMessageLocator = this.page.locator(this.validationMessage);
    await validationMessageLocator.waitFor({ state: 'visible', timeout: 5000 });
    return validationMessageLocator.isVisible();
  }
}

export default FormPage;
