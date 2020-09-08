const url = "http://zero.webappsecurity.com/login.html";
const usernameInput = "#user_login";
const passwordInput = "#user_password";
const submitButton = "input[name='submit']";
const errorMessage = ".alert-error";

class LoginPage {
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
    
    static shouldShowErrorMessage() {
        cy.get(errorMessage).should("be.visible");
        cy.get(errorMessage).contains("Login and/or password are wrong.");  
    }
}

export default LoginPage;
