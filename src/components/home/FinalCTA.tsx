import Link from "next/link";
import { Reveal } from "@/components/shared/Reveal";

export function FinalCTA() {
  return (
    <section className="section-light relative overflow-hidden py-28 sm:py-36 lg:py-48">
      <div className="site-container">
        <Reveal className="relative max-w-6xl">
          <p className="technical-label text-electric-blue">Start here</p>
          <h2 className="mt-7 text-[clamp(3.4rem,9vw,8.5rem)] font-semibold leading-[0.88] tracking-[-0.07em] text-ink">
            What isn’t working?
          </h2>
          <div className="mt-10 grid gap-9 border-t border-ink/14 pt-8 md:grid-cols-[1.5fr_1fr] md:items-end">
            <p className="max-w-2xl text-xl leading-relaxed text-ink/65">
              You don’t need to know which service you need. Describe the
              problem and I’ll determine the next step.
            </p>
            <div className="md:text-right">
              <Link
                href="/contact"
                className="button-dark min-h-14 px-7 text-base"
              >
                Request Service <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          <p className="mt-8 text-sm font-medium text-ink/45">
            Remote support <span aria-hidden="true">•</span> Onsite service{" "}
            <span aria-hidden="true">•</span> Business systems
          </p>
        </Reveal>
      </div>
    </section>
  );
}
