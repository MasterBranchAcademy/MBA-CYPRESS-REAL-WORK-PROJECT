import SearchPage from "../Page/SearchPage"
import LOCATORS from "../../support/locators";

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
        const item = user.search.searchItem;
        searchPage.searchItem(item)
        cy.getByCompoundSel(LOCATORS.SEARCH_PAGE.PRODUCTS, LOCATORS.SEARCH_PAGE.PRODUCTS_NAME)
            .should("include.text", item)
            .and("have.length.gte", 1)
    })
    it.only("Kullanici sepete basariyla urun ekleyebimeli", () => {
       searchPage.sepeteUrunEkle(1)
       cy.get(".cart-info tr td").eq(2).find("strong").should("have.text", "1")  
       })
})