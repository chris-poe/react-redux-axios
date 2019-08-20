describe('My First Test', () => {
  it('Loads main', () => {
    cy.visit(Cypress.config().baseUrl);
  });
});
