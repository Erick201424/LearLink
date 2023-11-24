import { IsDate, IsEmail, IsEnum, IsNotEmpty, IsString, Matches } from "class-validator";
import { v4 as uuidv4 } from 'uuid';
import { ValidatableEntity } from "../validations/validatable";

enum Gender {
    MALE = 'male',
    FEMALE = 'female',
    OTHER = 'other'
}

export class Student implements ValidatableEntity {
    public id: number | null;

    @IsNotEmpty()
    public uuid: string;

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
    public address_id: number;

    @IsNotEmpty()
    public institution_id: number;


    constructor(
        id: number | null,
        name: string,
        lastname: string,
        phone: string,
        dateOfBirth: Date,
        gender: Gender,
        email: string,
        password: string,
        address_id: number,
        institution_id: number
    ) {
        this.id = id;
        this.uuid = uuidv4();
        this.name = name;
        this.lastname = lastname;
        this.phone = phone;
        this.dateOfBirth = dateOfBirth;
        this.gender = gender;
        this.email = email;
        this.password = password;
        this.address_id = address_id;
        this.institution_id = institution_id;
    }

    async validate() {
        return Promise.resolve();
    }

}