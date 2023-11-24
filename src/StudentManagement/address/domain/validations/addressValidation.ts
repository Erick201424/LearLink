import { IsNotEmpty, IsString, IsNumber, IsPostalCode, IsOptional, IsIn } from "class-validator";

export class AddressValidation {
    public id: number | null;

    @IsNotEmpty()
    @IsString()
    public state: string;

    @IsNotEmpty()
    @IsString()
    public municipality: string;

    @IsNotEmpty()
    @IsPostalCode('MX', {
        message: 'El código postal debe tener 5 dígitos',
    })
    public zipCode: string;

    @IsNotEmpty()
    @IsString()
    public mainStreet: string;

    @IsString()
    public street1: string | null;

    @IsString()
    public street2: string | null;

    constructor(
        id: number | null,
        state: string,
        municipality: string,
        zipCode: string,
        mainStreet: string,
        street1: string | null,
        street2: string | null,
    ) {
        this.id = id;
        this.state = state;
        this.municipality = municipality;
        this.zipCode = zipCode;
        this.mainStreet = mainStreet;
        this.street1 = street1;
        this.street2 = street2;
    }
}

// export class GetByIdAddressValidation {
//     @IsNotEmpty()
//     @IsNumber()
//     public id: number;

//     constructor(
//         id: number
//     ) {
//         this.id = id;
//     }
// }