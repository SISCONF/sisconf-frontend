import { CustomerCategory } from "./customer-category";
import { Person } from "./person";

export interface Customer {
  category: CustomerCategory;
  id?: number;
  person: Person;
}
