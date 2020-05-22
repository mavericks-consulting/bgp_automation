import { Then, And } from 'cypress-cucumber-preprocessor/steps';
import { reviewSection } from '../../integration/pageFactory';

And('submit the application', () => {
  reviewSection.agreeAndSubmitApplication();
});

Then('the application should be submitted', () => {
  reviewSection.checkIfSubmitted();
});

And('the company profile should be displayed', () => {
  reviewSection.checkIfCompanyProfileIsDisplayed();
});
