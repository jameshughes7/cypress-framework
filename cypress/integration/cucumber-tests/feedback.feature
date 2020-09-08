Feature: Send Feedback

    As a customer
    I can send my feedback via form

    Scenario: Submit Feedback Form
        Given I open feedback Form
        When I fill in feedback Form
        And I click on send button
        Then I see "/sendFeedback.html" in the url