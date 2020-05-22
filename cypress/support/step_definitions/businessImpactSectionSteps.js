import { Then, And } from 'cypress-cucumber-preprocessor/steps';
import { businessImpactSection } from '../../integration/pageFactory';
import { businessImpactSectionData } from '../../integration/utils/dataUtils';

And('enter valid values in the Business Impact section', () => {
  businessImpactSection.completeSection(businessImpactSectionData());
});

And('enter an invalid end date', () => {
  businessImpactSection.enterInvalidEndDate();
});

Then('they should see the entered values in the Business Impact section in read-only mode', () => {
  businessImpactSection.shouldHaveEnteredValues();
});

And('they should see the specific errors in the Business Impact section', () => {
  businessImpactSection.shouldShowErrors();
});
