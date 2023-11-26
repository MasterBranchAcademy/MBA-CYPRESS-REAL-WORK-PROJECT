import LOCATORS from "../../support/locators"
import SearchPage from "../Page/SearchPage"

describe("Search Tests", () => {
    const searchPage = new SearchPage()

    let user;
    beforeEach(() => {
        cy.fixture('userDatas/info').then((userInfo) => {
            user = userInfo
        cy.visit("/")
   
    })
})

it("Kullanici Greenkart sayfasina basariyla urun aramasi yapabilmeli", () => {
    //const item = "Melon"
    const item = user.search.searchItem;
    searchPage.searchItem(item)
    cy.getByCompoundSel(LOCATORS.SEARCH_PAGE.PRODUCTS, LOCATORS.SEARCH_PAGE.PRODUCTS_NAME)
    .should("include.text", item)
    .and("have.length.gte", 1)
})
})