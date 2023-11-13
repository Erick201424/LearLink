import { IsNotEmpty, IsString, IsNumber, IsPostalCode, IsOptional, IsIn } from "class-validator";

export class CreateAddressValidation {
    @IsNotEmpty()
    @IsString()
    public mainStreet: string;

    @IsOptional()
    @IsString()
    public street1: string;

    @IsOptional()
    @IsString()
    public street2: string;

    @IsNotEmpty()
    @IsNumber()
    @IsPostalCode('MX', {
        message: 'El código postal debe tener 5 dígitos',
    })
    public zipCode: number;

    @IsNotEmpty()
    @IsString()
    public state: string;

    @IsNotEmpty()
    @IsString()
    public country: string;

    @IsNotEmpty()
    @IsString()
    @IsIn(['Activo', 'Inactivo'])
    public status: string;

    constructor(
        mainStreet: string,
        street1: string,
        street2: string,
        zipCode: number,
        state: string,
        country: string,
        status: string
    ) {
        this.mainStreet = mainStreet;
        this.street1 = street1;
        this.street2 = street2;
        this.zipCode = zipCode;
        this.state = state;
        this.country = country;
        this.status = status;
    }
}

export class UpdateAddressValidation {
    @IsNotEmpty()
    @IsNumber()
    public id: number;

    @IsNotEmpty()
    @IsString()
    public mainStreet: string;

    @IsOptional()
    @IsString()
    public street1: string;

    @IsOptional()
    @IsString()
    public street2: string;

    @IsNotEmpty()
    @IsNumber()
    @IsPostalCode('MX', {
        message: 'El código postal debe tener 5 dígitos',
    })
    public zipCode: number;

    @IsNotEmpty()
    @IsString()
    public state: string;

    @IsNotEmpty()
    @IsString()
    public country: string;

    @IsNotEmpty()
    @IsString()
    @IsIn(['Activo', 'Inactivo'])
    public status: string;

    constructor(
        id: number,
        mainStreet: string,
        street1: string,
        street2: string,
        zipCode: number,
        state: string,
        country: string,
        status: string
    ) {
        this.id = id;
        this.mainStreet = mainStreet;
        this.street1 = street1;
        this.street2 = street2;
        this.zipCode = zipCode;
        this.state = state;
        this.country = country;
        this.status = status;
    }
}

export class GetByIdAddressValidation {
    @IsNotEmpty()
    @IsNumber()
    public id: number;

    constructor(
        id: number
    ) {
        this.id = id;
    }
}