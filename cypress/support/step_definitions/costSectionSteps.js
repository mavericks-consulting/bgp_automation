import { Then, And } from 'cypress-cucumber-preprocessor/steps';
import { costSection } from '../../integration/pageFactory';
import { costSectionData } from '../../integration/utils/dataUtils';

And('enter valid values in the Cost section', () => {
  costSection.completeSection(costSectionData());
});

And('enter an invalid vendor name', () => {
  costSection.enterInvalidVendorName();
});

Then('they should see the entered values in the Cost section in read-only mode', () => {
  costSection.shouldHaveEnteredValues();
});

And('they should see the specific errors in the Cost section', () => {
  costSection.shouldShowErrors();
});
