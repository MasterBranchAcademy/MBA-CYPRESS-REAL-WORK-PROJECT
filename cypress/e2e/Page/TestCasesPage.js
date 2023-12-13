import LOCATORS from "../../support/locators"
class TestCases {

    clickTestCases() {
        cy.getBySel(LOCATORS.TestCases_PAGE.TestCases).click()

    }

    getTextTitle() {
        return cy.getBySel(LOCATORS.TestCases_Text.TextTitle)
    }
}
export default TestCases

