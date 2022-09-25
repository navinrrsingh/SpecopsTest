import { HomePage } from "../../support/pageobject/homepage.po";
import { PrivacyPage } from "../../support/pageobject/privacy.po";
import { NavigationBar } from "../../support/pageobject/nav.po";

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Verify navigation to basic pages", () => {
  it("Verify home page renders.", () => {
    cy.visit("/");
    HomePage.getHeading().should(
      "have.text",
      "Military Strength Encryption. The firepower to protect your transactions."
    );
  });

  it("Verify privacy policy rendering", () => {
    cy.visit("/");
    NavigationBar.getPrivacyLink().click();
    PrivacyPage.getPrivacyText().should(
      "contain.text",
      "All personal information submitted through the registration form, or other means, will not be shared with or sold to third parties."
    );
  });
});
