export default class MraCostSection {
  constructor() {
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
  }

  completeSection(data, fileData) {
    addNewVendorItem(data.vendor, fileData);
    addNewRentalItem(data.rental, fileData);
    addNewSalaryItem(data.salary, fileData);
    cy.get(this.tbCostRemarks).type(data.remarks);
  }

  addNewVendorItem(data, fileData) {
    cy.get(this.cntVendors).click();
    cy.get(this.btnAddVendor).click();
    cy.get(this.radVendorRegisteredOverseas).click();
    cy.get(this.tbVendorName).type(data.name);
    cy.get(this.fileVendorDoc).trigger('drop', fileData);
    cy.get(this.tbVendorBillAmount).type(data.amount);
  }

  addNewRentalItem(data, fileData) {
    cy.get(this.cntRental).click();
    cy.get(this.btnAddRental).click();
    cy.get(this.tbRentalDescription).type(data.description);
    cy.get(this.tbRentalDuration).type(data.duration);
    cy.get(this.tbRentalBillAmount).type(data.amount);
    cy.get(this.fileRentalDoc).trigger('drop', fileData);
    cy.get(this.tbRentalRemarks).type(data.remarks);
  }

  addNewSalaryItem(data, fileData) {
    cy.get(this.cntSalary).click();
    cy.get(this.btnAddSalary).click();
    cy.get(this.tbStaffName).type(data.name);
    cy.get(this.tbStaffDesignation).type(data.designation);
    cy.get(this.tbStaffIdentification).type(data.identification);
    cy.get(this.lstStaffNationality).select(data.nationality);
    cy.get(this.tbStaffRole).type(data.role);
    cy.get(this.tbStaffDuration).type(data.duration);
    cy.get(this.tbStaffSalaryAmount).type(data.amount);
    cy.get(this.fileStaffDoc).trigger('drop', fileData);
    cy.get(this.tbStaffRemarks).type(data.remarks);
  }
}
