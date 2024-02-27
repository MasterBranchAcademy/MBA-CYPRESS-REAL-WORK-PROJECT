class ContactUsPage {
    verifyGetInTouchText() {
        return cy.getBySel(LOCATORS.CONTACT_US_PAGE.GET_IN_TOUCH_TEXT)
    }
    fillContactForm(user) {
        cy.getBySel(LOCATORS.CONTACT_US_PAGE.NAME).type(user.contactPageInfo.name)
        cy.getBySel(LOCATORS.CONTACT_US_PAGE.EMAIL).type(user.contactPageInfo.email)
        cy.getBySel(LOCATORS.CONTACT_US_PAGE.SUBJECT).type(user.contactPageInfo.subject)
        cy.getBySel(LOCATORS.CONTACT_US_PAGE.MESSAGE).type(user.contactPageInfo.message)
    }
    clickUploadFile() {
        cy.getBySel(LOCATORS.CONTACT_US_PAGE.UPLOAD_FILE).click()
    }
    attachFile() {
        cy.getBySel(LOCATORS.CONTACT_US_PAGE.UPLOAD_FILE).attachFile({ filePath: "../fixtures/userDatas/uploadFile.jpeg" })
    }
    clickSubmitBtn(){
        cy.getBySel(LOCATORS.CONTACT_US_PAGE.SUBMIT_BTN).click()
    }
    verifySubmittedMessage(){
       return cy.getBySel(LOCATORS.CONTACT_US_PAGE.SUCCESS)
    }
    clickHomeBtn(){        cy.getBySel(LOCATORS.CONTACT_US_PAGE.HOME).click()
    }
}
export default ContactUsPage
