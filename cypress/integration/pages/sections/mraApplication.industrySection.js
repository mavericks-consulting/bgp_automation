import Page from '../page';

export default class IndustrySection extends Page {
  constructor() {
    super();

    // Page objects
    this.lnkIT = '#IT';
    this.lnkBusinessExpansion = 'input[id="International Expansion"]';
    this.lnkMarketReadinessAssistance = 'input[id="Market Readiness Assistance 2"]';
    this.btnInitiateApplication = '#go-to-grant';
  }

  completeSection() {
    this.log('Choosing the Market Research Assistance workflow...');
    this.click(this.lnkIT);
    this.click(this.lnkBusinessExpansion);
    this.click(this.lnkMarketReadinessAssistance);
    this.click(this.btnInitiateApplication);
  }
}
