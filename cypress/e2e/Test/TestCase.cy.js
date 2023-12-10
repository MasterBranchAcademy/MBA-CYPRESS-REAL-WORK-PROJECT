import LOCATORS from "../../support/locators"
import HomePage from "../Page/HomePage"
import TestCase from "../Page/TestCasePage"
describe("TestCase Tests", () => {
     const testPage = new HomePage()
     const testCasePage=new TestCase()

it("Kullanici test case sayfasina basariyla erisebilmeli", () => {
    testPage.visitPage()
    testCasePage.clickTestCase()
    testCasePage.getTextTitle().should("be.visible")
})

})