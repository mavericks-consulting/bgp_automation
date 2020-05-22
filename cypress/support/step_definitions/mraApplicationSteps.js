import { When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import { myGrantsPage, mraApplicationForm, industrySection } from '../../integration/pageFactory';
import { getProjectTitle } from '../../integration/utils/dataUtils';

When('they start the application process', () => {
  cy.log('Starting the MRA application process...');
  myGrantsPage.applyForGrant();
});

And('they choose the Market Research Assistance grant', () => {
  cy.log('Choosing the Market Research Assistance grant...');
  industrySection.completeSection();
  mraApplicationForm.openApplication();
});

And('proceed to the next section', () => {
  mraApplicationForm.proceedToNextSection();
});

And('save the application', () => {
  mraApplicationForm.saveApplication();
});

And('proceed to review the application', () => {
  mraApplicationForm.reviewApplication();
});

When('they goto their My Grants dashboard', () => {
  cy.log('Navigating to the My Grants dashboard...');
  myGrantsPage.openDashboard();
});

Then('they should be able to see the application under Processing tab', () => {
  cy.log('Checking if the user sees the application in the My Grants dashboard under the Processing tab...');
  myGrantsPage.openProcessingTab();
  myGrantsPage.checkIfApplicationExists(getProjectTitle());
});

When('they navigate to the Contact section', () => {
  mraApplicationForm.navigateToContactSection();
});

When('they navigate to the Proposal section', () => {
  mraApplicationForm.navigateToProposalSection();
});

When('they navigate to the Business Impact section', () => {
  mraApplicationForm.navigateToBusinessImpactSection();
});

When('they navigate to the Cost section', () => {
  mraApplicationForm.navigateToCostSection();
});

When('they navigate to the Declaration section', () => {
  mraApplicationForm.navigateToDeclarationSection();
});

Then('they should see an error count in the side bar', () => {
  mraApplicationForm.shouldShowErrorCount();
});
