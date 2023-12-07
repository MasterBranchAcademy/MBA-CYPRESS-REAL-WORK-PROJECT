import LOCATORS from "../../support/locators";

class LoginPage {
  signUp(user) {
    cy.visit("/login");
    cy.getByDataQa(LOCATORS.LOGIN_PAGE.SIGNUP_NAME).type(user.userInfo.userName);
    cy.getByDataQa(LOCATORS.LOGIN_PAGE.SIGNUP_EMAIL).type(user.userInfo.email);
    cy.getByDataQa(LOCATORS.LOGIN_PAGE.SIGNUP_BTN).click();
  }
}

export default LoginPage;
