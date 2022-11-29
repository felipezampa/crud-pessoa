import { Cidade } from "./cidade.model";

export class Endereco {

    constructor(
        public id?: number,
        public rua?: string,
        public numero: number = 0,
        public complemento?: string,
        public bairro?: string,
        public cep?: string,
        public cidade?: Cidade,
        public estado?: string,
        public residencial?: boolean,
        public tipo?: string
    ){ }
}
