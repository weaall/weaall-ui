import React from "react";
import { baseButton, variantStyles, sizeStyles, colorStyles, disabledStyles } from "./Button.css";

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

export default function Button({
    children,
    onClick,
    variant = "contained",
    size = "medium",
    color = "default",
    className = "",
    style,
    disabled = false,
}: ButtonProps) {
    return (
        <button
            className={`${baseButton} ${variantStyles[variant]} ${sizeStyles[size]} ${colorStyles[color]} ${
                disabled ? disabledStyles[variant] : ""
            } ${className}`}
            onClick={disabled ? undefined : onClick}
            style={style}
            disabled={disabled}
        >
            {children}
        </button>
    );
}
