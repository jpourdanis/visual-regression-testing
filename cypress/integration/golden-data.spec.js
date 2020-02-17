describe('Golden Data', function() {
    it('Visual Regression Test', function() {
      
      cy.visit(Cypress.env('host'))
      //cy.get('body > div > table > tbody > tr:nth-child(3) > td:nth-child(4)').contains('@twitter');
      cy.compareSnapshot('All-Page-Snapshot', 0.0);
    })
  })