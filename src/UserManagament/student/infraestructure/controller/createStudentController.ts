import { Request, Response } from "express";
import { CreateStudentUseCase } from "../../application/createStudentUseCase";

export class CreateStudentController {
    constructor(readonly createStudentUseCase: CreateStudentUseCase) { }

    async execute(req: Request, res: Response) {
        const {
            name,
            lastname,
            phone,
            dateOfBirth,
            gender,
            email,
            password,
            institution_id,
            career_id,
            securityQuestion,
            securityAnswer
        } = req.body;

        try {
            const createdStudent = await this.createStudentUseCase.execute(
                name,
                lastname,
                phone,
                new Date(dateOfBirth),
                gender,
                email,
                password,
                institution_id,
                career_id,
                securityQuestion,
                securityAnswer
            );

            if (createdStudent) {
                return res.status(201).send({
                    status: "success",
                    message: "Estudiante creado con éxito",
                    data: createdStudent,
                });
            } else {
                return res.status(400).send({
                    status: "error",
                    message: "Error al crear el estudiante, inténtelo más tarde",
                });
            }
        } catch (error) {
            if (error instanceof Error) {
                if (error.message.startsWith('[')) {
                    return res.status(400).send({
                        status: "error",
                        message: "Validación fallida",
                        errors: JSON.parse(error.message)
                    });
                }
            }
            return res.status(500).send({
                status: "error",
                message: "Error interno del servidor"
            });
        }
    }
}
