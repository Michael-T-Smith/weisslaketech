import Link from "next/link";

export interface FAQItem {
  question: string;
  answer: string;
  href?: string;
  linkLabel?: string;
}

export const faqItems: readonly FAQItem[] = [
  {
    question: "What services do you provide?",
    answer:
      "We provide remote technology support, onsite technology work, and software and business-systems services—from diagnostics and upgrades to networks, databases, integrations, automation, and small custom applications.",
  },
  {
    question: "Do you work with residential customers?",
    answer:
      "Yes. Residential customers and home offices can request help with computers, upgrades, Wi-Fi, storage, connected devices, software, and other supported technology needs.",
  },
  {
    question: "Do you work with businesses?",
    answer:
      "Yes. Work for sole proprietors, small businesses, and local organizations can include workstations, shared storage, networks, integrations, automation, and purpose-built software.",
  },
  {
    question: "Do you provide remote support?",
    answer:
      "Yes. Many diagnostics, software and operating-system issues, backup and cloud-storage configurations, and consultations can be handled remotely. Remote work is not constrained by the normal onsite service area.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "The business is based in Collinsville, Alabama. Routine onsite work is generally within approximately 0–30 road miles. Extended projects may be considered approximately 31–50 road miles away based on road distance and project requirements. Service is reviewed case by case, so every service is not automatically available everywhere in that range.",
    href: "/area",
    linkLabel: "Review the service area",
  },
  {
    question: "Can you upgrade my computer?",
    answer:
      "Yes. Available computer work includes compatible RAM and SSD/storage upgrades, hardware replacement, setup, and migration. The device and proposed parts are reviewed before work is confirmed.",
  },
  {
    question: "Do you perform data recovery?",
    answer:
      "Logical data recovery is offered on a best-effort basis only, and recovery is not guaranteed. Physical device failure may require referral to a specialist recovery provider.",
  },
  {
    question: "Can you install cameras or smart devices?",
    answer:
      "Setup is available for compatible home Wi-Fi cameras, Ring and other smart doorbells, Roku and other streaming devices, and third-party smart devices. Onsite coverage, the device, and the installation conditions must be reviewed first.",
  },
  {
    question: "Do you set up business networks?",
    answer:
      "Yes. Supported work includes router and Wi-Fi setup, small-office networks, NAS and shared storage, network printers, office technology, and business workstation deployment.",
  },
  {
    question: "Do you build custom software?",
    answer:
      "Yes. Internal business tools and small custom applications can be built around a defined business problem. Scope, technical fit, schedule, and project pricing are determined after review.",
  },
  {
    question: "Can you connect two business systems?",
    answer:
      "Potentially. API integrations and systems-integration work can connect compatible platforms when suitable interfaces and access are available. Each integration is scoped after technical review.",
  },
  {
    question: "Can you automate spreadsheet/manual work?",
    answer:
      "Yes. Workflow, reporting, and business-process automation can reduce appropriate repeat work, and spreadsheet-dependent workflows can be evaluated for replacement with a more structured system.",
  },
  {
    question: "How does pricing work?",
    answer:
      "Simple services may have standard starting rates. More involved work is priced after the problem, scope, equipment and travel requirements are understood.",
  },
  {
    question: "Do onsite jobs include travel?",
    answer:
      "Travel considerations depend on the service location, road distance, and project requirements. They are assessed after the location and scope are reviewed, before work is confirmed.",
  },
  {
    question: "How do I request an appointment?",
    answer:
      "Use the Request Service form to describe the problem, location, and preferred contact method. The details are reviewed before the appropriate next step and availability are confirmed. Submitting a request does not automatically confirm an appointment.",
    href: "/contact",
    linkLabel: "Open the Request Service form",
  },
] as const;

export function FAQAccordion() {
  return (
    <div className="border-t border-white/15">
      {faqItems.map((item: FAQItem, index: number) => (
        <details className="group border-b border-white/15" key={item.question}>
          <summary className="flex min-h-20 cursor-pointer list-none items-center gap-5 py-5 text-left text-lg font-medium text-white outline-none transition-colors duration-200 hover:text-[#03f7f7] focus-visible:rounded-lg focus-visible:ring-2 focus-visible:ring-[#03f7f7] focus-visible:ring-offset-4 focus-visible:ring-offset-[#05070d] [&::-webkit-details-marker]:hidden sm:min-h-24 sm:text-xl">
            <span className="w-8 shrink-0 font-mono text-[11px] font-medium tracking-[0.16em] text-white/40">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="grow">{item.question}</span>
            <span
              aria-hidden="true"
              className="grid size-8 shrink-0 place-items-center rounded-full border border-white/20 text-xl font-light text-[#03f7f7] transition-transform duration-200 group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <div className="pb-7 pl-13 pr-10 text-base leading-7 text-[#a5aab5] sm:pb-8 sm:pl-13 sm:pr-16 sm:text-lg">
            <p>{item.answer}</p>
            {item.href && item.linkLabel ? (
              <Link
                className="mt-4 inline-flex min-h-11 items-center border-b border-[#03f7f7]/60 text-sm font-semibold text-white transition-colors hover:border-[#03f7f7] hover:text-[#03f7f7] focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#03f7f7] focus-visible:ring-offset-4 focus-visible:ring-offset-[#05070d]"
                href={item.href}
              >
                {item.linkLabel} <span aria-hidden="true">→</span>
              </Link>
            ) : null}
          </div>
        </details>
      ))}
    </div>
  );
}
