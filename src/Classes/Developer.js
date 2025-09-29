"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Developer = void 0;
const types_1 = require("../interfaces/types");
const BaseEmployee_1 = require("./BaseEmployee");
class Developer extends BaseEmployee_1.BaseEmployee {
    constructor(user, id, languages) {
        super(user, id, types_1.Department.IT);
        this.programmingLanguages = languages;
    }
    getDetails() {
        return `Developer ${this.name}, especialista en ${this.programmingLanguages.join(", ")}`;
    }
    calculateSalary() {
        return 3000 + (this.programmingLanguages.length * 200);
    }
}
exports.Developer = Developer;
