import LOCATORS from "../../support/locators";

class SignupPage {
  createAccount(user) {
    cy.getByDataQa(LOCATORS.SIGNUP_PAGE.TITLE).find(LOCATORS.SIGNUP_PAGE.GENDER_MR).check().should("be.visible");
    cy.getByDataQa(LOCATORS.SIGNUP_PAGE.PASSWORD).type(user.userInfo.password);
    cy.getByDataQa(LOCATORS.SIGNUP_PAGE.DAYS).select(user.userInfo.dayOfBirth);
    cy.getByDataQa(LOCATORS.SIGNUP_PAGE.MONTHS).select(user.userInfo.monthOfBirth);
    cy.getByDataQa(LOCATORS.SIGNUP_PAGE.YEARS).select(user.userInfo.yearOfBirth);
    cy.getBySel(LOCATORS.SIGNUP_PAGE.NEWSLETTER).check();
    cy.getBySel(LOCATORS.SIGNUP_PAGE.PARTNERS).check();
    cy.getByDataQa(LOCATORS.SIGNUP_PAGE.FIRST_NAME).type(user.userInfo.firstName);
    cy.getByDataQa(LOCATORS.SIGNUP_PAGE.LAST_NAME).type(user.userInfo.lastName);
    cy.getByDataQa(LOCATORS.SIGNUP_PAGE.COMPANY).type(user.userInfo.company);
    cy.getByDataQa(LOCATORS.SIGNUP_PAGE.ADDRESS1).type(user.userInfo.address1);
    cy.getByDataQa(LOCATORS.SIGNUP_PAGE.ADDRESS2).type(user.userInfo.address2);
    cy.getByDataQa(LOCATORS.SIGNUP_PAGE.COUNTRY).select(user.userInfo.country);
    cy.getByDataQa(LOCATORS.SIGNUP_PAGE.STATE).type(user.userInfo.state);
    cy.getByDataQa(LOCATORS.SIGNUP_PAGE.CITY).type(user.userInfo.city);
    cy.getByDataQa(LOCATORS.SIGNUP_PAGE.ZIPCODE).type(user.userInfo.zipcode);
    cy.getByDataQa(LOCATORS.SIGNUP_PAGE.MOBILE_NUMBER).type(user.userInfo.mobilNumber);
    cy.getByDataQa(LOCATORS.SIGNUP_PAGE.CREATE_ACCOUNT_BTN).click();
  }
  clickLogin_SignupBtn(){
    cy.getBySel(LOCATORS.HOME_PAGE.LOGIN_BTN).click()
  }
  accountCreatedText(){
   return cy.getByDataQa(LOCATORS.SIGNUP_PAGE.ACCOUNT_CREATED)
  }
  clickContinueBtn(){
    cy.getByDataQa(LOCATORS.SIGNUP_PAGE.CONTINUE_BTN).click()
  }
}

export default SignupPage;
