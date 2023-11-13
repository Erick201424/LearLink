import { query } from "../../../../database/mariadb";
import { User } from "../../domain/entities/user";
import { UserRepository } from "../../domain/repositories/userRepository";

export class MariaDBRepository implements UserRepository {
    async createUser(
        email: string,
        password: string
    ): Promise<User | null> {
        try {
            const sql =
                "INSERT INTO users (email, password) VALUES (?,?)";
            const params: any[] = [email, password];
            const result = await query(sql, params);

            if (result && result.insertId) {
                const createdUser = new User(
                    result.insertId,
                    email,
                    password
                );
                return createdUser;
            } else {
                throw new Error(
                    "Failed to create the user. No valid result obtained from the database."
                );
            }
        } catch (error) {
            console.error("Error: ", error);
            throw new Error("Failed to create the user. Please try again later.");
        }
    }

    async updateUser(
        id: number,
        email: string,
        password: string
    ): Promise<User | null> {
        try {
            const sql = "UPDATE users SET email = ?, password  = ? WHERE id = ?";
            const params: any[] = [email, password, id];
            const result = await query(sql, params);

            if (result && result.affectedRows > 0) {
                const updatedUser = new User(id, email, password);
                return updatedUser;
            } else {
                return null;
            }
        } catch (error) {
            console.error("Error al actualizar al usuario:", error);
            return null;
        }
    }

    async getUserById(
        id: number
    ): Promise<User | null> {
        const sql = "SELECT * FROM users WHERE id = ?";
        try {
            const result = await query(sql, [id]);
            if (result.length === 0) {
                return null; // Si no hay resultados, se devuelve null
            }
            const user = result[0]; // Suponiendo que solo se espera un resultado

            return new User(
                user.id,
                user.email,
                user.password
            );
        } catch (error) {
            console.error("Error al obtener el usuario:", error);
            return null;
        }
    }

    async deleteUser(
        id: number
    ): Promise<boolean> {
        try {
            const sql = "SELECT * FROM users WHERE id = ? AND is_deleted = 0";
            const params: any[] = [id];
            const result = await query(sql, params);

            if (!Array.isArray(result) || result.length === 0) {
                throw Error;
            }

            // Marca la categoría como eliminada
            // const sql = "UPDATE categories SET is_deleted = 1 WHERE id = ?";
            // await query(sql, [id]);

            // También actualiza las oficinas relacionadas
            // const updateOfficesSql = "UPDATE offices SET is_deleted = 1 WHERE id_category = ?";
            // await query(updateOfficesSql, [id]);

            return true;
        } catch (error) {
            console.error('Error al marcar la categoría como eliminada:', error);
            return false;
        }
    }

}