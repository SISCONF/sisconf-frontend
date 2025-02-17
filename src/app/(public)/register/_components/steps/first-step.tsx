import { InputForm } from "@/components/input-form";
import { SubmitHandler, useForm } from "react-hook-form";

interface FirstStepSchema {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export function FirstStep() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FirstStepSchema>();

  const onSubmit: SubmitHandler<FirstStepSchema> = async (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center w-full gap-4"
    >
      <div className="flex items-center w-full gap-6">
        <InputForm
          label="NOME"
          id="first_name"
          type="text"
          placeholder="Insira seu nome"
          register={register}
          name="first_name"
          required
        />

        <InputForm
          label="SOBRENOME"
          id="last_name"
          type="text"
          placeholder="Insira seu sobrenome"
          register={register}
          name="last_name"
          required
        />
      </div>
      <div className="flex flex-col w-full gap-4">
        <InputForm
          label="EMAIL"
          id="email"
          type="email"
          placeholder="seuemail@example.com"
          register={register}
          name="email"
          required
        />

        <InputForm
          label="SENHA"
          id="password"
          type="password"
          placeholder="*********************"
          register={register}
          name="password"
          required
        />

        <InputForm
          label="CONFIRMAR SENHA"
          id="confirmPassword"
          type="password"
          placeholder="*********************"
          register={register}
          name="confirmPassword"
          required
        />
      </div>
    </form>
  );
}
