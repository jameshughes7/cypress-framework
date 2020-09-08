/// <reference types="cypress" />

const nameInput = "#name";
const emailInput = "#email";
const subjectSelector = "#subject";
const commentInput = "#comment";
const sendMessageButton = "input[name='submit']";
import BasePage from "../pages/BasePage";
import { url } from "../../../../config";

export default class FeedbackPage extends BasePage {
    
    static visitFeedbackPage() {
        cy.visit(`${url}/feedback.html`);
    }

    static fillInFeedbackForm() {
        cy.fixture("feedback").then(data => {
            cy.get(nameInput).type(data.name);
            cy.get(emailInput).type(data.email);
            cy.get(subjectSelector).type(data.subject);
            cy.get(commentInput).type(data.message);
        })
    }

    static submitFeedbackForm() {
        cy.get(sendMessageButton).click();
    }

}