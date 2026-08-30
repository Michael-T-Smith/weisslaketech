import { Reveal } from "@/components/shared/Reveal";

const process = ["DIAGNOSE", "CONNECT", "IMPROVE", "BUILD"] as const;

export function VeteranOwned() {
  return (
    <section className="section-light relative overflow-hidden py-24 sm:py-32 lg:py-40">
      <div className="site-container">
        <Reveal className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="technical-label text-electric-blue">
              About the business
            </p>
            <h2 className="section-title mt-6 max-w-lg text-ink">
              Veteran owned.
              <span className="block text-ink/45">Engineer operated.</span>
            </h2>
          </div>
          <div className="max-w-3xl space-y-7 text-lg leading-[1.75] text-ink/72 lg:col-span-7 lg:pt-10 lg:text-xl">
            <p className="text-2xl font-medium leading-snug tracking-[-0.025em] text-ink sm:text-3xl">
              Technology work should begin with understanding the problem—not
              selling the customer more equipment.
            </p>
            <p>
              This is a veteran-owned technology business based in Collinsville,
              Alabama, operated directly by a professional software engineer.
              Work ranges from computer upgrades and local technology support to
              databases, integrations, automation and purpose-built business
              software.
            </p>
            <p className="font-medium text-ink">
              You work directly with the person diagnosing the problem and
              performing the work.
            </p>
          </div>
        </Reveal>

        <Reveal className="mt-24 border-y border-ink/12 py-8 sm:mt-32 sm:py-10">
          <ol className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-2">
            {process.map((item, index) => (
              <li key={item} className="flex items-center gap-4">
                <span className="text-[clamp(1.4rem,2.7vw,2.8rem)] font-semibold tracking-[-0.045em] text-ink/75">
                  {item}
                </span>
                {index < process.length - 1 && (
                  <span
                    className="text-xl text-electric-blue/55 sm:ml-2"
                    aria-hidden="true"
                  >
                    →
                  </span>
                )}
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
