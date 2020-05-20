import { When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import { myGrantsPage, mraApplicationForm } from '../../integration/pageFactory';
import * as dataSet from '../../integration/utils/dataUtils';

When('they start the application process', () => {
  cy.log('Starting the MRA application process...');
  myGrantsPage.applyForGrant();
});

And('they submit the MRA application with valid data across all sections', () => {
  cy.log('Beginning to fill valid data across all sections of the MRA application form...');
  
  // Choose Industry Sector (ie. IT -> Bring business overseas -> Market Research Assistance)
  mraApplicationForm.initiateApplication();
  mraApplicationForm.openApplication();
  
  // Fill Eligibility section
  mraApplicationForm.fillEligibilitySection();
  mraApplicationForm.proceedToNextSection();

  // Fill Contact section
  mraApplicationForm.fillContactSection(dataSet.contactSectionData());
  mraApplicationForm.proceedToNextSection();

  // Fill Proposal section
  mraApplicationForm.fillProposalSection(dataSet.proposalSectionData(), dataSet.imageUploadData);
  mraApplicationForm.proceedToNextSection();

  // Fill Business Impact section
  mraApplicationForm.fillBusinessImpactSection(dataSet.businessImpactSectionData());
  mraApplicationForm.proceedToNextSection();

  // Fill Cost section
  mraApplicationForm.fillCostSection(dataSet.costSectionData(), dataSet.imageUploadData);
  mraApplicationForm.proceedToNextSection();

  // Complete Declaration section
  mraApplicationForm.fillDeclarationSection();
  mraApplicationForm.reviewApplication();
});

And('they goto their My Grants dashboard', () => {
  cy.log('Navigating to the My Grants dashboard...');
  myGrantsPage.openDashboard();
});

Then('they should be able to see the application in their My Grants dashbaord', () => {

});

And('they enter valid details in the Eligibility section', () => {
  cy.log('Filling valid details in the Eligibility section...');
  mraApplicationForm.fillEligibilitySection();
});

And('they save the application', () => {
  cy.log('Saving the application as a draft...');
  mraApplicationForm.saveApplication();
});

Then('they should see the values they entered in the Eligibility section', () => {

});

And('they should be able to see the application under Drafts', () => {

});

And('they enter invalid values in the Eligibility section', () => {
  cy.log('Entering invalid values in the Eligibility section to trigger errors...');
  mraApplicationForm.triggerWarningInEligibility();
});

Then('they should see a warning message asking them to find out more about their eligibility', () => {
  cy.log('Checking if the warning messages on Eligibility are displayed...');
  mraApplicationForm.checkEligibilityWarning();
});
