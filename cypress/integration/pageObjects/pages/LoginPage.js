import BasePage from "../pages/BasePage";

export default class LoginPage extends BasePage {
    
    static login(username, password) {
        cy.login(username, password);
    }

    static clickForgotPasswordLink() {
        cy.contains("Forgot your password ?")
    }

    static displayErrorMessage() {
        cy.isVisible(".alert-error");
        // cy.get(".alert alert-error").should("be.visible");
    }
}