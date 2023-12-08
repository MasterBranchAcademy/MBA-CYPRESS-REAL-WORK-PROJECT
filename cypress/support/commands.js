
Cypress.Commands.add(`getBySel`, (selector) => {
    return cy.get(`${selector}`);
});

Cypress.Commands.add(`getByCompoundSel`, (com1, com2) => {
    const signUp = `${com1} ${com2}`;
    return cy.get(`${compoundSelector}`);
})
Cypress.Commands.add(`getByDataQa`, (selector) => {
    return cy.get(`[data-qa=${selector}`);
});
