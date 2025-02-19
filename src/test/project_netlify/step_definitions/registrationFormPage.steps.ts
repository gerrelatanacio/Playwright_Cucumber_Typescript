import { Given, Then, When } from '@cucumber/cucumber';
import type { CustomWorld } from '../support/world';
import { fields, RegistrationData } from '../../../resources/testdata/testdata';
import { locators } from '../pages/page_locators/registrationForm';
import { objectExtractor } from "../../../resources/utilities/baseUtility";

Given('User navigates to Registration Form Page', async function (this: CustomWorld) {
  await this.registrationFormPage?.goto();
});

When('User enters a {string} input in the {string} field', async function (this: CustomWorld, inputValue: string, fieldName: string) {
  await this.registrationFormPage?.enterInput(objectExtractor(fieldName, inputValue, fields), fieldName);
});

When('User selects {string} option from the {string} dropdown', async function (this: CustomWorld, inputValue: string, fieldName: string) {

  await this.registrationFormPage?.selectDropdown(inputValue, objectExtractor(
    'dropdowns',
    fieldName.toLowerCase(),
    locators));
});

When('User ticks the {string} field', async function (this: CustomWorld, field: string) {
  let fieldName = field
    .replace(/\s/g, '').toLowerCase();

  await this.registrationFormValidations?.validateCheckboxIsEnabled(objectExtractor('checkboxes', fieldName, locators));
  await this.registrationFormPage?.tickCheckbox(objectExtractor('checkboxes', fieldName, locators));

});

When('User clicks on the {string} button', async function (this: CustomWorld, button: string) {

  await this.registrationFormPage?.clickButton(objectExtractor('buttons', button.toLowerCase(), locators));
});

Then('Validate {string} registration because {string}', async function (this: CustomWorld, scenario: string, usecase: string) {
  let _scenario = usecase.replace(/\s/g, '').replace('-', '').toLowerCase();
  await this.registrationFormValidations?.validateBannerMessage(_scenario);
});

Then('Validate {string} registration', async function (this: CustomWorld, scenario: string) {
  await this.registrationFormValidations?.validateBannerMessage(scenario);
});

Then('Validate that correct registration data is rendered in the results section', async function (this: CustomWorld) {
  const registrationData = await this.registrationFormPage?.gatherRegistrationData() as RegistrationData;
  await this.registrationFormValidations?.validateSuccessfulRegistration(registrationData)
});

Then('Validate that {string} element is labelled as {string} and of type {string}', async function (this: CustomWorld, fieldId: string, fieldName: string, elementType: string) {
  await this.registrationFormValidations?.validateFieldLabel(fieldId, fieldName, elementType)
});


