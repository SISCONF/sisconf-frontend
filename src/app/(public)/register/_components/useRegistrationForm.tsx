"use client";

import { useState } from "react";

export type Step = {
  id: "userType" | "firstStep" | "secondStep" | "thirdStep";
  title: string;
  description: string;
};

const STEPS: Step[] = [
  {
    id: "userType",
    title: "Quem é você?",
    description:
      "Informe o tipo de conta que você deseja criar para prosseguir",
  },
  {
    id: "firstStep",
    title: "Crie sua conta",
    description: "Vamos começar pelo básico",
  },
  {
    id: "secondStep",
    title: "Crie sua conta",
    description: "Como podemos encontrá-lo?",
  },
  {
    id: "thirdStep",
    title: "Crie sua conta",
    description: "Como podemos encontrá-lo?",
  },
];

export const useRegisterStepper = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [stepData, setStepData] = useState<Record<string, any>>({});

  const currentStep = STEPS[currentStepIndex];

  const handlePreviousStep = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
    }
  };

  const handleNextStep = () => {
    console.log("Aqui");
    if (currentStepIndex < STEPS.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    }
  };

  const setStepDataForCurrentStep = (data: any) => {
    setStepData((prevData) => ({
      ...prevData,
      [currentStep.id]: data,
    }));
  };

  return {
    currentStep,
    STEPS,
    handlePreviousStep,
    handleNextStep,
    setStepDataForCurrentStep,
    stepData,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === STEPS.length - 1,
  };
};
