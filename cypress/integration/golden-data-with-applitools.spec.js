describe('Visual Regression with applitools', function() {

    before(function(){
        cy.visit(Cypress.env('host'))
        cy.eyesOpen({
            appName: 'Golden Data',
            testName: 'Visual regression test',
            browser: { width: 1200, height: 1000 }
          });
    })

    it('Golden Data', () => {

      cy.eyesCheckWindow('Main Page');

      cy.eyesClose();

    });

  });