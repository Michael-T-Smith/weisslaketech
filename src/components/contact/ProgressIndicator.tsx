import type { ServiceRequestStepNumber } from "@/types/service-request";

export const SERVICE_REQUEST_STEPS = [
  { number: "01", label: "Problem" },
  { number: "02", label: "Type" },
  { number: "03", label: "Location" },
  { number: "04", label: "Details" },
  { number: "05", label: "Contact" },
  { number: "06", label: "Review" },
] as const;

interface ProgressIndicatorProps {
  currentStep: ServiceRequestStepNumber;
}

export function ProgressIndicator({ currentStep }: ProgressIndicatorProps) {
  return (
    <nav aria-label="Service request progress">
      <ol className="grid grid-cols-6 gap-1.5 sm:gap-3">
        {SERVICE_REQUEST_STEPS.map((step, index) => {
          const stepNumber = (index + 1) as ServiceRequestStepNumber;
          const isActive = currentStep === stepNumber;
          const isComplete = currentStep > stepNumber;

          return (
            <li
              aria-current={isActive ? "step" : undefined}
              className="min-w-0"
              key={step.number}
            >
              <div
                className={`mb-2 h-px transition-colors duration-300 motion-reduce:transition-none ${
                  isActive || isComplete ? "bg-[#03F7F7]" : "bg-white/15"
                }`}
              />
              <span
                className={`block truncate font-mono text-[10px] uppercase tracking-[0.14em] sm:text-[11px] ${
                  isActive
                    ? "text-[#F7F8FA]"
                    : isComplete
                      ? "text-[#03F7F7]"
                      : "text-[#6F7480]"
                }`}
              >
                <span className="sm:hidden">{step.number}</span>
                <span className="hidden sm:inline">
                  {step.number} {step.label}
                </span>
                <span className="sr-only sm:hidden"> {step.label}</span>
              </span>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
