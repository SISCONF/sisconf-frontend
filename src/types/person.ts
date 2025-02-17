import { Address } from "./address";

export interface Person {
  id: number;
  address: Address;
  firstName: string;
  lastName: string;
  cnpj?: string;
  cpf: string;
  email: string;
  phone: string;
  keycloakId: string | undefined;
}
