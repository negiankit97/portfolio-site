/// <reference types="cypress" />

it('renders learn react link', () => {
  cy.visit("http://localhost:3000");
  cy.get('a').contains('Learn React');
});