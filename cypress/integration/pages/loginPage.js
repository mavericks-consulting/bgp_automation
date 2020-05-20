export default class LoginPage {
  constructor() {
    this.btnLoginWithCorpPass = '.bgp-btn-loginCorpPass';
    this.tbNRIC = 'input[name="CPUID"]';
    this.tbFullName = 'input[name="CPUID_FullName"]';
    this.tbUEN = 'input[name="CPEntID"]';
    this.lstRole = 'input[name="CPRole"]';
    this.btnLogin = 'button[type="submit"]';
  }

  login(data) {
    cy.log('Starting the Login flow...');
    cy.get(this.btnLoginWithCorpPass).click();

    cy.log('Logging into the portal with the CorpPass stub data...');
    cy.get(this.tbNRIC).type(data.nric);
    cy.get(this.tbFullName).type(data.fullName);
    cy.get(this.tbUEN).type(data.uen);
    cy.get(this.lstRole).select(data.role);
    cy.get(this.btnLogin).click();
  }
}
