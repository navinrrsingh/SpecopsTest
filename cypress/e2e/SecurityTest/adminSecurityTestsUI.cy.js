/*
    Test suite to verify the administrator has the appropriate access when logged in
*/

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

import { BlogsPage } from "../../support/pageobject/blogs.po";
import { BlogsAddPage } from "../../support/pageobject/blogs-add.po";
import { BlogsEditPage } from "../../support/pageobject/blogs-edit.po";
import { CyptoIntercept } from "../../support/utilsURI";

describe("Security Test for Administrator", () => {
  beforeEach(() => {
    cy.fixture("users").then((credentials) => {
      cy.loginWithoutUI(
        credentials.administrator.username,
        credentials.administrator.password
      );
    });
  });

  it("Login with valid credentials, admin can edit a blog post.", () => {
    cy.visit("/Home/Blog");
    BlogsPage.getBlogEditAtIndex(0).should("be.visible");
    BlogsPage.getBlogDeleteAtIndex(0).should("be.visible");
    BlogsPage.getBlogEditAtIndex(0).click();
    cy.intercept(CyptoIntercept.getEditBlogRoute()).as("EditBlog"); //{ method: "POST", url: "/admin/EditBlog?blogID=*" }
    BlogsEditPage.getSubmitButton().click();
    cy.wait("@EditBlog").then((intercept) => {
      expect(intercept.response.statusCode).to.equal(200);
    });

    BlogsEditPage.getBlogConfimationMessage().should(
      "contain.text",
      "Blog Post Saved."
    );
  });

  it("Login with valid credentials, admin can add a blog post.", () => {
    cy.visit("/Home/Blog");
    BlogsPage.getAddBlogLink().click();
    BlogsAddPage.getHeading().should("contain.text", "Add Blog Post");
    BlogsAddPage.getBlogTitleInput().type("Cyrpto Currency Enegry Concumption");
    BlogsAddPage.typeIntoBodyInput(
      "Crypto has a dirty little secret that is very relevant to the real world: it uses a lot of energy"
    );

    cy.intercept(CyptoIntercept.getAddBlogRoute()).as("AddBlog");
    BlogsAddPage.getSubmitButton().click();
    cy.wait("@AddBlog").then((intercept) => {
      expect(intercept.response.statusCode).to.equal(200);
    });
    BlogsAddPage.getBlogConfimationMessage().should(
      "contain.text",
      "Blog Post Added."
    );
    // Todo - Impletement Cleanup
  });
});
