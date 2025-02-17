import { CardConainer } from "@/components/card-container";
import { Person } from "@/types/person";

interface RegisterFormSchema extends Person {
  password: string;
  confirmPassword: string;
}

export function RegisterForm() {
  return (
    <CardConainer
      title="Quem é você?"
      description="Informe o tipo de conta que você deseja criar para prosseguir"
    >
      <div></div>
    </CardConainer>
  );
}
