import Page from './page';

export default class MraApplicationForm extends Page {
  constructor() {
    super();

    // Page objects
    this.btnSaveApplication = '#save-btn';
    this.btnNextSection = '#next-btn';
    this.btnReviewApplication = '#review-btn'
    this.btnProceedWithApplication = '#keyPage-form-button';

    // Side bar
    this.lnkEligibilitySection = 'span.menu-text:contains("Eligibility")'
    this.lnkContactSection = 'span.menu-text:contains("Contact Details")'
    this.lnkProposalSection = 'span.menu-text:contains("Proposal")'
    this.lnkBusinessImpactSection = 'span.menu-text:contains("Business Impact")'
    this.lnkCostSection = 'span.menu-text:contains("Cost")'
    this.lnkDeclarationSection = 'span.menu-text:contains("Declare & Review")'

    this.txtSideBarError = 'ul.nav-sidebar li.active .label-error';
  }

  openApplication() {
    this.log('Opening the application...');
    this.click(this.btnProceedWithApplication);
  }

  saveApplication() {
    this.log('Saving the application draft...');
    this.click(this.btnSaveApplication);
  }

  proceedToNextSection() {
    this.log('Proceeding to the next section...');
    this.click(this.btnNextSection);
  }

  reviewApplication() {
    this.log('Reviewing the application before submission...');
    this.click(this.btnReviewApplication);
  }

  navigateToEligibilitySection() {
    this.log('Directly accessing the Eligibility section using the side bar...');
    this.click(this.lnkEligibilitySection);
  }

  navigateToContactSection() {
    this.log('Directly accessing the Contact section using the side bar...');
    this.click(this.lnkContactSection);
  }

  navigateToProposalSection() {
    this.log('Directly accessing the Proposal section using the side bar...');
    this.click(this.lnkProposalSection);
  }

  navigateToBusinessImpactSection() {
    this.log('Directly accessing the Business Impact section using the side bar...');
    this.click(this.lnkBusinessImpactSection);
  }

  navigateToCostSection() {
    this.log('Directly accessing the Cost section using the side bar...');
    this.click(this.lnkCostSection);
  }

  navigateToDeclarationSection() {
    this.log('Directly accessing the Declaration section using the side bar...');
    this.click(this.lnkDeclarationSection);
  }

  shouldShowErrorCount() {
    this.log('Checking if the sidebar shows an error count for the specific section...');
    this.elementShouldBeVisible(this.txtSideBarError);
  }
}
