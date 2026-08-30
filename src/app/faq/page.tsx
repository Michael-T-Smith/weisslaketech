import type { Metadata } from "next";
import Link from "next/link";
import { FAQAccordion } from "@/components/faq/FAQAccordion";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers about remote support, onsite technology service, coverage across Northeast Alabama, computer upgrades, data recovery, business systems, software, and pricing.",
  openGraph: {
    title: `Frequently Asked Questions | ${business.name}`,
    description:
      "What to know before requesting residential, small-business, remote, onsite, or software services from Weiss Lake Tech.",
    type: "website",
  },
};

export default function FAQPage() {
  return (
    <main
      className="relative overflow-x-clip bg-[#05070d] px-5 pb-24 pt-36 text-[#f7f8fa] sm:px-8 sm:pb-28 sm:pt-44 lg:px-12 lg:pb-36"
      id="main-content"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-0 h-[34rem] bg-[radial-gradient(circle_at_18%_12%,rgba(3,3,247,0.16),transparent_34%),radial-gradient(circle_at_84%_8%,rgba(125,3,247,0.1),transparent_26%)]"
      />
      <div className="relative z-10 mx-auto grid max-w-[1440px] gap-16 lg:grid-cols-12 lg:gap-10">
        <header className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-[#03f7f7]">
              FAQ
            </p>
            <h1 className="mt-7 max-w-xl text-5xl font-semibold leading-[0.95] tracking-[-0.055em] sm:text-7xl lg:text-[5.25rem]">
              Questions before we start?
            </h1>
            <p className="mt-8 max-w-md text-lg leading-8 text-[#a5aab5]">
              A straightforward guide to service types, coverage, pricing, and
              what happens after you submit a request.
            </p>
            <Link
              className="mt-9 inline-flex min-h-12 items-center rounded-[10px] bg-[#0303f7] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#2525ff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#03f7f7] focus-visible:ring-offset-4 focus-visible:ring-offset-[#05070d]"
              href="/contact"
            >
              Request Service{" "}
              <span aria-hidden="true" className="ml-2">
                →
              </span>
            </Link>
          </div>
        </header>

        <section
          aria-label="Frequently asked questions"
          className="lg:col-span-8"
        >
          <FAQAccordion />
        </section>
      </div>
    </main>
  );
}
