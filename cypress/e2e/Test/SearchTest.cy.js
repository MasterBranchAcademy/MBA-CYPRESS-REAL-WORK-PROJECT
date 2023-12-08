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
        cy.deleteAccount();
    });
 
});