import HomePage from "../Page/HomePage"
import LOCATORS from "../../support/locators";
describe("Add to Cart Tests", () => {
    const homePage = new HomePage()

    let user;
    before(() => {
        cy.fixture('userDatas/info').then((userInfo) => {
            user = userInfo
        })
    })
    it("Kullanici ürünleri basariliyla sepete ekleyebilmeli", () => {
        homePage.visitPage();
        homePage.clickProducts();
        homePage.clickProduct_1();
        homePage.countinueShoppingClick();
        homePage.clickProduct_2();
        homePage.clickView_CartBtn();
        homePage.verifyProduct_1_Price().should('contain','Rs. 500')
        homePage.verifyProduct_2_Price().should('contain','Rs. 400')
        homePage.verifyProduct_1_Quantity().should('contain','1')
        homePage.verifyProduct_1_Total().should('contain','Rs. 500')
        homePage.verifyProduct_2_Quantity().should('contain','1')
        homePage.verifyProduct_2_Total().should('contain','Rs. 400')
    })

    it('should add recommended items to the cart', () => {
        cy.visit('/')
        cy.scrollTo('bottom')
        homePage.recommendedItemsText().should('be.visible')
        homePage.clickRecommendedFirstItem();
        homePage.clickView_CartBtn();
        homePage.verifyRecommendedProduct().should('be.visible');
        
      });    

})