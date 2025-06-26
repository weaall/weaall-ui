import { style, styleVariants } from "@vanilla-extract/css";

export const baseButton = style({
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontFamily: "inherit",
    display: "flex",           
    justifyContent: "center",  
    alignItems: "center",
    fontWeight: "500"
});

export const variantStyles = styleVariants({
    contained: { backgroundColor: "#FF9500", color: "white", ":hover": { backgroundColor: "#CC7700" } },
    outlined: { backgroundColor: "transparent", border: "1px solid #FF9500", color: "#FF9500", ":hover": { backgroundColor: "rgba(255, 149, 0, 0.1)" } },
    text: { backgroundColor: "transparent", color: "#FF9500", ":hover": { backgroundColor: "rgba(255, 149, 0, 0.1)" } },
});

export const sizeStyles = styleVariants({
    small: { padding: "4px 8px", fontSize: "10px" },
    medium: { padding: "8px 16px", fontSize: "14px" },
    large: { padding: "12px 24px", fontSize: "18px" },
});

export const colorStyles = styleVariants({
    primary: { backgroundColor: "#FF9500", color: "white", selectors: { "&.contained:hover": { backgroundColor: "#CC7700" } } },
    secondary: { backgroundColor: "#6c757d", color: "white", selectors: { "&.contained:hover": { backgroundColor: "#5a6268" } } },
    default: {},
});

export const disabledStyles = styleVariants({
    contained: { 
        opacity: 0.6, 
        cursor: "not-allowed", 
        pointerEvents: "none", 
        backgroundColor: "#5a6268",
        color: "white" 
    },
    outlined: { 
        opacity: 0.5, 
        cursor: "not-allowed", 
        pointerEvents: "none", 
        border: "1px solid #999999", 
        backgroundColor: "transparent", 
        color: "#999999" 
    },
    text: { 
        opacity: 0.4, 
        cursor: "not-allowed", 
        pointerEvents: "none", 
        backgroundColor: "transparent", 
        color: "#666666"
    },
});
