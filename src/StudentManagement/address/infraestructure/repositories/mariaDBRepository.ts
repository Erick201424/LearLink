import { query } from "../../../../database/mariadb";
import { Address } from "../../domain/entities/address";
import { AddressRespository } from "../../domain/repositories/addressRepository";

export class MariaDBRepository implements AddressRespository {
    async createAddress(
        mainStreet: string,
        street1: string,
        street2: string,
        zipCode: number,
        state: string,
        country: string,
        status: string
    ): Promise<Address | null> {
        try {
            const sql =
                "INSERT INTO address (mainStreet, street1, street2, zipCode, state, country, status) VALUES (?,?,?,?,?,?,?)";
            const params: any[] = [mainStreet, street1, street2, zipCode, state, country, status];
            const result = await query(sql, params);

            if (result && result.insertId) {
                const createdAddress = new Address(
                    result.insertId,
                    mainStreet,
                    street1,
                    street2,
                    zipCode,
                    state,
                    country,
                    status
                );
                return createdAddress;
            } else {
                throw new Error(
                    "Failed to create the category. No valid result obtained from the database."
                );
            }
        } catch (error) {
            console.error("Error: ", error);
            throw new Error("Failed to create the address. Please try again later.");
        }
    }

    async updateAddress(
        id: number,
        mainStreet: string,
        street1: string,
        street2: string,
        zipCode: number,
        state: string,
        country: string,
        status: string
    ): Promise<Address | null> {
        try {
            const sql = "UPDATE address SET mainStreet = ?, street1  = ?, street2 = ?, zipCode = ?, state = ?, country = ?, status = ? WHERE id = ?";
            const params: any[] = [mainStreet, street1, street2, zipCode, state, country, status, id];
            const result = await query(sql, params);

            if (result && result.affectedRows > 0) {
                const updatedAddress = new Address(id, mainStreet, street1, street2, zipCode, state, country, status);
                return updatedAddress;
            } else {
                return null;
            }
        } catch (error) {
            console.error("Error al actualizar la dirección:", error);
            return null;
        }
    }

    async getAddressById(
        id: number
    ): Promise<Address | null> {
        const sql = "SELECT * FROM address WHERE id = ?";
        try {
            const result = await query(sql, [id]);
            if (result.length === 0) {
                return null; // Si no hay resultados, se devuelve null
            }
            const address = result[0]; // Suponiendo que solo se espera un resultado

            return new Address(
                address.id,
                address.mainStreet,
                address.street1,
                address.street2,
                address.zipCode,
                address.state,
                address.country,
                address.status
            );
        } catch (error) {
            console.error("Error al obtener la dirección:", error);
            return null;
        }
    }

}