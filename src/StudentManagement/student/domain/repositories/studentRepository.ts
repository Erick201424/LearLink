import { Student } from "../entities/student";

export interface StudentRepository {
    createStudent(student: Student): Promise<Student | null>;

}