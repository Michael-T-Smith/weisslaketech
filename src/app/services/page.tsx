import type { Metadata } from "next";
import Link from "next/link";
import { business } from "@/lib/business";
import {
  getServicesByCategory,
  type Service,
  type ServiceCategory,
  type ServiceCategoryDetails,
  serviceCategories,
} from "@/lib/services";

export const metadata: Metadata = {
  title: "Technology Services",
  description:
    "Remote computer support, onsite technology, small-business IT, automation, integrations, databases, and custom software from Collinsville, Alabama.",
  openGraph: {
    title: `Technology Services | ${business.name}`,
    description:
      "Explore remote support, onsite technology, and software and business-systems services for Northeast Alabama homes and small businesses.",
    type: "website",
  },
};

interface ServiceListProps {
  category: ServiceCategory;
  inverse?: boolean;
  actionLabel?: string;
}

function ServiceList({
  category,
  inverse = false,
  actionLabel = "Request Service",
}: ServiceListProps) {
  const categoryServices = getServicesByCategory(category);

  return (
    <div
      className={
        inverse ? "border-b border-white/15" : "border-b border-[#05070d]/15"
      }
    >
      {categoryServices.map((service: Service) => (
        <article
          className={`grid gap-4 border-t py-7 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.2fr)_12rem] md:gap-8 md:py-8 ${
            inverse ? "border-white/15" : "border-[#05070d]/15"
          }`}
          key={service.slug}
        >
          <h3 className="text-xl font-semibold leading-tight tracking-[-0.02em] sm:text-2xl">
            {service.name}
          </h3>
          <p
            className={`max-w-2xl text-base leading-7 sm:text-lg ${
              inverse ? "text-[#a5aab5]" : "text-[#555b68]"
            }`}
          >
            {service.shortDescription}
          </p>
          <div className="flex items-end justify-between gap-4 md:flex-col md:items-start md:justify-start">
            <div className="space-y-2">
              <p
                className={`font-mono text-[11px] font-semibold uppercase tracking-[0.18em] ${
                  inverse ? "text-[#03f7f7]" : "text-[#0303f7]"
                }`}
              >
                {service.deliveryMode}
              </p>
              {service.startingPrice ? (
                <p
                  className={`text-xs leading-5 ${
                    inverse ? "text-white/60" : "text-[#606674]"
                  }`}
                >
                  {service.startingPrice}
                </p>
              ) : null}
            </div>
            <Link
              className={`inline-flex min-h-11 shrink-0 items-center border-b text-sm font-semibold transition-colors focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-4 ${
                inverse
                  ? "border-white/30 text-white hover:border-[#03f7f7] hover:text-[#03f7f7] focus-visible:ring-[#03f7f7] focus-visible:ring-offset-[#05070d]"
                  : "border-[#05070d]/25 text-[#05070d] hover:border-[#0303f7] hover:text-[#0303f7] focus-visible:ring-[#0303f7] focus-visible:ring-offset-[#f7f8fa]"
              }`}
              href="/contact"
            >
              {actionLabel}{" "}
              <span aria-hidden="true" className="ml-2">
                →
              </span>
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}

function CategoryHeading({
  category,
  inverse = false,
}: {
  category: ServiceCategoryDetails;
  inverse?: boolean;
}) {
  return (
    <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
      <div className="lg:col-span-4">
        <p
          aria-hidden="true"
          className={`text-[5.5rem] font-semibold leading-none tracking-[-0.07em] sm:text-[7.5rem] ${
            inverse ? "text-white/[0.07]" : "text-[#05070d]/[0.06]"
          }`}
        >
          {category.number}
        </p>
      </div>
      <div className="lg:col-span-8 lg:pt-4">
        <p
          className={`font-mono text-xs font-semibold uppercase tracking-[0.2em] ${
            inverse ? "text-[#03f7f7]" : "text-[#0303f7]"
          }`}
        >
          {category.number} / {category.label}
        </p>
        <h2
          className="mt-5 max-w-4xl text-4xl font-semibold leading-[0.98] tracking-[-0.045em] sm:text-5xl lg:text-7xl"
          id={`${category.id}-heading`}
        >
          {category.name}
        </h2>
        <p
          className={`mt-6 max-w-2xl text-lg leading-8 ${
            inverse ? "text-[#a5aab5]" : "text-[#555b68]"
          }`}
        >
          {category.introduction}
        </p>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  const remoteCategory = serviceCategories[0];
  const onsiteCategory = serviceCategories[1];
  const softwareCategory = serviceCategories[2];

  return (
    <main
      className="overflow-x-clip bg-[#05070d] text-[#f7f8fa]"
      id="main-content"
    >
      <header className="relative isolate px-5 pb-24 pt-36 sm:px-8 sm:pb-28 sm:pt-44 lg:px-12 lg:pb-36">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_82%_20%,rgba(125,3,247,0.15),transparent_30%),linear-gradient(125deg,rgba(3,3,247,0.12),transparent_45%)]"
        />
        <div className="mx-auto max-w-[1440px]">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-[#03f7f7]">
            Services
          </p>
          <h1 className="mt-7 max-w-6xl text-5xl font-semibold leading-[0.95] tracking-[-0.055em] sm:text-7xl lg:text-[5rem]">
            From the device on the desk
            <br className="hidden sm:block" /> to the systems behind the
            business.
          </h1>
          <div className="mt-10 grid gap-8 border-t border-white/15 pt-8 md:grid-cols-12">
            <p className="max-w-2xl text-lg leading-8 text-[#a5aab5] md:col-span-7 md:text-xl">
              One point of contact for physical technology, business systems,
              and software—matched to the problem instead of forced into a
              standard package.
            </p>
            <p className="text-sm leading-6 text-white/55 md:col-span-4 md:col-start-9">
              Simple, predictable work may show a starting rate. Everything else
              is scoped after review.
            </p>
          </div>
        </div>
      </header>

      <section
        aria-labelledby="remote-heading"
        className="bg-[#f7f8fa] px-5 py-24 text-[#05070d] sm:px-8 sm:py-28 lg:px-12 lg:py-32"
        id="remote"
      >
        <div className="mx-auto max-w-[1440px]">
          <CategoryHeading category={remoteCategory} />
          <div className="mt-16 lg:ml-[33.333%] lg:mt-20">
            <ServiceList category="remote" />
          </div>
        </div>
      </section>

      <section
        aria-labelledby="onsite-heading"
        className="bg-[#0b0e17] px-5 py-24 text-[#f7f8fa] sm:px-8 sm:py-28 lg:px-12 lg:py-32"
        id="onsite"
      >
        <div className="mx-auto max-w-[1440px]">
          <CategoryHeading category={onsiteCategory} inverse />
          <div className="mt-16 lg:ml-[33.333%] lg:mt-20">
            <ServiceList category="onsite" inverse />
          </div>
        </div>
      </section>

      <section
        aria-labelledby="software-heading"
        className="bg-[#f7f8fa] px-5 py-24 text-[#05070d] sm:px-8 sm:py-28 lg:px-12 lg:py-32"
        id="software"
      >
        <div className="mx-auto max-w-[1440px]">
          <CategoryHeading category={softwareCategory} />

          <div className="mt-16 grid gap-14 lg:mt-20 lg:grid-cols-12 lg:gap-10">
            <aside
              className="lg:col-span-4"
              aria-label="Common business problems"
            >
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#7d03f7]">
                Familiar problems
              </p>
              <div className="mt-6 border-l border-[#7d03f7]/35 pl-6">
                {[
                  "We enter this twice.",
                  "This spreadsheet runs the whole business.",
                  "These systems don't communicate.",
                  "This report takes hours every week.",
                ].map((problem: string) => (
                  <p
                    className="border-b border-[#05070d]/10 py-5 text-xl font-medium leading-snug tracking-[-0.02em] first:pt-0"
                    key={problem}
                  >
                    “{problem}”
                  </p>
                ))}
              </div>
            </aside>
            <div className="lg:col-span-8">
              <ServiceList actionLabel="Discuss project" category="software" />
            </div>
          </div>

          <div className="mt-20 flex flex-col items-start justify-between gap-7 border-t border-[#05070d]/15 pt-9 sm:flex-row sm:items-center">
            <p className="max-w-2xl text-lg leading-8 text-[#555b68]">
              Start with the business problem. The technical scope comes after
              the workflow and constraints are understood.
            </p>
            <Link
              className="inline-flex min-h-12 shrink-0 items-center rounded-[10px] bg-[#0303f7] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#0202cb] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0303f7] focus-visible:ring-offset-4 focus-visible:ring-offset-[#f7f8fa]"
              href="/contact"
            >
              Discuss a Business Problem{" "}
              <span aria-hidden="true" className="ml-2">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
