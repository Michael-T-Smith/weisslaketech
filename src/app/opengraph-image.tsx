import { ImageResponse } from "next/og";

export const alt =
  "Weiss Lake Tech — Technology problems solved from hardware to software";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#05070D",
        color: "#F7F8FA",
        padding: "72px 80px",
        fontFamily: "Arial, Helvetica, sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: 520,
          height: 520,
          right: -120,
          top: -170,
          border: "1px solid rgba(3,247,247,.22)",
          borderRadius: "50%",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 350,
          height: 350,
          right: 30,
          top: -70,
          border: "1px solid rgba(125,3,247,.35)",
          borderRadius: "50%",
        }}
      />
      <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
        <div style={{ width: 42, height: 3, background: "#03F7F7" }} />
        <div style={{ fontSize: 20, letterSpacing: 4, fontWeight: 700 }}>
          WEISS LAKE TECH
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", maxWidth: 940 }}>
        <div
          style={{
            fontSize: 76,
            lineHeight: 0.96,
            letterSpacing: -4,
            fontWeight: 700,
          }}
        >
          Technology problems solved.
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 31,
            color: "rgba(247,248,250,.56)",
          }}
        >
          From hardware to software.
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ fontSize: 18, color: "rgba(247,248,250,.55)" }}>
          Collinsville, Alabama
        </div>
        <div style={{ display: "flex", gap: 9 }}>
          <div style={{ width: 54, height: 5, background: "#0303F7" }} />
          <div style={{ width: 54, height: 5, background: "#03F7F7" }} />
          <div style={{ width: 54, height: 5, background: "#7D03F7" }} />
        </div>
      </div>
    </div>,
    size,
  );
}
