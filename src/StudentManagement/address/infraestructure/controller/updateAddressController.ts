import { Response, Request } from "express";
import { UpdateAdressUseCase } from "../../application/updateAddressUseCase";

export class UpdateAdressController {
    constructor(readonly updateAddressUseCase: UpdateAdressUseCase) { }

    async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const {
                mainStreet,
                street1,
                street2,
                zipCode,
                state,
                country,
                status
            } = req.body;

            const updateAddress = await this.updateAddressUseCase.update(
                Number(id),
                mainStreet,
                street1,
                street2,
                zipCode,
                state,
                country,
                status
            );

            if (updateAddress) {
                return res.status(200).send({
                    status: "succes",
                    data: {
                        id: updateAddress.id,
                        mainStreet: updateAddress.mainStreet,
                        street1: updateAddress.street1,
                        street2: updateAddress.street2,
                        zipCode: updateAddress.zipCode,
                        state: updateAddress.state,
                        country: updateAddress.country,
                        status: updateAddress.status
                    },
                    message: "Dirección actualizada con éxito",
                });
            } else {
                res.status(400).send({
                    status: "error",
                    data: [],
                    validations: [],
                    message: "Error en la actualización de la dirección, intentelo mas tarde"
                });
            }
        } catch (error) {
            if (error instanceof Error) {
                if (error.message.startsWith('[')) {

                    return res.status(400).send({
                        status: "error",
                        message: "Validation failed",
                        errors: JSON.parse(error.message)
                    });
                }
            }
            return res.status(500).send({
                status: "error",
                message: "Ocurrio un error en el servidor al intentar actualizar una dirección."
            });
        }
    }
}