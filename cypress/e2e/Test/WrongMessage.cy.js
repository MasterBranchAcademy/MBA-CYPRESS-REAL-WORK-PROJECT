import HomePage from "../Page/HomePage"
import LOCATORS from "../../support/locators";
import LoginPageAccount from "../Page/LoginPageAcount";
describe("wrong password Tests", () => {
    const testPage = new HomePage()
    const loginPageAccount = new LoginPageAccount()
    let user;
    before(() => {
        cy.fixture('userDatas/info').then((userInfo) => {
            user = userInfo
        })
    })
    it.only("Kullanici yanliş email ve password ile giriş yaptiginda  uyari mesaji alabilmeli", () => {
        testPage.visitPage()
        cy.getBySel(LOCATORS.HOME_PAGE.LOGIN_BTN).click()
        cy.getBySel(LOCATORS.LOGIN_PAGE.LOGIN_ACOUNT_TEXT).should('have.text', user.loginPage.loginToAccountText)
        loginPageAccount.login(user)
        cy.getByDataQa(LOCATORS.LOGIN_PAGE.LOGIN_BTN).click()
        cy.getBySel(LOCATORS.LOGIN_PAGE.LOGIN_ERROR_MESSAGE).should('have.text', user.loginPage.errorText)
    })

})


