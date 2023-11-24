import { Student } from "../domain/entities/student";
import { StudentRepository } from "../domain/repositories/studentRepository";
import { ValidatorCreateStudent, Gender } from "../domain/validators/studentValidation";
import { validate } from "class-validator";

export class CreateStudentUseCase {
    constructor(readonly studentRepository: StudentRepository) { }

    async execute(
        name: string,
        lastname: string,
        phone: string,
        dateOfBirth: Date,
        gender: Gender,
        email: string,
        password: string,
        institution_id: number,
        career_id: number,
        securityQuestion: number,
        securityAnswer: string
    ): Promise<Student | null> {
        const studentValidation = new ValidatorCreateStudent(
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
        );

        const studentValidate = await validate(studentValidation);

        if (studentValidate.length > 0) {
            throw new Error(JSON.stringify(studentValidate));
        }

        try {
            const createdStudent = await this.studentRepository.createStudent({
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
            });

            return createdStudent;
        } catch (error) {
            return null;
        }
    }
}
