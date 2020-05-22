import Page from './page';

export default class MyGrantsPage extends Page {
  constructor() {
    super();

    // Page objects
    this.lnkApplyForGrant = '#grants .dashboard-apply-icon';
    this.lnkDashboard = 'a[alt="Dashboard"]';
    this.tabDrafts = '#grants .dashboard-tabs a[href="#drafts"]';
    this.tabProcessing = '#grants .dashboard-tabs a[href="#processing"]';
  }

  applyForGrant() {
    this.log('Applying for grant...');
    this.click(this.lnkApplyForGrant);
  }

  openDashboard() {
    this.log('Opening the Grants dashboard...');
    this.click(this.lnkDashboard);
  }

  openDraftsTab() {
    this.log('Opening the Drafts tab...');
    this.click(this.tabDrafts);
  }

  openProcessingTab() {
    this.log('Opening the Processing tab...');
    this.click(this.tabProcessing);
  }

  checkIfApplicationExists(projectTitle) {
    this.log('Checking if the application exists in the dashboard...');
    var el = 'div.title-div:contains("' + projectTitle + '")';
    this.elementShouldBeVisible(el);
  }
}
