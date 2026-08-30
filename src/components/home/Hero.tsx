import Link from "next/link";
import { HeroMedia } from "./HeroMedia";

const annotations = [
  { label: "REMOTE SUPPORT", position: "top-[30%] right-[8%]" },
  { label: "ONSITE TECHNOLOGY", position: "top-[49%] right-[17%]" },
  { label: "SOFTWARE + SYSTEMS", position: "top-[68%] right-[6%]" },
] as const;

export function Hero() {
  return (
    <section className="relative flex min-h-[max(680px,100svh)] overflow-hidden bg-ink text-soft-white">
      <HeroMedia />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,7,13,0.96)_0%,rgba(5,7,13,0.78)_44%,rgba(5,7,13,0.28)_78%,rgba(5,7,13,0.48)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,7,13,0.2)_0%,transparent_45%,#05070d_100%)]" />

      <div className="site-container relative z-10 flex w-full items-end pb-20 pt-32 sm:pb-24 md:items-center md:pb-10 md:pt-28">
        <div className="max-w-[1040px] md:w-[78%] lg:w-[74%]">
          <p className="hero-enter hero-enter-1 technical-label flex items-center gap-3 text-cyan">
            <span
              className="inline-block h-px w-8 bg-cyan"
              aria-hidden="true"
            />
            Collinsville, AL <span aria-hidden="true">•</span> Remote + Onsite
          </p>
          <h1 className="hero-enter hero-enter-2 mt-7 text-[clamp(3rem,6vw,5rem)] font-semibold leading-[0.92] tracking-[-0.062em] text-balance">
            Technology problems solved.
            <span className="mt-2 block text-white/68">
              From hardware to software.
            </span>
          </h1>
          <p className="hero-enter hero-enter-3 mt-8 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg md:text-xl">
            Computer support, business technology, networking, automation and
            software solutions for homes and small businesses across Northeast
            Alabama.
          </p>
          <div className="hero-enter hero-enter-4 mt-9 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <Link href="/contact" className="button-primary min-h-12 px-6">
              Request Service
            </Link>
            <Link href="/services" className="text-link min-h-11 py-3">
              Explore Services <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="hidden lg:block" aria-hidden="true">
          {annotations.map((annotation) => (
            <div
              key={annotation.label}
              className={`hero-enter hero-enter-4 absolute ${annotation.position} flex items-center gap-3`}
            >
              <span className="size-1.5 rounded-full border border-cyan bg-ink" />
              <span className="h-px w-12 bg-gradient-to-r from-cyan/75 to-white/10" />
              <span className="technical-label text-white/55">
                {annotation.label}
              </span>
            </div>
          ))}
        </div>

        <div
          className="absolute bottom-6 left-5 flex items-center gap-3 sm:left-8 lg:left-10"
          aria-hidden="true"
        >
          <span className="h-8 w-px bg-gradient-to-b from-cyan to-transparent" />
          <span className="technical-label text-white/40">
            Scroll to explore
          </span>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan/65 to-transparent" />
    </section>
  );
}
