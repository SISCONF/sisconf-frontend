import { Person } from "./person";

export interface Entrepreneur {
  id?: number;
  person: Person;
  businessName: string;
}
