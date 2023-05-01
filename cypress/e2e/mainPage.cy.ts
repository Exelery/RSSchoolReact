describe('Just visit main page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173');
  });

  it('should visit', () => {
    cy.get('h1').contains('This is the home page');
  });
  it('should contain 20 cards', () => {
    cy.get('.card').should('have.length', 20);
  });
});

describe('check search and cards', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173');
  });

  it('should show correct cards', () => {
    const text = 'rick';
    cy.get('.searchTerm').type(text);
    cy.get('.searchButton').click();
    cy.get('.card .badge').each(($el) => {
      console.log($el);
      cy.wrap($el)
        .invoke('text')
        .then((text) => text.toLowerCase())
        .should('contain', text);
    });
  });

  it('should show no card', () => {
    const text = 'rickiiiii';
    cy.get('.searchTerm').type(text);
    cy.get('.searchButton').click();
    cy.get('h3').contains('No cards');
  });

  it('should show correct modal', () => {
    cy.get('.card')
      .eq(0)
      .then(($card) => {
        const text = $card.find('.badge').eq(0).text();
        $card.trigger('click');
        cy.get('h2.text-2xl').contains(text);
      });
  });
});
