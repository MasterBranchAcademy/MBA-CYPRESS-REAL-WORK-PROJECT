import LOCATORS from "../../support/locators";
import HomePage from "../Page/HomePage";
import LoginPage from "../Page/LoginPage";
import SignupPage from "../Page/SignupPage";

describe('Register Test', () => {
    
    const homePage = new HomePage
    const loginPage = new LoginPage
    const signupPage = new SignupPage

    let user;

    before(() => {
        cy.fixture('userDatas/info').then((userInfo) => {
            user = userInfo
        })
    })
    after(() => {
        cy.deleteAccount()
  })
    it('Kullanici Hesap Olusturabilmeli', () => {
        homePage.visitPage()
        cy.title().should('eq', user.home.title)
        cy.getBySel(LOCATORS.HOME_PAGE.LOGIN_BTN).click()
        cy.getBySel(LOCATORS.LOGIN_PAGE.NEW_USER_TEXT).should('have.text', user.loginPage.newUserText)
        loginPage.signUp(user)
        cy.getBySel(LOCATORS.SIGNUP_PAGE.ENTER_ACCOUNT_TEXT).should('have.text', user.signUpPage.enterAccountText)
        signupPage.createAccount(user)
        cy.getByDataQa(LOCATORS.SIGNUP_PAGE.ACCOUNT_CREATED).should('be.visible')
        cy.getByDataQa(LOCATORS.SIGNUP_PAGE.CONTINUE_BTN).click()
        cy.getByCompoundSel(LOCATORS.HOME_PAGE.HEADER, LOCATORS.LOGIN_PAGE.LOGGED_AS_TEXT).should('be.visible')
    
})
});

