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

export function RegistrationStepsForm() {
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
          city: 0,
          neighbourhood: "",
          number: 0,
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
  } = useRegisterStepper();

  const onSubmit = async (data: Customer) => {
    console.log("Enviando");
    const formattedData = {
      ...data,
      person: {
        ...data.person,
        address: {
          ...data.person.address,
          number: Number(data.person.address.number),
          city: Number(data.person.address.city),
        },
      },
    };

    console.log(formattedData);

    await createCustomer(formattedData);
  };

  const renderStepComponent = () => {
    switch (currentStep.id) {
      case "userType":
        return <UserTypeContainer />;
      case "firstStep":
        return <FirstStep />;
      case "secondStep":
        return <SecondStep />;
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
          className="flex flex-col justify-center items-center w-full h-fit gap-6 px-11"
        >
          {renderStepComponent()}

          {currentStep.id === "userType" ? (
            <div className="flex flex-col items-center w-full h-fit gap-4">
              <Button
                onClick={() => handleNextStep()}
                type="button"
                className="w-full h-11 font-semibold bg-brand-3 hover:bg-brand-5 rounded"
              >
                Prosseguir
              </Button>

              <Link href={"/login"} className="w-full">
                <Button
                  type="button"
                  className="w-full h-11 font-semibold bg-white text-brand-button hover:text-white hover:bg-brand-3 border border-brand-button rounded"
                >
                  Entrar
                </Button>
              </Link>
            </div>
          ) : (
            <div className="flex items-center w-[380px] gap-4">
              {!isFirstStep && (
                <Button
                  onClick={handlePreviousStep}
                  type="button"
                  className="w-32 h-11 font-semibold bg-[#263238] text-white hover:bg-[#263238]/90 border border-brand-button rounded"
                >
                  Voltar
                </Button>
              )}

              {!isLastStep && currentStep.id !== "thirdStep" && (
                <Button
                  onClick={handleNextStep}
                  type="button"
                  className="w-32 h-11 font-semibold bg-brand-3 text-white hover:bg-brand-5 rounded"
                >
                  Próximo
                </Button>
              )}

              {isLastStep && (
                <Button
                  type="submit"
                  className="w-full h-11 font-semibold bg-green-500 hover:bg-green-600 rounded"
                >
                  Finalizar Cadastro
                </Button>
              )}
            </div>
          )}
        </CardConainer>
      </form>
    </FormProvider>
  );
}
