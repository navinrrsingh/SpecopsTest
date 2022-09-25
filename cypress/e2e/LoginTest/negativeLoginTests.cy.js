Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

import { LoginPage } from "../../support/pageobject/login.po";
import { NavigationBar } from "../../support/pageobject/nav.po";

describe("Login fail with - invalid login detzils UI", () => {
  it("Login fail - Admin user with invalid password", () => {
    cy.fixture("users").then((credentials) => {
      cy.login(credentials.administrator.username, "someInvalidPassword");
    });

    LoginPage.getloginSuccessMessage().should("not.exist");
  });

  it("Login fail - Standard user with invalid password", () => {
    cy.fixture("users").then((credentials) => {
      cy.login(credentials.standardUser.username, "someInvalidPassword");
    });
    LoginPage.getloginSuccessMessage().should("not.exist");
  });

  it("Login fail -  with an invalid username.", () => {
    cy.fixture("users").then((credentials) => {
      cy.login("someUsername", credentials.standardUser.password);
    });
    LoginPage.getloginSuccessMessage().should("not.exist");
  });
});

describe("Lagin fail with - invalid login deatils API", () => {
  it("Login fail -  Admin with invalid password", () => {
    cy.fixture("users").then((credentials) => {
      cy.loginWithoutUI(
        credentials.administrator.username,
        "someInvalidPassword"
      );
    });
    NavigationBar.getLoginLink().should("be.visible");
  });

  it("Login fail -  Standard with invalid password", () => {
    cy.fixture("users").then((credentials) => {
      cy.loginWithoutUI(
        credentials.standardUser.username,
        "someInvalidPassword"
      );
    });
    NavigationBar.getLoginLink().should("be.visible");
  });

  it("Login fail - with an invalid username.", () => {
    cy.fixture("users").then((credentials) => {
      cy.loginWithoutUI("someUsername", credentials.standardUser.password);
    });
    NavigationBar.getLoginLink().should("be.visible");
  });
});
