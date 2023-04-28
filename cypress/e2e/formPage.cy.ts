describe('Just visit form page page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/forms');
  });

  it('should visit', () => {
    cy.get('h3').contains('Add card');
    cy.get('legend').contains('Create new post');
  });
});

describe('check creating of card', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/forms');
  });
  // it.only('should show errors', () => {
  //   cy.get('button[type=submit]').click();
  // })

  it('should create new card', () => {
    cy.get('legend').contains('Create new post');
    cy.get("[data-test='input-title']").type('Hello');
    cy.contains('Bussines').click();
    cy.contains('Life').click();
    cy.contains('men').click();
    cy.get('input[type=file]').selectFile('cypress/fixtures/test.jpg');
    cy.get('#select').select('Mango');
    cy.get('input[type=date]').type('2000-07-22');
    cy.get('button[type=submit]').click();
    cy.get('.card-list').children().should('have.length', 1);
  });
});
