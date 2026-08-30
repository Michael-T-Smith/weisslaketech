"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";

const navigation = [
  { href: "/services", label: "Services" },
  { href: "/area", label: "Area" },
  { href: "/faq", label: "FAQ" },
] as const;

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateHeader = () => setIsScrolled(window.scrollY > 24);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  const hasSurface = pathname !== "/" || isScrolled || isOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-200 ${
        hasSurface
          ? "border-white/10 bg-ink/88 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="site-container flex h-[72px] items-center justify-between gap-5">
        <Logo priority />

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Primary navigation"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              className="nav-link"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="button-primary min-h-11 px-5 py-2.5 text-sm"
          >
            Request Service
          </Link>
        </nav>

        <button
          type="button"
          className="relative grid size-11 place-items-center rounded-lg border border-white/20 text-soft-white transition-colors hover:border-cyan/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan md:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span className="sr-only">Menu</span>
          <span aria-hidden="true" className="grid gap-1.5">
            <span
              className={`block h-px w-5 bg-current transition-transform ${isOpen ? "translate-y-[3.5px] rotate-45" : ""}`}
            />
            <span
              className={`block h-px w-5 bg-current transition-transform ${isOpen ? "-translate-y-[3.5px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        aria-hidden={!isOpen}
        className={`overflow-hidden border-t border-white/10 bg-ink transition-[max-height,opacity] duration-200 md:hidden ${
          isOpen
            ? "max-h-96 opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <div className="site-container grid gap-1 py-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              tabIndex={isOpen ? 0 : -1}
              className="min-h-12 border-b border-white/8 px-1 py-3 text-base font-medium text-soft-white"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            tabIndex={isOpen ? 0 : -1}
            className="button-primary mt-3 min-h-12"
            onClick={() => setIsOpen(false)}
          >
            Request Service
          </Link>
        </div>
      </nav>
    </header>
  );
}
