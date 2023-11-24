import { Address } from "../domain/entities/address";
import { AddressRespository } from "../domain/repositories/addressRepository";
import { AddressValidation } from "../domain/validations/addressValidation";
import { validate } from "class-validator";

export class CreateAddressUseCase {
    constructor(readonly addressRepository: AddressRespository) { }

    async execute(
        state: string,
        municipality: string,
        zipCode: string,
        mainStreet: string,
        street1: string | null,
        street2: string | null,
    ): Promise<Address | any | null> {
        let address = new AddressValidation(null, state, municipality, zipCode, mainStreet, street1 || "", street2 || "");
        let addressValidate = validate(address);

        try {
            const createdAddress = await this.addressRepository.createAddress(
                state,
                municipality,
                zipCode,
                mainStreet,
                street1 || "",
                street2 || "",
            );

            return createdAddress;
        } catch (error) {
            return null;
        }

    };

}