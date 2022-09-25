/*
    Test suite to verify login/logout functionality for standard user
*/
import { NavigationBar } from "../../support/pageobject/nav.po";

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Validate Standard User login", () => {
  beforeEach(() => {
    cy.fixture("users").then((credentials) => {
      cy.login(
        credentials.standardUser.username,
        credentials.standardUser.password
      );
    });
  });

  it("Attempt to login with valid credentials, then logout.", () => {
    NavigationBar.getLogoutLink().should("be.visible");
    cy.logout();
    cy.visit("/");
    NavigationBar.getLoginLink().should("be.visible");
  });
});

describe("Validate Administrator without UI", () => {
  beforeEach(() => {
    cy.fixture("users").then((credentials) => {
      cy.loginWithoutUI(
        credentials.standardUser.username,
        credentials.standardUser.password
      );
    });
  });

  it("Attempt to login with valid credentials, then logout.", () => {
    NavigationBar.getLogoutLink().should("be.visible");
    cy.logout();
    cy.visit("/");
    NavigationBar.getLoginLink().should("be.visible");
  });
});
