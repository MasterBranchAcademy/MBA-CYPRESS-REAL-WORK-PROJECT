import LOCATORS from "../../support/locators"
import HomePage from "../Page/HomePage"
import TestCases from "../Page/TestCasesPage"
describe("TestCases Tests", () => {
    const testPage = new HomePage()
    const testCasesPage = new TestCases()
    let user;
    before(() => {
        cy.fixture('userDatas/info').then((userInfo) => {
            user = userInfo
        })
    })

    it("Kullanici test case sayfasina basariyla erisebilmeli", () => {
        testPage.visitPage()
        cy.contains(user.home.homePageText).should("be.visible")
        testCasesPage.clickTestCases()
        testCasesPage.getTextTitle().should("be.visible")
    })

})