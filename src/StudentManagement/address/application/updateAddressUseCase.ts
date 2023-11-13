import { Address } from "../domain/entities/address";
import { AddressRespository } from "../domain/repositories/addressRepository";
import { UpdateAddressValidation } from "../domain/validations/addressValition";
import { validate } from "class-validator";

export class UpdateAdressUseCase {
    constructor(readonly addressRepository: AddressRespository) { }

    async update(
        id: number,
        mainStreet: string,
        street1: string,
        street2: string,
        zipCode: number,
        state: string,
        country: string,
        status: string
    ): Promise<Address | null> {
        const addressValidator = new UpdateAddressValidation(id, mainStreet, street1, street2, zipCode, state, country, status);
        const addressValidate = await validate(addressValidator);

        if (addressValidate.length > 0) {
            throw new Error(JSON.stringify(addressValidate));
        }

        try {
            const updatedAddress = await this.addressRepository.updateAddress(
                id,
                mainStreet,
                street1,
                street2,
                zipCode,
                state,
                country,
                status
            );
            return updatedAddress;
        } catch (error) {
            return null;
        }
    }
}