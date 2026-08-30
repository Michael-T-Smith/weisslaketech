import Link from "next/link";
import { ServiceAreaGraphic } from "@/components/area/ServiceAreaGraphic";
import { Reveal } from "@/components/shared/Reveal";
import { serviceArea } from "@/lib/service-area";

const areaModes = [
  {
    title: serviceArea.routine.title,
    detail: serviceArea.routine.summary,
  },
  {
    title: serviceArea.extended.title,
    detail: serviceArea.extended.summary,
  },
  {
    title: serviceArea.remote.title,
    detail: serviceArea.remote.summary,
  },
] as const;

export function ServiceAreaPreview() {
  return (
    <section className="section-dark relative overflow-hidden py-24 sm:py-32 lg:py-40">
      <div className="absolute left-0 top-1/3 h-px w-1/3 bg-gradient-to-r from-electric-blue/70 to-transparent" />
      <div className="site-container">
        <Reveal className="grid items-center gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <div>
            <p className="technical-label text-cyan">Service area</p>
            <h2 className="section-title mt-6 text-soft-white">
              Local when hands-on matters.
              <span className="block text-white/42">
                Remote when it doesn’t.
              </span>
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/64">
              Based in Collinsville and serving homes and businesses throughout
              Northeast Alabama.
            </p>
            <Link
              href="/area"
              className="text-link mt-8 inline-flex min-h-11 items-center"
            >
              Explore Service Area <span aria-hidden="true">→</span>
            </Link>
          </div>

          <ServiceAreaGraphic variant="preview" />
        </Reveal>

        <Reveal className="mt-16 grid border-t border-white/12 md:grid-cols-3">
          {areaModes.map((mode, index) => (
            <div
              key={mode.title}
              className={`py-7 md:px-7 ${index > 0 ? "border-t border-white/12 md:border-l md:border-t-0" : "md:pl-0"}`}
            >
              <p className="text-base font-semibold text-soft-white">
                {mode.title}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-white/52">
                {mode.detail}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
