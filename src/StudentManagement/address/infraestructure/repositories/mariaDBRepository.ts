import { query } from "../../../../database/mariadb";
import { Address } from "../../domain/entities/address";
import { AddressRespository } from "../../domain/repositories/addressRepository";

export class MariaDBRepository implements AddressRespository {

    async createAddress(state: string, municipality: string, zipCode: string, mainStreet: string, street1: string, street2: string): Promise<any> {
        try {
            const sql = "INSERT INTO address (state, municipality, zipCode, mainStreet, street1, street2) VALUES (?,?,?,?,?,?)";
            const params: any[] = [state, municipality, zipCode, mainStreet, street1, street2];
            const result: any = await query(sql, params);

            return new Address(result.insertId, state, municipality, zipCode, mainStreet, street1, street2);
        } catch (error) {
            console.error("Error: ", error);
            throw new Error("Failed to create the user. Please try again later.");
        }
    }

    //     async getAddressById(id: number): Promise<Address | null> {
    //         const sql = "SELECT * FROM address WHERE id = ?";

    //         try {
    //             const result = await query(sql, [id]);

    //             if (result && result.length > 0) {
    //                 const addressData = result[0];
    //                 const address = new Address(
    //                     addressData.id,
    //                     addressData.state,
    //                     addressData.municipality,
    //                     addressData.zipCode,
    //                     addressData.mainStreet,
    //                     addressData.street1,
    //                     addressData.street2
    //                 );

    //                 return address;
    //             } else {
    //                 return null; // No se encontró ninguna dirección con el ID dado
    //             }

    //         } catch (error) {
    //             console.error("Error fetching address by ID:", error);
    //             return null;
    //         }
    //     }

    //     async createAddress(address: Address): Promise<Address | null> {
    //         let sql = "INSERT INTO address(state, municipality, zipCode, mainStreet, street1, street2) values(?,?,?,?,?,?)";
    //         const params: any[] = [address.state, address.municipality, address.zipCode, address.mainStreet, address.street1, address.street2];
    //         const result: any = await query(sql, params);

    //         address.id = result.insertId;
    //         return address;
    //     }

}