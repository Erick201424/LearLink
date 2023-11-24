import { IsDate, IsEmail, IsEnum, IsNotEmpty, IsString, Matches } from "class-validator";

export enum Gender {
    MALE = 'Hombre',
    FEMALE = 'Mujer',
    OTHER = 'Otro'
}

export class ValidatorCreateStudent {
    @IsNotEmpty()
    @IsString()
    public name: string;

    @IsNotEmpty()
    @IsString()
    public lastname: string;

    @IsNotEmpty()
    @IsString()
    public phone: string;

    @IsNotEmpty()
    @IsDate()
    public dateOfBirth: Date;

    @IsNotEmpty()
    @IsEnum(Gender)
    public gender: Gender;

    @IsNotEmpty()
    @IsEmail()
    public email: string;

    @IsNotEmpty()
    @IsString()
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_])[A-Za-z\d@$!%*?&_]{8,}$/, {
        message:
            "La contraseña debe tener al menos 8 caracteres, una letra minúscula, una letra mayúscula, un número y un carácter especial",
    })
    public password: string;

    @IsNotEmpty()
    public institution_id: number;

    @IsNotEmpty()
    public career_id: number;

    @IsNotEmpty()
    public securityQuestion: number;

    @IsNotEmpty()
    @IsString()
    public securityAnswer: string;

    constructor(
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
    ) {
        this.name = name;
        this.lastname = lastname;
        this.phone = phone;
        this.dateOfBirth = dateOfBirth;
        this.gender = gender;
        this.email = email;
        this.password = password;
        this.institution_id = institution_id;
        this.career_id = career_id;
        this.securityQuestion = securityQuestion;
        this.securityAnswer = securityAnswer;
    }
}