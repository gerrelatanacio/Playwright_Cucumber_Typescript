import { expect, Locator, Page } from "@playwright/test";
import { fields, RegistrationData } from '../../../../resources/testdata/testdata';
import { locators } from '../page_locators/registrationForm';
import { objectExtractor } from "../../../../resources/utilities/baseUtility";

export default class RegistrationFormValidations {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    public async validateBannerMessage(scenario: string) {

        const allResultSectionFields: Locator[] = await this.page.locator("#results-section div").all();
        let element: Locator;

        for (let i = 0; i < allResultSectionFields.length; i++) {
            let elementID = await allResultSectionFields[i].getAttribute("id");
            if (elementID == objectExtractor(
                'banners',
                'message',
                locators
            )) {
                element = await allResultSectionFields[i];
            }
        }

        await expect(element!).toHaveText(
            objectExtractor(
                'bannerMessages',
                scenario.toLowerCase(),
                fields
            )
        );
        console.log(await element!.textContent());

    }

    public async validateCheckboxIsEnabled(locator: string) {
        console.log(`Locator Checkbox: ${locator}`);

        const allFormIInputFields: Locator[] = await this.page.locator("#registerForm input").all();
        let element: Locator;

        for (let i = 0; i < allFormIInputFields.length; i++) {
            let elementID = await allFormIInputFields[i].getAttribute("id");
            if (elementID == locator) {
                element = await allFormIInputFields[i];
            }
        }

        await expect(element!.isEnabled())
    }

    public async validateSuccessfulRegistration(submittedData: RegistrationData) {


        const assertionErrors: string[] = [];

        try {
            let firstName = await this.page.locator("#resultFn")?.textContent() as string;
            firstName = firstName.split(":", 2)[1].trimStart();
            if (submittedData.firstName !== firstName) {
                assertionErrors.push(`Expected firstName: ${submittedData.firstName}, but got: ${firstName}`);
            }

            let lastName = await this.page.locator("#resultLn")?.textContent() as string;
            lastName = lastName.split(":", 2)[1].trimStart();
            if (submittedData.lastName !== lastName) {
                assertionErrors.push(`Expected lastName: ${submittedData.lastName}, but got: ${lastName}`);
            }

            let phoneNumber = await this.page.locator("#resultPhone")?.textContent() as string;
            phoneNumber = phoneNumber.split(":", 2)[1].trimStart();
            if (submittedData.phone !== phoneNumber) {
                assertionErrors.push(`Expected phone: ${submittedData.phone}, but got: ${phoneNumber}`);
            }

            let country = await this.page.locator("#country")?.textContent() as string;
            country = country.split(":", 2)[1].trimStart();
            if (submittedData.country !== country) {
                assertionErrors.push(`Expected country: ${submittedData.country}, but got: ${country}`);
            }

            let email = await this.page.locator("#resultEmail")?.textContent() as string;
            email = email.split(":", 2)[1].trimStart();
            if (submittedData.emailAddress !== email) {
                assertionErrors.push(`Expected email: ${submittedData.emailAddress}, but got: ${email}`);
            }

        } catch (error) {
            // Catch unexpected errors during validation
            assertionErrors.push(`An unexpected error occurred: ${error}`);
        }

        // Throw all errors if there are any
        if (assertionErrors.length > 0) {
            throw new Error(`Soft Assertion Errors:\n${assertionErrors.join("\n")}`);
        } else {
            console.log("All assertions passed successfully!");
        }



    }

    public async validateFieldLabel(fieldId: string, fieldName: string, elementType: string) {
        //form[@id='registerForm'] //input[@id='phone']/preceding-sibling::label
        await this.page.waitForLoadState("load");

        console.log(`Hamburger Class ${await this.page.locator("#sidebarCollapse").getAttribute("class")}`);
        do{
            await this.page.locator("#sidebarCollapse").click();
            console.log(`Hamburger Class ${await this.page.locator("#sidebarCollapse").getAttribute("class")}`);
        }while(!(await this.page.locator("#sidebarCollapse").getAttribute("class"))?.includes("active"))


        if (elementType == "input") {
            const inputElementLabel = await this.page.locator(`//form[@id='registerForm'] //input[@id='${fieldId}']/preceding-sibling::label`)
            await inputElementLabel.scrollIntoViewIfNeeded();
            await inputElementLabel.waitFor({state:"visible"})
            console.log(`From Automated Test: ${await inputElementLabel.textContent()}`);
            console.log(`From the feature: ${fieldName}`)
            expect(await inputElementLabel).toHaveText(fieldName);
        } else if (elementType == "select") {
            const dropdownElementLabel = await this.page.locator(`//form[@id='registerForm'] //select/preceding-sibling::label`)
            await dropdownElementLabel.scrollIntoViewIfNeeded();
            await dropdownElementLabel.waitFor({state:"visible"})
            console.log(`From Automated Test: ${await dropdownElementLabel.textContent()}`);
            console.log(`From the feature: ${fieldName}`)
            expect(await dropdownElementLabel).toHaveText(fieldName)
        } else if (elementType == "button") {
            const buttonElementLabel = await this.page.locator(`//button[@id='${fieldId}']`)
            await buttonElementLabel.scrollIntoViewIfNeeded();
            await buttonElementLabel.waitFor({state:"visible"})
            console.log(`From Automated Test: ${await buttonElementLabel.textContent()}`);
            console.log(`From the feature: ${fieldName}`)
            expect(await buttonElementLabel).toHaveText(fieldName)
        } else if(elementType == "checkbox"){
            const inputElementLabel = await this.page.locator(`//form[@id='registerForm'] //input[@id='${fieldId}']/following-sibling::label`)
            await inputElementLabel.scrollIntoViewIfNeeded();
            await inputElementLabel.waitFor({state:"attached"})
            console.log(`From Automated Test: ${await inputElementLabel.textContent()}`);
            console.log(`From the feature: ${fieldName}`)
            expect(await inputElementLabel).toHaveText(fieldName)
        }


    }

}

