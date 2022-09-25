describe("Navigation via visit", () => {
  it("Visit Home", () => {
    cy.visit("/Home");
    cy.title().should("eq", "Home Page");
  });

  it("Navigate to the privacy policy.", () => {
    cy.visit("/Home/Privacy");
    cy.title().should("eq", "Privacy");
  });

  it("Navigate to the Blog.", () => {
    cy.visit("/Home/Blog");
    cy.title().should("eq", "Blog");
  });

  it("Navigate to the How it Works.", () => {
    cy.visit("/Home/HowItWorks");
    cy.title().should("eq", "How It Works");
  });

  it("Navigate to the login.", () => {
    cy.visit("/Home/Login");
    cy.title().should("eq", "Login");
  });

  it("Navigate to the Register.", () => {
    cy.visit("/Home/Register");
    cy.title().should("eq", "Register");
  });
});
