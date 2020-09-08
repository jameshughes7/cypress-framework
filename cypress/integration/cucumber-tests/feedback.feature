Feature: Send Feedback

    As a customer
    I can send my feedback via form

    Background:
        Given I open the HomePage

    Scenario: Submit Feedback Form
        Given I navigate to "feedback" page
        When I fill in feedback Form
        And I click on send button
        Then I see "/sendFeedback.html" in the url