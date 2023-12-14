import HomePage from "../Page/HomePage";
import ProductQuantity from "../Page/ProductQuantityPage";

describe('Product Quantity in Cart Test', () => {
    const homePage = new HomePage
    const productQuantity = new ProductQuantity
    let user;

    before(() => {
        cy.fixture('userDatas/info').then((userInfo) => {
            user = userInfo
        })

    })

    it('Kullanici sayisini arttirdigi urunu sepette dogrulayabilmeli', () => {
        homePage.visitPage()
        cy.contains(user.home.homePageText).should("be.visible")
        productQuantity.clickViewProductButton()
        cy.url().should('include', '/product_details/1')
        productQuantity.urununSayisiniArttirma().should('have.value', '4');
        productQuantity.clickAddToCartButton()
        productQuantity.clickViewCartButton()
        productQuantity.verifyDetail().should('contain', '4')
    })
});
