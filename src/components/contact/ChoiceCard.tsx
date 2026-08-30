interface ChoiceCardProps {
  checked: boolean;
  description?: string;
  id: string;
  invalid?: boolean;
  label: string;
  marker?: string;
  name: string;
  onSelect: () => void;
  value: string;
}

export function ChoiceCard({
  checked,
  description,
  id,
  invalid = false,
  label,
  marker,
  name,
  onSelect,
  value,
}: ChoiceCardProps) {
  return (
    <div className="relative">
      <input
        aria-invalid={invalid}
        checked={checked}
        className="peer sr-only"
        id={id}
        name={name}
        onChange={onSelect}
        type="radio"
        value={value}
      />
      <label
        className="flex min-h-24 cursor-pointer flex-col justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.025] p-4 text-left transition-[border-color,background-color,transform] duration-200 hover:-translate-y-0.5 hover:border-white/25 peer-checked:border-[#03F7F7]/70 peer-checked:bg-[#03F7F7]/[0.06] peer-focus-visible:ring-2 peer-focus-visible:ring-[#03F7F7] peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-[#0B0E17] motion-reduce:transform-none motion-reduce:transition-none"
        htmlFor={id}
      >
        <span className="flex items-start justify-between gap-4">
          <span className="text-sm font-medium text-[#F7F8FA] sm:text-base">
            {label}
          </span>
          {marker ? (
            <span
              aria-hidden="true"
              className="font-mono text-[10px] tracking-[0.16em] text-[#A5AAB5] peer-checked:text-[#03F7F7]"
            >
              {marker}
            </span>
          ) : null}
        </span>
        {description ? (
          <span className="text-xs leading-5 text-[#A5AAB5]">
            {description}
          </span>
        ) : null}
      </label>
    </div>
  );
}
