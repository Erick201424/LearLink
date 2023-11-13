import { Request, Response } from "express";
import { GetAddressByIdUseCase } from "../../application/getByIdAddressUseCase";

export class GetAddressByIdController {
    constructor(readonly getAddressByIdUse: GetAddressByIdUseCase) { }

    async getById(req: Request, res: Response) {
        const addressId = parseInt(req.params.id);

        try {
            const getByIdAddress = await this.getAddressByIdUse.getById(addressId);

            if (getByIdAddress) {
                return res.status(200).json({
                    status: "success",
                    data: getByIdAddress,
                    message: "Información de la dirección obtenida exitosamente",
                });
            } else {
                return res.status(404).json({
                    status: "error",
                    data: null,
                    message: "No se encontró la dirección con el ID proporcionado",
                });
            }
        } catch (error) {
            return res.status(500).json({
                status: "error",
                data: null,
                message: "Error al obtener la dirección",
            });
        }
    }
}