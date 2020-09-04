import { verify } from "cypress/types/sinon";

export default class BasePage {
    static pause(ms) {
        cy.wait(ms);
    }

    static logMessage(message) {
        cy.log(message);
    }

    static setMobileViewport() {
        cy.viewport("iphone-x");
    }

    static setTabletViewport() {
        cy.viewport("ipad-2");
    }

    static setDesktop() {
        cy.viewport("macbook-13");
    }

    static setLargeDesktop() {
        cy.viewport(1980, 1080);
    }
}