import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface ProfileFormFieldProps {
  id: string;
  label: string;
  value: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  type?: string;
}

export function ProfileFormField({
  id,
  label,
  value,
  onChange,
  disabled,
  type = "text",
}: ProfileFormFieldProps) {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  );
}
