/*
    Test suite to verify the administrator has the appropriate access when logged in
*/

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

import { CyptoRequest } from "../../support/utilsURI";

describe("Security Test for Administrator", () => {
  it("Without Login, admin can not add a blog post", () => {
    cy.request(
      CyptoRequest.PostAddBlogRoute(
        "Blogpost Add without login title",
        "Blogpost Add without login body"
      )
    ).then((response) => {
      cy.log(response.isOkStatusCode);
      expect(response.isOkStatusCode).to.not.equal(true);
    });
  });

  it("Without Login, admin can not edit a blog post", () => {
    var d = new Date();
    cy.request(
      CyptoRequest.PostEditBlogRoute(
        "7",
        "Blogpost Edit without login title. edited at " + d.toLocaleString(),
        "Blogpost Edit without login body. edited at " + d.toLocaleString()
      )
    ).then((response) => {
      cy.log(response.isOkStatusCode);
      expect(response.isOkStatusCode).to.not.equal(true);
    });
  });

  it("Without Login, admin can not delete a blog post", () => {
    // Todo - Work on which blog post to delete
    cy.request(CyptoRequest.GetDeleteBlogRoute("10")).then((response) => {
      cy.log(response.isOkStatusCode);
      expect(response.isOkStatusCode).to.not.equal(true);
    });
  });
});
