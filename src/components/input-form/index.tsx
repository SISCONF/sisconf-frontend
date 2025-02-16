import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { type UseFormRegister } from "react-hook-form";
import { cn } from "@/lib/utils";

interface InputFormProps {
  label: string;
  id: string;
  register: UseFormRegister<any>;
  name: string;
  required?: boolean;
  className?: string;
  inputClassName?: string;
}

export function InputForm({
  label,
  id,
  register,
  name,
  required = false,
  className,
  inputClassName,
  ...rest
}: InputFormProps) {
  return (
    <div className={cn(["grid gap-2 w-full", className])}>
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        {...register(name)}
        required={required}
        className={cn(["h-[3.75rem] w-full", inputClassName])}
        {...rest}
      />
    </div>
  );
}
