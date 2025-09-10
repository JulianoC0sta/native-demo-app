class LoginPage {
  get usernameInput() {
    return $("~Username");
  }

  get passwordInput() {
    return $("~Password");
  }

  get loginButton() {
    return $("~Login");
  }

  get errorMessage() {
    return $("~Invalid credentials");
  }

  async login(username, password) {
    await this.usernameInput.setValue(username);
    await this.passwordInput.setValue(password);
    await this.passwordInput.click(); // foco
    await this.passwordInput.setValue(password);
    await this.loginButton.click();
  }
}

module.exports = new LoginPage();
