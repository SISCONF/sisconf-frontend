import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { type UseFormRegister } from "react-hook-form";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface InputFormProps {
  label: string;
  id: string;
  type: "email" | "number" | "text" | "password";
  placeholder?: string;
  register: UseFormRegister<any>;
  name: string;
  required?: boolean;
  className?: string;
  inputClassName?: string;
  icon?: ReactNode;
}

export function InputForm({
  label,
  id,
  type,
  placeholder,
  register,
  name,
  required = false,
  className,
  inputClassName,
  icon,
  ...rest
}: InputFormProps) {
  return (
    <div className={cn(["grid gap-2 w-full", className])}>
      <Label htmlFor={id} className="font-medium">
        {label}
      </Label>
      <div className="relative">
        <Input
          id={id}
          type={type}
          placeholder={placeholder}
          {...register(name)}
          required={required}
          className={cn([
            "h-[3.75rem] w-full border-brand-button",
            inputClassName,
          ])}
          {...rest}
        />
        {icon && (
          <button
            type="button"
            className="absolute inset-y-0 right-3 flex items-center"
          >
            {icon}
          </button>
        )}
      </div>
    </div>
  );
}
