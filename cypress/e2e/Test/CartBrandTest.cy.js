import HomePage from "../Page/HomePage"
import LOCATORS from "../../support/locators";
describe('Brand Page Test', () => {
  const testPage = new HomePage()
  let user;
  before(() => {
    cy.fixture('userDatas/info').then((userInfo) => {
      user = userInfo
    })
  })
  it.only('should navigate to brand pages and verify product visibility', () => {
    cy.visit('/')
    cy.getBySel(LOCATORS.Brands.productsButton).should("be.visible").click()
    cy.getBySel(LOCATORS.Brands.brandsSidebar).should('be.visible');
    cy.getBySel(LOCATORS.Brands.brandPoloLink).first().click();
    cy.getBySel(LOCATORS.Brands.brandPoloLink).should('be.visible');
    cy.getBySel(LOCATORS.Brands.VerifyBrandPolo).first().click().wait(2000);
    cy.getBySel(LOCATORS.Brands.brandHMLink).first().click();
    cy.getBySel(LOCATORS.Brands.brandHMLink).should('be.visible');
    cy.getBySel(LOCATORS.Brands.VerifyBrandHM).first().click();

  });
});
