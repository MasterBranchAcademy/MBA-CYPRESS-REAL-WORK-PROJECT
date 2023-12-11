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
        })+
        cy.getBySel(LOCATORS.LOGIN_PAGE.LOGIN_ACCOUNT_TEXT).should('have.text', user.userLoginPage.loginAccountText)        
        loginPage.userLogin(user)            
        cy.getByCompoundSel(LOCATORS.HOME_PAGE.HEADER,LOCATORS.LOGIN_PAGE.LOGGED_AS_TEXT).should('be.visible')
    });
}); 