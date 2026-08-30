import type {
  ServiceRequestChangeHandler,
  ServiceRequestDraft,
  ServiceRequestErrors,
} from "@/types/service-request";

const inputClasses =
  "mt-2 min-h-12 w-full rounded-lg border border-white/15 bg-[#070A12] px-4 py-3 text-base text-[#F7F8FA] outline-none transition-colors placeholder:text-[#6F7480] focus:border-[#03F7F7] focus:ring-2 focus:ring-[#03F7F7]/20 aria-invalid:border-[#FF9E9E] motion-reduce:transition-none";

const DEVICE_CATEGORIES = new Set([
  "computer",
  "hardware",
  "data",
  "network",
  "smart-device",
]);

const SOFTWARE_CATEGORIES = new Set([
  "business-software",
  "automation-integration",
]);

interface DetailsStepProps {
  errors: ServiceRequestErrors;
  onChange: ServiceRequestChangeHandler;
  request: ServiceRequestDraft;
}

export function DetailsStep({ errors, onChange, request }: DetailsStepProps) {
  const category = request.serviceCategory;
  const showDeviceType = category ? DEVICE_CATEGORIES.has(category) : false;
  const showSoftwareNames = category
    ? SOFTWARE_CATEGORIES.has(category)
    : false;
  const showAffectedCount =
    request.customerType === "business" ||
    category === "network" ||
    category === "business-software" ||
    category === "automation-integration";

  return (
    <div>
      <h2 className="text-2xl font-medium tracking-[-0.03em] text-[#F7F8FA] sm:text-3xl">
        What is happening?
      </h2>
      <p className="mt-3 max-w-2xl text-sm leading-6 text-[#A5AAB5] sm:text-base">
        A concise description is enough. Include what changed, any error
        message, and the outcome you need.
      </p>

      <div className="mt-8">
        <label
          className="text-sm font-medium text-[#F7F8FA]"
          htmlFor="description"
        >
          Problem description
        </label>
        <textarea
          aria-describedby={
            errors.description ? "description-error" : undefined
          }
          aria-invalid={Boolean(errors.description)}
          className={`${inputClasses} min-h-36 resize-y`}
          id="description"
          name="description"
          onChange={(event) => onChange("description", event.target.value)}
          placeholder="Describe the problem, when it started, and what you have tried so far."
          value={request.description ?? ""}
        />
        {errors.description ? (
          <p
            className="mt-2 text-sm text-[#FF9E9E]"
            id="description-error"
            role="alert"
          >
            {errors.description}
          </p>
        ) : null}
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        {showDeviceType ? (
          <div>
            <label
              className="text-sm font-medium text-[#F7F8FA]"
              htmlFor="deviceType"
            >
              Device or system type{" "}
              <span className="font-normal text-[#7E8490]">(optional)</span>
            </label>
            <input
              className={inputClasses}
              id="deviceType"
              name="deviceType"
              onChange={(event) => onChange("deviceType", event.target.value)}
              placeholder="For example: Windows laptop, NAS, router"
              type="text"
              value={request.deviceType ?? ""}
            />
          </div>
        ) : null}

        {showSoftwareNames ? (
          <div>
            <label
              className="text-sm font-medium text-[#F7F8FA]"
              htmlFor="softwareSystemNames"
            >
              Software or system names{" "}
              <span className="font-normal text-[#7E8490]">(optional)</span>
            </label>
            <input
              className={inputClasses}
              id="softwareSystemNames"
              name="softwareSystemNames"
              onChange={(event) =>
                onChange("softwareSystemNames", event.target.value)
              }
              placeholder="The tools or databases involved"
              type="text"
              value={request.softwareSystemNames ?? ""}
            />
          </div>
        ) : null}

        {showAffectedCount ? (
          <div>
            <label
              className="text-sm font-medium text-[#F7F8FA]"
              htmlFor="affectedDeviceCount"
            >
              Affected devices or users{" "}
              <span className="font-normal text-[#7E8490]">(optional)</span>
            </label>
            <input
              aria-describedby={
                errors.affectedDeviceCount
                  ? "affectedDeviceCount-error"
                  : undefined
              }
              aria-invalid={Boolean(errors.affectedDeviceCount)}
              className={inputClasses}
              id="affectedDeviceCount"
              inputMode="numeric"
              min={1}
              name="affectedDeviceCount"
              onChange={(event) =>
                onChange(
                  "affectedDeviceCount",
                  event.target.value ? Number(event.target.value) : undefined,
                )
              }
              step={1}
              type="number"
              value={request.affectedDeviceCount ?? ""}
            />
            {errors.affectedDeviceCount ? (
              <p
                className="mt-2 text-sm text-[#FF9E9E]"
                id="affectedDeviceCount-error"
                role="alert"
              >
                {errors.affectedDeviceCount}
              </p>
            ) : null}
          </div>
        ) : null}

        <div>
          <label
            className="text-sm font-medium text-[#F7F8FA]"
            htmlFor="preferredSchedule"
          >
            Preferred schedule or window{" "}
            <span className="font-normal text-[#7E8490]">(optional)</span>
          </label>
          <input
            className={inputClasses}
            id="preferredSchedule"
            name="preferredSchedule"
            onChange={(event) =>
              onChange("preferredSchedule", event.target.value)
            }
            placeholder="For example: weekday afternoons"
            type="text"
            value={request.preferredSchedule ?? ""}
          />
        </div>
      </div>
    </div>
  );
}
