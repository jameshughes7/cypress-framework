import BasePage from "../pages/BasePage";
import NavBar from "../components/NavBar";
import HomePageMenu from "../components/HomePageMenu";

export default class HomePage extends BasePage {
    static navigateToLoginPage() {
        NavBar.clickSignIn();
    }

    static navigateToOnlineBankingPage() {
        HomePageMenu.clickOnBankingLink();
    }

    static navigateToFeedbackPage() {
        HomePageMenu.clickOnFeedbackLink();
    }

}