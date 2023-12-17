import LOCATORS from "../../support/locators";
import HomePage from "../Page/HomePage";
import LoginPage from "../Page/LoginPage";
import SignupPage from "../Page/SignupPage";
describe('Payment Test', () => {
    const homePage = new HomePage
    const loginPage = new LoginPage
    const signupPage = new SignupPage
    let user;

    before(() => {
        cy.fixture('userDatas/info').then((userInfo) => {
            user = userInfo
        })
    })
    it('Kullanici siteye kaydolduktan sonra sipariş verip ödeme yapabilmelin', () => {
        homePage.visitPage()
        cy.title().should('eq', user.home.title)        
        cy.getBySel(LOCATORS.HOME_PAGE.LOGIN_BTN).click()
        cy.getBySel(LOCATORS.LOGIN_PAGE.LOGIN_ACCOUNT_TEXT).should('have.text', user.userLoginPage.loginAccountText)        
        loginPage.userLogin(user)            
        cy.getByCompoundSel(LOCATORS.HOME_PAGE.HEADER,LOCATORS.LOGIN_PAGE.LOGGED_AS_TEXT).should('be.visible')
        
        cy.contains(user.paymentPage.product).trigger('mouseover')
        cy.getBySel(LOCATORS.PAYMENT_PAGE.ADD_TO_CART_BTN).click({force: true})
        cy.getBySel(LOCATORS.PAYMENT_PAGE.CONTINUE_SHOPPING).click()
        cy.getBySel(LOCATORS.PAYMENT_PAGE.CART_BTN).click()
        cy.getBySel(LOCATORS.PAYMENT_PAGE.PROCEED_TO_CHECKOUT_BTN).should('be.visible')
        cy.getBySel(LOCATORS.PAYMENT_PAGE.PROCEED_TO_CHECKOUT_BTN).click()
        cy.contains(user.paymentPage.addressDetails).should('be.visible')
        cy.contains(user.paymentPage.reviewYourOrder).should('be.visible')
        cy.getBySel(LOCATORS.PAYMENT_PAGE.DESCRIPTION_FORM).type(user.paymentPage.description)
        cy.getBySel(LOCATORS.PAYMENT_PAGE.PLACE_ORDER_BTN).click()
        cy.getByDataQa(LOCATORS.PAYMENT_PAGE.NAME_ON_CARD).type(user.paymentPage.NameOnCard)
        cy.getByDataQa(LOCATORS.PAYMENT_PAGE.CARD_NUMBER).type(user.paymentPage.CardNumber)
        cy.getByDataQa(LOCATORS.PAYMENT_PAGE.CVC_NUMBER).type(user.paymentPage.cvc)
        cy.getByDataQa(LOCATORS.PAYMENT_PAGE.EXPIRATION_MONTH).type(user.paymentPage.expirationMonth)
        cy.getByDataQa(LOCATORS.PAYMENT_PAGE.EXPIRATION_YEAR).type(user.paymentPage.expirationYear)
        cy.getByDataQa(LOCATORS.PAYMENT_PAGE.PAY_AND_CONFIRM_ORDER_BTN).click()
        cy.contains(user.paymentPage.confirmText).should('be.visible')

    });
}); 