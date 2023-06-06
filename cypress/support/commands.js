// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add("login", () => {
  cy.visit("http://localhost:3000/authentication/login");
  cy.wait(1000);
  cy.get('input[name="email"]').type("admin@ujian.com");
  cy.get('input[name="password"]').type("123");
  cy.get('button[type="submit"]').click();
  cy.contains("Hi,").should("be.visible", {
    timeout: 3000,
    delay: 2000,
  });
});
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
