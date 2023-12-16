import LOCATORS from "../../support/locators";

class PaymentPage {
  enterPaymentDetails(name, cardNumber, cvc, expiryMonth, expiryYear) {
    cy.getByDataQa(LOCATORS.PAYMENT_PAGE.NAME_ON_CARD).type(name);
    cy.getByDataQa(LOCATORS.PAYMENT_PAGE.CARD_NUMBER).type(cardNumber);
    cy.getByDataQa(LOCATORS.PAYMENT_PAGE.CVC_NUMBER).type(cvc);
    cy.getByDataQa(LOCATORS.PAYMENT_PAGE.EXPIRATION_MONTH).type(expiryMonth);
    cy.getByDataQa(LOCATORS.PAYMENT_PAGE.EXPIRATION_YEAR).type(expiryYear);
  }

  clickToPayBtn() {
    cy.getByDataQa(LOCATORS.PAYMENT_PAGE.PAY_AND_CONFIRM_ORDER_BTN).click();
  }

  getSuccessTextMessage() {
    return cy.get(LOCATORS.PAYMENT_PAGE.SUCCESS_MESSAGE);
  }
}

export default PaymentPage;
