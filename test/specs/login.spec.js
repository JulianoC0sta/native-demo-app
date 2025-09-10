const LoginPage = require("../pageobjects/LoginPage");
const HomePage = require("../pageobjects/HomePage");
const { validUser, invalidUser } = require("../data/users");

describe("Login", () => {
  it("CT01 - Deve realizar login com sucesso e exibir a Home", async () => {
    try {
      await LoginPage.login(validUser.username, validUser.password);
      await expect(await HomePage.homeTitle).toBeDisplayed({
        message: "A Home não foi exibida após o login com sucesso.",
      });
    } catch (error) {
      throw new Error(
        "Erro ao realizar login com credenciais válidas: " + error
      );
    }
  });

  it("CT02 - Deve exibir erro ao realizar login com senha inválida", async () => {
    try {
      await LoginPage.login(invalidUser.username, invalidUser.password);
      await expect(await LoginPage.errorMessage).toBeDisplayed({
        message: "Mensagem de erro não exibida ao tentar login inválido.",
      });
    } catch (error) {
      throw new Error("Erro ao testar login com senha inválida: " + error);
    }
  });
});
