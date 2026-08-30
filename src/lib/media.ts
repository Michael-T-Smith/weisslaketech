export interface HeroMediaConfig {
  videoSrc: string | null;
  imageSrc: string | null;
  posterSrc: string | null;
  alt: string;
}

export const heroMedia: HeroMediaConfig = {
  videoSrc: null,
  imageSrc: "/media/hero-weiss-lake.jpg",
  posterSrc: "/media/hero-weiss-lake.jpg",
  alt: "A view across Weiss Lake and the Northeast Alabama landscape",
};
