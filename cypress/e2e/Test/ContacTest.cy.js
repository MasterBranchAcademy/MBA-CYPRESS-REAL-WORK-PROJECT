import LOCATORS from "../../support/locators";
import HomePage from "../Page/HomePage";



describe('Contact Test', () => {

    const homePage = new HomePage
    let user;

    before(() => {
        cy.fixture('userDatas/info').then((userInfo) => {
            user = userInfo
        })
    })

    it('Kullanici Mesajini Iletebilmeli', () => {
        homePage.visitPage() 
        cy.title().should('eq', user.home.title)  
        cy.getBySel(LOCATORS.CONTACT_US_PAGE.CONTACT_US_BTN).click();
        cy.getBySel(LOCATORS.CONTACT_US_PAGE.GET_IN_TUCH_TEXT).should('be.visible')
        cy.getBySel(LOCATORS.CONTACT_US_PAGE.NAME).type(user.contactPageInfo.name)
        cy.getBySel(LOCATORS.CONTACT_US_PAGE.EMAIL).type(user.contactPageInfo.email)
        cy.getBySel(LOCATORS.CONTACT_US_PAGE.SUBJECT).type(user.contactPageInfo.subject)
        cy.getBySel(LOCATORS.CONTACT_US_PAGE.MESSAGE).type(user.contactPageInfo.message)
        cy.getBySel(LOCATORS.CONTACT_US_PAGE.UPLOAD_FILE).click()
        cy.wait(2000)
        cy.getBySel(LOCATORS.CONTACT_US_PAGE.UPLOAD_FILE).attachFile({filePath: "../fixtures/userDatas/uploadFile.jpeg"})
        cy.getBySel(LOCATORS.CONTACT_US_PAGE.SUBMIT_BTN).click()
        cy.getBySel(LOCATORS.CONTACT_US_PAGE.SUCCESS).should('be.visible')
        cy.getBySel(LOCATORS.CONTACT_US_PAGE.HOME).click()
        cy.getBySel(LOCATORS.CONTACT_US_PAGE.HOMEVISIBLE).should('be.visible')
       
 });
});
