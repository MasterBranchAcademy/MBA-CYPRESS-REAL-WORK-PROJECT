import LOCATORS from "../../support/locators"
import HomePage from "../Page/HomePage"
import TaseCase from "../Page/TaseCasePage"
describe("TaseCase Tests", () => {
     const testPage = new HomePage()
     const taseCasePage=new TaseCase()

it("Kullanici test case sayfasina basariyla erisebilmeli", () => {
    testPage.visitPage()
    taseCasePage.clickTaseCase()
    taseCasePage.getTextTitle()
})

})