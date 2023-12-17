import HomePage from "../Page/HomePage"
import LoginPage from "../Page/LoginPage"
import LOCATORS from "../../support/locators"
describe('User Can See All Details After Entering  To First Product Details ', ()=>{
const hmePage = new HomePage()
const lognPage = new LoginPage()
let user
before(() => {
    cy.fixture('userDatas/info').then((userInfo) => {
        user = userInfo
    })
})
it('User Can See All Details After Entering  To First Product Details',()=>{
    hmePage.visitPage()
    cy.getBySel(LOCATORS.HOME_PAGE.HEADER).should("be.visible");
    cy.getBySel(LOCATORS.HOME_PAGE.PRODUCTS_BTN).click()
    cy.getBySel(LOCATORS.PRODUCT_PAGE.ALL_PRODUCTS_TEXT).should('be.visible')
    cy.getBySel(LOCATORS.PRODUCT_PAGE.ALL_PRODUCT).should('be.visible')
    cy.getBySel(LOCATORS.PRODUCT_PAGE.VIEW_PRODUCT_BTN).click()
    cy.getBySel(LOCATORS.PRODUCT_PAGE.FIRST_PRODUCT_NAME).should('be.visible')
    cy.getBySel(LOCATORS.PRODUCT_PAGE.FIRST_PRODUCT_PRICE).should('be.visible')
    cy.getBySel(LOCATORS.PRODUCT_PAGE.FIRST_PRODUCT_AVAILABILITY).should('be.visible')
    cy.getBySel(LOCATORS.PRODUCT_PAGE.FIRST_PRODUCT_CONDITION).should('be.visible')
    cy.getBySel(LOCATORS.PRODUCT_PAGE.FIRST_PRODUCT_BRAND).should('be.visible')
  })
})