import HomePage from "../Page/HomePage"
import LOCATORS from "../../support/locators";
describe("Add to Cart Tests", () => {
    const testPage = new HomePage()
    let user;
    before(() => {
        cy.fixture('userDatas/info').then((userInfo) => {
            user = userInfo
        })
    })
    it("Kullanici ürünleri basariliyla sepete ekleyebilmeli", () => {
        testPage.visitPage()
        cy.getBySel(LOCATORS.ADD_TO_CART.PRODUCTS).should("be.visible")
        cy.getBySel(LOCATORS.ADD_TO_CART.PRODUCTS).click()
        cy.getBySel(LOCATORS.ADD_TO_CART.PRODUCT_1).contains('Add to cart').should("be.visible")
        cy.getBySel(LOCATORS.ADD_TO_CART.PRODUCT_1).contains('Add to cart').click()
        cy.getBySel(LOCATORS.ADD_TO_CART.COUNTINUE_SHOPPING).should("be.visible")
        cy.getBySel(LOCATORS.ADD_TO_CART.COUNTINUE_SHOPPING).click()
        cy.getBySel(LOCATORS.ADD_TO_CART.PRODUCT_2).contains('Add to cart').should("be.visible")
        cy.getBySel(LOCATORS.ADD_TO_CART.PRODUCT_2).contains('Add to cart').click()
        cy.getBySel(LOCATORS.ADD_TO_CART.VIEW_CART).should("be.visible")
        cy.getBySel(LOCATORS.ADD_TO_CART.VIEW_CART).click()
        cy.getBySel(LOCATORS.ADD_TO_CART.PRODUCT_1_PRICE).should('contain','Rs. 500')
        cy.getBySel(LOCATORS.ADD_TO_CART.PRODUCT_2_PRICE).should('contain','Rs. 400')
        cy.getBySel(LOCATORS.ADD_TO_CART.PRODUCT_1_QUANTITY).should('contain','1')
        cy.getBySel(LOCATORS.ADD_TO_CART.PRODUCT_1_TOTAL).should('contain','Rs. 500')
        cy.getBySel(LOCATORS.ADD_TO_CART.PRODUCT_2_QUANTITY).should('contain','1')
        cy.getBySel(LOCATORS.ADD_TO_CART.PRODUCT_2_TOTAL).should('contain','Rs. 400')


    })

    it.only('should add recommended items to the cart', () => {
        cy.visit('/')
        cy.scrollTo('bottom')
        cy.getBySel(LOCATORS.ADD_TO_CART.RECOMENDED_ITEMS).should('be.visible')
        cy.getBySel(LOCATORS.ADD_TO_CART.ADD_RECOMENDED).first().click()
        cy.getBySel(LOCATORS.ADD_TO_CART.WIEW_RECOMMENDCART).contains('View Cart').click()
        cy.getBySel(LOCATORS.ADD_TO_CART.CART_PRODUCT).should('be.visible')
      });    

})