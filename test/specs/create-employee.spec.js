const LoginPage = require("../pageobjects/LoginPage");
const HomePage = require("../pageobjects/HomePage");
const EmployeePage = require("../pageobjects/EmployeePage");
const { validUser, newEmployee } = require("../data/users");

describe("Cadastro de Funcionário", () => {
  it("CT04 - Deve cadastrar um novo funcionário com sucesso", async () => {
    try {
      await LoginPage.login(validUser.username, validUser.password);
      await HomePage.navigateToEmployeeForm();
      await EmployeePage.createEmployee(
        newEmployee.firstName,
        newEmployee.lastName,
        newEmployee.employeeId
      );

      await expect(await EmployeePage.successMessage).toBeDisplayed({
        message:
          "Mensagem de sucesso não exibida após cadastro do funcionário.",
      });
    } catch (error) {
      throw new Error("Erro ao cadastrar novo funcionário: " + error);
    }
  });
});
