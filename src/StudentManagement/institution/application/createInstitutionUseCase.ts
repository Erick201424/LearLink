import { Institution } from "../domain/entities/institution";
import { InstitutionRepository } from "../domain/repositories/institutionRepository";
import { CreateInstitutionValidation } from "../domain/validations/institutionValidation";
import { validate } from "class-validator";

export class CreateInstitutionUseCase {
    constructor(readonly institutionRepository: InstitutionRepository) { }

    async create(
        name: string,
        career: string,
        education_level: string,
        school_cycle: string,
        addres_id: number,
        status: string
    ): Promise<Institution | null> {
        const institutionValidation = new CreateInstitutionValidation(name, career, education_level, school_cycle, addres_id, status);
        const institutionValidate = await validate(institutionValidation);

        if (institutionValidate.length > 0) {
            throw new Error(JSON.stringify(institutionValidate));
        }

        try {
            const createdInstitution = await this.institutionRepository.createInstitution(
                name,
                career,
                education_level,
                school_cycle,
                addres_id,
                status
            );
            return createdInstitution;
        } catch (error) {
            return null;
        }
    }
}