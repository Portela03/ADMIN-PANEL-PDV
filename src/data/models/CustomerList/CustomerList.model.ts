export class InsertCustomerModel {
    id?: number;
    name: string;
    cpf: string;
    cnpj:string;
    stateRegistration?: string | null;
    phone: string;
    street: string;
    number: string;
    complement?: string | null;
    neighborhood: string;
    city: string;
    state: string;

    constructor(data: {
        id?: number;
        name: string;
        cpf: string;
        cnpj:string;
        stateRegistration?: string | null;
        phone: string;
        street: string;
        number: string;
        complement?: string | null;
        neighborhood: string;
        city: string;
        state: string;
    }) {
        this.id;
        this.name = data.name;
        this.cpf = data.cpf;
        this.cnpj = data.cnpj;
        this.stateRegistration = data.stateRegistration ?? null;
        this.phone = data.phone;
        this.street = data.street;
        this.number = data.number;
        this.complement = data.complement ?? null;
        this.neighborhood = data.neighborhood;
        this.city = data.city;
        this.state = data.state;
    }
}