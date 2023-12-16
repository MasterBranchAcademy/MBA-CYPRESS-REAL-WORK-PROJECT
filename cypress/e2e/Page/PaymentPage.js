import LOCATORS from "../../support/locators"

class PaymentPage {

    descriptionComment(user) {

        cy.getBySel(LOCATORS.PAYMENT_PAGE.DESCRIPTION_FORM).type(user.paymentPage.description)
    }
    clickPlaceOrderBtn() {
        cy.getBySel(LOCATORS.PAYMENT_PAGE.PLACE_ORDER_BTN).click()
    }
    detailOfPayment(user) {
        cy.getByDataQa(LOCATORS.PAYMENT_PAGE.NAME_ON_CARD).type(user.paymentPage.NameOnCard)
        cy.getByDataQa(LOCATORS.PAYMENT_PAGE.CARD_NUMBER).type(user.paymentPage.CardNumber)
        cy.getByDataQa(LOCATORS.PAYMENT_PAGE.CVC_NUMBER).type(user.paymentPage.cvc)
        cy.getByDataQa(LOCATORS.PAYMENT_PAGE.EXPIRATION_MONTH).type(user.paymentPage.expirationMonth)
        cy.getByDataQa(LOCATORS.PAYMENT_PAGE.EXPIRATION_YEAR).type(user.paymentPage.expirationYear)
    }
    clickPayAndConfirmBtn() {
        cy.getByDataQa(LOCATORS.PAYMENT_PAGE.PAY_AND_CONFIRM_ORDER_BTN).click()
    }
    verifyProductName() {
        return cy.getBySel(LOCATORS.ADD_TO_CART.PRODUCT_1_PRICE)
    }
    clickProceedToCheckoutBtn() {
        cy.getBySel(LOCATORS.ADD_TO_CART.PROCEED_TO_CHECKOUT_BTN).click()
    }

}
export default PaymentPage