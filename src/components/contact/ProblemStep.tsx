import type {
  ServiceCategory,
  ServiceRequestChangeHandler,
  ServiceRequestDraft,
  ServiceRequestErrors,
} from "@/types/service-request";
import { ChoiceCard } from "./ChoiceCard";

export const SERVICE_CATEGORY_OPTIONS = [
  {
    value: "computer",
    label: "Computer / Device",
    description: "Diagnostics, setup, software, or operating-system issues.",
  },
  {
    value: "hardware",
    label: "Hardware Upgrade",
    description: "RAM, storage, replacement parts, or device migration.",
  },
  {
    value: "data",
    label: "Data / Storage",
    description: "Backups, shared storage, migration, or logical recovery.",
  },
  {
    value: "network",
    label: "Network / Office",
    description: "Wi-Fi, printers, workstations, NAS, or small-office IT.",
  },
  {
    value: "smart-device",
    label: "Camera / Smart Device",
    description: "Cameras, doorbells, streaming, or connected-device setup.",
  },
  {
    value: "business-software",
    label: "Business Software",
    description: "Databases, internal tools, reporting, or custom software.",
  },
  {
    value: "automation-integration",
    label: "Automation / Integration",
    description: "Connect systems or reduce repetitive manual workflows.",
  },
  {
    value: "unsure",
    label: "I’m Not Sure",
    description:
      "Start with what is not working and the request can be routed.",
  },
] as const satisfies ReadonlyArray<{
  value: ServiceCategory;
  label: string;
  description: string;
}>;

interface ProblemStepProps {
  errors: ServiceRequestErrors;
  onChange: ServiceRequestChangeHandler;
  request: ServiceRequestDraft;
}

export function ProblemStep({ errors, onChange, request }: ProblemStepProps) {
  return (
    <fieldset
      aria-describedby={
        errors.serviceCategory ? "serviceCategory-error" : undefined
      }
    >
      <legend className="text-2xl font-medium tracking-[-0.03em] text-[#F7F8FA] sm:text-3xl">
        What do you need help with?
      </legend>
      <p className="mt-3 max-w-2xl text-sm leading-6 text-[#A5AAB5] sm:text-base">
        Choose the closest match. You can add context in the details step.
      </p>

      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        {SERVICE_CATEGORY_OPTIONS.map((option, index) => (
          <ChoiceCard
            checked={request.serviceCategory === option.value}
            description={option.description}
            id={`service-category-${option.value}`}
            invalid={Boolean(errors.serviceCategory)}
            key={option.value}
            label={option.label}
            marker={String(index + 1).padStart(2, "0")}
            name="serviceCategory"
            onSelect={() => onChange("serviceCategory", option.value)}
            value={option.value}
          />
        ))}
      </div>

      {errors.serviceCategory ? (
        <p
          className="mt-3 text-sm text-[#FF9E9E]"
          id="serviceCategory-error"
          role="alert"
        >
          {errors.serviceCategory}
        </p>
      ) : null}
    </fieldset>
  );
}
