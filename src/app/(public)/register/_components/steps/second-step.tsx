"use client";

import { useFormContext } from "react-hook-form";
import { InputForm } from "@/components/input-form";
import { Customer } from "@/types/customer";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export function SecondStep() {
  const {
    register,
    formState: { errors },
  } = useFormContext<Customer>();

  return (
    <div className="flex items-center w-full gap-4">
      <div className="flex flex-col items-center w-full gap-6">
        <div className="grid gap-2 w-full">
          <Label htmlFor={"person.cpf"} className="font-medium">
            CPF
          </Label>
          <Input
            id="person.cpf"
            type="text"
            placeholder="XXX.XXX.XXX-XX"
            {...register("person.cpf")}
            className="h-[3.75rem] w-full border-brand-button"
          />
        </div>
        {errors.person?.cpf && (
          <span className="text-red-500">{errors.person.cpf.message}</span>
        )}

        <div className="grid gap-2 w-full">
          <Label htmlFor={"person.cnpj"} className="font-medium">
            CNPJ
          </Label>
          <Input
            id="person.cnpj"
            type="text"
            placeholder="XX.XXX.XXXX/XXXX-XX"
            {...register("person.cnpj")}
            className="h-[3.75rem] w-full border-brand-button"
          />
        </div>

        {errors.person?.cnpj && (
          <span className="text-red-500">{errors.person.cnpj.message}</span>
        )}

        <div className="grid gap-2 w-full">
          <Label htmlFor={"person.phone"} className="font-medium">
            TELEFONE
          </Label>
          <Input
            id="person.phone"
            type="text"
            placeholder="(DDD) 99876-5432"
            {...register("person.phone")}
            className="h-[3.75rem] w-full border-brand-button"
          />
        </div>

        {errors.person?.phone && (
          <span className="text-red-500">{errors.person.phone.message}</span>
        )}
      </div>
    </div>
  );
}
