// se crea un console.log para probar 
//console.log("Hola, practicando el taller 2 de typescript")
// ejemplo de la clase hija developer
import { User, Department } from "./interfaces/types";
import { Developer } from "./Classes/Developer";
const user: User = {
  name: "Wilmer",
  age: 31,
  email: "wilmer@empresa.com",
  gender: "male",
};

const dev = new Developer(user, 1, ["JavaScript", "Next.js"]);


console.log(dev.getDetails());
console.log("Salario:", dev.calculateSalary());
