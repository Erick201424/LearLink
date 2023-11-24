export class Address {
    constructor(
        public id: number,
        public state: string,
        public municipality: string,
        public zipCode: string,
        public mainStreet: string,
        public street1: string,
        public street2: string,
    ) { }
}