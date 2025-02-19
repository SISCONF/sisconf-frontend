"use client";

import { useFormContext } from "react-hook-form";
import { Customer } from "@/types/customer";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export function ThirdStep() {
  const {
    register,
    formState: { errors },
  } = useFormContext<Customer>();

  return (
    <div className="flex flex-col items-center w-full gap-4">
      <div className="grid gap-2 w-full">
        <Label htmlFor="person.address.street" className="font-medium">
          RUA
        </Label>
        <Input
          id="street"
          type="text"
          placeholder="Rua do País do Fogo"
          {...register("person.address.street", {
            required: "Campo obrigatório",
          })}
          className="h-[3.75rem] w-full border-brand-button"
        />
        {errors.person?.address?.street && (
          <span className="text-red-500">
            {errors.person.address.street.message}
          </span>
        )}
      </div>

      <div className="flex items-center w-full gap-6">
        <div className="grid gap-2 w-full">
          <Label htmlFor="person.address.zipCode" className="font-medium">
            CEP
          </Label>
          <Input
            id="zipCode"
            type="text"
            placeholder="99999-999"
            {...register("person.address.zipCode", {
              required: "Campo obrigatório",
            })}
            className="h-[3.75rem] w-full border-brand-button"
          />
          {errors.person?.address?.zipCode && (
            <span className="text-red-500">
              {errors.person.address.zipCode.message}
            </span>
          )}
        </div>

        <div className="grid gap-2 w-full">
          <Label htmlFor="person.address.city" className="font-medium">
            CIDADE
          </Label>
          <Input
            id="city"
            type="number"
            placeholder="Pau dos Ferros"
            {...register("person.address.city", {
              required: "Campo obrigatório",
            })}
            className="h-[3.75rem] w-full border-brand-button"
          />
          {errors.person?.address?.city && (
            <span className="text-red-500">
              {errors.person.address.city.message}
            </span>
          )}
        </div>
      </div>

      <div className="grid gap-2 w-full">
        <Label htmlFor="person.address.number" className="font-medium">
          NÚMERO
        </Label>
        <Input
          id="number"
          type="number"
          placeholder="10"
          {...register("person.address.number", {
            required: "Campo obrigatório",
          })}
          className="h-[3.75rem] w-full border-brand-button"
        />
        {errors.person?.address?.number && (
          <span className="text-red-500">
            {errors.person.address.number.message}
          </span>
        )}
      </div>

      <div className="grid gap-2 w-full">
        <Label htmlFor="person.address.neighbourhood" className="font-medium">
          BAIRRO
        </Label>
        <Input
          id="neighbourhood"
          type="text"
          placeholder="Centro"
          {...register("person.address.neighbourhood", {
            required: "Campo obrigatório",
          })}
          className="h-[3.75rem] w-full border-brand-button"
        />
        {errors.person?.address?.neighbourhood && (
          <span className="text-red-500">
            {errors.person.address.neighbourhood.message}
          </span>
        )}
      </div>
    </div>
  );
}
