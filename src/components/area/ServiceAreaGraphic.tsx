import {
  type ServiceAreaPoint,
  serviceArea,
  serviceAreaPoints,
} from "@/lib/service-area";

interface ServiceAreaGraphicProps {
  variant?: "preview" | "full";
  className?: string;
}

const center = { x: 400, y: 320 } as const;
const mobileCenter = { x: 180, y: 260 } as const;

interface MobilePointPosition {
  x: number;
  y: number;
  labelX: number;
  labelY: number;
  anchor: "start" | "end";
}

const mobilePointPositions: Record<string, MobilePointPosition> = {
  "Fort Payne": { x: 255, y: 170, labelX: 269, labelY: 174, anchor: "start" },
  Centre: { x: 268, y: 258, labelX: 282, labelY: 262, anchor: "start" },
  Rainsville: { x: 112, y: 173, labelX: 98, labelY: 177, anchor: "end" },
  Boaz: { x: 100, y: 245, labelX: 86, labelY: 249, anchor: "end" },
  Albertville: { x: 115, y: 330, labelX: 101, labelY: 334, anchor: "end" },
  Gadsden: { x: 225, y: 344, labelX: 239, labelY: 348, anchor: "start" },
  "Rainbow City": { x: 88, y: 402, labelX: 102, labelY: 406, anchor: "start" },
  Guntersville: { x: 38, y: 300, labelX: 52, labelY: 304, anchor: "start" },
  Scottsboro: { x: 284, y: 96, labelX: 270, labelY: 100, anchor: "end" },
  Arab: { x: 185, y: 444, labelX: 199, labelY: 448, anchor: "start" },
};

function getLabelPosition(point: ServiceAreaPoint): {
  x: number;
  y: number;
  anchor: "start" | "middle" | "end";
} {
  switch (point.labelPosition) {
    case "above":
      return { x: point.x, y: point.y - 18, anchor: "middle" };
    case "below":
      return { x: point.x, y: point.y + 30, anchor: "middle" };
    case "left":
      return { x: point.x - 18, y: point.y + 6, anchor: "end" };
    case "right":
      return { x: point.x + 18, y: point.y + 6, anchor: "start" };
  }
}

