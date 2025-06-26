// src/components/TableStatisticList.css.ts
import { style, styleVariants } from "@vanilla-extract/css";

export const content = style({
    display: "flex",
    flexDirection: "column",
    width: "100%",
    padding: "25px",
    border: "1px solid #e5e7eb",
    borderRadius: "12px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
});

export const chartContainer = style({
    display: "flex",
    width: "100%",
    height: "calc(100% - 25px)",
    boxSizing: "border-box",
});

export const yAxis = style({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    paddingRight: "16px",
    fontSize: "14px",
    color: "#4b5563",
    fontWeight: "500",
    height: "calc(100% - 60px)",
    marginBottom: "35px",
    marginTop: "25px",
});

export const yAxisTick = style({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    width: "100%",
});

export const chartContent = style({
    display: "flex",
    flexDirection: "column",
    width: "100%",
    marginTop: "37px",
    height: "calc(100% - 35px)",
});

export const chartBars = style({
    position: "relative",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-around",
    width: "100%",
    height: "calc(100% - 40px)",
});

export const gridLine = style({
    position: "absolute",
    width: "100%",
    borderTop: "1px solid #e5e7eb",
    zIndex: 0,
});

export const barContainer = style({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginLeft: "12px",
    marginRight: "12px",
    position: "relative",
    zIndex: 10,
    height: "auto",
});

export const barLabel = style({
    fontSize: "14px",
    fontWeight: "600",
    color: "#1f2937",
    marginBottom: "4px",
    height: "25px",
});

export const barColorVariants = styleVariants({
    color1: { backgroundColor: "#f43f5e" },
    color2: { backgroundColor: "#38bdf8" },
    color3: { backgroundColor: "#34d399" },
    color4: { backgroundColor: "#a78bfa" },
    color5: { backgroundColor: "#facc15" },
    color6: { backgroundColor: "#fb923c" },
    color7: { backgroundColor: "#818cf8" },
    color8: { backgroundColor: "#f472b6" },
    color9: { backgroundColor: "#4ade80" },
    color10: { backgroundColor: "#f87171" },
});

export const bottomAxis = style({
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    borderBottom: "2px solid #d1d5db",
});

export const barLabels = style({
    width: "100%",
    display: "flex",
    paddingTop: "10px",
    textAlign: "center",
});

export const barLabelItem = style({
    height: "25px",
    width: "25%",
    fontSize: "12px",
    fontWeight: "500",
    color: "#4b5563",
});

export const chartNote = style({
    height: "25px",
    fontSize: "12px",
    color: "#6b7280",
    marginTop: "4px",
    textAlign: "end",
});
