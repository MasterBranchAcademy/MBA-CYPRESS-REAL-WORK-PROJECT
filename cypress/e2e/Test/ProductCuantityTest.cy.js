import HomePage from "../Page/HomePage"
import LOCATORS from "../../support/locators";

describe('Product Quantity in Cart Test', () => {
    const homePage = new HomePage
    
    let user;

    before(() => {
       cy.fixture('userDatas/info').then((userInfo) => {
            user = userInfo
        })
        
    })
    it('Kullanici sayisini arttirdigi urunu sepette dogrulayabilmeli', () => {
        homePage.visitPage().should('have.text', user.homePage.homePageText)
    })
    });