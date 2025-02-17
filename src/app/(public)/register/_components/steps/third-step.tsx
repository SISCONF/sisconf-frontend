import { InputForm } from "@/components/input-form";
import { SubmitHandler, useForm } from "react-hook-form";

interface ThirdStepSchema {
  street: string;
  zip_code: string;
  city: string;
  country_state: string;
  number: number;
  neighborhood: string;
}

export function ThirdStep() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ThirdStepSchema>();

  const onSubmit: SubmitHandler<ThirdStepSchema> = async (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center w-full gap-4"
    >
      <InputForm
        label="RUA"
        id="street"
        type="text"
        placeholder="Rua do País do Fogo"
        register={register}
        name="street"
        required
      />
      <div className="flex items-center w-full gap-6">
        <InputForm
          label="CEP"
          id="zip_code"
          type="text"
          placeholder="99999-999"
          register={register}
          name="zip_code"
          required
        />

        <InputForm
          label="CIDADE"
          id="city"
          type="text"
          placeholder="Pau dos Ferros"
          register={register}
          name="city"
          required
        />
      </div>

      <div className="flex items-center w-full gap-6">
        <InputForm
          label="ESTADO"
          id="country_state"
          type="text"
          placeholder="Rio Grande do Norte"
          register={register}
          name="country_state"
          required
        />

        <InputForm
          label="NÚMERO"
          id="number"
          type="number"
          placeholder="10"
          register={register}
          name="number"
          required
        />
      </div>

      <InputForm
        label="BAIRRO"
        id="neighborhood"
        type="text"
        placeholder="Centro"
        register={register}
        name="neighborhood"
        required
      />
    </form>
  );
}
