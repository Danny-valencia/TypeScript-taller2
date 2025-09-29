"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiService = void 0;
class ApiService {
    constructor() {
        this.apiUrl = "https://dummyjson.com/users";
    }
    async getUsers() {
        try {
            const response = await fetch(this.apiUrl);
            if (!response.ok) {
                throw new Error(`Error al obtener usuarios: ${response.status}`);
            }
            const data = await response.json();
            return data.users.map((u) => ({
                name: `${u.firstName} ${u.lastName}`,
                age: u.age,
                email: u.email,
                gender: u.gender
            }));
        }
        catch (error) {
            console.error("Error en getUsers:", error);
            return [];
        }
    }
    async getUserById(id) {
        try {
            const response = await fetch(`${this.apiUrl}/${id}`);
            if (!response.ok) {
                throw new Error(`Usuario no encontrado: ${response.status}`);
            }
            const u = await response.json();
            return {
                name: `${u.firstName} ${u.lastName}`,
                age: u.age,
                email: u.email,
                gender: u.gender
            };
        }
        catch (error) {
            console.error(`Error en getUserById(${id}):`, error);
            return null;
        }
    }
}
exports.ApiService = ApiService;
