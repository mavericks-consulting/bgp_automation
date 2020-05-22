import { Then, And } from 'cypress-cucumber-preprocessor/steps';
import { declarationSection } from '../../integration/pageFactory';

And('complete the declaration', () => {
  declarationSection.completeSection();
});

And('provide an invalid declaration', () => {
  declarationSection.triggerWarning();
});

Then('they should see the entered values in the Declaration section in read-only mode', () => {
  declarationSection.shouldHaveEnteredValues();
});
