import { Then, And } from 'cypress-cucumber-preprocessor/steps';
import { contactSection } from '../../integration/pageFactory';
import { contactSectionData } from '../../integration/utils/dataUtils';

And('enter valid values in the Contact section', () => {
  contactSection.completeSection(contactSectionData());
});

And('enter an invalid contact name', () => {
  contactSection.enterInvalidName();
});

And('enter custom address and letter of offeree in the Contact section', () => {
  var data = contactSectionData();
  data.sameAddress = "false";
  data.sameOfferee = "false";
  contactSection.completeSection(data);
});

Then('they should see the entered values in the Contact section in read-only mode', () => {
  contactSection.shouldHaveEnteredValues();
});

Then('they should see the entered values in the Contact section', () => {
  contactSection.shouldHaveEnteredValues(false);
});

And('they should see the specific errors in the Contact section', () => {
  contactSection.shouldShowErrors();
});
