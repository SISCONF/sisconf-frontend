import { Button } from "@/components/ui/button";

interface StepControllerProps {
  onPrevious?: () => void;
  onNext: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
  buttonLabel: string;
}

export function StepController({
  onPrevious,
  onNext,
  isFirstStep,
  isLastStep,
  buttonLabel,
}: StepControllerProps) {
  return (
    <div className="flex items-center gap-4">
      {!isFirstStep && (
        <Button
          onClick={onPrevious}
          className="w-32 h-11 font-semibold bg-[#263238] text-white hover:bg-[#263238]/90 border border-brand-button rounded"
        >
          VOLTAR
        </Button>
      )}
      <Button
        onClick={onNext}
        className="w-32 h-11 font-semibold bg-brand-3 text-white hover:bg-brand-5 rounded"
      >
        {isLastStep ? "SALVAR" : buttonLabel}
      </Button>
    </div>
  );
}
