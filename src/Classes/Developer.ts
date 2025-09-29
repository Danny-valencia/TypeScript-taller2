import { User, Department } from "../interfaces/types";

import { BaseEmployee } from "./BaseEmployee";

export class Developer extends BaseEmployee {
  private programmingLanguages: string[];

  constructor(user: User, id: number, languages: string[]) {
    
    super(user, id, Department.IT);
    this.programmingLanguages = languages;
  }

  getDetails(): string {
    return `Developer ${this.name}, especialista en ${this.programmingLanguages.join(", ")}`;
  }

  calculateSalary(): number {
    
    return 3000 + (this.programmingLanguages.length * 200);
  }
}

