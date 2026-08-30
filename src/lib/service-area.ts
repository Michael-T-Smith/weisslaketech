export type ServiceAreaTier = "nearby" | "extended";

export interface ServiceAreaPoint {
  name: string;
  tier: ServiceAreaTier;
  x: number;
  y: number;
  labelPosition: "above" | "below" | "left" | "right";
}

export const serviceArea = {
  center: {
    name: "Collinsville",
    state: "Alabama",
    label: "COLLINSVILLE",
  },
  routine: {
    title: "Routine Onsite",
    range: "approximately 0–30 road miles",
    summary: "Generally within approximately 30 road miles.",
  },
  extended: {
    title: "Extended Projects",
    range: "approximately 31–50 road miles",
    summary: "Approximately 31–50 road miles depending on project.",
    factors: [
      "road distance",
      "work type",
      "project value",
      "required onsite time",
      "schedule",
    ],
  },
  remote: {
    title: "Remote",
    range: "not subject to normal travel restrictions",
    summary: "Available without normal travel restrictions.",
  },
  communities: [
    "Collinsville",
    "Fort Payne",
    "Centre",
    "Rainsville",
    "Boaz",
    "Albertville",
    "Gadsden",
    "Attalla",
    "Rainbow City",
    "Guntersville",
    "Scottsboro",
    "Arab",
  ],
  availabilityNote:
    "Actual availability is based on road distance and project requirements.",
  geographyNote: "Illustrative service area — not survey-grade geography.",
} as const;

export const serviceAreaPoints: readonly ServiceAreaPoint[] = [
  {
    name: "Fort Payne",
    tier: "nearby",
    x: 480,
    y: 200,
    labelPosition: "right",
  },
  {
    name: "Centre",
    tier: "nearby",
    x: 502,
    y: 314,
    labelPosition: "right",
  },
  {
    name: "Rainsville",
    tier: "nearby",
    x: 334,
    y: 222,
    labelPosition: "left",
  },
  {
    name: "Boaz",
    tier: "nearby",
    x: 304,
    y: 336,
    labelPosition: "left",
  },
  {
    name: "Albertville",
    tier: "nearby",
    x: 286,
    y: 402,
    labelPosition: "below",
  },
  {
    name: "Gadsden",
    tier: "nearby",
    x: 378,
    y: 446,
    labelPosition: "below",
  },
  {
    name: "Rainbow City",
    tier: "extended",
    x: 290,
    y: 520,
    labelPosition: "below",
  },
  {
    name: "Guntersville",
    tier: "extended",
    x: 168,
    y: 388,
    labelPosition: "left",
  },
  {
    name: "Scottsboro",
    tier: "extended",
    x: 616,
    y: 140,
    labelPosition: "right",
  },
  {
    name: "Arab",
    tier: "extended",
    x: 170,
    y: 518,
    labelPosition: "left",
  },
] as const;
