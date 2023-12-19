import HomePage from "../Page/HomePage"
import CategoryPage from "../Page/CategoryPage"
import LOCATORS from "../../support/locators"


describe("Category Test", () => {
    const homePage = new HomePage
    const categoryPage = new CategoryPage
    let user;
    before(() => {
        cy.fixture('userDatas/info').then((userInfo) => {
            user = userInfo
        })
    })
    it("Kullanici ana sayfada sol bolumundeki urunlerin kategorilerine erisebilmeli ", () => {
        homePage.visitPage()
        homePage.verifyCategoryTitle().should('have.text', user.home.category)
        homePage.clickWomen()
        homePage.clickDress()
        categoryPage.verifyProductsCategory().contains(user.categoryPage.text_Dress)
        categoryPage.clickJeans()
        categoryPage.verifyProductsCategory().contains(user.categoryPage.text_Jeans)
    })
})