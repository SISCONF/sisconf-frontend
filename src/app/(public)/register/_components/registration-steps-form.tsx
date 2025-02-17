"use client";

import { cn } from "@/lib/utils";
import { CardConainer } from "@/components/card-container";
import { UserTypeContainer } from "./user-type-selector/index";
import { Button } from "@/components/ui/button";
import { useRegisterStepper } from "./useRegistrationForm";
import { SecondStep } from "./steps/second-step";
import { FirstStep } from "./steps/first-step";
import { ThirdStep } from "./steps/third-step";
import { StepController } from "./step-controller";

export function RegistrationStepsForm() {
  const {
    currentStep,
    handlePreviousStep,
    handleNextStep,
    isFirstStep,
    isLastStep,
  } = useRegisterStepper();

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
    <CardConainer
      title={currentStep.title}
      description={currentStep.description}
      className="flex flex-col justify-center items-center w-full h-fit gap-6 px-11"
    >
      {renderStepComponent()}

      <div
        className={cn([
          "flex items-center w-[380px] gap-4",
          isFirstStep && "flex-col",
        ])}
      >
        {currentStep.id === "userType" && (
          <div className="flex flex-col items-center w-full h-fit gap-4">
            <Button
              onClick={handleNextStep}
              className="w-full h-11 font-semibold bg-brand-3 hover:bg-brand-5 rounded"
            >
              Prosseguir
            </Button>

            <Button className="w-full h-11 font-semibold bg-white text-brand-button hover:text-white hover:bg-brand-3 border border-brand-button rounded">
              Entrar
            </Button>
          </div>
        )}

        {(currentStep.id === "firstStep" ||
          currentStep.id === "secondStep" ||
          isLastStep) && (
          <StepController
            onPrevious={handlePreviousStep}
            onNext={handleNextStep}
            isFirstStep={isFirstStep}
            isLastStep={isLastStep}
          />
        )}
      </div>
    </CardConainer>
  );
}
