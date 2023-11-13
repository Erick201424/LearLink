import { IsNotEmpty, IsString, IsNumber, IsEmail, MinLength, Matches } from "class-validator";

export class CreateUserValidation {
    @IsNotEmpty()
    @IsString()
    @IsEmail({}, { message: "El correo proporcionado no es válido" })
    public email: string;

    @IsNotEmpty()
    @IsString()
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_])[A-Za-z\d@$!%*?&_]{8,}$/, {
        message:
            "La contraseña debe tener al menos 8 caracteres, una letra minúscula, una letra mayúscula, un número y un carácter especial",
    })
    public password: string;

    constructor(
        email: string,
        password: string
    ) {
        this.email = email;
        this.password = password;
    }
}

export class UpdateUserValidation {
    @IsNotEmpty()
    @IsNumber()
    public id: number;

    @IsNotEmpty()
    @IsString()
    @IsEmail({}, { message: "El correo proporcionado no es válido" })
    public email: string;

    @IsNotEmpty()
    @IsString()
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_])[A-Za-z\d@$!%*?&_]{8,}$/, {
        message:
            "La contraseña debe tener al menos 8 caracteres, una letra minúscula, una letra mayúscula, un número y un carácter especial",
    })
    public password: string;

    constructor(
        id: number,
        email: string,
        password: string
    ) {
        this.id = id;
        this.email = email;
        this.password = password;
    }
}

export class GetByIdUserValidation {
    @IsNotEmpty()
    @IsNumber()
    public id: number;

    constructor(
        id: number
    ) {
        this.id = id;
    }
}