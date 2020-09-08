declare namespace Cypress {
    interface Chainable {
      /**
       * Custom command to confirm if DOM element by attribute is visible.
       * @example cy.isVisible("#signin_button")
      */
     isVisible(element: string): Chainable<Element>

     /**
       * Custom command to confirm if DOM element by attribute is hidden.
       * @example cy.isHidden("#signin_button")
      */
     isHidden(element: string): Chainable<Element>

     /**
       * Custom command to set resolution of DOM.
       * @example cy.setResolution("size")
      */
     setResolution(size: string): Chainable<Element>

     /**
       * Custom command to set login to application.
       * @example cy.login("username", "password")
      */
     login(username: string, password: string): Chainable<Element>
    }

  }