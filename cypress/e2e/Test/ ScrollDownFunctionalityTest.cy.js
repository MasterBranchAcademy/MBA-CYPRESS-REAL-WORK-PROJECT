import LOCATORS from "../../support/locators";
import HomePage from "../Page/HomePage";


describe('Scroll Down Functionality Test', () => {
    const homePage = new HomePage
    let user;
 before(() => {
        cy.fixture('userDatas/info').then((userInfo) => {
            user = userInfo
        })
    })
    it('Kullanici subscription butonunu gorebilmeli', () => {
        homePage.visitPage() 
        cy.title().should('eq', user.home.title) 
        homePage.scrollIntoViewMethod().should('be.visible') 
       // cy.contains(user.home.homePageText).scrollIntoView().should("be.visible") bu test case göre fazla. ikisi ayni test case icinmi
    });
    it('Kullanici arrow butonu kullanarak sayfayi asayi yukari yapabilmeli', () => {
        homePage.visitPage() 
        cy.title().should('eq', user.home.title) 
        homePage.subcribtionText().should('be.visible')
        cy.wait(2000)
        homePage.arrowButton();
        cy.contains(user.home.homePageText).should('be.visible')
    });

    });
    