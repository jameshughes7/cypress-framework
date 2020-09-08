Feature: Login to Application
    
    As an invalid user
    I cannot log into application
    As a valid user
    I want to login to Application

    @focus
    Scenario: Invalid login
        Given I open login page
        And I wait for 2000 milliseconds
        And I see "Zero - Log in" in the title
        And I see "webappsecurity" in the url
        And I see "/login" in the url
        When I fill username with "invalid username"
        And I fill password with "invalid password"
        And I click on submit login
        And I reload the browser
        Then I should see error message
    
    @focus
    Scenario: Valid login
        Given I open login page
        When I fill username with "username"
        And I fill password with "password"
        And I click on submit login
        Then I should see homepage