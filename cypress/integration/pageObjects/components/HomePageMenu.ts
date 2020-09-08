const homeMenuLink = "#homeMenu";
const onlineBankingLink = "#onlineBankingMenu";
const feedbackLink = "#feedback";

export default class HomePageLinks {
    static clickOnHomeMenuLink() {
        cy.get(homeMenuLink).click();
    }

    static clickOnBankingLink() {
        cy.get(onlineBankingLink).click();
    }

    static clickOnFeedbackLink() {
        cy.get(feedbackLink).click();
    }
}