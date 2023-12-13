import LOCATORS from "./locators";

Cypress.Commands.add(`getBySel`, (selector) => {
  return cy.get(`${selector}`);
});

Cypress.Commands.add(`getByCompoundSel`, (com1, com2) => {
  const compoundSelector = `${com1} ${com2}`;
  return cy.get(`${compoundSelector}`);
});

Cypress.Commands.add("getByDataQa", (selector) => {
  return cy.get(`[data-qa=${selector}]`);
});

Cypress.Commands.add("deleteAccount", () => {
  cy.getByCompoundSel(LOCATORS.HOME_PAGE.HEADER,LOCATORS.DELETE_PAGE.DELETE_ACCOUNT_BTN).click()
  cy.getByDataQa(LOCATORS.DELETE_PAGE.ACCOUNT_DELETED_TEXT).should("be.visible")
  cy.getByDataQa(LOCATORS.DELETE_PAGE.CONTINUE_BTN).click()
});
import 'cypress-file-upload'