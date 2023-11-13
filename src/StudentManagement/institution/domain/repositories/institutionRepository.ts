import { Institution } from "../entities/institution";

// readonly id: number,
//         readonly name: string,
//         readonly career: string,
//         readonly education_level: string,
//         readonly school_cycle: string,
//         readonly addres_id: number,
//         readonly status: string

export interface InstitutionRepository {
    createInstitution(
        name: string,
        career: string,
        education_level: string,
        school_cycle: string,
        addres_id: number,
        status: string
    ): Promise<Institution | null>;

    updateInstitution(
        id: number,
        name: string,
        career: string,
        education_level: string,
        school_cycle: string,
        addres_id: number,
        status: string
    ): Promise<Institution | null>;

    getInstitutionById(
        id: number,
    ): Promise<Institution | null>;
}