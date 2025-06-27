import { style, styleVariants } from "@vanilla-extract/css";
import { barColorHex, barColorHoverHex } from "./colors";

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
    marginTop: "33px",
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
    color1: { backgroundColor: barColorHex.color1, selectors: { '&:hover': { backgroundColor: barColorHoverHex.color1 } } },
    color2: { backgroundColor: barColorHex.color2, selectors: { '&:hover': { backgroundColor: barColorHoverHex.color2 } } },
    color3: { backgroundColor: barColorHex.color3, selectors: { '&:hover': { backgroundColor: barColorHoverHex.color3 } } },
    color4: { backgroundColor: barColorHex.color4, selectors: { '&:hover': { backgroundColor: barColorHoverHex.color4 } } },
    color5: { backgroundColor: barColorHex.color5, selectors: { '&:hover': { backgroundColor: barColorHoverHex.color5 } } },
    color6: { backgroundColor: barColorHex.color6, selectors: { '&:hover': { backgroundColor: barColorHoverHex.color6 } } },
    color7: { backgroundColor: barColorHex.color7, selectors: { '&:hover': { backgroundColor: barColorHoverHex.color7 } } },
    color8: { backgroundColor: barColorHex.color8, selectors: { '&:hover': { backgroundColor: barColorHoverHex.color8 } } },
    color9: { backgroundColor: barColorHex.color9, selectors: { '&:hover': { backgroundColor: barColorHoverHex.color9 } } },
    color10: { backgroundColor: barColorHex.color10, selectors: { '&:hover': { backgroundColor: barColorHoverHex.color10 } } },
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
