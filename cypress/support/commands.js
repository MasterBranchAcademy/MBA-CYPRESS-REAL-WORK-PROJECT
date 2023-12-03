
Cypress.Commands.add(`getBySel`, (selector) => {
    return cy.get(`${selector}`);
});

Cypress.Commands.add(`getByCompoundSel`, (com1, com2) => {
    const compoundSelector = `${com1} ${com2}`;
    return cy.get(`${compoundSelector}`);
});