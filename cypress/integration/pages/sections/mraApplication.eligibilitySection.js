export default class MraEligibilitySection {
  constructor() {
    this.radSGRegisteredYes = '#react-eligibility-sg_registered_check-true';
    this.radSGRegisteredNo = '#react-eligibility-sg_registered_check-false';
    this.radSalesTurnoverYes = '#react-eligibility-turnover_check-true';
    this.radSalesTurnoverNo = '#react-eligibility-turnover_check-false';
    this.radLocalEquityYes = '#react-eligibility-global_hq_check-true';
    this.radLocalEquityNo = '#react-eligibility-global_hq_check-false';
    this.radNewMarketYes = '#react-eligibility-new_target_market_check-true';
    this.radNewMarketNo = '#react-eligibility-new_target_market_check-false';
    this.radProjectStartedYes = '#react-eligibility-started_project_check-true';
    this.radProjectStartedNo = '#react-eligibility-started_project_check-false';
    this.txtWarningMessage = '.eligibility-advice';
  }

  completeSection() {
    cy.get(this.radSGRegisteredYes).click();
    cy.get(this.radSGRegisteredYes).click();
    cy.get(this.radSalesTurnoverYes).click();
    cy.get(this.radLocalEquityYes).click();
    cy.get(this.radNewMarketYes).click();
    cy.get(this.radProjectStartedYes).click();
  }

  triggerWarning() {
    cy.get(this.radSGRegisteredNo).click();
    cy.get(this.radSGRegisteredNo).click();
    cy.get(this.radSalesTurnoverNo).click();
    cy.get(this.radLocalEquityNo).click();
    cy.get(this.radNewMarketNo).click();
    cy.get(this.radProjectStartedNo).click();
  }

  shouldHaveWarning() {
    var warningElements = cy.get(this.txtWarningMessage);
    warningElements.should('have.length', 5);
    warningElements.each(($el) => {
      cy.wrap($el)
        .should('contain', 'The applicant may not meet the eligibility criteria for this grant.')
        .get('a')
        .should('have.attr', 'href', 'https://www.ifaq.gov.sg/BGP/apps/fcd_faqmain.aspx#FAQ_1111145')
        .should('have.attr', 'target', '_blank');
    });
  }
}
