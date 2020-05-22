import Page from '../page';

export default class DeclarationSection extends Page {
  constructor() {
    super();

    // Page objects
    this.radCriminalLiabilityNo = '#react-declaration-criminal_liability_check-false';
    this.radCivilProceedingNo = '#react-declaration-civil_proceeding_check-false';
    this.radInsolvencyNo = '#react-declaration-insolvency_proceeding_check-false';
    this.radIncentivesNo = '#react-declaration-project_incentives_check-false';
    this.radOtherIncentivesNo = '#react-declaration-other_incentives_check-false';
    this.radProjectCommencedNo = '#react-declaration-project_commence_check-false';
    this.radRelatedPartyNo = '#react-declaration-related_party_check-false';
    this.radCovidComplianceYes = '#react-declaration-covid_safe_check-true';
    this.radCovidFurtherComplianceYes = '#react-declaration-covid_safe_ques_check-true';
    this.chkAcknowledgement = '#react-declaration-consent_acknowledgement_check';

    // Read only check
    this.txtCriminalLiability = '#react-declaration-criminal_liability_check';
    this.txtCivilProceeding = '#react-declaration-civil_proceeding_check';
    this.txtInsolvency = '#react-declaration-insolvency_proceeding_check';
    this.txtIncentives = '#react-declaration-project_incentives_check';
    this.txtOtherIncentives = '#react-declaration-other_incentives_check';
    this.txtProjectCommenced = '#react-declaration-project_commence_check';
    this.txtRelatedParty = '#react-declaration-project_commence_check';
    this.txtCovidCompliance = '#react-declaration-covid_safe_check';
    this.txtCovidFurtherCompliance = '#react-declaration-covid_safe_ques_check';
  }

  completeSection() {
    this.log('Completing the declaration...');
    this.click(this.radCriminalLiabilityNo);
    this.click(this.radCivilProceedingNo);
    this.click(this.radInsolvencyNo);
    this.click(this.radIncentivesNo);
    this.click(this.radOtherIncentivesNo);
    this.click(this.radProjectCommencedNo);
    this.click(this.radRelatedPartyNo);
    this.click(this.radCovidComplianceYes);
    this.click(this.radCovidFurtherComplianceYes);
    this.check(this.chkAcknowledgement);
  }

  shouldHaveEnteredValues() {
    this.log('Checking if the Declaration section has entered values...');
    this.elementShouldHaveText(this.txtCriminalLiability, 'No');
    this.elementShouldHaveText(this.txtCivilProceeding, 'No');
    this.elementShouldHaveText(this.txtInsolvency, 'No');
    this.elementShouldHaveText(this.txtIncentives, 'No');
    this.elementShouldHaveText(this.txtOtherIncentives, 'No');
    this.elementShouldHaveText(this.txtProjectCommenced, 'No');
    this.elementShouldHaveText(this.txtRelatedParty, 'No');
    this.elementShouldHaveText(this.txtCovidCompliance, 'Yes');
    this.elementShouldHaveText(this.txtCovidFurtherCompliance, 'Yes');
    this.elementShouldHaveText(this.chkAcknowledgement, 'Yes');
  }
}
