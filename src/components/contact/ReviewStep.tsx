import type {
  ServiceRequestDraft,
  ServiceRequestStepNumber,
} from "@/types/service-request";
import { DELIVERY_OPTIONS } from "./DeliveryStep";
import { SERVICE_CATEGORY_OPTIONS } from "./ProblemStep";

interface ReviewStepProps {
  onEdit: (step: ServiceRequestStepNumber) => void;
  request: ServiceRequestDraft;
}

interface ReviewGroupProps {
  children: React.ReactNode;
  editLabel?: string;
  onEdit?: () => void;
  title: string;
}

function ReviewGroup({ children, editLabel, onEdit, title }: ReviewGroupProps) {
  return (
    <section className="border-t border-white/10 py-6 first:border-t-0 first:pt-0">
      <div className="mb-5 flex items-center justify-between gap-4">
        <h3 className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-[#03F7F7]">
          {title}
        </h3>
        {onEdit ? (
          <button
            className="min-h-11 px-2 text-xs font-medium text-[#C8CBD2] underline decoration-white/25 underline-offset-4 transition-colors hover:text-white focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#03F7F7] motion-reduce:transition-none"
            onClick={onEdit}
            type="button"
          >
            {editLabel ?? `Edit ${title.toLowerCase()}`}
          </button>
        ) : null}
      </div>
      <dl className="grid gap-x-8 gap-y-5 sm:grid-cols-2">{children}</dl>
    </section>
  );
}

function ReviewRow({
  label,
  value,
  wide = false,
}: {
  label: string;
  value: React.ReactNode;
  wide?: boolean;
}) {
  return (
    <div className={wide ? "sm:col-span-2" : undefined}>
      <dt className="text-xs uppercase tracking-[0.12em] text-[#7E8490]">
        {label}
      </dt>
      <dd className="mt-1 whitespace-pre-wrap break-words text-sm leading-6 text-[#F7F8FA] sm:text-base">
        {value}
      </dd>
    </div>
  );
}

export function ReviewStep({ onEdit, request }: ReviewStepProps) {
  const category = SERVICE_CATEGORY_OPTIONS.find(
    (option) => option.value === request.serviceCategory,
  );
  const delivery = DELIVERY_OPTIONS.find(
    (option) => option.value === request.deliveryPreference,
  );

  return (
    <div>
      <h2 className="text-2xl font-medium tracking-[-0.03em] text-[#F7F8FA] sm:text-3xl">
        Review your request.
      </h2>
      <p className="mt-3 max-w-2xl text-sm leading-6 text-[#A5AAB5] sm:text-base">
        Check the work-order summary before submitting. A request does not
        confirm an appointment.
      </p>

      <div className="mt-8">
        <ReviewGroup
          editLabel="Edit problem"
          onEdit={() => onEdit(1)}
          title="Request"
        >
          <ReviewRow
            label="Problem"
            value={category?.label ?? "Not provided"}
          />
          <ReviewRow
            label="Handling preference"
            value={
              <span className="flex flex-wrap items-center justify-between gap-3">
                <span>{delivery?.label ?? "Not provided"}</span>
                <button
                  className="min-h-11 text-xs text-[#A5AAB5] underline decoration-white/25 underline-offset-4 hover:text-white focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#03F7F7]"
                  onClick={() => onEdit(2)}
                  type="button"
                >
                  Edit type
                </button>
              </span>
            }
          />
        </ReviewGroup>

        <ReviewGroup onEdit={() => onEdit(3)} title="Location">
          <ReviewRow
            label="Customer type"
            value={
              request.customerType === "business" ? "Business" : "Residential"
            }
          />
          {request.businessName ? (
            <ReviewRow label="Business" value={request.businessName} />
          ) : null}
          <ReviewRow
            label="Service location"
            value={`${request.city}, ${request.zip}`}
          />
        </ReviewGroup>

        <ReviewGroup onEdit={() => onEdit(4)} title="Details">
          <ReviewRow
            label="Problem description"
            value={request.description}
            wide
          />
          {request.deviceType ? (
            <ReviewRow label="Device / system" value={request.deviceType} />
          ) : null}
          {request.softwareSystemNames ? (
            <ReviewRow
              label="Software / systems"
              value={request.softwareSystemNames}
            />
          ) : null}
          {request.affectedDeviceCount ? (
            <ReviewRow
              label="Affected devices / users"
              value={request.affectedDeviceCount}
            />
          ) : null}
          {request.preferredSchedule ? (
            <ReviewRow
              label="Preferred window"
              value={request.preferredSchedule}
            />
          ) : null}
        </ReviewGroup>

        <ReviewGroup onEdit={() => onEdit(5)} title="Contact">
          <ReviewRow label="Name" value={request.name} />
          <ReviewRow label="Email" value={request.email} />
          {request.phone ? (
            <ReviewRow label="Phone" value={request.phone} />
          ) : null}
          <ReviewRow
            label="Preferred method"
            value={
              request.preferredContactMethod
                ? request.preferredContactMethod[0].toUpperCase() +
                  request.preferredContactMethod.slice(1)
                : "Not provided"
            }
          />
        </ReviewGroup>
      </div>
    </div>
  );
}
