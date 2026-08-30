import { Reveal } from "@/components/shared/Reveal";

const capabilities = [
  {
    id: "technology",
    title: "Technology",
    number: "01",
    accent: "var(--electric-blue)",
    items: ["Computers", "Hardware", "Storage", "Devices", "Networks"],
  },
  {
    id: "systems",
    title: "Systems",
    number: "02",
    accent: "var(--cyan)",
    items: ["Workstations", "NAS", "Office IT", "Data Flow", "Integrations"],
  },
  {
    id: "software",
    title: "Software",
    number: "03",
    accent: "var(--violet)",
    items: [
      "APIs",
      "Databases",
      "Automation",
      "Internal Tools",
      "Custom Software",
    ],
  },
] as const;

export function CapabilityShowcase() {
  return (
    <section className="capability-section relative overflow-hidden bg-ink py-24 text-soft-white sm:py-32 lg:py-40">
      <div className="site-container">
        <Reveal>
          <p className="technical-label text-cyan">
            One problem-solving discipline
          </p>
          <h2 className="mt-6 max-w-5xl text-[clamp(2.7rem,6.6vw,6.25rem)] font-semibold leading-[0.94] tracking-[-0.06em] text-balance">
            From the physical device to the software behind the business.
          </h2>
        </Reveal>

        <Reveal className="mt-16 sm:mt-24">
          <figure className="capability-figure">
            <svg
              viewBox="0 0 1200 720"
              className="capability-paths hidden lg:block"
              role="img"
              aria-label="Technology, systems, and software connected to a central Solve node"
            >
              <defs>
                <linearGradient
                  id="path-tech"
                  x1="600"
                  y1="360"
                  x2="205"
                  y2="150"
                >
                  <stop stopColor="#F7F8FA" stopOpacity=".12" />
                  <stop offset="1" stopColor="#0303F7" stopOpacity=".78" />
                </linearGradient>
                <linearGradient
                  id="path-systems"
                  x1="600"
                  y1="360"
                  x2="990"
                  y2="170"
                >
                  <stop stopColor="#F7F8FA" stopOpacity=".12" />
                  <stop offset="1" stopColor="#03F7F7" stopOpacity=".7" />
                </linearGradient>
                <linearGradient
                  id="path-software"
                  x1="600"
                  y1="360"
                  x2="610"
                  y2="660"
                >
                  <stop stopColor="#F7F8FA" stopOpacity=".12" />
                  <stop offset="1" stopColor="#7D03F7" stopOpacity=".76" />
                </linearGradient>
              </defs>
              <path
                d="M552 326C458 265 378 208 270 168"
                stroke="url(#path-tech)"
              />
              <path
                d="M648 326C740 264 823 213 925 170"
                stroke="url(#path-systems)"
              />
              <path d="M600 418V594" stroke="url(#path-software)" />
              <path d="M270 168H90" stroke="#0303F7" strokeOpacity=".4" />
              <path d="M925 170h180" stroke="#03F7F7" strokeOpacity=".35" />
              <path d="M600 594v80" stroke="#7D03F7" strokeOpacity=".42" />
              <circle cx="270" cy="168" r="5" fill="#0303F7" />
              <circle cx="925" cy="170" r="5" fill="#03F7F7" />
              <circle cx="600" cy="594" r="5" fill="#7D03F7" />
            </svg>

            <div className="capability-solve">
              <span className="technical-label text-white/38">
                Central objective
              </span>
              <span className="mt-2 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
                SOLVE
              </span>
            </div>

            <div className="capability-groups">
              {capabilities.map((capability) => (
                <section
                  key={capability.id}
                  className={`capability-group capability-${capability.id}`}
                  style={
                    {
                      "--branch-accent": capability.accent,
                    } as React.CSSProperties
                  }
                >
                  <div className="flex items-center justify-between gap-4 border-b border-white/12 pb-4">
                    <h3 className="text-2xl font-semibold tracking-[-0.035em]">
                      {capability.title}
                    </h3>
                    <span
                      className="technical-label"
                      style={{ color: capability.accent }}
                    >
                      {capability.number}
                    </span>
                  </div>
                  <ul className="mt-4 grid gap-2">
                    {capability.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 text-sm text-white/57"
                      >
                        <span
                          className="size-1 rounded-full bg-[var(--branch-accent)]"
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>

            <figcaption className="capability-caption">
              <p className="text-[clamp(1.8rem,4vw,3.75rem)] font-medium leading-tight tracking-[-0.045em]">
                Hardware. Systems. Software.
                <span className="block text-white/42">
                  One problem-solving discipline.
                </span>
              </p>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
