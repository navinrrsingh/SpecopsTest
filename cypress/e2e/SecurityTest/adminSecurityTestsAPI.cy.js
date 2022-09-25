/*
    Test suite to verify the administrator has the appropriate access when logged in
*/

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

import { CyptoRequest } from "../../support/utilsURI";

describe("Security Test for Administrator for API", () => {
  beforeEach(() => {
    cy.fixture("users").then((credentials) => {
      cy.loginWithoutUI(
        credentials.administrator.username,
        credentials.administrator.password
      );
    });
  });

  it("Login with valid credentials, admin can edit a blog post.", () => {
    cy.request(
      CyptoRequest.PostEditBlogRoute(
        "7",
        "Navin Title text cypto",
        "Navin Body text cypto"
      )
    ).then((response) => {
      cy.log(response.isOkStatusCode);
    });

    cy.visit("/Home/Blog");
    // Todo - Impletement Cleanup
  });

  it("Login with valid credentials, admin can add a blog post.", () => {
    cy.request(
      CyptoRequest.PostAddBlogRoute("Navin Title text", "Navin Body text")
    ).then((response) => {
      cy.log(response.isOkStatusCode);
    });
    cy.visit("/Home/Blog");

    // Todo - Impletement Cleanup
  });

  it("Login with valid credentials, admin can delete a blog post.", () => {
    // Todo - which blog post to delete
    cy.request(CyptoRequest.GetDeleteBlogRoute("12")).then((response) => {
      cy.log(response.isOkStatusCode);
    });
    cy.visit("/Home/Blog");

    // Todo - Impletement Cleanup
  });
});
