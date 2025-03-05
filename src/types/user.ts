import { Person } from "./person";

export enum UserCategory {
  Marketer = "MARKETER",
  Entrepreneur = "ENTREPRENEUR",
  Others = "OTHERS",
}

export interface User {
  category: UserCategory;
  id?: number;
  person: Person;
}
