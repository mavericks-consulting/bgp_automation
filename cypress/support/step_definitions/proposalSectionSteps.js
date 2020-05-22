import { Then, And } from 'cypress-cucumber-preprocessor/steps';
import { proposalSection } from '../../integration/pageFactory';
import { proposalSectionData } from '../../integration/utils/dataUtils';

And('enter valid values in the Proposal section', () => {
  proposalSection.completeSection(proposalSectionData());
});

And('enter an invalid project title', () => {
  proposalSection.enterInvalidProjectTitle();
});

Then('they should see the entered values in the Proposal section in read-only mode', () => {
  proposalSection.shouldHaveEnteredValues();
});

And('they should see the specific errors in the Proposal section', () => {
  proposalSection.shouldShowErrors();
});
