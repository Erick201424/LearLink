import { IsNotEmpty, IsString, IsNumber } from "class-validator";

export class CreateInstitutionValidation {
    @IsNotEmpty()
    @IsString()
    public name: string;

    @IsNotEmpty()
    @IsString()
    public career: string;

    @IsNotEmpty()
    @IsString()
    public education_level: string;

    @IsNotEmpty()
    @IsString()
    public school_cycle: string;

    @IsNotEmpty()
    @IsNumber()
    public address_id: number;

    @IsNotEmpty()
    @IsString()
    public status: string;

    constructor(
        name: string,
        career: string,
        education_level: string,
        school_cycle: string,
        address_id: number,
        status: string
    ) {
        this.name = name;
        this.career = career;
        this.education_level = education_level;
        this.school_cycle = school_cycle;
        this.address_id = address_id;
        this.status = status;
    }
}

export class UpdateInstitutionValidation {
    @IsNotEmpty()
    @IsNumber()
    public id: number;

    @IsNotEmpty()
    @IsString()
    public name: string;

    @IsNotEmpty()
    @IsString()
    public career: string;

    @IsNotEmpty()
    @IsString()
    public education_level: string;

    @IsNotEmpty()
    @IsString()
    public school_cycle: string;

    @IsNotEmpty()
    @IsNumber()
    public address_id: number;

    @IsNotEmpty()
    @IsString()
    public status: string;

    constructor(
        id: number,
        name: string,
        career: string,
        education_level: string,
        school_cycle: string,
        address_id: number,
        status: string
    ) {
        this.id = id;
        this.name = name;
        this.career = career;
        this.education_level = education_level;
        this.school_cycle = school_cycle;
        this.address_id = address_id;
        this.status = status;
    }
}

export class GetByIdInstitutionsValidation {
    @IsNotEmpty()
    @IsNumber()
    public id: number;

    constructor(
        id: number
    ) {
        this.id = id;
    }
}