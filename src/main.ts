import { ApiService } from "./services/ApiService";
import { EmployeeService } from "./services/EmployeeService";
import { BaseEmployee } from "./Classes/BaseEmployee";

async function main(): Promise<void> {
  try {

    const apiService = new ApiService();
    const employeeService = new EmployeeService(apiService);

  
    await employeeService.loadEmployeesFromApi();

    const employees: BaseEmployee[] = employeeService.getAllEmployees();

    console.log("=== SISTEMA DE EMPLEADOS ===");

    employees.forEach((emp) => {
      console.log("----------------------------");
      console.log(emp.getDetails());
      console.log(`Salario: $${emp.calculateSalary()}`);
    });

  } catch (error) {
    console.error("Error:", error);
  }
}

main();
