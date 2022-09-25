/*
    Test suite to verify login/logout functionality for administrators
*/
Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

import { NavigationBar } from "../../support/pageobject/nav.po";
import { LoginPage } from "../../support/pageobject/login.po";

describe("Validate Administrator login", () => {
  beforeEach(() => {
    cy.fixture("users").then((credentials) => {
      cy.login(
        credentials.administrator.username,
        credentials.administrator.password
      );
    });
  });

  it("Attempt to login with valid credentials, then logout.", () => {
    LoginPage.getloginSuccessMessage().should(
      "contain.text",
      "You are logged in"
    );
    cy.visit("/");
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
        credentials.administrator.username,
        credentials.administrator.password
      );
    });
  });

  it("Attempt to login with valid credentials, then logout.", () => {
    NavigationBar.getLogoutLink().should("be.visible");
    NavigationBar.getLogoutLink().should("be.visible");
    cy.logout();
    cy.visit("/");
    NavigationBar.getLoginLink().should("be.visible");
  });
});
