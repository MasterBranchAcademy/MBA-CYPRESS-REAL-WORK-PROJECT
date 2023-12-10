import LOCATORS from "../../support/locators"
class TestCase {
    
    clickTestCase(){
        cy.get(LOCATORS.TestCase_PAGE.TestCase).click()
       
     }
   
    getTextTitle(){
        cy.get(LOCATORS.TestCase_Text.TextTitle).should("be.visible")
    }
}
export default TestCase

