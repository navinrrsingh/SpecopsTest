/*
    Test suite to verify the security of the system
    Ensure users cannot access higher-privilege functions
    Both authenticated users (newly registered) and Unauthenticated access
*/

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

import { BlogsPage } from "../../support/pageobject/blogs.po";

describe("Tests for no logged in user account", () => {
  it("WithoutLogin can not edit a blog post ", () => {
    cy.visit("/home/blog");
    BlogsPage.getAllBlogEdit().should("not.exist");
  });

  it("WithoutLogin can not add a blog post ", () => {
    cy.visit("/home/blog");
    BlogsPage.getAddBlogLink().should("not.exist");
  });

  it("WithoutLogin can not delete a blog post ", () => {
    cy.visit("/home/blog");
    BlogsPage.getAllBlogDelete().should("not.exist");
  });
});
