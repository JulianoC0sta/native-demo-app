class SearchPage {
  get employeeIdSearchInput() {
    return $("~Employee Id");
  }

  get searchButton() {
    return $("~Search");
  }

  get resultRow() {
    return $("//android.widget.TextView[contains(@text, 'Carlos')]"); // exemplo genérico
  }

  async searchEmployee(employeeId) {
    await this.employeeIdSearchInput.setValue(employeeId);
    await this.searchButton.click();
  }
}

module.exports = new SearchPage();
