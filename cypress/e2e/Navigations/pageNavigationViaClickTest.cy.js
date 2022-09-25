import { PrivacyPage } from "../../support/pageobject/privacy.po";
import { BlogsPage } from "../../support/pageobject/blogs.po";
import { HowItWorks } from "../../support/pageobject/howItWroks.po";
import { LoginPage } from "../../support/pageobject/login.po";
import { Registration } from "../../support/pageobject/registration.po";
import { NavigationBar } from "../../support/pageobject/nav.po";

describe("Navigation via click verify titles", () => {
  it("Navigate to the privacy policy.", () => {
    cy.visit("/");
    NavigationBar.getPrivacyLink().click();
    cy.title().should("eq", "Privacy");
  });

  it("Navigate to the Blog.", () => {
    cy.visit("/");
    NavigationBar.getBlogLink().click();
    cy.title().should("eq", "Blog");
  });

  it("Navigate to the How it Works.", () => {
    cy.visit("/");
    NavigationBar.getHowItWorksLink().click();
    cy.title().should("eq", "How It Works");
  });

  it("Navigate to the Login Page.", () => {
    cy.visit("/");
    NavigationBar.getLoginLink().click();
    cy.title().should("eq", "Login");
  });

  it("Navigate to the Register.", () => {
    cy.visit("/");
    NavigationBar.getLoginLink().click();
    LoginPage.getRegistrationLink().click();
    cy.title().should("eq", "Register");
  });
});

describe("Navigation via Click verify heading", () => {
  it("Navigate to the privacy policy.", () => {
    cy.visit("/");
    NavigationBar.getPrivacyLink().click();
    PrivacyPage.getHeading().should("contain.text", "Privacy");
  });

  it("Navigate to the Blog.", () => {
    cy.visit("/");
    NavigationBar.getBlogLink().click();
    BlogsPage.getHeading().should("contain.text", "Blog");
  });

  it("Navigate to the How it Works.", () => {
    cy.visit("/");
    NavigationBar.getHowItWorksLink().click();
    HowItWorks.getHeading().should("contain.text", "How It Works");
  });

  it("Navigate to the Login Page.", () => {
    cy.visit("/");
    NavigationBar.getLoginLink().click();
    LoginPage.getUserNameInput().should("be.visible");
  });

  it("Navigate to the Register.", () => {
    cy.visit("/");
    NavigationBar.getLoginLink().click();
    LoginPage.getRegistrationLink().click();
    Registration.getFirstNameInput().should("be.visible");
  });
});
