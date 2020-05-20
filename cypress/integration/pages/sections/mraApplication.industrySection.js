export default class MraIndustrySection {
  constructor() {
    this.lnkIT = '#IT';
    this.lnkBusinessExpansion = 'input[id="International Expansion"]';
    this.lnkMarketReadinessAssistance = 'input[id="Market Readiness Assistance 2"]';
    this.btnInitiateApplication = '#go-to-grant';
  }

  completeSection() {
    cy.get(this.lnkIT).click();
    cy.get(this.lnkBusinessExpansion).click();
    cy.get(this.lnkMarketReadinessAssistance).click();
    cy.get(this.btnInitiateApplication).click();
  }
}
