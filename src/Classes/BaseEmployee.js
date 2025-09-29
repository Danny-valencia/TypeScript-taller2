"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseEmployee = void 0;
class BaseEmployee {
    constructor(user, id, department) {
        this.id = id;
        this.name = user.name;
        this.age = user.age;
        this.email = user.email;
        this.gender = user.gender;
        this.department = department;
    }
}
exports.BaseEmployee = BaseEmployee;
