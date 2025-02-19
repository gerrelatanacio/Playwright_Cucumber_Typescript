Feature: Registration Form Validations

  @smoke-test @regression-test
  Scenario Outline: [Ideal] Validate Successful Registration - <scenario>
    #Supposedly this is the ideal happy path flow when submitting a valid registration form,
    # wherein the user should still toggle/tick the Terms and Conditions checkbox upon populating
    # all the mandatory fields with valid values.
    # However, since there is a bug in which the Terms and Conditions checkbox is always disabled irregardless, all of the tests under this scenario outline will fail.
    # Repercussion: All the happy path in the succeeding outlines do not have the "When User ticks the "Terms And Conditions" field" step in order to proceed with other scenarios.

    Given User navigates to Registration Form Page
    When User enters a "<firstNameValue>" input in the "firstName" field
    When User enters a "<lastNameValue>" input in the "lastName" field
    When User enters a "<phoneValue>" input in the "phone" field
    When User enters a "<emailAddressValue>" input in the "emailAddress" field
    When User enters a "<passwordValue>" input in the "password" field
    When User selects "<countryValue>" option from the "Country" dropdown
    When User ticks the "Terms And Conditions" field
    When User clicks on the "Register" button
    Then Validate "Successful" registration

    Examples:
      | firstNameValue | lastNameValue | phoneValue       | emailAddressValue | passwordValue | countryValue | scenario                                                          |
      | valid          | valid         | valid            | valid             | valid         | Philippines  | Valid values for all fields                                       |
      | empty          | valid         | valid            | valid             | valid         | Philippines  | Valid values for mandatory fields                                 |
      | valid          | valid         | validExactMin    | valid             | valid         | Philippines  | Valid values for all fields - min phone characters                |
      | valid          | valid         | validMoreThanMin | valid             | valid         | Philippines  | Valid values for all fields - more than min phone characters      |
      | valid          | valid         | valid            | valid             | validExactMin | Philippines  | Valid values for all fields - min password characters             |
      | valid          | valid         | valid            | valid             | validExactMax | Philippines  | Valid values for all fields - max password characters             |
      | valid          | valid         | validExactMin    | valid             | validExactMin | Philippines  | Valid values for all fields - min phone & min password characters |
      | valid          | valid         | validExactMin    | valid             | validExactMax | Philippines  | Valid values for all fields - min phone & max password characters |

  @regression-test
  Scenario Outline: Validate Successful Registration(Required Fields) - <scenario>
    Given User navigates to Registration Form Page
    When User enters a "<firstNameValue>" input in the "firstName" field
    When User enters a "<lastNameValue>" input in the "lastName" field
    When User enters a "<phoneValue>" input in the "phone" field
    When User enters a "<emailAddressValue>" input in the "emailAddress" field
    When User enters a "<passwordValue>" input in the "password" field
    When User selects "<countryValue>" option from the "Country" dropdown
    # When User ticks the "Terms And Conditions" field
    When User clicks on the "Register" button
    Then Validate "Successful" registration

    Examples:
      | firstNameValue | lastNameValue | phoneValue | emailAddressValue | passwordValue | countryValue | scenario                          |
      | valid          | valid         | valid      | valid             | valid         | Philippines  | Valid values for all fields       |
      | empty          | valid         | valid      | valid             | valid         | Australia    | Valid values for mandatory fields |

  @regression-test
  Scenario Outline: Validate Successful Registration(Phone Number) - <scenario>
    Given User navigates to Registration Form Page
    When User enters a "<firstNameValue>" input in the "firstName" field
    When User enters a "<lastNameValue>" input in the "lastName" field
    When User enters a "<phoneValue>" input in the "phone" field
    When User enters a "<emailAddressValue>" input in the "emailAddress" field
    When User enters a "<passwordValue>" input in the "password" field
    When User selects "<countryValue>" option from the "Country" dropdown
    # When User ticks the "Terms And Conditions" field
    When User clicks on the "Register" button
    Then Validate "Successful" registration

    Examples:
      | firstNameValue | lastNameValue | phoneValue       | emailAddressValue | passwordValue | countryValue | scenario                                                     |
      | valid          | valid         | validExactMin    | valid             | valid         | Philippines  | Valid values for all fields - min phone characters           |
      | valid          | valid         | validMoreThanMin | valid             | valid         | Philippines  | Valid values for all fields - more than min phone characters |

  @regression-test
  Scenario Outline: Validate Successful Registration(Password) - <scenario>
    Given User navigates to Registration Form Page
    When User enters a "<firstNameValue>" input in the "firstName" field
    When User enters a "<lastNameValue>" input in the "lastName" field
    When User enters a "<phoneValue>" input in the "phone" field
    When User enters a "<emailAddressValue>" input in the "emailAddress" field
    When User enters a "<passwordValue>" input in the "password" field
    When User selects "<countryValue>" option from the "Country" dropdown
    # When User ticks the "Terms And Conditions" field
    When User clicks on the "Register" button
    Then Validate "Successful" registration

    Examples:
      | firstNameValue | lastNameValue | phoneValue | emailAddressValue | passwordValue | countryValue | scenario                                              |
      | valid          | valid         | valid      | valid             | validExactMin | Philippines  | Valid values for all fields - min password characters |
      | valid          | valid         | valid      | valid             | validExactMax | Philippines  | Valid values for all fields - max password characters |

  @regression-test
  Scenario Outline: Validate Successful Registration(Phone Number & Password) - <scenario>
    Given User navigates to Registration Form Page
    When User enters a "<firstNameValue>" input in the "firstName" field
    When User enters a "<lastNameValue>" input in the "lastName" field
    When User enters a "<phoneValue>" input in the "phone" field
    When User enters a "<emailAddressValue>" input in the "emailAddress" field
    When User enters a "<passwordValue>" input in the "password" field
    When User selects "<countryValue>" option from the "Country" dropdown
    # When User ticks the "Terms And Conditions" field
    When User clicks on the "Register" button
    Then Validate "Successful" registration

    Examples:
      | firstNameValue | lastNameValue | phoneValue    | emailAddressValue | passwordValue | countryValue | scenario                                                          |
      | valid          | valid         | validExactMin | valid             | validExactMin | Philippines  | Valid values for all fields - min phone & min password characters |
      | valid          | valid         | validExactMin | valid             | validExactMax | Philippines  | Valid values for all fields - min phone & max password characters |

  @regression-test
  Scenario Outline: Validate Successful Registration(LastName) - <scenario>
    Given User navigates to Registration Form Page
    When User enters a "<firstNameValue>" input in the "firstName" field
    When User enters a "<lastNameValue>" input in the "lastName" field
    When User enters a "<phoneValue>" input in the "phone" field
    When User enters a "<emailAddressValue>" input in the "emailAddress" field
    When User enters a "<passwordValue>" input in the "password" field
    When User selects "<countryValue>" option from the "Country" dropdown
    # When User ticks the "Terms And Conditions" field
    When User clicks on the "Register" button
    Then Validate "Successful" registration

    Examples:
      | firstNameValue | lastNameValue           | phoneValue | emailAddressValue | passwordValue | countryValue | scenario                                                            |
      | valid          | validAlphabetWithSpaces | valid      | valid             | valid         | Philippines  | Valid values for all fields - Last Name whereinith At least 2 Words |

  @regression-test
  Scenario Outline: Validate Successful Registration(FirstName) - <scenario>
    Given User navigates to Registration Form Page
    When User enters a "<firstNameValue>" input in the "firstName" field
    When User enters a "<lastNameValue>" input in the "lastName" field
    When User enters a "<phoneValue>" input in the "phone" field
    When User enters a "<emailAddressValue>" input in the "emailAddress" field
    When User enters a "<passwordValue>" input in the "password" field
    When User selects "<countryValue>" option from the "Country" dropdown
    # When User ticks the "Terms And Conditions" field
    When User clicks on the "Register" button
    Then Validate "Successful" registration

    Examples:
      | firstNameValue    | lastNameValue | phoneValue | emailAddressValue | passwordValue | countryValue | scenario                                                   |
      | validTwoNames     | valid         | valid      | valid             | valid         | Philippines  | Valid values for all fields - First Name with 2 Names      |
      | validWithTwoChars | valid         | valid      | valid             | valid         | Philippines  | Valid values for all fields - First Name with 2 Characters |

  @negative-test @regression-test
  Scenario Outline: Validate Unsucessful Registration because - <usecase>
    Given User navigates to Registration Form Page
    When User enters a "<lastNameValue>" input in the "lastName" field
    When User enters a "<phoneValue>" input in the "phone" field
    When User enters a "<emailAddressValue>" input in the "emailAddress" field
    When User enters a "<passwordValue>" input in the "password" field
    # When User ticks the "Terms And Conditions" field
    When User clicks on the "Register" button
    Then Validate "Unsuccessful" registration because "<usecase>"

    Examples:
      | firstNameValue | lastNameValue | phoneValue                            | emailAddressValue | passwordValue | countryValue | usecase                                                  |
      | valid          | valid         | invalidAlphabet                       | valid             | valid         | Philippines  | Invalid Phone Number - Contains Alphabet                 |
      | valid          | valid         | invalidSpecialCharacters              | valid             | valid         | Philippines  | Invalid Phone Number - Contains Special Characters       |
      | valid          | valid         | invalidCombinationAlphaNumericSpecial | valid             | valid         | Philippines  | Invalid Phone Number - Contains Alphanumeric And Symbols |
      | valid          | valid         | noPhoneNumber                         | valid             | valid         | Philippines  | Invalid Phone Number - Blank                             |

  @negative-test @regression-test
  Scenario Outline: Validate Unsucessful Registration because - <usecase>
    Given User navigates to Registration Form Page
    When User enters a "<lastNameValue>" input in the "lastName" field
    When User enters a "<phoneValue>" input in the "phone" field
    When User enters a "<emailAddressValue>" input in the "emailAddress" field
    When User enters a "<passwordValue>" input in the "password" field
    # When User ticks the "Terms And Conditions" field
    When User clicks on the "Register" button
    Then Validate "Unsuccessful" registration because "<usecase>"

    Examples:
      | firstNameValue | lastNameValue | phoneValue | emailAddressValue | passwordValue                 | countryValue | usecase                                     |
      | valid          | valid         | valid      | valid             | invalidMoreThanMaxCharacters  | Philippines  | Invalid Password - More Than Max Characters |
      | valid          | valid         | valid      | valid             | invalidLessThanMinCharacteers | Philippines  | Invalid Password - Less Than Min Characters |
      | valid          | valid         | valid      | valid             | emptyPassword                 | Philippines  | Invalid Password - Blank                    |

  @negative-test @regression-test
  Scenario Outline: Validate Unsucessful Registration because - <usecase>
    Given User navigates to Registration Form Page
    When User enters a "<lastNameValue>" input in the "lastName" field
    When User enters a "<phoneValue>" input in the "phone" field
    When User enters a "<emailAddressValue>" input in the "emailAddress" field
    When User enters a "<passwordValue>" input in the "password" field
    # When User ticks the "Terms And Conditions" field
    When User clicks on the "Register" button
    Then Validate "Unsuccessful" registration because "<usecase>"

    Examples:
      | firstNameValue        | lastNameValue | phoneValue | emailAddressValue | passwordValue | countryValue | usecase                                       |
      | numeric               | valid         | valid      | valid             | valid         | Philippines  | Invalid First Name - Numeric                  |
      | specialcharacters     | valid         | valid      | valid             | valid         | Philippines  | Invalid First Name - Special Characters       |
      | whitespace            | valid         | valid      | valid             | valid         | Philippines  | Invalid First Name - White Spaces             |
      | empty                 | valid         | valid      | valid             | valid         | Philippines  | Invalid First Name - Blank                    |
      | moreThanMax           | valid         | valid      | valid             | valid         | Philippines  | Invalid First Name - More Than Max Characters |
      | withOneChar           | valid         | valid      | valid             | valid         | Philippines  | Invalid First Name - One Character            |
      | mixAlphaSpecialNumber | valid         | valid      | valid             | valid         | Philippines  | Invalid First Name - Alphanumeric             |

  @negative-test @regression-test
  Scenario Outline: Validate Unsucessful Registration because - <usecase>
    Given User navigates to Registration Form Page
    When User enters a "<lastNameValue>" input in the "lastName" field
    When User enters a "<phoneValue>" input in the "phone" field
    When User enters a "<emailAddressValue>" input in the "emailAddress" field
    When User enters a "<passwordValue>" input in the "password" field
    # When User ticks the "Terms And Conditions" field
    When User clicks on the "Register" button
    Then Validate "Unsuccessful" registration because "<usecase>"

    Examples:
      | firstNameValue                        | lastNameValue | phoneValue | emailAddressValue | passwordValue | countryValue | usecase                                      |
      | invalidNumeric                        | valid         | valid      | valid             | valid         | Philippines  | Invalid Last Name - Numeric                  |
      | invalidSpecialCharacters              | valid         | valid      | valid             | valid         | Philippines  | Invalid Last Name - Special Characters       |
      | invalidOnlyWhiteSpaces                | valid         | valid      | valid             | valid         | Philippines  | Invalid Last Name - White Spaces             |
      | empty                                 | valid         | valid      | valid             | valid         | Philippines  | Invalid Last Name - Blank                    |
      | invalidMoreThanMax                    | valid         | valid      | valid             | valid         | Philippines  | Invalid Last Name - More Than Max Characters |
      | invalidCombinationAlphaNumericSpecial | valid         | valid      | valid             | valid         | Philippines  | Invalid Last Name - Alphanumeric             |

  @negative-test @regression-test
  Scenario Outline: Validate Unsucessful Registration because - <usecase>
    Given User navigates to Registration Form Page
    When User enters a "<lastNameValue>" input in the "lastName" field
    When User enters a "<phoneValue>" input in the "phone" field
    When User enters a "<emailAddressValue>" input in the "emailAddress" field
    When User enters a "<passwordValue>" input in the "password" field
    # When User ticks the "Terms And Conditions" field
    When User clicks on the "Register" button
    Then Validate "Unsuccessful" registration because "<usecase>"

    Examples:
      | firstNameValue | lastNameValue | phoneValue | emailAddressValue        | passwordValue | countryValue | usecase                                 |
      | valid          | valid         | valid      | invalidOnlyAlphabet      | valid         | Philippines  | Invalid Email - Alphabet Only           |
      | valid          | valid         | valid      | invalidOnlyNumeric       | valid         | Philippines  | Invalid Email - Numeric Only            |
      | valid          | valid         | valid      | invalidSpecialCharacters | valid         | Philippines  | Invalid Email - Special Characters Only |
      | valid          | valid         | valid      | invalidOnlyWhiteSpaces   | valid         | Philippines  | Invalid Email - White Spaces            |
      | valid          | valid         | valid      | invalidMultipleEmails    | valid         | Philippines  | Invalid Email - Multiple Emails         |
      | valid          | valid         | valid      | empty                    | valid         | Philippines  | Invalid Email - Blank                   |

  @regression-tests
  Scenario Outline: Validate Successful Registration - Results Section - <scenario>
    Given User navigates to Registration Form Page
    When User enters a "<firstNameValue>" input in the "firstName" field
    When User enters a "<lastNameValue>" input in the "lastName" field
    When User enters a "<phoneValue>" input in the "phone" field
    When User enters a "<emailAddressValue>" input in the "emailAddress" field
    When User enters a "<passwordValue>" input in the "password" field
    When User selects "<countryValue>" option from the "Country" dropdown
    # When User ticks the "Terms And Conditions" field
    When User clicks on the "Register" button
    Then Validate "Successful" registration
    And  Validate that correct registration data is rendered in the results section

    Examples:
      | firstNameValue | lastNameValue | phoneValue | emailAddressValue | passwordValue | countryValue | scenario                          |
      | valid          | valid         | valid      | valid             | valid         | Philippines  | Validate values for all fields    |
      | empty          | valid         | valid      | valid             | valid         | Australia    | Valid values for mandatory fields |

  # UI Fields Validations
  @regression-tests
  Scenario Outline: Validate Successful Registration - Results Section - <scenario>
    Given User navigates to Registration Form Page
    Then Validate that "<field>" element is labelled as "<fieldName>" and of type "<elementType>"

    Examples:
      | field         | fieldName                             | elementType |
      | firstName     | First Name                            | input       |
      | lastName      | Last Name*                            | input       |
      | phone         | Phone Number*                         | input       |
      | emailAddress  | Email Address*                        | input       |
      | password      | Password*                             | input       |
      | country       | Country                               | select      |
      | exampleCheck1 | I agree with the terms and conditions | checkbox    |
      | registerBtn   | Register                              | button      |


