import LOCATORS from "../../support/locators"
class TaseCase {
    
    clickTaseCase(){
        cy.get(LOCATORS.TaseCase_PAGE.TaseCase).click()
       
     }
   
    getTextTitle(){
        cy.get(LOCATORS.TaseCase_Text.TextTitle).should("be.visible")
    }
}
export default TaseCase

