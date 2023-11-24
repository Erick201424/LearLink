import { Response, Request } from "express";
import { CreateAddressUseCase } from "../../application/createAddresssUseCase";
import { Address } from "../../domain/entities/address";

export class CreateAddressController {
    constructor(readonly createAddressUseCase: CreateAddressUseCase) { }

    async execute(req: Request, res: Response) {
        const { state, municipality, zipCode, mainStreet, street1, street2 } = req.body;

        try {
            const address = await this.createAddressUseCase.execute(state, municipality, zipCode, mainStreet, street1, street2);

            if (address instanceof Address) {
                return res.status(201).send({
                    status: 'success',
                    data: {
                        id: address.id,
                        state: address.state,
                        municipality: address.municipality,
                        zipCode: address.zipCode,
                        mainStreet: address.mainStreet,
                        street1: address.street1,
                        street2: address.street2
                    }
                });
            } else {
                return res.status(400).send({
                    status: 'error',
                    message: 'Invalid data provided for address creation.',
                });
            }
        } catch (error) {
            if (error instanceof Error) {
                if (error.message.startsWith('[')) {
                    return res.status(400).send({
                        status: 'error',
                        message: 'Validation failed',
                        errors: JSON.parse(error.message),
                    });
                }
                return res.status(500).send({
                    status: 'error',
                    message: 'An unexpected error occurred on the server while trying to create an address.',
                });
            }
        }
    }
}