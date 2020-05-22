import Page from '../page';

export default class ProposalSection extends Page {
  constructor() {
    super();

    // Page objects
    this.tbTitle = '#react-project-title';
    this.tbStartDate = '#react-project-start_date';
    this.tbEndDate = '#react-project-end_date';
    this.tbDescription = '#react-project-description';
    this.lstActivity = '#react-select-project-activity--value';
    this.lstTargetMarket = '#react-select-project-primary_market--value';
    this.radFirstTimeOutsideSGYes = '#react-project-is_first_time_expand-true';
    this.radFirstTimeOutsideSGNo = '#react-project-is_first_time_expand-false';
    this.fileSupportingDocuments = '#react-project-attachments-input';
    this.tbRemarks = '#react-project-remarks';

    // Read only check
    this.txtActivity = '#react-project-activity';
    this.txtTargetMarket = '#react-project-primary_market';
    this.txtFirstTimeOutsideSG = '#react-project-is_first_time_expand';

    this.txtError = '#react-project-title-alert';

    // Store the entered data
    this.enteredData = undefined;
  }

  completeSection(data) {
    this.log('Filling in values in the Proposal section...');
    this.setValue(this.tbTitle, data.title);
    this.setValue(this.tbStartDate, data.startDate);
    this.setValue(this.tbEndDate, data.endDate);
    this.setValue(this.tbDescription, data.description);
    this.selectActivity(data.activity);
    this.selectTargetMarket(data.market);
    this.click(this.radFirstTimeOutsideSGYes);
    this.uploadImage(this.fileSupportingDocuments);
    this.setValue(this.tbRemarks, data.remarks);
    this.enteredData = data;
  }

  shouldHaveEnteredValues() {
    this.log('Checking if the Proposal section contains entered values...');
    this.elementShouldHaveText(this.tbTitle, this.enteredData.title);
    this.elementShouldHaveText(this.tbStartDate, this.enteredData.startDate);
    this.elementShouldHaveText(this.tbEndDate, this.enteredData.endDate);
    this.elementShouldHaveText(this.tbDescription, this.enteredData.description);
    this.elementShouldHaveText(this.txtActivity, this.enteredData.activity);
    this.elementShouldHaveText(this.txtTargetMarket, this.enteredData.market);
    this.elementShouldHaveText(this.txtFirstTimeOutsideSG, 'Yes');
    this.elementShouldHaveText(this.tbRemarks, this.enteredData.remarks);
  }

  shouldShowErrors() {
    this.log('Checking if specific errors are displayed...');
    this.elementShouldBeVisible(this.txtError);
    this.elementShouldHaveText(this.txtError, 'We need a response for this field')
  }

  selectActivity(activity) {
    this.click('#react-select-project-activity--value + span.Select-arrow-zone');
    this.setValueAndEnter('#react-select-project-activity--value input', activity);
  }

  selectTargetMarket(market) {
    this.click('#react-select-project-primary_market--value + span.Select-arrow-zone');
    this.setValueAndEnter('#react-select-project-primary_market--value input', market);
  }

  enterInvalidProjectTitle() {
    this.setValue(this.tbTitle, ' ');
    this.click(this.tbDescription);
  }
}
