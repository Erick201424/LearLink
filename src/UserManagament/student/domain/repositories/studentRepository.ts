import { Student } from "../entities/student";

export interface StudentRepository {
    createStudent(student: Omit<Student, 'id'>): Promise<Student | null>;

    // updateStudent(id: number, student: Student): Promise<Student | null>;
    // deleteStudent(id: number): Promise<Student | null>;
    // getStudentById(id: number): Promise<Student | null>;
    // login(email: string, password: string): Promise<boolean>;
}