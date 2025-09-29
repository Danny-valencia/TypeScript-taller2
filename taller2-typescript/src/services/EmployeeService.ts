import { BaseEmployee } from "../Classes/BaseEmployee";
import { Developer } from "../Classes/Developer";
import { Manager } from "../Classes/Manager";
import { ApiService } from "../services/ApiService";
import { Department, User } from "../interfaces/types";

export class EmployeeService {
  private employees: BaseEmployee[] = [];

  constructor(private apiService: ApiService) {
   
  }

  async loadEmployeesFromApi(): Promise<void> {
    try {
      const users: User[] = await this.apiService.getUsers();

      if (users.length < 3) {
        throw new Error("No hay suficientes usuarios en la API para crear empleados");
      }

     
      const dev1 = new Developer(users[0], 1, ["JavaScript", "TypeScript"]);
      const dev2 = new Developer(users[1], 2, ["Python"]);
      const manager = new Manager(users[2], 3, Department.HR, 5);

      this.employees.push(dev1, dev2, manager);

    } catch (error) {
      console.error("Error al cargar empleados desde API:", error);
    }
  }

  getEmployeeById(id: number): BaseEmployee | undefined {
    return this.employees.find(e => (e as any).id === id);
  }

  getAllEmployees(): BaseEmployee[] {
    return this.employees;
  }

  addEmployee(employee: BaseEmployee): void {
    this.employees.push(employee);
  }
}
