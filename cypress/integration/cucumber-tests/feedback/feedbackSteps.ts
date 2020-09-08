import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import FeedbackPage from '../../pageObjects/pages/FeedbackPage';
import HomePage from '../../pageObjects/pages/HomePage';

Given("I open feedback Page", () => {
    FeedbackPage.visitFeedbackPage();
})
        
When("I fill in feedback Form", () => {
    FeedbackPage.fillInFeedbackForm();
}) 
        
When("I click on send button", () => {
    FeedbackPage.submitFeedbackForm();
})

Then("I see {string} in the url", (title) => {
    cy.url().should('include', title);
})