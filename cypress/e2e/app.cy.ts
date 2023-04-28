describe('check other pages', () => {
  it('error page is exist', () => {
    cy.visit('http://localhost:5173/sssss');
    cy.get('h1').contains('This is the error page');
  });
  it('error page is exist', () => {
    cy.visit('http://localhost:5173/about');
    cy.get('h1').contains('This is the about page');
  });
});
