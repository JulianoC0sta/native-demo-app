const LoginPage = require("../pageobjects/login.page");

describe("Login Inválido", () => {
  it("Não deve permitir login com credenciais inválidas", async () => {
    await LoginPage.login("invalido@email.com", "senhaerrada");
    // aqui você pode validar se continua na tela de login
  });
});
