import { User } from "../interfaces/types";

export class ApiService {
  private apiUrl = "https://dummyjson.com/users";

  async getUsers(): Promise<User[]> {
    try {
      const response = await fetch(this.apiUrl);
      if (!response.ok) {
        throw new Error(`Error al obtener usuarios: ${response.status}`);
      }

      const data = await response.json();

      return data.users.map((u: any) => ({
        name: `${u.firstName} ${u.lastName}`,
        age: u.age,
        email: u.email,
        gender: u.gender
      })) as User[];
    } catch (error) {
      console.error("Error en getUsers:", error);
      return [];
    }
  }

  async getUserById(id: number): Promise<User | null> {
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
      } as User;
    } catch (error) {
      console.error(`Error en getUserById(${id}):`, error);
      return null;
    }
  }
}
