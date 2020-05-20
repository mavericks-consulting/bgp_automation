import MraIndustrySection from './sections/mraApplication.industrySection';
import MraEligibilitySection from './sections/mraApplication.eligibilitySection';
import MraContactSection from './sections/mraApplication.contactSection';
import MraProposalSection from './sections/mraApplication.proposalSection';
import MraBusinessImpactSection from './sections/mraApplication.businessImpactSection';
import MraCostSection from './sections/mraApplication.costSection';
import MraDeclarationSection from './sections/mraApplication.declarationSection';

export default class MraApplicationForm {
  constructor() {
    // Common across sections
    this.btnSaveApplication = '#save-btn';
    this.btnNextSection = '#next-btn';
    this.btnReviewApplication = '#review-btn'
    this.btnProceedWithApplication = '#keyPage-form-button';

    // Sections
    this.industrySection = new MraIndustrySection();
    this.eligibilitySection = new MraEligibilitySection();
    this.contactSection = new MraContactSection();
    this.proposalSection = new MraProposalSection();
    this.businessImpactSection = new MraBusinessImpactSection();
    this.costSection = new MraCostSection();
    this.declarationSection = new MraDeclarationSection();
  }

  openApplication() {
    cy.log('Opening the application...');
    cy.get(this.btnProceedWithApplication).click();
  }

  saveApplication() {
    cy.log('Saving the application draft...');
    cy.get(this.btnSaveApplication).click();
  }

  proceedToNextSection() {
    cy.log('Proceeding to the next section...');
    cy.get(this.btnNextSection).click();
  }

  reviewApplication() {
    cy.log('Reviewing the application before submission...');
    cy.get(this.btnReviewApplication).click();
  }

  initiateApplication() {
    cy.log('Creating the Grants application by choosing the MRA workflow...');
    this.industrySection.completeSection();
  }

  fillEligibilitySection() {
    cy.log('Filling the Eligibility section...');
    this.eligibilitySection.completeSection();
  }

  triggerWarningInEligibility() {
    cy.log('Triggering a warning condition in the Eligibility section...');
    this.eligibilitySection.triggerWarning();  
  }

  fillContactSection(data) {
    cy.log('Filling the Contact section...');
    this.contactSection.completeSection(data);
  }

  fillProposalSection(data, fileData) {
    cy.log('Filling the Proposal section...');
    this.proposalSection.completeSection(data, fileData);
  }

  fillBusinessImpactSection(data) {
    cy.log('Filling the Business Impact section...');
    this.businessImpactSection.completeSection(data);
  }

  fillCostSection(data, fileData) {
    cy.log('Filling the Cost section...');
    this.costSection.completeSection(data, fileData);
  }

  fillDeclarationSection() {
    cy.log('Filling the Declaration section...');
    this.declarationSection.completeSection();
  }

  checkEligibilityWarning() {
    cy.log('Checking if the Eligibility warning has been triggered...');
    this.eligibilitySection.shouldHaveWarning();
  }
}
