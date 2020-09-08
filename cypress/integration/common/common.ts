// Common step definitions which can be shared across all Steps

import { defineStep } from 'cypress-cucumber-preprocessor/steps';
import { url } from "../../../config";

defineStep("I open the HomePage", () => {
    cy.visit(url);
})

defineStep("I navigate to {string} page", (page) => {
    cy.visit(`${url}/${page}.html`);
})

defineStep('I wait for {int} milliseconds', time => {
    cy.wait(time);
});

defineStep('I see {string} in the title', title => {
    cy.title().should('include', title);
});

defineStep('I see {string} in the url', url => {
    cy.url().should('include', url);
})

defineStep('I reload the browser', () => {
    cy.reload();
})

defineStep("I have logged in", () => {
    cy.visit(`${url}/login.html`);
    cy.login("username", "password");
})