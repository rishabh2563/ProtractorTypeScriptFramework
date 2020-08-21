Feature: Validate Calculator app and Angular website
@Calculatorvalidations
Scenario: Calculator adding functionality

Given Navigate to the "Calc" site
When when i add two numbers "3" and "5"
Then the result outcome is "8"
@Calculatorvalidations
Scenario: Calculator adding functionality

Given Navigate to the "Calc" site
When when i add two numbers "2" and "7"
Then the result outcome is "8"

@AngularValidations
Scenario Outline: Angular website Functionality
Given Navigate to the "AngularJs" site
When User clicks on Header Link
And User is navigated to Angular webPage
Then User Enters "<Key>" in the SearchBox

Examples:
    | Key |
    | Hello|
    |  Hey |