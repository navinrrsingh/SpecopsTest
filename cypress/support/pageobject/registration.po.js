export const Registration = {
  getUserNameInput: () => cy.get("#username"),
  getFirstNameInput: () => cy.get("#firstName"),
  getLastNameInput: () => cy.get("#lastName"),
  getEmailInput: () => cy.get("#exampleInputEmail1"),
  getPasswordInput: () => cy.get("#exampleInputPassword1"),
  getConfirmPasswordInput: () => cy.get("confirmpassword"),
  getSubmitButton: () => cy.get("button[type='submit']"),
};
