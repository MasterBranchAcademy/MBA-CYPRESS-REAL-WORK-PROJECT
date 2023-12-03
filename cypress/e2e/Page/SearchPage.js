import LOCATORS from "../../support/locators";
class SearchPage {

    searchItem(item) {
        cy
            .getByCompoundSel(LOCATORS.SEARCH_PAGE.SEARCH, LOCATORS.SEARCH_PAGE.SEARCH_KEYWORD).click().type(item)
    }
sepeteUrunEkle(index){
    cy.get(".product")
    .eq(index) //contains("text olarak urun ismi")
    .find(".product-action")
    .click()
}
}
export default SearchPage