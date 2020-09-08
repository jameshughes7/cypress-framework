/// <reference types="cypress" />

const url = "http://zero.webappsecurity.com/feedback.html";
const nameInput = "#name";
const emailInput = "#email";
const subjectSelector = "#subject";
const commentInput = "#comment";
const sendMessageButton = "input[name='submit']";

class FeedbackPage {
    static visit() {
        cy.visit(url);
    }

    static fillInFeedbackForm() {
        cy.get(nameInput).type("Name");
        cy.get(emailInput).type("Name@email.com");
        cy.get(subjectSelector).type("Subject");
        cy.get(commentInput).type("My comment");
    }

    static submitFeedbackForm() {
        cy.get(sendMessageButton).click();
    }

}

export default FeedbackPage;