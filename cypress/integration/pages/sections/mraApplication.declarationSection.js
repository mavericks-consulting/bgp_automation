export default class MraDeclarationSection {
  constructor() {
    this.radCriminalLiabilityNo = '#react-declaration-criminal_liability_check-false';
    this.radCivilProceedingNo = '#react-declaration-civil_proceeding_check-false';
    this.radInsolvencyNo = '#react-declaration-insolvency_proceeding_check-false';
    this.radIncentivesNo = '#react-declaration-project_incentives_check-false';
    this.radOtherIncentivesNo = '#react-declaration-other_incentives_check-false';
    this.radRelatedPartyNo = '#react-declaration-related_party_check-false';
    this.radCovidComplianceYes = '#react-declaration-covid_safe_check-true';
    this.radCovidFurtherComplianceYes = '#react-declaration-covid_safe_ques_check-true';
    this.chkAcknowledgement = '#react-declaration-consent_acknowledgement_check';
  }

  completeSection() {
    cy.get(this.radCriminalLiabilityNo).click();
    cy.get(this.radCivilProceedingNo).click();
    cy.get(this.radInsolvencyNo).click();
    cy.get(this.radIncentivesNo).click();
    cy.get(this.radOtherIncentivesNo).click();
    cy.get(this.radRelatedPartyNo).click();
    cy.get(this.radCovidComplianceYes).click();
    cy.get(this.radCovidFurtherComplianceYes).click();
    cy.get(this.chkAcknowledgement).check();
  }
}
