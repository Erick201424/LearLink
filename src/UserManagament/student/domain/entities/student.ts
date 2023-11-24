export class Student {
    constructor(
        public id: number,
        public name: string,
        public lastname: string,
        public phone: string,
        public dateOfBirth: Date,
        public gender: string,
        public email: string,
        public password: string,
        public institution_id: number,
        public career_id: number,
        public securityQuestion: number,
        public securityAnswer: string,
    ) { }
}