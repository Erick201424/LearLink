import { Address } from "../domain/entities/address";
import { AddressRespository } from "../domain/repositories/addressRepository";
import { GetByIdAddressValidation } from "../domain/validations/addressValition";
import { validate } from "class-validator";

export class GetAddressByIdUseCase {
    constructor(readonly addressRepository: AddressRespository) { }

    async getById(
        id: number
    ): Promise<Address | null> {
        const addressValidator = new GetByIdAddressValidation(id);
        const addressValidate = await validate(addressValidator);

        if (addressValidate.length > 0) {
            throw new Error(JSON.stringify(addressValidate));
        }

        try {
            const gotAddressById = await this.addressRepository.getAddressById(id);
            return gotAddressById;
        } catch (error) {
            return null;
        }
    }
} 