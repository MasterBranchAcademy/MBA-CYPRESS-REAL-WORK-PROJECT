import LOCATORS from "../../support/locators";
import HomePage from "../Page/HomePage";
import LoginPage from "../Page/LoginPage";
import SignupPage from "../Page/SignupPage";
describe('User Login Test', () => {
    const homePage = new HomePage
    const loginPage = new LoginPage
    const signupPage = new SignupPage
    let user;

    before(() => {
        cy.fixture('userDatas/info').then((userInfo) => {
            user = userInfo
        })
    })
    it('Kullanici login yapabilmelli', () => {
        homePage.visitPage()
        cy.title().should('eq', user.home.title)
        cy.getBySel(LOCATORS.HOME_PAGE.LOGIN_BTN).click()
        cy.getBySel(LOCATORS.LOGIN_PAGE.LOGIN_ACCOUNT_TEXT).should('have.text', user.userLoginPage.loginAccountText)
        loginPage.userLogin(user)
        cy.getByCompoundSel(LOCATORS.HOME_PAGE.HEADER, LOCATORS.LOGIN_PAGE.LOGGED_AS_TEXT).should('be.visible')
    });
    it("Kullanici yanliş email ve password ile giriş yaptiginda  uyari mesaji alabilmeli", () => {
        user.userLoginPage.emailAddress = "testlogin@mail.com"
        homePage.visitPage()
        cy.getBySel(LOCATORS.HOME_PAGE.LOGIN_BTN).click()
        cy.getBySel(LOCATORS.LOGIN_PAGE.LOGIN_ACCOUNT_TEXT).should('have.text', user.userLoginPage.loginAccountText)
        loginPage.userLogin(user)
        cy.getBySel(LOCATORS.LOGIN_PAGE.LOGIN_ERROR_MESSAGE).should('have.text', user.loginPage.errorText)

    })
    it.only("Kullanici kayit olmadan odeme yapamamali", () => {
        homePage.visitPage()
        cy.contains(user.home.homePageText).should("be.visible")
        cy.getBySel(LOCATORS.HOME_PAGE.LOGIN_BTN).click()
        cy.getBySel(LOCATORS.LOGIN_PAGE.LOGIN_ACCOUNT_TEXT).should('have.text', user.userLoginPage.loginAccountText)
        loginPage.userLogin(user)
        cy.getByCompoundSel(LOCATORS.HOME_PAGE.HEADER, LOCATORS.LOGIN_PAGE.LOGGED_AS_TEXT).should('be.visible')
        cy.getBySel(LOCATORS.ADD_TO_CART.PRODUCT_1).contains('Add to cart').click()
        cy.getBySel(LOCATORS.ADD_TO_CART.VIEW_CART).click()
        cy.getBySel(LOCATORS.ADD_TO_CART.PRODUCT_1_PRICE).should('contain','Rs. 500')
        cy.getBySel(LOCATORS.ADD_TO_CART.PROCEED_TO_CHECKOUT_BTN).click()

        
    })

}); 