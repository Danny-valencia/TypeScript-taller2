"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeService = void 0;
const Developer_1 = require("../Classes/Developer");
const Manager_1 = require("../Classes/Manager");
const types_1 = require("../interfaces/types");
class EmployeeService {
    constructor(apiService) {
        this.apiService = apiService;
        this.employees = [];
    }
    async loadEmployeesFromApi() {
        try {
            const users = await this.apiService.getUsers();
            if (users.length < 3) {
                throw new Error("No hay suficientes usuarios en la API para crear empleados");
            }
            const dev1 = new Developer_1.Developer(users[0], 1, ["JavaScript", "TypeScript"]);
            const dev2 = new Developer_1.Developer(users[1], 2, ["Python"]);
            const manager = new Manager_1.Manager(users[2], 3, types_1.Department.HR, 5);
            this.employees.push(dev1, dev2, manager);
        }
        catch (error) {
            console.error("Error al cargar empleados desde API:", error);
        }
    }
    getEmployeeById(id) {
        return this.employees.find(e => e.id === id);
    }
    getAllEmployees() {
        return this.employees;
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
}
exports.EmployeeService = EmployeeService;
