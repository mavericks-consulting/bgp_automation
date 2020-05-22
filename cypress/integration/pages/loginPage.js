import Page from './page';

export default class LoginPage extends Page {
  constructor() {
    super();

    // Page objects
    this.btnLoginWithCorpPass = '.bgp-btn-loginCorpPass';
    this.tbNRIC = 'input[name="CPUID"]';
    this.tbFullName = 'input[name="CPUID_FullName"]';
    this.tbUEN = 'input[name="CPEntID"]';
    this.lstRole = 'select[name="CPRole"]';
    this.btnLogin = 'select[name="CPRole"] + button';
  }

  login(data) {
    this.log('Starting the Login flow...');
    this.click(this.btnLoginWithCorpPass);

    this.log('Logging into the portal with the CorpPass stub data...');
    this.setValue(this.tbNRIC, data.nric);
    this.setValue(this.tbFullName, data.fullName);
    this.setValue(this.tbUEN, data.uen);
    this.select(this.lstRole, data.role);
    this.click(this.btnLogin);
  }
}
