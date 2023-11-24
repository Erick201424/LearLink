import { Address } from "../entities/address";

export interface AddressRespository {
    createAddress(
        state: string,
        municipality: string,
        zipCode: string,
        mainStreet: string,
        street1: string | null,
        street2: string | null,
    ): Promise<Address | null>;

    // updateAddress(
    //     id: number,
    //     state: string,
    //     municipality: string,
    //     zipCode: string,
    //     mainStreet: string,
    //     street1: string | null,
    //     street2: string | null,
    // ): Promise<Address | any | null>;
}