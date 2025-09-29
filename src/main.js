"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ApiService_1 = require("./services/ApiService");
const EmployeeService_1 = require("./services/EmployeeService");
async function main() {
    try {
        const apiService = new ApiService_1.ApiService();
        const employeeService = new EmployeeService_1.EmployeeService(apiService);
        await employeeService.loadEmployeesFromApi();
        const employees = employeeService.getAllEmployees();
        console.log("=== SISTEMA DE EMPLEADOS ===");
        employees.forEach((emp) => {
            console.log("----------------------------");
            console.log(emp.getDetails());
            console.log(`Salario: $${emp.calculateSalary()}`);
        });
    }
    catch (error) {
        console.error("Error:", error);
    }
}
main();
