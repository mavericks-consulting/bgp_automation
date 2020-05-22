const faker = require('faker');
const moment = require('moment');
const numeral = require('numeral');

function getFutureDate(amount, unit) {
  return moment().add(amount, unit).format('DD MMM YYYY');
}

const loginData = require('../../fixtures/loginData copy.json');
const applicationData = require('../../fixtures/mraApplicationData.json');

// Login data
export const envLoginData = loginData.envLogin;
export const userLoginData = loginData.userLogin;

// Application data
export function contactSectionData() {
  var data = applicationData.contactSection;
  console.log(`Contact Section data: ${JSON.stringify(data)}`);
  var name = faker.name.findName();
  var jobTitle = faker.name.jobTitle();
  var primaryEmail = faker.internet.exampleEmail();

  data.name = name;
  data.jobTitle = jobTitle;
  data.primaryEmail = primaryEmail;
  data.secondaryEmail = faker.internet.exampleEmail();
  
  data.originalOfferee.name = name;
  data.originalOfferee.jobTitle = jobTitle;
  data.originalOfferee.email = primaryEmail;

  data.customOfferee.name = faker.name.findName();
  data.customOfferee.jobTitle = faker.name.jobTitle();
  data.customOfferee.email = faker.internet.exampleEmail();

  return data;
}

var projectTitle = undefined;

export function getProjectTitle() {
  return projectTitle;
}

export function proposalSectionData() {
  var data = applicationData.proposalSection;
  data.title = 'Research of ' + faker.commerce.productName();
  data.startDate = getFutureDate(2, 'months');
  data.endDate = getFutureDate(11, 'months');
  data.description = faker.lorem.sentence();
  data.remarks = faker.lorem.sentence();
  projectTitle = data.title;
  return data;
}

export function businessImpactSectionData() {
  var data = applicationData.businessImpactSection;
  data.endDate = getFutureDate(20, 'days');
  data.rationale = faker.lorem.sentence();
  data.benefits = faker.lorem.sentence();
  return data;
}

export function costSectionData() {
  var data = applicationData.costSection;
  data.remarks = faker.lorem.sentence();
  data.vendor.name = faker.company.companyName();
  data.rental.description = faker.lorem.sentence();
  data.rental.remarks = faker.lorem.sentence();
  data.salary.name = faker.name.findName();
  data.salary.designation = faker.name.title();
  data.salary.role = faker.lorem.sentence();
  data.salary.remarks = faker.lorem.sentence();
  return data;
}

// Utils
export function formatCurrencyValue(str, addCurrency = false) {
  var displayValue = numeral(parseInt(str)).format('0,0.00');
  var finalValue = addCurrency ? ('SGD ' + displayValue) : displayValue;
  return finalValue;
}
