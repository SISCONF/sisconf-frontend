import { Address } from "./address";

export interface Person {
  address: Address;
  cnpj: string;
  cpf: string;
  email: string;
  firstName: string;
  id: number;
  keycloakId: string;
  lastName: string;
  phone: string;
}
