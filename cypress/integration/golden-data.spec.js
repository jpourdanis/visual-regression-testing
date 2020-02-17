describe('Golden Data', function() {

    before(function(){
        cy.visit(Cypress.env('host'))
    })

    it('Visual Regression Test', function() {
      
      //We can set option the error threshold : Value can range from 0.00 (no difference) to 1.00 (every pixel is different)
      cy.compareSnapshot('full-page-snapshot', 0.1);
    })

    it('Specific cell with changed color', function() {
      
        cy.get('#r100-5').compareSnapshot('color-change')

    })

    it('Specific cell with changed font', function() {
      
        cy.get('#r161-10').compareSnapshot('font-change')

    })

    it('Specific cell with changed value', function() {
      
        cy.get('#r199-5').compareSnapshot('value-change')

    })
    
  })