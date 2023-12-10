import LOCATORS from "../../support/locators";

class loginPageAccount {
  login(user) {
    cy.visit("/login");
    cy.getByDataQa(LOCATORS.LOGIN_PAGE.LOGIN_EMAIL).type(user.userInfo.email);
    cy.getByDataQa(LOCATORS.LOGIN_PAGE.LOGIN_PASSWORD).type(user.userInfo.wrongPassword);
    cy.getByDataQa(LOCATORS.LOGIN_PAGE.LOGIN_BTN).click();
  }
}

export default loginPageAccount;