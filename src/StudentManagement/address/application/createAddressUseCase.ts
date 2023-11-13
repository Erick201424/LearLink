import { Address } from "../domain/entities/address";
import { AddressRespository } from "../domain/repositories/addressRepository";
import { CreateAddressValidation } from "../domain/validations/addressValition";
import { validate } from "class-validator";

export class CreateAddressUseCase {
    constructor(readonly addressRepository: AddressRespository) { }

    async create(
        mainStreet: string,
        street1: string,
        street2: string,
        zipCode: number,
        state: string,
        country: string,
        status: string
    ): Promise<Address | null> {
        const addressValition = new CreateAddressValidation(mainStreet, street1, street2, zipCode, state, country, status);
        const addressValidate = await validate(addressValition);

        if (addressValidate.length > 0) {
            throw new Error(JSON.stringify(addressValidate));
        }

        try {
            const createdAddress = await this.addressRepository.createAddress(
                mainStreet,
                street1,
                street2,
                zipCode,
                state,
                country,
                status
            );
            return createdAddress;
        } catch (error) {
            return null;
        }
    }
}