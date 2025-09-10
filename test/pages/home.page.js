class HomePage {
  get homeTitle() {
    return $("~Dashboard");
  }

  get menuButton() {
    return $("~Menu");
  }

  get logoutButton() {
    return $("~Logout");
  }

  async logout() {
    await this.menuButton.click();
    await this.logoutButton.click();
  }

  async navigateToEmployeeForm() {
    await $("~PIM").click();
    await $("~Add Employee").click();
  }

  async navigateToSearch() {
    await $("~PIM").click();
    await $("~Employee List").click();
  }
}

module.exports = new HomePage();
