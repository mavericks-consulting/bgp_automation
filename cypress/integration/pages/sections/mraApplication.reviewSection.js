import Page from '../page';

export default class ReviewSection extends Page {
  constructor() {
    super();

    // Page objects
    this.chkAgree = '#react-declaration-info_truthfulness_check';
    this.btnSubmit = '#submit-btn';
    this.txtRefId = 'td:contains("Ref ID:") + td.value';
    this.txtAgencyDetails = 'td:contains("Agency Details:") + td.value';

    // Read only check
    this.cntCompanyProfile = '.company-profile-container-readonly';
    this.txtAgree = '#react-declaration-info_truthfulness_check';
  }

  agreeAndSubmitApplication() {
    this.log('Agree and submit the application...');
    this.check(this.chkAgree);
    this.click(this.btnSubmit);
  }

  checkIfSubmitted() {
    this.log('Checking if the application is successfully submitted...');
    this.elementShouldContainText(this.txtAgencyDetails, 'Enterprise Singapore');
    this.elementShouldHaveText(this.txtAgree, 'Yes');
  }

  checkIfCompanyProfileIsDisplayed() {
    this.log('Checking if Company Profile is displayed...');
    this.elementShouldBeVisible(this.cntCompanyProfile);
  }
}
