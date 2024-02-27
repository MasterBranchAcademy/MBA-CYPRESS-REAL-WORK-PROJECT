import LOCATORS from "../../support/locators"

class CategoryPage {

    verifyProductsCategory() {
        return cy.getBySel(LOCATORS.PRODUCT_PAGE.PRODUCT_BTN)
    }
    
    verifyProductsCategory() {
        return cy.getBySel(LOCATORS.CATEGORY.WOMAN_PAGE_TITLE );
    }

    clickJeans() {
        cy.getBySel(LOCATORS.CATEGORY.JEANS).click({ force: true })
    }
}
export default CategoryPage