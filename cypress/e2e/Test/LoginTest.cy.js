import LOCATORS from "../../support/locators";
import HomePage from "../Page/HomePage";
import LoginPage from "../Page/LoginPage";

describe('User Login Test', () => {
    const homePage = new HomePage
    const loginPage = new LoginPage

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
}); 