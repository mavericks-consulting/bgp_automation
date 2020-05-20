export default class MyGrantsPage {
  constructor() {
    this.lnkApplyForGrant = '#grants .dashboard-apply-icon';
    this.lnkDashboard = 'a[alt="Dashboard"]';
  }

  applyForGrant() {
    cy.log('Applying for grant...');
    cy.get(this.lnkApplyForGrant).click();
  }

  openDashboard() {
    cy.log('Opening the Grants dashboard...');
    cy.get(this.lnkDashboard).click();
  }
}
