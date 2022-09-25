export const LoginPage = {
  getUserNameInput: () => cy.get("#userName"),
  getPasswordInput: () => cy.get("#exampleInputPassword1"),
  getLoginButon: () => cy.get("#loginButton"),
  getloginSuccessMessage: () => cy.get("div[role='alert']"),
  getRegistrationLink: () => cy.get("a").contains("Register"),
};
