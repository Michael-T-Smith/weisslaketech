import type {
  CustomerType,
  ServiceRequestChangeHandler,
  ServiceRequestDraft,
  ServiceRequestErrors,
} from "@/types/service-request";
import { ChoiceCard } from "./ChoiceCard";

const CUSTOMER_TYPES = [
  {
    value: "residential",
    label: "Residential",
    description: "Home, personal device, or home-office request.",
  },
  {
    value: "business",
    label: "Business",
    description: "Business, sole proprietor, or local organization.",
  },
] as const satisfies ReadonlyArray<{
  value: CustomerType;
  label: string;
  description: string;
}>;

const inputClasses =
  "mt-2 min-h-12 w-full rounded-lg border border-white/15 bg-[#070A12] px-4 py-3 text-base text-[#F7F8FA] outline-none transition-colors placeholder:text-[#6F7480] focus:border-[#03F7F7] focus:ring-2 focus:ring-[#03F7F7]/20 aria-invalid:border-[#FF9E9E] motion-reduce:transition-none";

interface LocationStepProps {
  errors: ServiceRequestErrors;
  onChange: ServiceRequestChangeHandler;
  request: ServiceRequestDraft;
}

export function LocationStep({ errors, onChange, request }: LocationStepProps) {
  return (
    <div>
      <h2 className="text-2xl font-medium tracking-[-0.03em] text-[#F7F8FA] sm:text-3xl">
        Where is the work located?
      </h2>
      <p className="mt-3 max-w-2xl text-sm leading-6 text-[#A5AAB5] sm:text-base">
        Location helps determine onsite coverage when hands-on work is needed.
        It does not calculate travel pricing.
      </p>

      <fieldset
        aria-describedby={
          errors.customerType ? "customerType-error" : undefined
        }
        className="mt-8"
      >
        <legend className="text-sm font-medium text-[#F7F8FA]">
          Customer type
        </legend>
        <div className="mt-2 grid gap-3 sm:grid-cols-2">
          {CUSTOMER_TYPES.map((option) => (
            <ChoiceCard
              checked={request.customerType === option.value}
              description={option.description}
              id={`customer-type-${option.value}`}
              invalid={Boolean(errors.customerType)}
              key={option.value}
              label={option.label}
              name="customerType"
              onSelect={() => onChange("customerType", option.value)}
              value={option.value}
            />
          ))}
        </div>
        {errors.customerType ? (
          <p
            className="mt-3 text-sm text-[#FF9E9E]"
            id="customerType-error"
            role="alert"
          >
            {errors.customerType}
          </p>
        ) : null}
      </fieldset>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div>
          <label className="text-sm font-medium text-[#F7F8FA]" htmlFor="city">
            City
          </label>
          <input
            aria-describedby={errors.city ? "city-error" : undefined}
            aria-invalid={Boolean(errors.city)}
            autoComplete="address-level2"
            className={inputClasses}
            id="city"
            name="city"
            onChange={(event) => onChange("city", event.target.value)}
            placeholder="Collinsville"
            type="text"
            value={request.city ?? ""}
          />
          {errors.city ? (
            <p
              className="mt-2 text-sm text-[#FF9E9E]"
              id="city-error"
              role="alert"
            >
              {errors.city}
            </p>
          ) : null}
        </div>

        <div>
          <label className="text-sm font-medium text-[#F7F8FA]" htmlFor="zip">
            ZIP code
          </label>
          <input
            aria-describedby={errors.zip ? "zip-error" : undefined}
            aria-invalid={Boolean(errors.zip)}
            autoComplete="postal-code"
            className={inputClasses}
            id="zip"
            inputMode="numeric"
            maxLength={10}
            name="zip"
            onChange={(event) => onChange("zip", event.target.value)}
            placeholder="35961"
            type="text"
            value={request.zip ?? ""}
          />
          {errors.zip ? (
            <p
              className="mt-2 text-sm text-[#FF9E9E]"
              id="zip-error"
              role="alert"
            >
              {errors.zip}
            </p>
          ) : null}
        </div>
      </div>

      {request.customerType === "business" ? (
        <div className="mt-5">
          <label
            className="text-sm font-medium text-[#F7F8FA]"
            htmlFor="businessName"
          >
            Business name{" "}
            <span className="font-normal text-[#7E8490]">(optional)</span>
          </label>
          <input
            autoComplete="organization"
            className={inputClasses}
            id="businessName"
            name="businessName"
            onChange={(event) => onChange("businessName", event.target.value)}
            type="text"
            value={request.businessName ?? ""}
          />
        </div>
      ) : null}
    </div>
  );
}
