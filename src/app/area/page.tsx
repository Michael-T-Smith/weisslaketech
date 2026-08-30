import type { Metadata } from "next";
import Link from "next/link";
import { ServiceAreaGraphic } from "@/components/area/ServiceAreaGraphic";
import { business } from "@/lib/business";
import { serviceArea } from "@/lib/service-area";

export const metadata: Metadata = {
  title: "Service Area",
  description:
    "Onsite technology service from Collinsville across Northeast Alabama, with extended project coverage considered by scope and remote support without normal travel limits.",
  openGraph: {
    title: `Northeast Alabama Service Area | ${business.name}`,
    description:
      "Review routine onsite, extended project, and remote technology-service coverage based in Collinsville, Alabama.",
    type: "website",
  },
};

export default function AreaPage() {
  return (
    <main
      className="overflow-x-clip bg-[#05070d] text-[#f7f8fa]"
      id="main-content"
    >
      <header className="relative isolate px-5 pb-20 pt-36 sm:px-8 sm:pb-24 sm:pt-44 lg:px-12 lg:pb-28">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_18%,rgba(3,247,247,0.1),transparent_28%),linear-gradient(120deg,rgba(3,3,247,0.13),transparent_48%)]"
        />
        <div className="mx-auto max-w-[1440px]">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-[#03f7f7]">
            Service Area
          </p>
          <div className="mt-7 grid gap-9 lg:grid-cols-12 lg:items-end lg:gap-10">
            <h1 className="max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.055em] sm:text-7xl lg:col-span-9 lg:text-[5rem]">
              Based here.
              <br />
              Built to travel when the work justifies it.
            </h1>
            <p className="max-w-md text-lg leading-8 text-[#a5aab5] lg:col-span-3 lg:pb-2">
              Onsite coverage starts in {serviceArea.center.name} and is based
              on road distance and the work involved. Remote support follows a
              different boundary.
            </p>
          </div>
        </div>
      </header>

      <section
        aria-labelledby="area-map-heading"
        className="px-5 pb-24 sm:px-8 sm:pb-28 lg:px-12 lg:pb-36"
      >
        <div className="mx-auto max-w-[1440px]">
          <h2 className="sr-only" id="area-map-heading">
            Illustrative service area map
          </h2>
          <ServiceAreaGraphic variant="full" />
        </div>
      </section>

      <section className="bg-[#f7f8fa] px-5 py-24 text-[#05070d] sm:px-8 sm:py-28 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-4">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#0303f7]">
                How coverage works
              </p>
              <h2 className="mt-5 max-w-lg text-4xl font-semibold leading-[0.98] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                Distance matters. The work does too.
              </h2>
            </div>

            <div className="lg:col-span-8">
              <div className="border-b border-[#05070d]/15">
                <article className="grid gap-4 border-t border-[#05070d]/15 py-8 sm:grid-cols-[11rem_1fr] sm:gap-8">
                  <div>
                    <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0303f7]">
                      0–30 road miles
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold">
                      {serviceArea.routine.title}
                    </h3>
                  </div>
                  <div>
                    <p className="text-lg leading-8 text-[#555b68]">
                      {serviceArea.routine.range}. This is the normal range for
                      hands-on service when the requested work is a fit.
                    </p>
                  </div>
                </article>

                <article className="grid gap-4 border-t border-[#05070d]/15 py-8 sm:grid-cols-[11rem_1fr] sm:gap-8">
                  <div>
                    <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7d03f7]">
                      31–50 road miles
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold">
                      {serviceArea.extended.title}
                    </h3>
                  </div>
                  <div>
                    <p className="text-lg leading-8 text-[#555b68]">
                      {serviceArea.extended.range}. Coverage at this distance
                      depends on:
                    </p>
                    <ul className="mt-5 grid gap-x-8 gap-y-3 text-sm font-medium text-[#303540] sm:grid-cols-2">
                      {serviceArea.extended.factors.map((factor: string) => (
                        <li
                          className="flex items-center gap-3 border-t border-[#05070d]/10 pt-3 capitalize"
                          key={factor}
                        >
                          <span
                            aria-hidden="true"
                            className="size-1.5 rounded-full bg-[#7d03f7]"
                          />
                          {factor}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>

                <article className="grid gap-4 border-t border-[#05070d]/15 py-8 sm:grid-cols-[11rem_1fr] sm:gap-8">
                  <div>
                    <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-[#008f95]">
                      No normal travel limit
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold">
                      {serviceArea.remote.title}
                    </h3>
                  </div>
                  <p className="text-lg leading-8 text-[#555b68]">
                    Remote work is {serviceArea.remote.range}. The requested
                    service still needs to be suitable for remote delivery.
                  </p>
                </article>
              </div>

              <p className="mt-6 max-w-3xl text-sm leading-6 text-[#606674]">
                The rings are planning guides, not guaranteed coverage. Every
                service is not automatically available throughout the full
                50-mile area, and actual availability is confirmed only after
                the location and project requirements are reviewed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#eef0f4] px-5 py-24 text-[#05070d] sm:px-8 sm:py-28 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#0303f7]">
              Representative communities
            </p>
            <h2 className="mt-5 text-4xl font-semibold leading-none tracking-[-0.04em] sm:text-5xl">
              Northeast Alabama,
              <br /> starting local.
            </h2>
          </div>
          <div className="lg:col-span-8">
            <ul className="grid grid-cols-2 border-t border-[#05070d]/15 sm:grid-cols-3">
              {serviceArea.communities.map((community: string) => (
                <li
                  className="border-b border-[#05070d]/15 py-4 text-base font-medium sm:text-lg"
                  key={community}
                >
                  {community}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-[#606674]">
              Plus surrounding Northeast Alabama communities, subject to road
              distance and project review.
            </p>

            <div className="mt-14 flex flex-col items-start justify-between gap-7 border-t border-[#05070d]/15 pt-9 sm:flex-row sm:items-center">
              <p className="max-w-2xl text-xl font-medium leading-8 tracking-[-0.02em] sm:text-2xl">
                Not sure if you&apos;re in range? Send your location with your
                service request.
              </p>
              <Link
                className="inline-flex min-h-12 shrink-0 items-center rounded-[10px] bg-[#0303f7] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#0202cb] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0303f7] focus-visible:ring-offset-4 focus-visible:ring-offset-[#eef0f4]"
                href="/contact"
              >
                Request Service{" "}
                <span aria-hidden="true" className="ml-2">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
