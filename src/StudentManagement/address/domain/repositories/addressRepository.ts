import { Address } from "../entities/address";

export interface AddressRespository {
    createAddress(
        mainStreet: string,
        street1: string,
        street2: string,
        zipCode: number,
        state: string,
        country: string,
        status: string
    ): Promise<Address | null>

    updateAddress(
        id: number,
        mainStreet: string,
        street1: string,
        street2: string,
        zipCode: number,
        state: string,
        country: string,
        status: string
    ): Promise<Address | null>;

    getAddressById(
        id: number
    ): Promise<Address | null>
}