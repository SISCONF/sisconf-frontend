import { Address } from "./address";

export interface Person {
  id?: number;
  firstName: string;
  lastName: string;
  cnpj?: string;
  cpf: string;
  email: string;
  phone: string;
  password: string;
  password2: string;
  keycloakId?: string | undefined;
  address: Address;
}
