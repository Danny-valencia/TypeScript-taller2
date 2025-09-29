1. BaseEmployee (abstracta)
Clase abstracta para definir la estructura minima básica de un empleado dentro del sistema a desarrollar.

Atributos 
user: Datos personales del empleado (nombre, edad, email, género).
id: Identificador único del empleado.
department: Departamento al que pertenece el empleado.

getDetail: lo utilizo para ser implementado por las clases hijas developer y manager
calculateSalary: lo utilozo para calcular el salario del empleado segun el rol que tiene
//Ambos son metodos abstractos

2. 

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

