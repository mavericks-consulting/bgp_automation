import { When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import { eligibilitySection } from '../../integration/pageFactory';

When('they enter valid values in the Eligibility section', () => {
  eligibilitySection.completeSection();
});

And('mark the company as registered outside SG in the Eligibility section', () => {
  eligibilitySection.markCompanyAsOutsideSG();
});

Then('they should see the specific errors in the Eligibility section', () => {
  eligibilitySection.shouldShowErrors();
});

Then('they should see the entered values in the Eligibility section in read-only mode', () => {
  eligibilitySection.shouldHaveEnteredValues();
});

Then('they should see the entered values in the Eligibility section', () => {
  eligibilitySection.shouldHaveEnteredValues(false);
});
