"use client";

import { InputForm } from "@/components/input-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Customer } from "@/types/customer";
import { useFormContext } from "react-hook-form";

export function FirstStep() {
  const {
    register,
    formState: { errors },
  } = useFormContext<Customer>();

  return (
    <div className="flex flex-col items-center w-full gap-4">
      <div className="flex items-center w-full gap-6">
        <div className="grid gap-2 w-full">
          <Label htmlFor={"firsName"} className="font-medium">
            NOME
          </Label>
          <Input
            id="firsName"
            type="text"
            placeholder="Insira seu primeiro nome"
            {...register("person.firstName")}
            className="h-[3.75rem] w-full border-brand-button"
          />
          {errors.person?.firstName && (
            <span className="text-red-500">
              {errors.person.firstName.message}
            </span>
          )}
        </div>
        <div className="grid gap-2 w-full">
          <Label htmlFor={"lastName"} className="font-medium">
            SOBRENOME
          </Label>
          <Input
            id="lastName"
            type="text"
            placeholder="Insira seu sobrenome"
            {...register("person.lastName")}
            className="h-[3.75rem] w-full border-brand-button"
          />
        </div>
        {errors.person?.lastName && (
          <span className="text-red-500">{errors.person.lastName.message}</span>
        )}
      </div>

      <div className="flex flex-col w-full gap-4">
        <div className="grid gap-2 w-full">
          <Label htmlFor={"person.email"} className="font-medium">
            EMAIL
          </Label>
          <Input
            id="person.email"
            type="email"
            placeholder="seuemail@example.com"
            {...register("person.email")}
            className="h-[3.75rem] w-full border-brand-button"
          />
        </div>
        {errors.person?.email && (
          <span className="text-red-500">{errors.person.email.message}</span>
        )}

        <div className="grid gap-2 w-full">
          <Label htmlFor={"person.password"} className="font-medium">
            SENHA
          </Label>
          <Input
            id="person.password"
            type="password"
            placeholder="Digite sua senha"
            {...register("person.password")}
            className="h-[3.75rem] w-full border-brand-button"
          />
        </div>
        {errors.person?.password && (
          <span className="text-red-500">{errors.person.password.message}</span>
        )}

        <div className="grid gap-2 w-full">
          <Label htmlFor={"person.password2"} className="font-medium">
            CONFIRME SUA SENHA
          </Label>
          <Input
            id="person.password2"
            type="password"
            placeholder="Digite sua senha novamente"
            {...register("person.password2")}
            className="h-[3.75rem] w-full border-brand-button"
          />
        </div>

        {errors.person?.password2 && (
          <span className="text-red-500">
            {errors.person.password2.message}
          </span>
        )}
      </div>
    </div>
  );
}
