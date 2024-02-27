import LOCATORS from "../../support/locators"

class HomePage {

    visitPage() {
        cy.visit("/")
    }
    loggedUserNameText() {
        return cy.getByCompoundSel(LOCATORS.HOME_PAGE.HEADER, LOCATORS.SIGNUP_PAGE.LOGGED_AS_TEXT)
    }
    clickProducts() {
        cy.getBySel(LOCATORS.ADD_TO_CART.PRODUCTS).should("be.visible").click()
    }
    clickProduct_1() {
        cy.getBySel(LOCATORS.ADD_TO_CART.PRODUCT_1).contains('Add to cart').click()
    }
   
    clickProduct_2() {
        cy.getBySel(LOCATORS.ADD_TO_CART.PRODUCT_2).contains('Add to cart').click()
    }
    countinueShoppingClick() {
        cy.getBySel(LOCATORS.ADD_TO_CART.COUNTINUE_SHOPPING).click()
    }
    clickView_CartBtn() {
        cy.getBySel(LOCATORS.ADD_TO_CART.WIEW_CART).click()
    }
    verifyCategoryTitle() {
        return cy.getBySel(LOCATORS.HOME_PAGE.CATEGORY);
    }
    clickWomen() {
        cy.getBySel(LOCATORS.HOME_PAGE.WOMEN).contains('Women').click()
    }
    clickDress() {
        cy.getBySel(LOCATORS.HOME_PAGE.DRESS).click()
    }
    scrollIntoViewMethod(){
    return cy.getBySel(LOCATORS.PAGE_SCROLL.SUBSCRIPTION_TEXT).scrollIntoView();
   }
    subcribtionText(){
    return cy.getBySel(LOCATORS.PAGE_SCROLL.SUBSCRIPTION_TEXT).trigger('mousedown')
    }
    arrowButton(){
        cy.getBySel(LOCATORS.PAGE_SCROLL.ARROW_BTN).click().trigger('mouseup','topRight')
    }
    verifyProduct_1_Price(){
       return cy.getBySel(LOCATORS.ADD_TO_CART.PRODUCT_1_PRICE)
    }
    verifyProduct_2_Price(){
        return cy.getBySel(LOCATORS.ADD_TO_CART.PRODUCT_2_PRICE)   
    }
    verifyProduct_1_Quantity(){
       return cy.getBySel(LOCATORS.ADD_TO_CART.PRODUCT_1_QUANTITY)   
    }
    verifyProduct_1_Total(){
        return cy.getBySel(LOCATORS.ADD_TO_CART.PRODUCT_1_TOTAL)

    }
    verifyProduct_2_Quantity(){
        return cy.getBySel(LOCATORS.ADD_TO_CART.PRODUCT_2_QUANTITY)   
    }
    verifyProduct_2_Total(){
        return cy.getBySel(LOCATORS.ADD_TO_CART.PRODUCT_2_TOTAL)
    }
    
    recommendedItemsText(){
        return cy.getBySel(LOCATORS.ADD_TO_CART.RECOMENDED_ITEMS)
    }
    clickRecommendedFirstItem(){
        cy.getBySel(LOCATORS.ADD_TO_CART.ADD_RECOMENDED).first().click()
    }
    verifyRecommendedProduct(){
        return cy.getBySel(LOCATORS.ADD_TO_CART.CART_PRODUCT)
    }
    clickContactUsBtn(){
        cy.getBySel(LOCATORS.CONTACT_US_PAGE.CONTACT_US_BTN).click();
    }

}
export default HomePage