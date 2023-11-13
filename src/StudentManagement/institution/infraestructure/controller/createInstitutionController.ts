import { Response, Request } from "http-proxy-middleware/dist/types";
import { CreateInstitutionUseCase } from "../../application/createInstitutionUseCase";

// id: number,
//         name: string,
//         career: string,
//         education_level: string,
//         school_cycle: string,
//         addres_id: number,
//         status: string
export class CreateInstitutionController {
    constructor(readonly createInstitutionUseCase: CreateInstitutionUseCase) { }

    async create(req: Request, res: Response) {
        try {
            let { name, career, education_level, school_cycle, addres_id, status } = req.body;

            const createInstitution = await this.createInstitutionUseCase.create(
                name,
                career,
                education_level,
                school_cycle,
                addres_id,
                status
            );

            if (createInstitution) {
                return res.status(201).send({
                    status: "success",
                    data: {
                        name: createInstitution.name,
                        career: createInstitution.career,
                        education_level: createInstitution.education_level,
                        school_cycle: createInstitution.school_cycle,
                        addres_id: createInstitution.addres_id,
                        status: createInstitution.status
                    },
                    message: "Institución creado con éxito",

                });
            } else {
                return res.status(400).send({
                    status: "error",
                    data: [],
                    validations: [],
                    message: "Error en la creación de la institución, intentelo mas tarde"
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
                message: "Ocurrio un error en el servidor al intentar crear la institución."
            });
        }
    }
}