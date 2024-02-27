import LOCATORS from "../../support/locators";
import HomePage from "../Page/HomePage";



describe('Contact Test', () => {

    const homePage = new HomePage
    const contactUsPage = new ContactUsPage
    let user;

    before(() => {
        cy.fixture('userDatas/info').then((userInfo) => {
            user = userInfo
        })
    })

    it('Kullanici Mesajini Iletebilmeli', () => {
        homePage.visitPage() 
        cy.title().should('eq', user.home.title) 
        homePage.clickContactUsBtn();
        contactUsPage.verifyGetInTouchText().should('be.visible')
        contactUsPage.fillContactForm(user);
        contactUsPage.clickUploadFile();
        cy.wait(2000)
        contactUsPage.attachFile();
        contactUsPage.clickSubmitBtn();  
        contactUsPage.verifySubmittedMessage().should('be.visible')
        contactUsPage.clickHomeBtn();
        cy.title().should('eq', user.home.title)
 });
});
