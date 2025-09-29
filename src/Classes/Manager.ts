import { User, Department } from "../interfaces/types";
import { BaseEmployee } from "./BaseEmployee";

export class Manager extends BaseEmployee {
  private teamSize: number;


  constructor(user: User, id: number, department: Department, teamSize: number) {
    super(user, id, department );
    this.teamSize = teamSize;
  }

  getDetails(): string {
    return `Manager ${this.name}, lidera un equipo de ${this.teamSize} personas en ${this.department}`;
  }

  calculateSalary(): number {
    return 4000 + (this.teamSize * 300);
  }
}
