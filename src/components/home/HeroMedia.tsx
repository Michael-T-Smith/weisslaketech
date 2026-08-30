import Image from "next/image";
import { heroMedia } from "@/lib/media";

export function HeroMedia() {
  if (heroMedia.videoSrc) {
    return (
      <video
        className="absolute inset-0 size-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster={heroMedia.posterSrc ?? undefined}
        aria-label={heroMedia.alt}
      >
        <source src={heroMedia.videoSrc} />
      </video>
    );
  }

  if (heroMedia.imageSrc) {
    return (
      <Image
        src={heroMedia.imageSrc}
        alt={heroMedia.alt}
        fill
        sizes="100vw"
        className="object-cover"
        fetchPriority="high"
      />
    );
  }

  return (
    <div
      className="hero-placeholder absolute inset-0 overflow-hidden"
      role="img"
      aria-label="Reserved atmospheric media area for Weiss Lake Tech"
    >
      <div className="hero-horizon" />
      <div className="hero-orbit hero-orbit-one" />
      <div className="hero-orbit hero-orbit-two" />
      <div className="hero-signal" />
    </div>
  );
}
