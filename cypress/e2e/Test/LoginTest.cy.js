import LOCATORS from "../../support/locators";
import HomePage from "../Page/HomePage";
import LoginPage from "../Page/LoginPage";
import PaymentPage from "../Page/PaymentPage";
import SignupPage from "../Page/SignupPage";
describe('User Login Test', () => {
    const homePage = new HomePage
    const loginPage = new LoginPage
    const signupPage = new SignupPage
    const paymentPage = new PaymentPage

    let user;

    before(() => {
        cy.fixture('userDatas/info').then((userInfo) => {
            user = userInfo
        })
    })
    after(() => {
        cy.deleteAccount()
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
    it("Kullanici odeme yapmadan once kayit yapmali", () => {
        homePage.visitPage()
        cy.title().should('eq', user.home.title)
        loginPage.clickLoginBtn()
        cy.contains(user.loginPage.newUserText).should('be.visible')
        loginPage.signUp(user)
        cy.contains(user.signUpPage.enterAccountText).should('be.visible')
        signupPage.createAccount(user)
        signupPage.accountCreatedText().should('be.visible')
        signupPage.clickContinueBtn()
        cy.contains(user.home.loggedUserNameText).should('be.visible')
        homePage.clickProduct_1()
        homePage.clickView_CartBtn()
        cy.contains(user.productPage.productName).should('contain', 'Blue Top')
        paymentPage.clickProceedToCheckoutBtn()
        cy.contains(user.paymentPage.addressDetails).should('be.visible')
        cy.contains(user.paymentPage.reviewYourOrder).should('be.visible')
        paymentPage.descriptionComment(user)
        paymentPage.clickPlaceOrderBtn()
        paymentPage.detailOfPayment(user)
        paymentPage.clickPayAndConfirmBtn()
        cy.contains(user.paymentPage.confirmText).should('be.visible')


    })

}); 