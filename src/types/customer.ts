import { CustomerCategory } from "./customer-category";
import { Person } from "./person";

export interface Customer {
  category: CustomerCategory;
  person: Person;
}
