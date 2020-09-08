import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import LoginPage from "../../pageObjects/pages/LoginPage";
import HomePage from "../../pageObjects/pages/HomePage";
import NavBar from '../../pageObjects/components/NavBar';

Given("I open login page", () => {
    LoginPage.visitLoginPage();
}) 

Given("I navigate to login page", () => {
    HomePage.navigateToLoginPage();
})

When("I fill username with {string}", username => {
    LoginPage.fillUserName(username);
})

When("I fill password with {string}", (password) => {
    LoginPage.fillPassword(password);
})

When("I click on submit login", () => {
    LoginPage.submit();
})

When("I Logout", () => {
    NavBar.logout();
})

Then('I should see homepage', () => {
    cy.get('#account_summary_tab').should('be.visible');
})

Then('I should see error message', () => {
    LoginPage.shouldShowErrorMessage();
})

Then("I should see the signIn button activated", () => {
    NavBar.displaySignInButton();
})