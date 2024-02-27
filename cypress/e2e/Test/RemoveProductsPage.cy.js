import LOCATORS from "../../support/locators";
import HomePage from "../Page/HomePage";
import LoginPage from "../Page/LoginPage";
import SignupPage from "../Page/SignupPage";

describe('Remove Products From Cart', () => {
    const homePage = new HomePage
    const loginPage = new LoginPage
    const signupPage = new SignupPage
    let user;
    before(() => {
        cy.fixture('userDatas/info').then((userInfo) => {
            user = userInfo
        })
    })
 it('Kullanici istediği bir urunu sepetten cikartabilmeli', () => {
        homePage.visitPage()
        cy.contains(user.home.homePageText).should('be.visible')
        cy.contains(user.paymentPage.product).trigger('mouseover')
        cy.getBySel(LOCATORS.PAYMENT_PAGE.ADD_TO_CART_BTN).click({force: true})
        homePage.countinueShoppingClick();
        cy.getBySel(LOCATORS.CART_PAGE.CART_BTN).click()
        cy.getBySel(LOCATORS.CART_PAGE.X_BUTTON).click()
        cy.contains(user.assertion.assertionText).should('be.visible')
    });
});
