import LOCATORS from "../../support/locators"
class TestCase {
    
    clickTestCase(){
        cy.getBySel(LOCATORS.TestCase_PAGE.TestCase).click()
       
     }
   
    getTextTitle(){
        return cy.getBySel(LOCATORS.TestCase_Text.TextTitle)
    }
}
export default TestCase

