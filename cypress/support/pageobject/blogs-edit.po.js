export const BlogsEditPage = {
  getHeading: () => cy.get("h1"),
  getBlogTitleInput: () => cy.get("#title"),
  getBlogBodyInput: () =>
    cy
      .get("#postBody_ifr")
      .its("0.contentDocument")
      .then(($dom) => {
        return cy.wrap($dom).within(() => {
          return cy.get("body>p");
        });
      }),

  typeIntoBodyInput: (bodytext) =>
    cy
      .get("#postBody_ifr")
      .its("0.contentDocument")
      .then(($dom) => {
        cy.wrap($dom).within(() => {
          cy.get("body>p").type(bodytext);
        });
      }),

  getBlogBodyInputXXX: () => cy.get("[data-id='postBody'] > p"),
  getSubmitButton: () => cy.get("button").contains("Submit"),
  getBlogConfimationMessage: () => cy.get("[role='alert']"),
};
