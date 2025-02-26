const locator= {
    CUE_SHEET:'.vc_tta-panels > div:nth-child(2) li:nth-child(1) >span',
    RECORDING: '.vc_tta-panels > div:nth-child(2) li:nth-child(2) >span',
    BUNDLE: '.vc_tta-panels > div:nth-child(2) li:nth-child(3) >span',
    ADVERTISMENT: '.vc_tta-panels > div:nth-child(2) li:nth-child(4) >span'
}

type locator = typeof locator;

export class EnginePage{
    constructor(public readonly element: locator =locator) {}

    gotoRepertoireManagementModule(): void{
    cy.get('#navMenu > div:nth-child(1) > div:nth-child(1) .navbar-link ').realHover().click();
    cy.get('.navbar-dropdown .navbar-item').contains('Repertoire Management Module').should('be.visible').click();
    }

    scrollToAdditonalFeature(): void{
    cy.get('.entry >section> div:nth-child(6) >div>div>div>.vc_custom_heading').scrollIntoView();
    }

    clickProductsSupported(): void{
    cy.get('.vc_tta-tabs-list li:nth-child(2) .vc_tta-title-text').contains('Products Supported').click({force: true});
    cy.get('.vc_tta-panels > div:nth-child(2) .vc_custom_heading').should('have.text','There are several types of Product Supported:');
    }

}