export const fields = {
  firstName: {
    valid: "GERREL",
    validTwoNames: "Gerrel Timothy",
    numeric: "123456789",
    specialcharacters: "!@#%$%#^%&$",
    whitespace: "     ",
    empty: "",
    moreThanMax: "ASDFGHJKLQWERTYUIOPZXCVBNMASDFGHJKLQWERTYUIOPZXCVBNMASDFGHJKLQWERTYUIOPZXCVBNMASDFGHJKLQWERTYUIOPZXCVBNMASDFGHJKLQWERTYUIOPZXCVBNM",
    validWithTwoChars: "AJ",
    withOneChar: "A",
    alphaNumeric: "XX12345JK",
    mixAlphaSpecialNumber: "ASDFHJK!1234",
  },
  lastName: {
    valid: "Smith",
    validAlphabetWithSpaces: "De La Cruz",
    invalidNumeric: "12345",
    invalidSpecialCharacters: "!@#$%",
    invalidOnlyWhiteSpaces: "     ",
    invalidMoreThanMax: "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJK",
    invalidCombinationAlphaNumericSpecial: "John123!@#",
    empty: "",
  },
  phone: {
    valid: "+1234567890",
    validExactMin: "1234567890",
    invalidAlphabet: "ABCDEF",
    invalidSpecialCharacters: "!@#$%^&*",
    invalidCombinationAlphaNumericSpecial: "123ABC!@#",
    invalidLessThanMin: "12345",
    validMoreThanMin: "1234567890123",
    noPhoneNumber: "",
  },
  country: {
    selectedCountry: "Philippines",
  },
  emailAddress: {
    valid: "example@test.com",
    empty: "",
    invalidOnlyAlphabet: "example",
    invalidOnlyNumeric: "12345",
    invalidOnlySpecialCharacters: "!@#$%",
    invalidOnlyWhiteSpaces: "     ",
    invalidMultipleEmails: "email1@test.com,email2@test.com",
  },
  password: {
    validExactMax: "Abcde12345abcde!@#!@",
    valid: "Abc12!",
    validExactMin: "Abc12!",
    validRangeSixToTwenty: "Abc123!@",
    invalidMoreThanMaxCharacters: "Abc123!@#$%^&*()12345",
    invalidLessThanMinCharacteers: "Abc12",
    emptyPassword: "",
  },
  bannerMessages: {
    successful: "Successfully registered the following information",
    invalidphonenumbercontainsalphabet: "The phone number should contain at least 10 characters!",
    invalidphonenumbercontainsspecialcharacters: "The phone number should contain at least 10 characters!",
    invalidphonenumbercontainsalphanumericandsymbols: "The phone number should contain at least 10 characters!",
    invalidphonenumberblank: "The phone number should contain at least 10 characters!",
    invalidpasswordblank: "The password should contain between [6,20] characters!",
    invalidpasswordlessthanmincharacters: "The password should contain between [6,20] characters!",
    invalidpasswordmorethanmaxcharacters: "The password should contain between [6,20] characters!",
    phoneLessThanTenDigits: "The phone number should contain at least 10 characters!",
    invalidfirstnamenumeric: "The entered firstname contains invalid characters or with incorrect length",
    invalidfirstnamespecialcharacters: "The entered firstname contains invalid characters or with incorrect length",
    invalidfirstnamewhitespaces: "The entered firstname contains invalid characters or with incorrect length",
    invalidfirstnameblank: "The entered firstname contains invalid characters or with incorrect length",
    invalidfirstnamemorethanmax: "The entered firstname contains invalid characters or with incorrect length",
    invalidfirstnameonecharacter: "The entered firstname contains invalid characters or with incorrect length",
    invalidfirstnamealphanumeric: "The entered firstname contains invalid characters or with incorrect length",
    invalidlastnamenumeric: "The entered lastname contains invalid characters or with incorrect length",
    invalidlastnamespecialcharacters: "The entered lastname contains invalid characters or with incorrect length",
    invalidlastnamewhitespaces: "The entered lastname contains invalid characters or with incorrect length",
    invalidlastnameblank: "The entered lastname contains invalid characters or with incorrect length",
    invalidlastnamemorethanmax: "The entered lastname contains invalid characters or with incorrect length",
    invalidlastnamealphanumeric: "The entered lastname contains invalid characters or with incorrect length",
    invalidemailalphabetonly: "The entered email contains invalid characters or with incorrect length",
    invalidemailnumericonly: "The entered email contains invalid characters or with incorrect length",
    invalidemailspecialcharactersonly: "The email lastname contains invalid characters or with incorrect length",
    invalidemailwhitespaces: "The entered email contains invalid characters or with incorrect length",
    invalidemailmultipleemails: "The entered email contains invalid characters or with incorrect length",
    invalidemailblank: "The entered email contains invalid characters or with incorrect length",
  }
};

export interface RegistrationData {
  firstName: string;
  lastName: string;
  phone: string;
  emailAddress: string;
  password: string;
  exampleCheck1: string;
  country: string;
}
