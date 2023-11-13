import { Response, Request } from "express";
import { CreateAddressUseCase } from "../../application/createAddressUseCase";

export class CreateAddressController {
    constructor(readonly createAddressUseCase: CreateAddressUseCase) { }

    async create(req: Request, res: Response) {
        try {
            let { mainStreet, street1, street2, zipCode, state, country, status } = req.body;

            const createAddress = await this.createAddressUseCase.create(
                mainStreet,
                street1,
                street2,
                zipCode,
                state,
                country,
                status
            );

            if (createAddress) {
                return res.status(201).send({
                    status: "success",
                    data: {
                        mainStreet: createAddress.mainStreet,
                        street1: createAddress.street1,
                        street2: createAddress.street2,
                        zipCode: createAddress.zipCode,
                        state: createAddress.state,
                        country: createAddress.country,
                        status: createAddress.status
                    },
                    message: "Dirrección creado con éxito",

                });
            } else {
                return res.status(400).send({
                    status: "error",
                    data: [],
                    validations: [],
                    message: "Error en la creación de la dirección, intentelo mas tarde"
                });
            }
        } catch (error) {
             
        }
    }
}