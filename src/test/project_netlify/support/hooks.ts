import { setDefaultTimeout, Before, After, Status } from '@cucumber/cucumber';
import { CustomWorld } from './world';

setDefaultTimeout(60000);

Before(async function (this: CustomWorld) {
  console.log('Before hook: launching browser');
  await this.launchBrowser();
});

// Combined After hook
After(async function (this: CustomWorld, scenario) {
  try {
    // If the test failed, capture a screenshot
    if (scenario.result?.status === Status.FAILED && this.page) {
      console.log("Test failed, capturing screenshot...");
      if (!this.page.isClosed()) {
        const screenshot = await this.page.screenshot();
        this.attach(screenshot, "image/png");
      } else {
        console.log("Page is already closed, cannot capture screenshot.");
      }
    }

    // Close the browser
    console.log('After hook: closing browser');
    await this.closeBrowser();
  } catch (error) {
    console.error("Error in After hook:", error);
  }
});
