/*
    Test suite to verify the security of the system
    Ensure users cannot access higher-privilege functions
    Both authenticated users (newly registered) and Unauthenticated access
*/

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

import { BlogsPage } from "../../support/pageobject/blogs.po";

describe("Security for a loged in standard user account for for UI", () => {
  beforeEach(() => {
    cy.fixture("users").then((credentials) => {
      cy.login(
        credentials.standardUser.username,
        credentials.standardUser.password
      );
    });
  });

  it("standard user can not edit Blog ", () => {
    cy.visit("/home/blog");
    BlogsPage.getAllBlogEdit().should("not.exist");
  });

  it("standard user can not add Blog ", () => {
    cy.visit("/home/blog");
    BlogsPage.getAddBlogLink().should("not.exist");
  });
});
