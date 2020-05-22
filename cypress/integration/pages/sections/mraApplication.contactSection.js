import Page from '../page';

export default class ContactSection extends Page {
  constructor() {
    super();

    // Page objects
    this.tbName = '#react-contact_info-name';
    this.tbJobTitle = '#react-contact_info-designation';
    this.tbPhone = '#react-contact_info-phone';
    this.tbPrimaryEmail = '#react-contact_info-primary_email';
    this.tbSecondaryEmail = '#react-contact_info-secondary_email';
    this.chkSameAddress = '#react-contact_info-correspondence_address-copied';
    this.chkSameOfferee = '#react-contact_info-copied';

    // Manual entry of address
    this.tbPostalCode = '#react-contact_info-correspondence_address-postal';
    this.tbLevel = '#react-contact_info-correspondence_address-level';
    this.tbUnit = '#react-contact_info-correspondence_address-unit';

    // Manual entry of offeree
    this.tbOffereeName = '#react-contact_info-offeree_name';
    this.tbOffereeJobTitle = '#react-contact_info-offeree_designation';
    this.tbOffereeEmail = '#react-contact_info-offeree_email';

    // Read only check
    this.txtAddress = '#react-contact_info-correspondence_address';

    this.txtError = '#react-contact_info-name-alert';

    // Store the data for further check
    this.enteredData = undefined;
  }

  completeSection(data) {
    this.log('Filling in values in the Contact section...');
    this.setValue(this.tbName, data.name);
    this.setValue(this.tbJobTitle, data.jobTitle);
    this.setValue(this.tbPhone, data.phone);
    this.setValue(this.tbPrimaryEmail, data.primaryEmail);
    this.setValue(this.tbSecondaryEmail, data.secondaryEmail);

    (data.sameAddress === 'true') ? this.check(this.chkSameAddress) : this.enterCustomAddress(data.customAddress);
    (data.sameOfferee === 'true') ? this.check(this.chkSameOfferee) : this.enterCustomOfferee(data.customOfferee);
    this.enteredData = data;
  }

  enterCustomAddress(data) {
    this.log('Entering custom correspondence address...');
    this.setValue(this.tbPostalCode, data.postalCode);
    this.setValue(this.tbLevel, data.level);
    this.setValue(this.tbUnit, data.unit);
  }

  enterCustomOfferee(data) {
    this.log('Entering custom Letter of Addressee details...');
    this.setValue(this.tbOffereeName, data.name);
    this.setValue(this.tbOffereeJobTitle, data.jobTitle);
    this.setValue(this.tbOffereeEmail, data.email);
  }

  shouldHaveEnteredValues(readOnly = true) {
    this.log('Checking if the entered values are present...');
    if (readOnly) {
      this.elementShouldHaveText(this.tbName, this.enteredData.name);
      this.elementShouldHaveText(this.tbJobTitle, this.enteredData.jobTitle);
      this.elementShouldHaveText(this.tbPhone, this.enteredData.phone);
      this.elementShouldHaveText(this.tbPrimaryEmail, this.enteredData.primaryEmail);
      this.elementShouldHaveText(this.tbSecondaryEmail, this.enteredData.secondaryEmail);
    } else {
      this.elementShouldHaveValue(this.tbName, this.enteredData.name);
      this.elementShouldHaveValue(this.tbJobTitle, this.enteredData.jobTitle);
      this.elementShouldHaveValue(this.tbPhone, this.enteredData.phone);
      this.elementShouldHaveValue(this.tbPrimaryEmail, this.enteredData.primaryEmail);
      this.elementShouldHaveValue(this.tbSecondaryEmail, this.enteredData.secondaryEmail);
    }
    this.shouldHaveCorrespondenceAddress(readOnly);
    this.shouldHaveOfferee(readOnly);
  }

  shouldHaveCorrespondenceAddress(readOnly) {
    this.log('Checking if Correspondence address is present...');
    var address = (this.enteredData.sameAddress === 'true') ? this.enteredData.originalAddress : this.enteredData.customAddress;
    if (readOnly) {
      this.elementShouldContainText(this.txtAddress, `${address.houseNo} ${address.area}`);
      this.elementShouldContainText(this.txtAddress, `#${address.level}-${address.unit}`);
      this.elementShouldContainText(this.txtAddress, `SINGAPORE ${address.postalCode}`);
    } else {
      this.elementShouldHaveValue(this.tbPostalCode, address.postalCode);
      this.elementShouldHaveValue(this.tbUnit, address.unit);
      this.elementShouldHaveValue(this.tbLevel, address.level);
    }
  }

  shouldHaveOfferee(readOnly) {
    this.log('Checking if Offeree details are present...');
    var offeree = (this.enteredData.sameOfferee === 'true') ? this.enteredData.originalOfferee : this.enteredData.customOfferee;
    if (readOnly) {
      this.elementShouldHaveText(this.tbOffereeName, offeree.name);
      this.elementShouldHaveText(this.tbOffereeJobTitle, offeree.jobTitle);
      this.elementShouldHaveText(this.tbOffereeEmail, offeree.email);
    } else {
      this.elementShouldHaveValue(this.tbOffereeName, offeree.name);
      this.elementShouldHaveValue(this.tbOffereeJobTitle, offeree.jobTitle);
      this.elementShouldHaveValue(this.tbOffereeEmail, offeree.email);
    }
  }

  shouldShowErrors() {
    this.log('Checking if specific error messages are displayed...');
    this.elementShouldBeVisible(this.txtError);
    this.elementShouldHaveText(this.txtError, 'We need a response for this field');
  }

  enterInvalidName() {
    this.setValue(this.tbName, ' ');
    this.click(this.tbJobTitle);
  }
}
