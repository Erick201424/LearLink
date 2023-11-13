export class Address {
    constructor(
        readonly id: number,
        readonly mainStreet: string,
        readonly street1: string,
        readonly street2: string,
        readonly zipCode: number,
        readonly state: string,
        readonly country: string,
        readonly status: string,
    ) { }
}