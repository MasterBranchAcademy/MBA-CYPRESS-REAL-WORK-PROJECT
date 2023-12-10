import LOCATORS from "../../support/locators"
class TestCase {
    
    clickTestCase(){
        cy.get(LOCATORS.TestCase_PAGE.TestCase).click()
       
     }
   
    getTextTitle(){
        return cy.get(LOCATORS.TestCase_Text.TextTitle)
    }
}
export default TestCase

