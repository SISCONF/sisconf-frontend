"use client";

import { CardConainer } from "@/components/card-container";
import { UserTypeContainer } from "./steps/user-type-selector/index";
import { useRegisterStepper } from "./useRegistrationForm";
import { SecondStep } from "./steps/second-step";
import { FirstStep } from "./steps/first-step";
import { ThirdStep } from "./steps/third-step";
import { FormProvider, useForm } from "react-hook-form";
import { Customer } from "@/types/customer";
import { CustomerCategory } from "@/types/customer-category";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { createCustomer } from "@/actions/customer/add-customer";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

export function RegistrationStepsForm() {
  const router = useRouter();

  const methods = useForm<Customer>({
    defaultValues: {
      category: CustomerCategory.Marketer,
      person: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        password2: "",
        phone: "",
        cpf: "",
        address: {
          neighbourhood: "",
          street: "",
          zipCode: "",
        },
      },
    },
  });

  const {
    currentStep,
    isFirstStep,
    isLastStep,
    handlePreviousStep,
    handleNextStep,
    selectedUserType,
    setSelectedUserType,
  } = useRegisterStepper();

  const { toast } = useToast();

  const onSubmit = async (data: Customer) => {
    const formattedData = {
      ...data,
      category:
        selectedUserType === "Client"
          ? CustomerCategory.Marketer
          : CustomerCategory.Entrepreneur,
      person: {
        ...data.person,
        address: {
          ...data.person.address,
          number: Number(data.person.address.number),
          city: Number(data.person.address.city),
        },
      },
    };
    try {
      await createCustomer(formattedData);
      toast({
        duration: 5000,
        title:
          selectedUserType === "Client"
            ? "Cliente criado com sucesso"
            : "Empreendedor criado com sucesso",
        description: "Você será redirecionado para a página de login",
        variant: "default",
      });

      setTimeout(() => {
        router.push("/login");
      }, 2000);
    } catch (error: any) {
      toast({
        duration: 5000,
        title: "Erro ao criar conta",
        description: error?.message || "Erro desconhecido",
        variant: "destructive",
      });
    }
  };

  const renderStepComponent = () => {
    switch (currentStep.id) {
      case "userType":
        return (
          <UserTypeContainer
            onUserTypeSelect={setSelectedUserType}
            selectedUserType={selectedUserType}
          />
        );
      case "firstStep":
        return <FirstStep />;
      case "secondStep":
        return (
          <SecondStep isEntrepreneur={selectedUserType === "Entrepreneur"} />
        );
      case "thirdStep":
        return <ThirdStep />;
      default:
        return null;
    }
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <CardConainer
          title={currentStep.title}
          description={currentStep.description}
          className="flex flex-col justify-between items-center w-full h-fit gap-6 px-11"
        >
          {renderStepComponent()}

          {currentStep.id === "userType" ? (
            <div className="flex flex-col items-center w-full h-fit gap-4">
              <Button
                onClick={() => handleNextStep()}
                type="button"
                className="w-full h-11 font-semibold bg-brand-3 hover:bg-brand-5 rounded"
                disabled={!selectedUserType}
              >
                Prosseguir
              </Button>

              <Link href={"/login"} className="w-full">
                <Button
                  type="button"
                  className="w-full h-11 font-semibold bg-white text-brand-button hover:text-white hover:bg-brand-5 border border-brand-button rounded"
                >
                  Entrar
                </Button>
              </Link>
            </div>
          ) : (
            <div className="flex justify-end items-center w-full gap-4">
              {!isFirstStep && (
                <Button
                  onClick={handlePreviousStep}
                  type="button"
                  className="w-32 h-11 font-semibold bg-[#263238] text-white hover:bg-[#263238]/90 border border-brand-button rounded"
                >
                  VOLTAR
                </Button>
              )}

              {!isLastStep && currentStep.id !== "thirdStep" && (
                <Button
                  onClick={handleNextStep}
                  type="button"
                  className="w-32 h-11 font-semibold bg-brand-3 text-white hover:bg-brand-5 rounded"
                >
                  PRÓXIMO
                </Button>
              )}

              {isLastStep && (
                <Button
                  type="submit"
                  className="w-32 h-11 font-semibold bg-green-500 hover:bg-green-600 rounded"
                >
                  FINALIZAR
                </Button>
              )}
            </div>
          )}
        </CardConainer>
      </form>
    </FormProvider>
  );
}
