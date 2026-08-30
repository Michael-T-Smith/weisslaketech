import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  priority?: boolean;
}

export function Logo({ priority = false }: LogoProps) {
  return (
    <Link
      href="/"
      className="inline-flex min-h-11 items-center gap-3 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan"
      aria-label="Weiss Lake Tech home"
    >
      <Image
        src="/logo.svg"
        alt=""
        width={44}
        height={44}
        className="size-10 rounded-full bg-soft-white object-contain"
        preload={priority}
      />
      <span className="grid leading-none">
        <span className="text-[0.69rem] font-bold tracking-[0.16em] text-soft-white sm:text-xs">
          WEISS LAKE
        </span>
        <span className="mt-1 text-[0.58rem] font-bold tracking-[0.36em] text-white/55 sm:text-[0.62rem]">
          TECH
        </span>
      </span>
    </Link>
  );
}
