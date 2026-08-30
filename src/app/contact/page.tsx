import type { Metadata } from "next";
import { AvailabilityPanel } from "@/components/contact/AvailabilityPanel";
import { ServiceRequestForm } from "@/components/contact/ServiceRequestForm";

export const metadata: Metadata = {
  title: "Request Service",
  description:
    "Request remote support, onsite technology service, or a business systems consultation in Collinsville and Northeast Alabama.",
};

export default function ContactPage() {
  return (
    <main
      className="relative min-h-screen overflow-hidden bg-[#05070D] text-[#F7F8FA]"
      id="main-content"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#0303F7] to-transparent opacity-70"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-[30rem] w-[30rem] translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0303F7]/[0.08] blur-3xl"
      />

      <section className="relative px-4 pb-24 pt-32 sm:px-6 sm:pb-32 sm:pt-40 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <header className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-8 bg-[#03F7F7]" />
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#03F7F7] sm:text-xs">
                Service Request
              </p>
            </div>
            <h1 className="mt-5 text-4xl font-medium leading-[0.98] tracking-[-0.05em] text-[#F7F8FA] sm:text-6xl lg:text-7xl">
              Start with the problem.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-[#A5AAB5] sm:text-lg">
              Answer a few questions so I can determine whether the work is
              remote, onsite, or requires a project discussion.
            </p>
          </header>

          <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1fr)_17rem] lg:gap-12 xl:grid-cols-[minmax(0,1fr)_19rem]">
            <div className="overflow-hidden rounded-[20px] border border-white/10 bg-[#0B0E17] shadow-2xl shadow-black/20">
              <ServiceRequestForm />
            </div>
            <AvailabilityPanel />
          </div>
        </div>
      </section>
    </main>
  );
}
