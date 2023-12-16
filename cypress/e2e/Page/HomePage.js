import LOCATORS from "../../support/locators"

class HomePage {

    visitPage() {
        cy.visit("/")
    }
    loggedUserNameText(){
        return cy.getByCompoundSel(LOCATORS.HOME_PAGE.HEADER, LOCATORS.SIGNUP_PAGE.LOGGED_AS_TEXT)
    }
    clickProduct_1(){
        cy.getBySel(LOCATORS.ADD_TO_CART.PRODUCT_1).contains('Add to cart').click()
    }
    clickView_CartBtn(){
        cy.getBySel(LOCATORS.ADD_TO_CART.VIEW_CART).click() 
    }
}
export default HomePage