export function ServiceAreaGraphic({
  variant = "preview",
  className = "",
}: ServiceAreaGraphicProps) {
  const isFull = variant === "full";

  return (
    <figure
      className={`relative overflow-hidden rounded-[24px] border border-white/10 bg-[#080b13] ${className}`}
    >
      <svg
        aria-label="Illustrative Northeast Alabama service area centered on Collinsville, with routine and extended project rings"
        className="aspect-[18/25] w-full sm:hidden"
        role="img"
        viewBox="0 0 360 500"
      >
        <title>Weiss Lake Tech mobile service area</title>
        <desc>
          A mobile diagram centered on Collinsville, with nearby and extended
          Northeast Alabama communities connected around it.
        </desc>
        <defs>
          <radialGradient id="mobile-area-surface" cx="50%" cy="48%" r="66%">
            <stop offset="0%" stopColor="#11182b" />
            <stop offset="100%" stopColor="#05070d" />
          </radialGradient>
          <linearGradient id="mobile-area-line" x1="0" x2="1">
            <stop offset="0%" stopColor="#03f7f7" stopOpacity="0.18" />
            <stop offset="52%" stopColor="#0303f7" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#7d03f7" stopOpacity="0.24" />
          </linearGradient>
        </defs>

        <rect width="360" height="500" fill="url(#mobile-area-surface)" />
        <g fill="none">
          <ellipse
            cx={mobileCenter.x}
            cy={mobileCenter.y}
            rx="155"
            ry="190"
            stroke="#7d03f7"
            strokeDasharray="4 9"
            strokeOpacity="0.48"
          />
          <ellipse
            cx={mobileCenter.x}
            cy={mobileCenter.y}
            rx="90"
            ry="110"
            stroke="#03f7f7"
            strokeDasharray="3 7"
            strokeOpacity="0.62"
          />
          {serviceAreaPoints.map((point: ServiceAreaPoint) => {
            const position = mobilePointPositions[point.name];
            return (
              <line
                key={`mobile-path-${point.name}`}
                stroke="url(#mobile-area-line)"
                strokeOpacity={point.tier === "nearby" ? 0.75 : 0.42}
                x1={mobileCenter.x}
                x2={position.x}
                y1={mobileCenter.y}
                y2={position.y}
              />
            );
          })}
        </g>

        <text
          fill="#be91ff"
          fontSize="10"
          fontWeight="650"
          letterSpacing="1.5"
          textAnchor="middle"
          x="180"
          y="47"
        >
          EXTENDED PROJECT AREA ~50 MI
        </text>
        <text
          fill="#72ffff"
          fontSize="10"
          fontWeight="650"
          letterSpacing="1.3"
          textAnchor="middle"
          x="180"
          y="136"
        >
          ROUTINE ONSITE ~30 MI
        </text>

        {serviceAreaPoints.map((point: ServiceAreaPoint) => {
          const position = mobilePointPositions[point.name];
          return (
            <g key={`mobile-${point.name}`}>
              <circle
                cx={position.x}
                cy={position.y}
                fill={point.tier === "nearby" ? "#03f7f7" : "#a5aab5"}
                r={point.tier === "nearby" ? 4 : 3}
              />
              <circle
                cx={position.x}
                cy={position.y}
                fill="none"
                opacity="0.28"
                r={point.tier === "nearby" ? 8 : 7}
                stroke={point.tier === "nearby" ? "#03f7f7" : "#a5aab5"}
              />
              <text
                fill={point.tier === "nearby" ? "#f7f8fa" : "#bcc2ce"}
                fontSize="11"
                fontWeight="540"
                textAnchor={position.anchor}
                x={position.labelX}
                y={position.labelY}
              >
                {point.name}
              </text>
            </g>
          );
        })}

        <g>
          <circle
            cx={mobileCenter.x}
            cy={mobileCenter.y}
            fill="#0303f7"
            r="8"
            stroke="#f7f8fa"
            strokeWidth="2"
          />
          <circle
            cx={mobileCenter.x}
            cy={mobileCenter.y}
            fill="none"
            opacity="0.5"
            r="18"
            stroke="#03f7f7"
          />
          <rect fill="#080b13" height="28" rx="4" width="132" x="114" y="276" />
          <text
            fill="#fff"
            fontSize="14"
            fontWeight="700"
            letterSpacing="1.8"
            textAnchor="middle"
            x={mobileCenter.x}
            y="295"
          >
            {serviceArea.center.label}
          </text>
        </g>
      </svg>

      <svg
        aria-label="Illustrative Northeast Alabama service area centered on Collinsville, with routine and extended project rings"
        className="hidden aspect-[5/4] w-full sm:block"
        role="img"
        viewBox="0 0 800 640"
      >
        <title>Weiss Lake Tech service area</title>
        <desc>
          An illustrative diagram centered on Collinsville, Alabama. An inner
          ring represents routine onsite work around 30 road miles and an outer
          ring represents potential extended project coverage around 50 road
          miles.
        </desc>

        <defs>
          <radialGradient id="area-surface" cx="50%" cy="48%" r="62%">
            <stop offset="0%" stopColor="#11182b" />
            <stop offset="72%" stopColor="#090c15" />
            <stop offset="100%" stopColor="#05070d" />
          </radialGradient>
          <linearGradient id="area-line" x1="0" x2="1">
            <stop offset="0%" stopColor="#03f7f7" stopOpacity="0.2" />
            <stop offset="52%" stopColor="#0303f7" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#7d03f7" stopOpacity="0.25" />
          </linearGradient>
          <filter
            id="area-center-shadow"
            x="-120%"
            y="-120%"
            width="340%"
            height="340%"
          >
            <feGaussianBlur stdDeviation="8" />
          </filter>
        </defs>

        <rect width="800" height="640" fill="url(#area-surface)" />

        <g fill="none">
          <path
            d="M48 94H156M644 554H752M62 574H112M688 70H748"
            stroke="#f7f8fa"
            strokeOpacity="0.08"
          />
          <ellipse
            cx={center.x}
            cy={center.y}
            rx="318"
            ry="252"
            stroke="#7d03f7"
            strokeDasharray="5 11"
            strokeOpacity="0.48"
          />
          <ellipse
            cx={center.x}
            cy={center.y}
            rx="174"
            ry="142"
            stroke="#03f7f7"
            strokeDasharray="3 9"
            strokeOpacity="0.6"
          />
          {serviceAreaPoints.map((point: ServiceAreaPoint) => (
            <line
              key={`path-${point.name}`}
              stroke="url(#area-line)"
              strokeOpacity={point.tier === "nearby" ? 0.7 : 0.42}
              vectorEffect="non-scaling-stroke"
              x1={center.x}
              x2={point.x}
              y1={center.y}
              y2={point.y}
            />
          ))}
        </g>

        <g>
          <rect fill="#080b13" height="28" rx="4" width="236" x="282" y="53" />
          <text
            fill="#be91ff"
            fontSize="16"
            fontWeight="600"
            letterSpacing="2.2"
            textAnchor="middle"
            x="400"
            y="72"
          >
            EXTENDED PROJECT AREA ~50 MI
          </text>
          <rect fill="#080b13" height="28" rx="4" width="196" x="302" y="165" />
          <text
            fill="#72ffff"
            fontSize="16"
            fontWeight="600"
            letterSpacing="2"
            textAnchor="middle"
            x="400"
            y="184"
          >
            ROUTINE ONSITE ~30 MI
          </text>
        </g>

        {serviceAreaPoints.map((point: ServiceAreaPoint) => {
          const label = getLabelPosition(point);

          return (
            <g key={point.name}>
              <circle
                cx={point.x}
                cy={point.y}
                fill={point.tier === "nearby" ? "#03f7f7" : "#a5aab5"}
                opacity={point.tier === "nearby" ? 0.88 : 0.72}
                r={point.tier === "nearby" ? 4.5 : 3.5}
              />
              <circle
                cx={point.x}
                cy={point.y}
                fill="none"
                opacity="0.28"
                r={point.tier === "nearby" ? 10 : 8}
                stroke={point.tier === "nearby" ? "#03f7f7" : "#a5aab5"}
              />
              <text
                fill={point.tier === "nearby" ? "#f7f8fa" : "#bcc2ce"}
                fontSize={isFull ? 17 : 16}
                fontWeight="520"
                letterSpacing="0.3"
                textAnchor={label.anchor}
                x={label.x}
                y={label.y}
              >
                {point.name}
              </text>
            </g>
          );
        })}

        <g>
          <circle
            cx={center.x}
            cy={center.y}
            fill="#0303f7"
            filter="url(#area-center-shadow)"
            opacity="0.4"
            r="25"
          />
          <circle
            cx={center.x}
            cy={center.y}
            fill="#0303f7"
            r="8"
            stroke="#f7f8fa"
            strokeWidth="2"
          />
          <circle
            cx={center.x}
            cy={center.y}
            fill="none"
            opacity="0.45"
            r="20"
            stroke="#03f7f7"
          />
          <rect fill="#080b13" height="38" rx="5" width="174" x="313" y="341" />
          <text
            fill="#ffffff"
            fontSize="21"
            fontWeight="700"
            letterSpacing="2.6"
            textAnchor="middle"
            x={center.x}
            y="367"
          >
            {serviceArea.center.label}
          </text>
        </g>
      </svg>

      <figcaption className="flex flex-col gap-1 border-t border-white/10 px-5 py-4 text-xs leading-5 text-[#a5aab5] sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <span>{serviceArea.availabilityNote}</span>
        <span className="text-white/50">{serviceArea.geographyNote}</span>
      </figcaption>
    </figure>
  );
}
