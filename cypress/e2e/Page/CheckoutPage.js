import LOCATORS from "../../support/locators"

class CheckoutPage {
    verifyAddressDetails(user){
        cy.get(LOCATORS.CHECKOUT_PAGE.DELIVERY_ADDRESS.FIRST_NAME_LAST_NAME).should('contain', user.userInfo.userName)
        cy.get(LOCATORS.CHECKOUT_PAGE.DELIVERY_ADDRESS.ADDRESS1_ADDRESS2, {timeout: 5000}).should('contain', user.userInfo.address1)
       // cy.get(LOCATORS.CHECKOUT_PAGE.DELIVERY_ADDRESS.CITY_STATE_POSTCODE, {timeout: 5000}).should('contain', user.userInfo.city)
        cy.get(LOCATORS.CHECKOUT_PAGE.DELIVERY_ADDRESS.COUNTRY).should('contain', user.userInfo.country)
        cy.get(LOCATORS.CHECKOUT_PAGE.DELIVERY_ADDRESS.PHONE).should('contain', user.userInfo.mobilNumber)
    }

    reviewOrder(product, productName){
        cy.getByCompoundSel(product, LOCATORS.CHECKOUT_PAGE.REVIEW_ORDER.PRODUCT_TITLE).should('contain', productName)
        cy.getByCompoundSel(product, LOCATORS.CHECKOUT_PAGE.REVIEW_ORDER.PRODUCT_PRICE).should('be.visible')
        cy.getByCompoundSel(product, LOCATORS.CHECKOUT_PAGE.REVIEW_ORDER.QUANTITY).should('be.visible')
        cy.getByCompoundSel(product, LOCATORS.CHECKOUT_PAGE.REVIEW_ORDER.TOTAL).should('be.visible')
    }

    typeTextInCommentArea(text){
        cy.get(LOCATORS.CHECKOUT_PAGE.COMMENT_TEXT_AREA).type(text)
    }

    clickToPlaceOrderBtn(){
        cy.get(LOCATORS.CHECKOUT_PAGE.PLACE_ORDER_BTN).click()
    }
}

export default CheckoutPage