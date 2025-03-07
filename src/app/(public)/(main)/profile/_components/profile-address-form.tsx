import type React from "react";
import { Typography } from "@/components/typography";
import { ProfileFormField } from "./profile-form-field";
import { Address } from "@/types/address";

interface ProfileAddressFormProps {
  address: Address;
  isEditing: boolean;
  isLoading?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ProfileAddressForm = ({
  address,
  isEditing,
  isLoading = false,
  onChange,
}: ProfileAddressFormProps) => {
  return (
    <div className="mt-6">
      <Typography
        variant={"h6"}
        fontWeight={"semibold"}
        textColor={"black"}
        className="mb-4"
      >
        Endereço:
      </Typography>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <ProfileFormField
          id="street"
          label="Rua"
          value={address.street}
          onChange={onChange}
          disabled={!isEditing || isLoading}
        />
        <ProfileFormField
          id="number"
          label="Número"
          value={address.number.toString()}
          onChange={onChange}
          disabled={!isEditing || isLoading}
          type="number"
        />
        <ProfileFormField
          id="neighbourhood"
          label="Bairro"
          value={address.neighbourhood}
          onChange={onChange}
          disabled={!isEditing || isLoading}
        />
        <ProfileFormField
          id="zipCode"
          label="CEP"
          value={address.zipCode}
          onChange={onChange}
          disabled={!isEditing || isLoading}
        />
        <ProfileFormField
          id="city"
          label="Cidade (ID)"
          value={address.city.toString()}
          onChange={onChange}
          disabled={!isEditing || isLoading}
          type="number"
        />
      </div>
    </div>
  );
};
