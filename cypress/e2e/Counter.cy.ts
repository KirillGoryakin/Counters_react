/// <reference types="Cypress" />

describe('Counter component', () => {
  beforeEach(() => {
    cy.visit('/');

    cy.get('[class*=counterList]').as('list');
    cy.get('[class*=countersChanger] button:first-child').as('plus');
    cy.get('[class*=countersChanger] button:last-child').as('minus');

    // 5 clicks
    cy.get('@plus').first().click().click().click().click().click();
    cy.get('@list').children('[class*=counter]').as('counter')
      .should('have.length', 5);

    cy.get('@counter').find('[class*=changableTitle]').as('title');
    cy.get('@counter').find('[class*=deleteButton]').as('deleteButton');
    cy.get('@counter').find('[class*=count]').as('count');
    cy.get('@counter').find('[class*=buttons] button:first-child')
      .as('increment');
    cy.get('@counter').find('[class*=buttons] button:last-child')
      .as('decrement');
  });

  it('should delete counters', () => {
    cy.get('@title').first().should('include.text', '1');
    cy.get('@title').last().should('include.text', '5');

    cy.get('@deleteButton').first().click();
    cy.get('@counter').should('have.length', 4);
    cy.get('@title').first().should('include.text', '2');
    cy.get('@title').last().should('include.text', '5');

    cy.get('@deleteButton').eq(1).click();
    cy.get('@counter').should('have.length', 3);
    cy.get('@title').first().should('include.text', '2');
    cy.get('@title').eq(1).should('include.text', '4');
    cy.get('@title').last().should('include.text', '5');

    cy.get('@deleteButton').last().click();
    cy.get('@counter').should('have.length', 2);
    cy.get('@title').first().should('include.text', '2');
    cy.get('@title').last().should('include.text', '4');
  });

  it('should increment counter value', () => {
    cy.get('@count').each($count => cy.wrap($count).should('have.text', '0'));
    
    cy.get('@increment').first().click();
    cy.get('@count').first().should('have.text', '1');

    // 3 clicks
    cy.get('@increment').last().click().click().click();
    cy.get('@count').first().should('have.text', '1');
    cy.get('@count').last().should('have.text', '3');
  });

  it('should decrement counter value', () => {
    cy.get('@count').each($count => cy.wrap($count).should('have.text', '0'));

    cy.get('@decrement').first().click();
    cy.get('@count').first().should('have.text', '-1');

    // 3 clicks
    cy.get('@decrement').last().click().click().click();
    cy.get('@count').first().should('have.text', '-1');
    cy.get('@count').last().should('have.text', '-3');
  });

  it('should change counter title', () => {
    // First counter
    cy.get('@title').first()
      .should('include.text', '1')
      .click();
    cy.get('@counter').find('input[class*=changableTitle]').as('titleInput');

    cy.get('@titleInput')
      .should('have.length', 1)
      .should('include.value', '1')
      .should('have.focus');

    const newTitle = 'Some new title';
    cy.get('@titleInput').first()
      .type(newTitle)
      .should('have.value', newTitle)
      .type('{enter}')
      .should('not.exist');

    cy.get('@title').first()
      .should('have.text', newTitle);

    // Fourth counter
    cy.get('@title').eq(3)
      .should('include.text', '4')
      .click();

    cy.get('@titleInput')
      .should('have.length', 1)
      .should('include.value', '4')
      .should('have.focus');

    const anotherTitle = 'Another cool title';
    cy.get('@titleInput').first()
      .type(anotherTitle)
      .should('have.value', anotherTitle)
      .type('{enter}')
      .should('not.exist');

    cy.get('@title').first()
      .should('have.text', newTitle);
    cy.get('@title').eq(3)
      .should('have.text', anotherTitle);
  });
});