import LOCATORS from "../../support/locators"

class ProductQuantity {

   clickViewProductButton() {
      cy.getBySel(LOCATORS.PRODUCT_QUANTITY.VIEW_PRODUCT).click()
   }

   urununSayisiniArttirma() {

      return cy.get('#quantity').clear().type(4)

   }

   clickAddToCartButton() {
      cy.getBySel(LOCATORS.PRODUCT_QUANTITY.ADD_TO_CART_BUTTON).click()
   }

   clickViewCartButton() {
      cy.getBySel(LOCATORS.PRODUCT_QUANTITY.VIEW_CART_BUTTON).click()
   }

   verifyDetail(){
     return cy.getBySel(LOCATORS.PRODUCT_QUANTITY.QUANTITY_DETAIL)
   }
   
}
export default ProductQuantity