import LOCATORS from "../../support/locators";
import HomePage from "../Page/HomePage"

describe("Remove Products From Cart", () => {
    const testPage = new HomePage()
    let user;
    before(() => {
        cy.fixture('userDatas/info').then((userInfo) => {
            user = userInfo
        })
    })
 it("Kullanici istediği bir urunu sepetten çikartabilmeli", () => {
        testPage.visitPage()
        cy.contains(user.home.homePageText).should("be.visible")
        cy.contains(user.assertion.product).trigger('mouseover')
        cy.getBySel(LOCATORS.REMOVE_PRODUCT_PAGE.ADD_TO_CART_BTN).click({ force: true })
        cy.getBySel(LOCATORS.REMOVE_PRODUCT_PAGE.CONTINUE_SHOPPING).click()
        cy.getBySel(LOCATORS.REMOVE_PRODUCT_PAGE.CART_BTN).click()
        cy.getBySel(LOCATORS.REMOVE_PRODUCT_PAGE.X_BUTTON).click()
        cy.contains(user.assertion.assertionText).should("be.visible")
    })
})