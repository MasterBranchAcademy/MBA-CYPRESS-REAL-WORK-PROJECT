import HomePage from "../Page/SearchPage"
import LOCATORS from "../../support/locators";

describe("Search Tests", () => {
    const testPage = new HomePage()
    let user;
    beforeEach(() => {
        cy.fixture('userDatas/info').then((userInfo) => {
            user = userInfo
        })
    })

    it("Kullanici test sayfasina basariyla erisebilmeli", () => {
   testPage.visitPage()
   cy.contains(user.home.homePageText).should("be.visible")
    })

})