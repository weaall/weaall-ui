import { style, styleVariants } from "@vanilla-extract/css";

export const container = style({
    position: "absolute",
    width: "100%",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    marginTop: "0.5rem",
    color: "#000000",
    "@media": {
        "screen and (max-width: 768px)": {
            paddingTop: "0",
        },
    },
});

export const modalWrap = style({
    width: "100%",
    display: "flex",
    borderRadius: "0.75rem",
    height: "auto",
    backgroundColor: "#ffffff",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    border: "1px solid #e5e7eb",
    padding: "1rem",
});

export const calendarWrap = style({
    height: "80%",
    paddingLeft: "1.5rem",
    paddingRight: "1.5rem",
    display: "flex",
    flexDirection: "column",
    "@media": {
        "screen and (max-width: 768px)": {
            paddingLeft: "0.5rem",
            paddingRight: "0.5rem",
        },
    },
});

export const calTitleWrap = style({
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "0.75rem",
});

export const yearWrap = style({
    display: "flex",
    gap: "1rem",
    alignItems: "center",
});

export const yearMonth = style({
    fontSize: "1rem",
    fontWeight: "600",
    "@media": {
        "screen and (max-width: 768px)": {
            fontSize: "1rem",
        },
    },
});

export const navBtn = style({
    padding: "0.25rem",
    borderRadius: "9999px",
    ":hover": {
        backgroundColor: "#f9fafb",
    },
});

export const daysWrap = style({
    height: "1rem",
    display: "flex",
    justifyContent: "center",
});

export const dayWrap = style({
    width: "14%",
    textAlign: "center",
});

export const dayLabelBase = style({
    fontWeight: "600",
});

export const dayLabelVariants = styleVariants({
    sunday: { color: "#ef4444" },
    saturday: { color: "#3b82f6" },
});

export const datesWrap = style({
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    justifyContent: "center",
    marginTop: "0.5rem",
    marginBottom: "0.5rem",
});

export const dateWrap = styleVariants({
    startDate: {
        height: "2.5rem",
        width: "14%",
        padding: "0.5rem",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "rgba(255, 149, 0, 0.25)",
        borderTopLeftRadius: "0.75rem",
        borderBottomLeftRadius: "0.75rem",
        cursor: "pointer",
        ":hover": { backgroundColor: "#F3F4F6" },
    },
    endDate: {
        height: "2.5rem",
        width: "14%",
        padding: "0.5rem",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "rgba(255, 149, 0, 0.25)",
        borderTopRightRadius: "0.75rem",
        borderBottomRightRadius: "0.75rem",
        cursor: "pointer",
        ":hover": { backgroundColor: "#F3F4F6" },
    },
    betweenDate: {
        height: "2.5rem",
        width: "14%",
        padding: "0.5rem",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "rgba(255, 149, 0, 0.13)",
        cursor: "pointer",
        ":hover": { backgroundColor: "#F3F4F6" },
    },
    today: {
        height: "2.5rem",
        width: "14%",
        padding: "0.5rem",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "#FF9500",
        cursor: "pointer",
        borderRadius: "0.5rem",
        ":hover": { backgroundColor: "#F3F4F6" },
    },
    other: {
        margin: "0.1px",
        height: "2.5rem",
        width: "14%",
        padding: "0.5rem",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        cursor: "pointer",
        borderRadius: "0.5rem",
        ":hover": { backgroundColor: "#F3F4F6" },
    },
});

export const pastWrap = style({
    height: "2.5rem",
    width: "14%",
    padding: "0.5rem",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    borderRadius: "0.5rem",
    color: "#d1d5db",
    cursor: "default",
});

export const dateLabel = styleVariants({
    today: { color: "#FF9500", fontWeight: "700", borderRadius: "0.5rem" },
    other: { display: "none" },
    this: {},
});

export const pickWrap = style({
    display: "flex",
    fontSize: "0.875rem",
    gap: "2rem",
});

export const monthWrap = style({
    display: "flex",
    flexDirection: "column",
    width: "50%",
});
