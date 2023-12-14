import LOCATORS from "../../support/locators";
import HomePage from "../Page/HomePage"
import ProductPage from "../Page/ProductPage";


describe("Homepage Tests", () => {
    const homePage = new HomePage()
    let user;
    before(() => {
        cy.fixture('userDatas/info').then((userInfo) => {
            user = userInfo
        })
    })
    it("Kullanici  anasayfaya basariyla erisebilmeli", () => {
        homePage.visitPage()
        cy.contains(user.home.homePageText).should("be.visible")
    })
})
describe.only("Searching Test", () => {
    const productPage = new ProductPage()
    let user;
    const homePage = new HomePage()
    before(() => {
        cy.fixture('userDatas/info').then((userInfo) => {
            user = userInfo
        })
        homePage.visitPage()
    })
    it("Kullanici mevcut butun urunleri goruntuleyebilmeli", () => {

        cy.getBySel(LOCATORS.HOME_PAGE.PRODUCTS_BTN).click();
        cy.getBySel(LOCATORS.PRODUCT_PAGE.ALL_PRODUCTS_TEXT).should('be.visible')
        cy.getBySel(LOCATORS.PRODUCT_PAGE.SEARCH_BOX).type(user.productPage.productName);
        cy.getBySel(LOCATORS.PRODUCT_PAGE.SEARCH_ITEM).click();
        cy.getBySel(LOCATORS.PRODUCT_PAGE.SEARCHED_PRODUCTS_TEXT).should('be.visible')
    })

})
