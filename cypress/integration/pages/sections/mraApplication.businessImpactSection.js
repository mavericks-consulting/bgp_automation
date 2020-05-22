import Page from '../page';
import { formatCurrencyValue } from '../../utils/dataUtils';

export default class BusinessImpactSection extends Page {
  constructor() {
    super();

    // Page objects
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
    this.tbBenefits = '#react-project_impact-benefits_remarks';

    this.txtError = '#react-project_impact-fy_end_date_0-alert';

    // Store the entered data
    this.enteredData = undefined;
  }

  completeSection(data) {
    this.log('Filling in values in the Business Impact section...');
    this.setValue(this.tbEndDate, data.endDate);

    this.setValue(this.tbOverseasSalesCurrentYear, data.overseasSales.currentYear);
    this.setValue(this.tbOverseasSalesYear1, data.overseasSales.year1);
    this.setValue(this.tbOverseasSalesYear2, data.overseasSales.year2);
    this.setValue(this.tbOverseasSalesYear3, data.overseasSales.year3);

    this.setValue(this.tbOverseasInvestmentsCurrentYear, data.overseasInvestments.currentYear);
    this.setValue(this.tbOverseasInvestmentsYear1, data.overseasInvestments.year1);
    this.setValue(this.tbOverseasInvestmentsYear2, data.overseasInvestments.year2);
    this.setValue(this.tbOverseasInvestmentsYear3, data.overseasInvestments.year3);

    this.setValue(this.tbRationale, data.rationale);
    this.setValue(this.tbBenefits, data.benefits);
    this.enteredData = data;
  }

  shouldHaveEnteredValues() {
    this.log('Checking if the Business Impact section contains the entered values...');
    this.elementShouldHaveText(this.tbEndDate, this.enteredData.endDate);

    this.elementShouldHaveText(this.tbOverseasSalesCurrentYear, formatCurrencyValue(this.enteredData.overseasSales.currentYear));
    this.elementShouldHaveText(this.tbOverseasSalesYear1, formatCurrencyValue(this.enteredData.overseasSales.year1));
    this.elementShouldHaveText(this.tbOverseasSalesYear2, formatCurrencyValue(this.enteredData.overseasSales.year2));
    this.elementShouldHaveText(this.tbOverseasSalesYear3, formatCurrencyValue(this.enteredData.overseasSales.year3));

    this.elementShouldHaveText(this.tbOverseasInvestmentsCurrentYear, formatCurrencyValue(this.enteredData.overseasInvestments.currentYear));
    this.elementShouldHaveText(this.tbOverseasInvestmentsYear1, formatCurrencyValue(this.enteredData.overseasInvestments.year1));
    this.elementShouldHaveText(this.tbOverseasInvestmentsYear2, formatCurrencyValue(this.enteredData.overseasInvestments.year2));
    this.elementShouldHaveText(this.tbOverseasInvestmentsYear3, formatCurrencyValue(this.enteredData.overseasInvestments.year3));

    this.elementShouldHaveText(this.tbRationale, this.enteredData.rationale);
    this.elementShouldHaveText(this.tbBenefits, this.enteredData.benefits);
  }

  shouldShowErrors() {
    this.log('Checking if specific errors are displayed...');
    this.elementShouldBeVisible(this.txtError);
    this.elementShouldHaveText(this.txtError, "This date doesn't look right");
  }

  enterInvalidEndDate() {
    this.setValue(this.tbEndDate, ' ');
    this.click(this.tbOverseasSalesCurrentYear);
  }
}
