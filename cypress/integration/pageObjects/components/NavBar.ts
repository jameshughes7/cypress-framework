/// <reference types="../../../support" />

const zeroBrandIcon = ".brand";
const searchInput = "#searchTerm";
const signInButton = "#signin_button";

export default class NavBar {

    static clickOnLogo() {
        cy.get(zeroBrandIcon).click();
    }

    static displaySignInButton() {
        cy.isVisible("#signin_button");
    }

    static fillSearchInput(input) {
        cy.get(searchInput)
        .type(`${input} {enter}`);
    }

    static clickSignIn() {
        cy.get(signInButton).click();
    }

    static clickSettings() {
        cy.contains("Settings").click();
    }

    static logout() {
        cy.contains("username").click();
        cy.get("#logout_link").click();
    }
}