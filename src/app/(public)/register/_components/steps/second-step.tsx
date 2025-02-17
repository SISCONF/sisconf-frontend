import { InputForm } from "@/components/input-form";
import { SubmitHandler, useForm } from "react-hook-form";

interface SecondStepSchema {
  cpf: string;
  cnpj?: string;
  phone: string;
}

export function SecondStep() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SecondStepSchema>();

  const onSubmit: SubmitHandler<SecondStepSchema> = async (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex items-center w-full gap-4"
    >
      <div className="flex flex-col items-center w-full gap-6">
        <InputForm
          label="CPF"
          id="text"
          type="text"
          placeholder="123.456.789-00"
          register={register}
          name="cpf"
          required
        />

        <InputForm
          label="CNPJ(opcional)"
          id="cnpj"
          type="text"
          placeholder="12.345.678/0001-95"
          register={register}
          name="cnpj"
        />

        <InputForm
          label="TELEFONE"
          id="phone"
          type="text"
          placeholder="(84) 99876-5432"
          register={register}
          name="phone"
          required
        />
      </div>
    </form>
  );
}
