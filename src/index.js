"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Developer_1 = require("./Classes/Developer");
const user = {
    name: "Wilmer",
    age: 31,
    email: "wilmer@empresa.com",
    gender: "male",
};
const dev = new Developer_1.Developer(user, 1, ["JavaScript", "Next-js"]);
console.log(dev.getDetails());
console.log("Salario:", dev.calculateSalary());
