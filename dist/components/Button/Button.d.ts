import React from "react";
interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    variant?: "contained" | "outlined" | "text";
    size?: "small" | "medium" | "large";
    color?: "primary" | "secondary" | "default";
    className?: string;
    style?: React.CSSProperties;
    disabled?: boolean;
}
export default function Button({ children, onClick, variant, size, color, className, style, disabled, }: ButtonProps): import("react/jsx-runtime").JSX.Element;
export {};
