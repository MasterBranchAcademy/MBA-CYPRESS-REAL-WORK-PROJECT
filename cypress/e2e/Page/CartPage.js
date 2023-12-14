import LOCATORS from "../../support/locators"

class CartPage {
    visitCartPage() {
        cy.visit("/view_cart")
    }

    getShoppingCartText(){
        return cy.getBySel(LOCATORS.CART_PAGE.SHOPPING_CART_TEXT)
    }

    clickToCheckoutBtn(){
        cy.getBySel(LOCATORS.CART_PAGE.CHECKOUT_BTN).click()
    }

    clickToModalRegisterLoginBtn(){
        cy.getBySel(LOCATORS.CART_PAGE.CHECKOUT_MODAL_REGISTER_LOGIN_BTN).click()
    }
}

export default CartPage