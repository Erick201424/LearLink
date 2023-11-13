export class Institution {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly career: string,
        readonly education_level: string,
        readonly school_cycle: string,
        readonly addres_id: number,
        readonly status: string
    ) { }
}