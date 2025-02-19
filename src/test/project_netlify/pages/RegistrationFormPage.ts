import { Locator, Page } from "@playwright/test";
import { RegistrationData } from "../../../resources/testdata/testdata"

export default class RegistrationFormPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    public async goto() {
        console.log('RegistrationFormPage.goto() called');
        await this.page.goto("https://qa-practice.netlify.app/bugs-form");
    }

    public async enterInput(input: string, fieldName: string): Promise<void> {

        const allFormIInputFields: Locator[] = await this.page.locator("#registerForm input").all();
        let element: Locator;

        for (let i = 0; i < allFormIInputFields.length; i++) {
            let elementID = await allFormIInputFields[i].getAttribute("id");
            if (elementID == fieldName) {
                element = await allFormIInputFields[i];
            }
        }

        await element!.scrollIntoViewIfNeeded();
        await element!.clear();
        await element!.fill(input);
    }
    public async selectDropdown(input: string, dropdownField: string): Promise<void> {
        console.log(`Input: ${input} Dropdown Field: ${dropdownField}`);
        const allSelectDropdowns = await this.page.locator("#registerForm select").all();
        let element: Locator;


        for (let i = 0; i < allSelectDropdowns.length; i++) {
            let elementID = await allSelectDropdowns[i].getAttribute("id");
            if (elementID == dropdownField) {
                element = await allSelectDropdowns[i];
            }
        }

        await element!.scrollIntoViewIfNeeded();
        await element!.selectOption(input);
    }
    public async tickCheckbox(locator: string): Promise<void> {
        console.log(`Locator Checkbox: ${locator}`);

        const allFormIInputFields: Locator[] = await this.page.locator("#registerForm input").all();
        let element: Locator;

        for (let i = 0; i < allFormIInputFields.length; i++) {
            let elementID = await allFormIInputFields[i].getAttribute("id");
            if (elementID == locator) {
                element = await allFormIInputFields[i];
            }
        }

        await element!.scrollIntoViewIfNeeded();
        await element!.click();
        console.log("succesfully clicked")
    }
    public async clickButton(locator: string): Promise<void> {
        console.log(`Locator Button: ${locator}`);

        const allFormButtons: Locator[] = await this.page.locator("#registerForm button").all();
        let element: Locator;

        for (let i = 0; i < allFormButtons.length; i++) {
            let elementID = await allFormButtons[i].getAttribute("id");
            if (elementID == locator) {
                element = await allFormButtons[i];
            }
        }

        await element!.scrollIntoViewIfNeeded();
        await element!.click();
        console.log("button succesfully clicked")
    }

    public async gatherRegistrationData(): Promise<RegistrationData> {

        const registrationData: RegistrationData = {
            firstName: "",
            lastName: "",
            phone: "",
            emailAddress: "",
            password: "",
            exampleCheck1: "",
            country: "",
        };

        // const registrationData: Record<string, string> = {};

        const allFormInputFields: Locator[] = await this.page.locator("#registerForm input").all();

        let element: Locator;

        for (let i = 0; i < allFormInputFields.length; i++) {
            const inputField = allFormInputFields[i];
            // Get the 'id' attribute for the key, use a fallback if 'id' is null
            const key: string = (await inputField.getAttribute("id")) ?? `field_${i}`;
            // Get the value or fallback to an empty string if the field is empty
            const value: string = (await inputField.inputValue()) || "";
            if (key in registrationData) {
                registrationData[key as keyof RegistrationData] = value;
            }
        }
        /**For Country Field*/
        const displayedValue = await this.page.locator('#countries_dropdown_menu').evaluate((select) => {
            // Type assertion to explicitly treat the element as an HTMLSelectElement
            const dropdown = select as HTMLSelectElement;
            return dropdown.options[dropdown.selectedIndex].textContent; // Get the text of the selected option
        });
        console.log("Displayed Value:", displayedValue);
        registrationData["country"] = (displayedValue ?? "Unknown").trim();


        console.log("Collected Registration Data:", registrationData);
        return registrationData
    }
}
