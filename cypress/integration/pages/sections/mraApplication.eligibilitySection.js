import Page from '../page';

export default class EligibilitySection extends Page {
  constructor() {
    super();

    // Page objects
    this.radSGRegisteredYes = '#react-eligibility-sg_registered_check-true';
    this.radSalesTurnoverYes = '#react-eligibility-turnover_check-true';
    this.radLocalEquityYes = '#react-eligibility-global_hq_check-true';
    this.radNewMarketYes = '#react-eligibility-new_target_market_check-true';
    this.radProjectStartedYes = '#react-eligibility-started_project_check-true';
    this.radSGRegisteredNo = '#react-eligibility-sg_registered_check-false';
    this.txtWarningMessage = '.eligibility-advice';

    // Read only check
    this.txtSGRegistered = '#react-eligibility-sg_registered_check';
    this.txtSalesTurnover = '#react-eligibility-turnover_check';
    this.txtLocalEquity = '#react-eligibility-global_hq_check';
    this.txtNewMarket = '#react-eligibility-new_target_market_check';
    this.txtProjectStarted = '#react-eligibility-started_project_check';
  }

  completeSection() {
    this.log('Filling valid values in the Eligibility section...');
    this.click(this.radSGRegisteredYes);
    this.click(this.radSalesTurnoverYes);
    this.click(this.radLocalEquityYes);
    this.click(this.radNewMarketYes);
    this.click(this.radProjectStartedYes);
  }

  markCompanyAsOutsideSG() {
    this.log('Marking the company as registered outside of SG in the Eligibility section...');
    this.click(this.radSGRegisteredNo);
    this.click(this.radSalesTurnoverYes);
    this.click(this.radLocalEquityYes);
    this.click(this.radNewMarketYes);
    this.click(this.radProjectStartedYes);
  }

  shouldShowErrors() {
    this.log('Checking if the Eligibility section contains the relevant error messages...');
    this.elementShouldBeVisible(this.txtWarningMessage);
    var faqLink = this.txtWarningMessage + ' a';
    this.elementShouldHaveAttribute(faqLink, 'href', 'https://www.ifaq.gov.sg/BGP/apps/fcd_faqmain.aspx#FAQ_1111145');
    this.elementShouldHaveAttribute(faqLink, 'target', '_blank');
  }

  shouldHaveEnteredValues(readOnly = true) {
    this.log('Checking if the Eligibility section contains the entered values...');
    if (readOnly) {
      this.elementShouldHaveText(this.txtSGRegistered, 'Yes');
      this.elementShouldHaveText(this.txtSalesTurnover, 'Yes');
      this.elementShouldHaveText(this.txtLocalEquity, 'Yes');
      this.elementShouldHaveText(this.txtNewMarket, 'Yes');
      this.elementShouldHaveText(this.txtProjectStarted, 'Yes');
    } else {
      this.elementShouldBeChecked(this.radSGRegisteredYes);
      this.elementShouldBeChecked(this.radSalesTurnoverYes);
      this.elementShouldBeChecked(this.radLocalEquityYes);
      this.elementShouldBeChecked(this.radNewMarketYes);
      this.elementShouldBeChecked(this.radProjectStartedYes);
    }
  }
}
