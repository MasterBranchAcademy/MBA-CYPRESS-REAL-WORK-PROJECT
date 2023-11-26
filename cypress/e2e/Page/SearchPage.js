import LOCATORS from "../../support/locators";
class SearchPage {

    searchItem(item) {
        cy.getByCompoundSel(LOCATORS.SEARCH_PAGE.SEARCH, LOCATORS.SEARCH_PAGE.SEARCH_KEYWORD).click().type(item)
    }
}
export default SearchPage