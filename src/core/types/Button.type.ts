import type { ButtonHTMLAttributes, ReactNode } from "react";

export interface IButtonType extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children: ReactNode;
    icon?: ReactNode;
    iconPosition?: "start" | "end";
}
