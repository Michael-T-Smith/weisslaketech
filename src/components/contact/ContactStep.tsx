import type {
  PreferredContactMethod,
  ServiceRequestChangeHandler,
  ServiceRequestDraft,
  ServiceRequestErrors,
} from "@/types/service-request";
import { ChoiceCard } from "./ChoiceCard";

const CONTACT_METHODS = [
  { value: "email", label: "Email" },
  { value: "phone", label: "Phone" },
  { value: "text", label: "Text" },
] as const satisfies ReadonlyArray<{
  value: PreferredContactMethod;
  label: string;
}>;

const inputClasses =
  "mt-2 min-h-12 w-full rounded-lg border border-white/15 bg-[#070A12] px-4 py-3 text-base text-[#F7F8FA] outline-none transition-colors placeholder:text-[#6F7480] focus:border-[#03F7F7] focus:ring-2 focus:ring-[#03F7F7]/20 aria-invalid:border-[#FF9E9E] motion-reduce:transition-none";

interface ContactStepProps {
  errors: ServiceRequestErrors;
  onChange: ServiceRequestChangeHandler;
  request: ServiceRequestDraft;
}

export function ContactStep({ errors, onChange, request }: ContactStepProps) {
  return (
    <div>
      <h2 className="text-2xl font-medium tracking-[-0.03em] text-[#F7F8FA] sm:text-3xl">
        How should I reach you?
      </h2>
      <p className="mt-3 max-w-2xl text-sm leading-6 text-[#A5AAB5] sm:text-base">
        Contact details are used to follow up about this request.
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label className="text-sm font-medium text-[#F7F8FA]" htmlFor="name">
            Name
          </label>
          <input
            aria-describedby={errors.name ? "name-error" : undefined}
            aria-invalid={Boolean(errors.name)}
            autoComplete="name"
            className={inputClasses}
            id="name"
            name="name"
            onChange={(event) => onChange("name", event.target.value)}
            type="text"
            value={request.name ?? ""}
          />
          {errors.name ? (
            <p
              className="mt-2 text-sm text-[#FF9E9E]"
              id="name-error"
              role="alert"
            >
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label className="text-sm font-medium text-[#F7F8FA]" htmlFor="email">
            Email
          </label>
          <input
            aria-describedby={errors.email ? "email-error" : undefined}
            aria-invalid={Boolean(errors.email)}
            autoComplete="email"
            className={inputClasses}
            id="email"
            inputMode="email"
            name="email"
            onChange={(event) => onChange("email", event.target.value)}
            type="email"
            value={request.email ?? ""}
          />
          {errors.email ? (
            <p
              className="mt-2 text-sm text-[#FF9E9E]"
              id="email-error"
              role="alert"
            >
              {errors.email}
            </p>
          ) : null}
        </div>

        <div>
          <label className="text-sm font-medium text-[#F7F8FA]" htmlFor="phone">
            Phone{" "}
            <span className="font-normal text-[#7E8490]">
              (optional for email)
            </span>
          </label>
          <input
            aria-describedby={errors.phone ? "phone-error" : undefined}
            aria-invalid={Boolean(errors.phone)}
            autoComplete="tel"
            className={inputClasses}
            id="phone"
            inputMode="tel"
            name="phone"
            onChange={(event) => onChange("phone", event.target.value)}
            type="tel"
            value={request.phone ?? ""}
          />
          {errors.phone ? (
            <p
              className="mt-2 text-sm text-[#FF9E9E]"
              id="phone-error"
              role="alert"
            >
              {errors.phone}
            </p>
          ) : null}
        </div>
      </div>

      <fieldset
        aria-describedby={
          errors.preferredContactMethod
            ? "preferredContactMethod-error"
            : undefined
        }
        className="mt-7"
      >
        <legend className="text-sm font-medium text-[#F7F8FA]">
          Preferred contact method
        </legend>
        <div className="mt-2 grid grid-cols-1 gap-3 min-[420px]:grid-cols-3">
          {CONTACT_METHODS.map((method) => (
            <ChoiceCard
              checked={request.preferredContactMethod === method.value}
              id={`contact-method-${method.value}`}
              invalid={Boolean(errors.preferredContactMethod)}
              key={method.value}
              label={method.label}
              name="preferredContactMethod"
              onSelect={() => onChange("preferredContactMethod", method.value)}
              value={method.value}
            />
          ))}
        </div>
        {errors.preferredContactMethod ? (
          <p
            className="mt-3 text-sm text-[#FF9E9E]"
            id="preferredContactMethod-error"
            role="alert"
          >
            {errors.preferredContactMethod}
          </p>
        ) : null}
      </fieldset>

      <div
        className="mt-8 border-l-2 border-[#7D03F7]/70 bg-[#7D03F7]/[0.06] px-4 py-3 text-sm leading-6 text-[#C8CBD2]"
        role="note"
      >
        <span className="font-medium text-[#F7F8FA]">
          Keep credentials private.
        </span>{" "}
        Do not submit passwords, payment-card information, Social Security
        numbers, encryption keys or other sensitive credentials.
      </div>
    </div>
  );
}
