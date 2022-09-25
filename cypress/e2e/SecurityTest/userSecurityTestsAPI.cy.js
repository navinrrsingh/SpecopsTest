/*
    Test suite to verify the administrator has the appropriate access when logged in
*/

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

import { CyptoRequest } from "../../support/utilsURI";

describe("Security Test for standard user for API", () => {
  beforeEach(() => {
    cy.fixture("users").then((credentials) => {
      cy.loginWithoutUI(
        credentials.standardUser.username,
        credentials.standardUser.password
      );
    });
  });

  it("Login with valid credentials, standard user can not edit a blog post.", () => {
    cy.request(
      CyptoRequest.PostEditBlogRoute(
        "7",
        "Navin Title text cypto",
        "Navin Body text cypto"
      )
    ).then((response) => {
      cy.log(response.isOkStatusCode);
      expect(response.isOkStatusCode).to.not.equal(true);
    });

    cy.visit("/Home/Blog");
    // Todo - Impletement Cleanup
  });

  it("Login with valid credentials, standard user can add a blog post.", () => {
    cy.request(
      CyptoRequest.PostAddBlogRoute("Navin Title text", "Navin Body text")
    ).then((response) => {
      cy.log(response.isOkStatusCode);
      expect(response.isOkStatusCode).to.not.equal(true);
    });
    cy.visit("/Home/Blog");

    // Todo - Impletement Cleanup
  });

  it("Login with valid credentials, standard user can not delete a blog post.", () => {
    // Todo - Work on which blog post to delete
    cy.request(CyptoRequest.GetDeleteBlogRoute("9")).then((response) => {
      cy.log(response.isOkStatusCode);
      expect(response.isOkStatusCode).to.not.equal(true);
    });
    cy.visit("/Home/Blog");

    // Todo - Impletement Cleanup
  });
});
