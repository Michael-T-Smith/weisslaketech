import type {
  DeliveryPreference,
  ServiceRequestChangeHandler,
  ServiceRequestDraft,
  ServiceRequestErrors,
} from "@/types/service-request";
import { ChoiceCard } from "./ChoiceCard";

export const DELIVERY_OPTIONS = [
  {
    value: "remote",
    label: "Remote",
    description: "The issue may be handled through a remote support session.",
  },
  {
    value: "onsite",
    label: "Onsite",
    description:
      "The work appears to require hands-on service at your location.",
  },
  {
    value: "unsure",
    label: "Not Sure",
    description: "The appropriate approach can be determined after review.",
  },
] as const satisfies ReadonlyArray<{
  value: DeliveryPreference;
  label: string;
  description: string;
}>;

interface DeliveryStepProps {
  errors: ServiceRequestErrors;
  onChange: ServiceRequestChangeHandler;
  request: ServiceRequestDraft;
}

export function DeliveryStep({ errors, onChange, request }: DeliveryStepProps) {
  return (
    <fieldset
      aria-describedby={
        errors.deliveryPreference ? "deliveryPreference-error" : undefined
      }
    >
      <legend className="text-2xl font-medium tracking-[-0.03em] text-[#F7F8FA] sm:text-3xl">
        How do you think the work needs to be handled?
      </legend>
      <p className="mt-3 max-w-2xl text-sm leading-6 text-[#A5AAB5] sm:text-base">
        This is intake information, not a final service determination.
      </p>

      <div className="mt-8 grid gap-3 sm:grid-cols-3">
        {DELIVERY_OPTIONS.map((option, index) => (
          <ChoiceCard
            checked={request.deliveryPreference === option.value}
            description={option.description}
            id={`delivery-${option.value}`}
            invalid={Boolean(errors.deliveryPreference)}
            key={option.value}
            label={option.label}
            marker={String(index + 1).padStart(2, "0")}
            name="deliveryPreference"
            onSelect={() => onChange("deliveryPreference", option.value)}
            value={option.value}
          />
        ))}
      </div>

      {errors.deliveryPreference ? (
        <p
          className="mt-3 text-sm text-[#FF9E9E]"
          id="deliveryPreference-error"
          role="alert"
        >
          {errors.deliveryPreference}
        </p>
      ) : null}
    </fieldset>
  );
}
