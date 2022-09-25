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

import { NavigationBar } from "../support/pageobject/nav.po";
import { LoginPage } from "../support/pageobject/login.po";
import { LogoutPage } from "../support/pageobject/logout.po";

import { CyptoRequest } from "../support/utilsURI";

Cypress.Commands.add("login", ($username, $password) => {
  cy.visit("/");
  NavigationBar.getLoginLink().click();
  LoginPage.getUserNameInput().type($username);
  LoginPage.getPasswordInput().type($password, { log: false });
  LoginPage.getLoginButon().click();
});

Cypress.Commands.add("loginWithoutUI", ($username, $pass) => {
  let chain = cy.request(CyptoRequest.PostLoginRoute($username, $pass));
  cy.visit("/");
  return chain;
});

Cypress.Commands.add("logout", () => {
  NavigationBar.getLogoutLink().click();

  //verify we're logged out by checking for the alert
  LogoutPage.getlogOutSuccessMessage().should(
    "contain.text",
    "You are now logged out."
  );
});
