class FormPage {
  constructor(page) {
    this.page = page;
    this.formPageUrl = 'https://ultimateqa.com/filling-out-forms';
    this.nameField = '#et_pb_contact_name_0'; // Locator for the name field
    this.messageField = '#et_pb_contact_message_0'; // Updated form locator for message
    this.submitButton = 'button[type="submit"]'; // Submit button remains the same
    this.successMessage = 'text=Thanks for contacting us'; // Success message locator based on text
    this.validationMessage = 'Please, fill in the following'; // Validation message when form is not properly filled
  }

  // Method to navigate to the form page
  async navigateToFormPage() {
    await this.page.goto(this.formPageUrl, { waitUntil: 'networkidle' });
  }

  // Method to fill the form fields (name and message)
  async fillForm(fields) {
    for (const [selector, value] of Object.entries(fields)) {
      await this.page.fill(selector, value);
    }
  }

  // Method to submit the form
  async submitForm() {
    await this.page.click(this.submitButton);
  }

  // Method to retrieve the success message after form submission
  async getSuccessMessage() {
    const successMessageLocator = this.page.locator(this.successMessage);
    await successMessageLocator.waitFor({ state: 'visible', timeout: 10000 });
    return successMessageLocator.textContent();
  }

  // Method to navigate to the form page via the 'Fill out forms' link
  async navigateToFillOutForms() {
    // Correct the selector to find the link by role and name
    await this.page.getByRole('link', { name: 'Fill out forms' }).click();
  }

  // Method to trigger validation error by submitting the form with empty fields
  async submitEmptyForm() {
    // Update the form selector to #et_pb_contact_form_1 if it's the correct one
    await this.page.locator('#et_pb_contact_form_1').getByRole('button', { name: 'Submit' }).click();
  }

  // New method to check for visibility of validation error messages
  async checkValidationMessages() {
    // Return the visibility of the validation messages
    const validationMessageLocator = this.page.locator(this.validationMessage);
    await validationMessageLocator.waitFor({ state: 'visible', timeout: 5000 });
    return validationMessageLocator.isVisible();
  }
}

export default FormPage;
