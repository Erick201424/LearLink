import { Response, Request } from "express";
import { CreateUserUseCase } from "../../application/createUserUseCase";

export class CreateUserController {
    constructor(readonly createUserUseCase: CreateUserUseCase) { }

    async create(req: Request, res: Response) {
        try {
            let { email, password } = req.body;

            const createUser = await this.createUserUseCase.create(
                email,
                password
            );

            if (createUser) {
                return res.status(201).send({
                    status: "success",
                    data: {
                        email: createUser.email,
                        password: createUser.password,
                    },
                    message: "Usuario creado con éxito",

                });
            } else {
                return res.status(400).send({
                    status: "error",
                    data: [],
                    validations: [],
                    message: "Error en la creación del usuario, intentelo mas tarde"
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
                message: "Ocurrio un error en el servidor al intentar crear un usuario."
            });
        }
    }
}