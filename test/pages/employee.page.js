class EmployeePage {
  get firstNameInput() {
    return $("~First Name");
  }

  get lastNameInput() {
    return $("~Last Name");
  }

  get employeeIdInput() {
    return $("~Employee Id");
  }

  get saveButton() {
    return $("~Save");
  }

  get successMessage() {
    return $("~Successfully Saved");
  }

  async createEmployee(firstName, lastName, employeeId) {
    await this.firstNameInput.setValue(firstName);
    await this.lastNameInput.setValue(lastName);
    await this.employeeIdInput.setValue(employeeId);
    await this.saveButton.click();
  }
}

module.exports = new EmployeePage();
