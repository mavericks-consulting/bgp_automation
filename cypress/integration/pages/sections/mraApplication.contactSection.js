export default class MraContactSection {
  constructor() {
    this.tbName = '#react-contact_info-name';
    this.tbJobTitle = '#react-contact_info-designation';
    this.tbPhone = '#react-contact_info-phone';
    this.tbPrimaryEmail = '#react-contact_info-primary_email';
    this.chkSameAddress = '#react-contact_info-correspondence_address-copied';
    this.chkSamePerson = '#react-contact_info-copied';
  }

  completeSection(data) {
    cy.get(this.tbName).type(data.name);
    cy.get(this.tbJobTitle).type(data.jobTitle);
    cy.get(this.tbPhone).type(data.phone);
    cy.get(this.tbPrimaryEmail).type(data.primaryEmail);
    cy.get(this.chkSameAddress).check();
    cy.get(this.chkSamePerson).check();
  }
}
