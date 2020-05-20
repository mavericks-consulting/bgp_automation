const faker = require('faker');
const moment = require('moment');

function getFutureDate(amount, unit) {
  return moment().add(amount, unit).format('DD MMM YYYY');
}

function getFixtureData(fileName) {
  var json = cy.fixture(fileName).then((json) => {
    return json;
  });
  return JSON.parse(json);
}

const loginData = getFixtureData('loginData.json');
const applicationData = getFixtureData('mraApplicationData.json');

// Login data
export const envLoginData = loginData.envLogin;
export const userLoginData = loginData.userLogin;

// Application data
export function contactSectionData() {
  var data = applicationData.contactSection;
  data.name = faker.name.findName();
  data.jobTitle = faker.name.jobTitle();
  data.primaryEmail = faker.internet.exampleEmail();
  return data;
}

export function proposalSectionData() {
  var data = applicationData.proposalSection;
  data.title = `Manufacturing of ${faker.commerce.productName()}`;
  data.startDate = getFutureDate(2, 'months');
  data.endDate = getFutureDate(36, 'months');
  data.description = faker.lorem.sentence();
  data.remarks = faker.lorem.sentence();
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

export const imageUploadData = () => {
  var dropEvent = {
    dataTransfer: {
      files: [
      ],
    },
  };
  cy.fixture('sampleImage.jpg').then((picture) => {
    return Cypress.Blob.base64StringToBlob(picture, 'image/jpeg').then((blob) => {
      dropEvent.dataTransfer.files.push(blob);
    });
  });
  return dropEvent;
};
