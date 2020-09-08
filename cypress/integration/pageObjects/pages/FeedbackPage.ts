/// <reference types="cypress" />

const url = "http://zero.webappsecurity.com/feedback.html";
const nameInput = "#name";
const emailInput = "#email";
const subjectSelector = "#subject";
const commentInput = "#comment";
const sendMessageButton = "input[name='submit']";
import BasePage from "../pages/BasePage";

export default class FeedbackPage extends BasePage {
    static visit() {
        cy.visit(url);
    }

    static fillInFeedbackForm() {
        cy.fixture("feedback").then(data => {
            const name = data.name;
            const email = data.email;
            const subject = data.subject;
            const message = data.message;
        
            cy.get(nameInput).type(name);
        cy.get(emailInput).type(email);
        cy.get(subjectSelector).type(subject);
        cy.get(commentInput).type(message);
        })
    }

    static submitFeedbackForm() {
        cy.get(sendMessageButton).click();
    }

}