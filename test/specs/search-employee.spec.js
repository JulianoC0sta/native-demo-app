const LoginPage = require("../pageobjects/LoginPage");
const HomePage = require("../pageobjects/HomePage");
const SearchPage = require("../pageobjects/SearchPage");
const { validUser, newEmployee } = require("../data/users");

describe("Busca de Funcionário", () => {
  it("CT05 - Deve buscar e exibir o funcionário cadastrado", async () => {
    try {
      await LoginPage.login(validUser.username, validUser.password);
      await HomePage.navigateToSearch();
      await SearchPage.searchEmployee(newEmployee.employeeId);

      await expect(await SearchPage.resultRow).toHaveTextContaining(
        newEmployee.firstName,
        {
          message: "Funcionário não foi encontrado após busca.",
        }
      );
    } catch (error) {
      throw new Error("Erro ao buscar funcionário: " + error);
    }
  });
});
