export default class Page {
  constructor() {}

  log(message) {
    cy.log(message);
  }

  findElement(locator) {
    return cy.get(locator);
  }

  setValue(locator, text) {
    this.findElement(locator).focus().clear().type(text);
  }

  setValueAndEnter(locator, text) {
    this.findElement(locator).type(text).type('{enter}');
  }

  click(locator) {
    this.findElement(locator).click();
  }

  check(locator) {
    this.findElement(locator).check();
  }

  select(locator, text) {
    this.findElement(locator).select(text);
  }

  elementShouldHaveText(locator, text) {
    this.findElement(locator).should('have.text', text);
  }

  elementShouldContainText(locator, text) {
    this.findElement(locator).should('contain.text', text);
  }

  elementShouldHaveValue(locator, value) {
    this.findElement(locator).should('have.value', value);
  }

  elementShouldBeVisible(locator) {
    this.findElement(locator).should('be.visible');
  }

  elementShouldBeChecked(locator) {
    this.findElement(locator).should('be.checked');
  }

  elementShouldHaveAttribute(locator, attribute, value) {
    this.findElement(locator).should('have.attr', attribute, value);
  }

  uploadImage(locator) {
    cy.get(locator).attachFile('sampleImage.png');
  }
}
