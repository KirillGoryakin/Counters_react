/// <reference types="Cypress" />

describe('CountersChanger component', () => {
  beforeEach(() => {
    cy.visit('/');

    cy.get('[class*=counterList]').as('list');
    cy.get('[class*=countersChanger] button:first-child').as('plus');
    cy.get('[class*=countersChanger] button:last-child').as('minus');
  });

  it('should be visible', () => {
    cy.get('@list').should('be.visible');
    cy.get('[class*=countersChanger]').should('be.visible');
    cy.get('@plus').should('be.visible');
    cy.get('@minus').should('be.visible');
  });

  it('should add new counters', () => {
    cy.get('@list').children().should('have.length', 0);
    cy.get('@plus').first().click();
    cy.get('@list').children().should('have.length', 1);
    
    cy.get('@plus').last().click();
    cy.get('@list').children().should('have.length', 2);
  });

  it('should delete counters', () => {
    // 3 clicks
    cy.get('@plus').first().click().click().click();

    cy.get('@list').children().should('have.length', 3);
    cy.get('@list').find('[class*=changableTitle]').last()
      .should('include.text', '3');
    
    cy.get('@minus').first().click();
    cy.get('@list').children().should('have.length', 2);
    cy.get('@list').find('[class*=changableTitle]').last()
      .should('include.text', '2');

    cy.get('@minus').last().click();
    cy.get('@list').children().should('have.length', 1);
    cy.get('@list').find('[class*=changableTitle]').last()
      .should('include.text', '1');
  });
});