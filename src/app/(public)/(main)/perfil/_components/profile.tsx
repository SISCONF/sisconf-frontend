"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ProfileFormField } from "./profile-form-field";
import { ProfileAddressForm } from "./profile-address-form";
import { User, UserCategory } from "@/types/user";
import { ProfileHeader } from "./profile-header";
import { Typography } from "@/components/typography";
import { putCustomer } from "@/actions/customer/put-customer";
import { toast } from "@/hooks/use-toast";
import { Customer } from "@/types/customer";
import { CustomerCategory } from "@/types/customer-category";

interface ProfileFormProps {
  initialData?: User;
}

export const ProfileForm = ({ initialData }: ProfileFormProps) => {
  const defaultUser: User = {
    category: UserCategory.Marketer,
    person: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      cpf: "",
      cnpj: "",
      address: {
        city: 0,
        neighbourhood: "",
        number: 0,
        street: "",
        zipCode: "",
      },
    },
  };

  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [profile, setProfile] = useState<User>(initialData || defaultUser);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (
      ["street", "neighbourhood", "zipCode", "city", "number"].includes(name)
    ) {
      setProfile((prev) => ({
        ...prev,
        person: {
          ...prev.person,
          address: {
            ...prev.person.address,
            [name]:
              name === "number" || name === "city" ? Number(value) : value,
          },
        },
      }));
    } else {
      setProfile((prev) => ({
        ...prev,
        person: {
          ...prev.person,
          [name]: value,
        },
      }));
    }
  };

  const handleSave = async () => {
    if (!initialData?.id) {
      toast({
        title: "Erro",
        description: "ID do usuário não encontrado",
        variant: "destructive",
      });
      return;
    }

    try {
      setIsLoading(true);
      const customerData: Customer = {
        category: CustomerCategory.Marketer,
        person: {
          firstName: profile.person.firstName,
          lastName: profile.person.lastName,
          // email: profile.person.email,
          phone: profile.person.phone,
          cpf: profile.person.cpf,
          cnpj: profile.person.cnpj,
          address: {
            street: profile.person.address.street,
            neighbourhood: profile.person.address.neighbourhood,
            zipCode: profile.person.address.zipCode,
            number: profile.person.address.number,
            city: profile.person.address.city,
          },
        },
      };

      await putCustomer(initialData.id, customerData);

      toast({
        title: "Perfil atualizado",
        description: "Informações pessoais do perfil atualizadas com sucesso.",
      });

      setIsEditing(false);
    } catch (error) {
      toast({
        title: "Erro",
        description:
          error instanceof Error ? error.message : "Erro ao atualizar perfil",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <Card className="w-full mx-auto bg-background shadow-md dark:border-white">
        <ProfileHeader
          profile={profile}
          isEditing={isEditing}
          onEditToggle={() => setIsEditing(!isEditing)}
          handleSave={handleSave}
          isLoading={isLoading}
        />

        <CardContent className="w-full">
          <Typography
            variant={"h6"}
            fontWeight={"semibold"}
            textColor={"black"}
          >
            Informações pessoais:
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <ProfileFormField
              id="firstName"
              label="Nome"
              value={profile.person.firstName}
              onChange={handleInputChange}
              disabled={!isEditing || isLoading}
            />
            <ProfileFormField
              id="lastName"
              label="Sobrenome"
              value={profile.person.lastName}
              onChange={handleInputChange}
              disabled={!isEditing || isLoading}
            />
            <ProfileFormField
              id="email"
              label="Email"
              value={profile.person.email}
              onChange={handleInputChange}
              disabled={true}
            />
            <ProfileFormField
              id="phone"
              label="Telefone"
              value={profile.person.phone}
              onChange={handleInputChange}
              disabled={!isEditing || isLoading}
            />
            <ProfileFormField
              id="cpf"
              label="CPF"
              value={profile.person.cpf}
              disabled={true}
            />
            {profile.person.cnpj && (
              <ProfileFormField
                id="cnpj"
                label="CNPJ"
                value={profile.person.cnpj}
                disabled={true}
              />
            )}
          </div>

          <ProfileAddressForm
            address={profile.person.address}
            isEditing={isEditing}
            onChange={handleInputChange}
            isLoading={isLoading}
          />
        </CardContent>
      </Card>
    </div>
  );
};
