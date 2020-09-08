/// <reference types="../../../support" />

const url = "http://zero.webappsecurity.com/login.html";
const usernameInput = "#user_login";
const passwordInput = "#user_password";
const submitButton = "input[name='submit']";
const errorMessage = ".alert-error";

import BasePage from "../pages/BasePage";

export default class LoginPage extends BasePage {

    static visitLoginPage() {
        cy.visit(url);
    }

    static fillUserName(name) {
        cy.get(usernameInput).type(name)
    };

    static fillPassword(password) {
        cy.get(passwordInput).type(password);
    }

    static submit() {
        cy.get(submitButton).click();
    }
    
    static login(username, password) {
        cy.login(username, password);
    }

    static clickForgotPasswordLink() {
        cy.contains("Forgot your password ?")
    }

    static shouldShowErrorMessage() {
        cy.isVisible(errorMessage);
        cy.get(errorMessage).contains("Login and/or password are wrong.");  
    }
}