import Page from '../page';
import { formatCurrencyValue } from '../../utils/dataUtils';

export default class CostSection extends Page {
  constructor() {
    super();

    // Page objects
    // Common
    this.tbCostRemarks = '#react-project_cost-remarks';
    
    // Third Party Vendors
    this.cntVendors = '#react-project_cost-vendors-accordion-header';
    this.btnAddVendor = '#react-project_cost-vendors-add-item';
    this.radVendorRegisteredOverseas = '#react-project_cost-vendors-0-local_vendor-false';
    this.tbVendorName = '#react-project_cost-vendors-0-vendor_name';
    this.fileVendorDoc = '#react-project_cost-vendors-0-attachments-input';
    this.tbVendorBillAmount = '#react-project_cost-vendors-0-amount_in_billing_currency';

    // Office Space Rental
    this.cntRental = '#react-project_cost-office_rentals-accordion-header';
    this.btnAddRental = '#react-project_cost-office_rentals-add-item';
    this.tbRentalDescription = '#react-project_cost-office_rentals-0-description';
    this.tbRentalDuration = '#react-project_cost-office_rentals-0-rental_duration';
    this.tbRentalBillAmount = '#react-project_cost-office_rentals-0-amount_in_billing_currency';
    this.fileRentalDoc = '#react-project_cost-office_rentals-0-attachments-input';
    this.tbRentalRemarks = '#react-project_cost-office_rentals-0-remarks';

    // Salary
    this.cntSalary = '#react-project_cost-salaries-accordion-header';
    this.btnAddSalary = '#react-project_cost-salaries-add-item';
    this.tbStaffName = '#react-project_cost-salaries-0-name';
    this.tbStaffDesignation = '#react-project_cost-salaries-0-designation';
    this.tbStaffIdentification = '#react-project_cost-salaries-0-nric';
    this.lstStaffNationality = '#react-select-project_cost-salaries-0-nationality--value';
    this.tbStaffRole = '#react-project_cost-salaries-0-project_role';
    this.tbStaffDuration = '#react-project_cost-salaries-0-involvement_months';
    this.tbStaffSalaryAmount = '#react-project_cost-salaries-0-salary_in_billing_currency';
    this.fileStaffDoc = '#react-project_cost-salaries-0-attachments-input';
    this.tbStaffRemarks = '#react-project_cost-salaries-0-remarks';

    // Read only check
    this.txtVendorRegisteredLocation = '#react-project_cost-vendors-0-local_vendor';
    this.txtStaffNationality = '#react-project_cost-salaries-0-nationality';
    this.txtTotalCost = '#react-project_cost-total_cost';

    this.txtError = '#react-project_cost-vendors-0-vendor_name-alert';

    // Store the entered data
    this.enteredData = undefined;
  }

  completeSection(data) {
    this.log('Filling in values in the Cost section...');
    this.addNewVendorItem(data.vendor);
    this.addNewRentalItem(data.rental);
    this.addNewSalaryItem(data.salary);
    this.setValue(this.tbCostRemarks, data.remarks);
    this.enteredData = data;
  }

  addNewVendorItem(data) {
    this.log('Adding a new vendor item...');
    this.click(this.cntVendors);
    this.click(this.btnAddVendor);
    this.click(this.radVendorRegisteredOverseas);
    this.setValue(this.tbVendorName, data.name);
    this.uploadImage(this.fileVendorDoc);
    this.setValue(this.tbVendorBillAmount, data.amount);
  }

  addNewRentalItem(data) {
    this.log('Adding a new rental item...');
    this.click(this.cntRental);
    this.click(this.btnAddRental);
    this.setValue(this.tbRentalDescription, data.description);
    this.setValue(this.tbRentalDuration, data.duration);
    this.setValue(this.tbRentalBillAmount, data.amount);
    this.uploadImage(this.fileRentalDoc);
    this.setValue(this.tbRentalRemarks, data.remarks);
  }

  addNewSalaryItem(data) {
    this.log('Adding a new salary item...');
    this.click(this.cntSalary);
    this.click(this.btnAddSalary);
    this.setValue(this.tbStaffName, data.name);
    this.setValue(this.tbStaffDesignation, data.designation);
    this.setValue(this.tbStaffIdentification, data.identification);
    this.selectStaffNationality(data.nationality);
    this.setValue(this.tbStaffRole, data.role);
    this.setValue(this.tbStaffDuration, data.duration);
    this.setValue(this.tbStaffSalaryAmount, data.amount);
    this.uploadImage(this.fileStaffDoc);
    this.setValue(this.tbStaffRemarks, data.remarks);
  }

  shouldHaveEnteredValues() {
    this.log('Checking if the entered values are displayed in the Cost section...');
    this.elementShouldHaveText(this.txtVendorRegisteredLocation, 'Overseas');
    this.elementShouldHaveText(this.tbVendorName, this.enteredData.vendor.name);
    this.elementShouldHaveText(this.tbVendorBillAmount, formatCurrencyValue(this.enteredData.vendor.amount, true));
    
    this.elementShouldHaveText(this.tbRentalDescription, this.enteredData.rental.description);
    this.elementShouldHaveText(this.tbRentalDuration, `${this.enteredData.rental.duration} months`);
    this.elementShouldHaveText(this.tbRentalBillAmount, formatCurrencyValue(this.enteredData.rental.amount, true));
    this.elementShouldHaveText(this.tbRentalRemarks, this.enteredData.rental.remarks);

    this.elementShouldHaveText(this.tbStaffName, this.enteredData.salary.name);
    this.elementShouldHaveText(this.tbStaffDesignation, this.enteredData.salary.designation);
    this.elementShouldHaveText(this.txtStaffNationality, this.enteredData.salary.nationality);
    this.elementShouldHaveText(this.tbStaffRole, this.enteredData.salary.role);
    this.elementShouldHaveText(this.tbStaffDuration, `${this.enteredData.salary.duration} months`);
    this.elementShouldHaveText(this.tbStaffSalaryAmount, formatCurrencyValue(this.enteredData.salary.amount, true));
    this.elementShouldHaveText(this.tbStaffRemarks, this.enteredData.salary.remarks);
  }

  shouldShowErrors() {
    this.log('Checking if specific errors are displayed...');
    this.elementShouldBeVisible(this.txtError);
    this.elementShouldHaveText(this.txtError, 'We need a response for this field');
  }

  selectStaffNationality(nationality) {
    this.click('#react-select-project_cost-salaries-0-nationality--value + span.Select-arrow-zone');
    this.setValueAndEnter('#react-select-project_cost-salaries-0-nationality--value input', nationality);
  }

  enterInvalidVendorName() {
    this.click(this.cntVendors);
    this.click(this.btnAddVendor);
    this.setValue(this.tbVendorName, ' ');
    this.click(this.tbVendorBillAmount);
  }
}
