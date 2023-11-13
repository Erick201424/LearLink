import { Request, Response } from "express";
import { GetUserByIdUseCase } from "../../application/getUserByIdUseCase";

export class GetUserByIdController {
    constructor(readonly getUserByIdUseCase: GetUserByIdUseCase) { }

    async getById(req: Request, res: Response) {
        const userId = parseInt(req.params.id);
        try {
            const getByIdUser = await this.getUserByIdUseCase.getById(userId);
            if (getByIdUser) {
                return res.status(200).json({
                    status: "success",
                    data: getByIdUser,
                    message: "Información de usuario obtenida exitosamente",
                });
            } else {
                return res.status(404).json({
                    status: "error",
                    data: null,
                    message: "No se encontró el usuario con el ID proporcionado",
                });
            }
        } catch (error) {
            return res.status(500).json({
                status: "error",
                data: null,
                message: "Error al obtener la usuario",
            });
        }
    }
}