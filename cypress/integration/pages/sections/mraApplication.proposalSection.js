export default class MraProposalSection {
  constructor() {
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
  }

  completeSection(data, fileData) {
    cy.get(this.tbTitle).type(data.title);
    cy.get(this.tbStartDate).type(data.startDate);
    cy.get(this.tbEndDate).type(data.endDate);
    cy.get(this.tbDescription).type(data.description);
    cy.get(this.lstActivity).select(data.activity);
    cy.get(this.lstTargetMarket).select(data.targetMarket);
    cy.get(this.radFirstTimeOutsideSGYes).click();
    cy.get(this.fileSupportingDocuments).trigger('drop', fileData);
    cy.get(this.tbRemarks).type(data.remarks);
  }
}
