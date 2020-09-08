import { url, loginUsername, loginPassword} from "../../../config";
import Navbar from "../pageObjects/components/NavBar";
import LoginPage from "../pageObjects/pages/LoginPage";
import NavBar from "../pageObjects/components/NavBar";

describe('Login Failed test', () => {
    before(function() {
        cy.visit(url);
        Navbar.clickSignIn();
    })

    it('should try to login with invlaid credentials', () => {
        LoginPage.login("invalid username", "invalid password");
    });

    it('should display error message', () => {
        LoginPage.displayErrorMessage();
    });
});

describe('Login Success test', () => {
    before (function() {
        cy.visit(url);
        NavBar.clickSignIn();
    })

    it('should login with valid credentials', () => {
        LoginPage.login(loginUsername, loginPassword);
    });

    it('should logout from application', () => {
        Navbar.logout();
        Navbar.displaySignInButton();
    });
});