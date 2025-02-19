import { setWorldConstructor, World } from '@cucumber/cucumber';
import { Browser, Page, chromium } from 'playwright';
import RegistrationFormPage from '../pages/RegistrationFormPage';
import RegistrationFormValidations from '../pages/page_validations/RegistrationFormValidations';

export class CustomWorld extends World {
  browser?: Browser; // Made optional to allow undefined
  page?: Page; // Optional to handle cases where it's not set
  registrationFormPage?: RegistrationFormPage;
  registrationFormValidations?: RegistrationFormValidations;

  async launchBrowser() {
    console.log('CustomWorld.launchBrowser() called');
    this.browser = await chromium.launch({ headless: false });
    this.page = await this.browser.newPage();
    this.registrationFormPage = new RegistrationFormPage(this.page);
    this.registrationFormValidations = new RegistrationFormValidations(this.page);
  }

  async closeBrowser() {
    console.log('CustomWorld.closeBrowser() called');
    try {
      if (this.page && !this.page.isClosed()) {
        await this.page.close();
        this.page = undefined; // Reset the page object
      }
      if (this.browser) {
        await this.browser.close();
        this.browser = undefined; // Reset the browser object
      }
    } catch (error) {
      console.error("Error while closing the browser or page:", error);
    }
  }
}

// Register your custom world with Cucumber
setWorldConstructor(CustomWorld);
