const LoginPage = require("../pageobjects/LoginPage");
const HomePage = require("../pageobjects/HomePage");
const { validUser } = require("../data/users");

describe("Logout", () => {
  it("CT03 - Deve realizar logout com sucesso e retornar à tela de login", async () => {
    try {
      await LoginPage.login(validUser.username, validUser.password);
      await HomePage.logout();
      await expect(await LoginPage.loginButton).toBeDisplayed({
        message: "Não retornou para a tela de login após logout.",
      });
    } catch (error) {
      throw new Error("Erro ao testar logout: " + error);
    }
  });
});
