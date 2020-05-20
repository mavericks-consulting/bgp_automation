export default class MraBusinessImpactSection {
  constructor() {
    this.tbEndDate = '#react-project_impact-fy_end_date_0';
    this.tbOverseasSalesCurrentYear = '#react-project_impact-overseas_sales_0';
    this.tbOverseasSalesYear1 = '#react-project_impact-overseas_sales_1';
    this.tbOverseasSalesYear2 = '#react-project_impact-overseas_sales_2';
    this.tbOverseasSalesYear3 = '#react-project_impact-overseas_sales_3';
    this.tbOverseasInvestmentsCurrentYear = '#react-project_impact-overseas_investments_0';
    this.tbOverseasInvestmentsYear1 = '#react-project_impact-overseas_investments_1';
    this.tbOverseasInvestmentsYear2 = '#react-project_impact-overseas_investments_2';
    this.tbOverseasInvestmentsYear3 = '#react-project_impact-overseas_investments_3';
    this.tbRationale = '#react-project_impact-rationale_remarks';
    this.tbBenefits = 'react-project_impact-benefits_remarks';
  }

  completeSection(data) {
    cy.get(this.tbEndDate).type(data.endDate);

    cy.get(this.tbOverseasSalesCurrentYear).type(data.overseasSales.currentYear);
    cy.get(this.tbOverseasSalesYear1).type(data.overseasSales.year1);
    cy.get(this.tbOverseasSalesYear2).type(data.overseasSales.year2);
    cy.get(this.tbOverseasSalesYear3).type(data.overseasSales.year3);

    cy.get(this.tbOverseasInvestmentsCurrentYear).type(data.overseasInvestments.currentYear);
    cy.get(this.tbOverseasInvestmentsYear1).type(data.overseasInvestments.year1);
    cy.get(this.tbOverseasInvestmentsYear2).type(data.overseasInvestments.year2);
    cy.get(this.tbOverseasInvestmentsYear3).type(data.overseasInvestments.year3);

    cy.get(this.tbRationale).type(data.rationale);
    cy.get(this.tbBenefits).type(data.benefits);
  }
}
