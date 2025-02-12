import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface InputFormProps {
  label: string;
  input: {
    id: string;
    type: string;
    placeholder?: string;
  };
}

export function InputForm({ label, input }: InputFormProps) {
  return (
    <div className="grid gap-2 w-full">
      <Label htmlFor="email">{label}</Label>
      <Input
        id={input.id}
        type={input.type}
        placeholder={input.placeholder}
        required
        className="h-[68px]"
      />
    </div>
  );
}
