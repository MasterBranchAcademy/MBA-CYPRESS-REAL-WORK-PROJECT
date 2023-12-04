import HomePage from "../Page/HomePage"

describe("Homepage Tests", () => {
    const testPage = new HomePage()
    let user;
    before(() => {
        cy.fixture('userDatas/info').then((userInfo) => {
            user = userInfo
        })
    })

    it("Kullanici test sayfasina basariyla erisebilmeli", () => {
        testPage.visitPage()
        cy.contains(user.home.homePageText).should("be.visible")
    })

})