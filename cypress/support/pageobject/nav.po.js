export const NavigationBar = {
  getHomePageLink: () => cy.get("#homeLink"),
  getBlogLink: () => cy.get("li#blogLink > a"),
  getHowItWorksLink: () => cy.get("#howItWorks"),
  getPrivacyLink: () => cy.get("#privacyLink"),
  getLoginLink: () => cy.get("#loginLink"),
  getLogoutLink: () => cy.get("#logoutLink"),
};
