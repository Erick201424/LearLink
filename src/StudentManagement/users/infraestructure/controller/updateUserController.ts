import { Response, Request } from "express";
import { UpdateUserUseCase } from "../../application/updateUserUseCase";

export class UpdateUserController {
    constructor(readonly updateUserUseCase: UpdateUserUseCase) { }

    async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { email, password } = req.body;

            const updateUser = await this.updateUserUseCase.update(
                Number(id),
                email,
                password
            );

            if (updateUser) {
                return res.status(200).send({
                    status: "succes",
                    data: {
                        id: updateUser.id,
                        email: updateUser.email,
                        password: updateUser.password
                    },
                    message: "Usuario actualizado con éxito",
                });
            } else {
                res.status(400).send({
                    status: "error",
                    data: [],
                    validations: [],
                    message: "Error en la actualización del usuario, intentelo mas tarde"
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
                message: "Ocurrio un error en el servidor al intentar actualizar un usuario."
            });
        }
    }
}