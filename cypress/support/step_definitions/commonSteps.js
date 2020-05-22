import { Given, And } from 'cypress-cucumber-preprocessor/steps';
import { loginPage } from '../../integration/pageFactory';
import { envLoginData, userLoginData } from '../../integration/utils/dataUtils';

Given('user has logged in to the BGP portal with CorpPass', () => {
  cy.log('User logs into the BGP portal with CorpPass...');
  cy.visit(envLoginData.baseUrl, {
    auth: {
      username: envLoginData.username,
      password: envLoginData.password
    }
  });
  loginPage.login(userLoginData);
});

And('refresh the page', () => {
  cy.log('Refreshing the page...');
  cy.reload();
});
