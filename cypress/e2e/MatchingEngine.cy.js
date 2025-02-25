describe('Check products supported', () => {
  it('passes', () => {
    cy.visit('https://www.matchingengine.com/');
    cy.get('#navMenu > div:nth-child(1) > div:nth-child(1) .navbar-link ').realHover('mouse').click();
    cy.get('.navbar-dropdown .navbar-item').contains('Repertoire Management Module').should('be.visible').click();
   cy.get('.entry >section> div:nth-child(6) >div>div>div>.vc_custom_heading').scrollIntoView();
   cy.get('.vc_tta-tabs-list li:nth-child(2) .vc_tta-title-text').contains('Products Supported').click({force: true});
   cy.get('.vc_tta-panels > div:nth-child(2) .vc_custom_heading').should('have.text','There are several types of Product Supported:');
   cy.get('.vc_tta-panels > div:nth-child(2) li:nth-child(1) >span').should('have.text','Cue Sheet / AV Work');
   cy.get('.vc_tta-panels > div:nth-child(2) li:nth-child(2) >span').should('have.text','Recording');
   cy.get('.vc_tta-panels > div:nth-child(2) li:nth-child(3) >span').should('have.text','Bundle');
   cy.get('.vc_tta-panels > div:nth-child(2) li:nth-child(4) >span').contains('Advertisement');
  })
 })