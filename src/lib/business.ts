export interface SocialLink {
  label: string;
  url: string;
}

export interface Business {
  name: string;
  positioning: string;
  tagline: string;
  location: string;
  ownership: string;
  email: string | null;
  phone: string | null;
  address: string | null;
  siteUrl: string | null;
  socialLinks: readonly SocialLink[] | null;
}

export const business: Business = {
  name: "Weiss Lake Tech",
  positioning: "Technology Support, Business IT & Software Solutions",
  tagline: "Local Tech. Better Systems. Problems Solved.",
  location: "Collinsville, Alabama",
  ownership: "Veteran Owned & Operated",
  email: null,
  phone: null,
  address: null,
  siteUrl: null,
  socialLinks: null,
};
