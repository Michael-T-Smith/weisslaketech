import Link from "next/link";
import { business } from "@/lib/business";
import { Logo } from "./Logo";

const routeLinks = [
  ["Services", "/services"],
  ["Area", "/area"],
  ["FAQ", "/faq"],
  ["Contact", "/contact"],
] as const;

const capabilityLinks = [
  ["Remote Technology", "/services#remote"],
  ["Onsite Technology", "/services#onsite"],
  ["Software & Systems", "/services#software"],
] as const;

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink text-soft-white">
      <div className="site-container py-16 sm:py-20">
        <div className="grid gap-14 border-b border-white/10 pb-14 lg:grid-cols-[1.5fr_0.7fr_1fr]">
          <div className="max-w-md">
            <Logo />
            <p className="mt-6 text-lg leading-relaxed text-white/78">
              {business.positioning}
            </p>
            <p className="mt-3 text-sm uppercase tracking-[0.16em] text-muted">
              {business.location}
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <p className="technical-label text-white/45">Navigate</p>
            <ul className="mt-5 grid gap-3">
              {routeLinks.map(([label, href]) => (
                <li key={href}>
                  <Link className="footer-link" href={href}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Service categories">
            <p className="technical-label text-white/45">Capabilities</p>
            <ul className="mt-5 grid gap-3">
              {capabilityLinks.map(([label, href]) => (
                <li key={href}>
                  <Link className="footer-link" href={href}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex flex-col gap-3 pt-7 text-xs uppercase tracking-[0.12em] text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {business.name}. All rights reserved.
          </p>
          <p>Veteran Owned &amp; Operated</p>
        </div>
      </div>
    </footer>
  );
}
