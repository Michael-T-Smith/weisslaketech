export interface AvailabilityItem {
  label: string;
  status?: string;
}

interface AvailabilityPanelProps {
  items?: readonly AvailabilityItem[];
  message?: string;
}

const DEFAULT_ITEMS: readonly AvailabilityItem[] = [
  { label: "Remote appointments" },
  { label: "Onsite appointments" },
  { label: "Business consultations" },
];

export function AvailabilityPanel({
  items = DEFAULT_ITEMS,
  message = "Current availability is confirmed after reviewing your service request.",
}: AvailabilityPanelProps) {
  return (
    <aside
      aria-labelledby="availability-heading"
      className="border-t border-white/10 pt-6 lg:sticky lg:top-28 lg:border-t-0 lg:border-l lg:pl-8 lg:pt-2"
    >
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#03F7F7]">
        Planning
      </p>
      <h2
        className="mt-3 text-xl font-medium tracking-[-0.02em] text-[#F7F8FA]"
        id="availability-heading"
      >
        Availability
      </h2>
      <p className="mt-3 text-sm leading-6 text-[#A5AAB5]">{message}</p>

      <ul className="mt-6 divide-y divide-white/10 border-y border-white/10">
        {items.map((item) => (
          <li className="flex items-start gap-3 py-4" key={item.label}>
            <span
              aria-hidden="true"
              className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#03F7F7]"
            />
            <span>
              <span className="block text-sm font-medium text-[#F7F8FA]">
                {item.label}
              </span>
              <span className="mt-1 block text-xs text-[#7E8490]">
                {item.status ?? "Confirmed after review"}
              </span>
            </span>
          </li>
        ))}
      </ul>

      <p className="mt-5 text-xs leading-5 text-[#7E8490]">
        Submitting a request starts a review. It does not reserve a time.
      </p>
    </aside>
  );
}
