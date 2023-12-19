import LOCATORS from "../../support/locators"

class CategoryPage {

    verifyProductsCategory() {
        return cy.getBySel(LOCATORS.CATEGORY.PRODUCTS)
    }

    clickJeans() {
        cy.getBySel(LOCATORS.CATEGORY.JEANS).click({ force: true })
    }
}
export default CategoryPage