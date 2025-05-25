import type { InputHTMLAttributes } from "react"

export interface ITextInput extends InputHTMLAttributes<HTMLInputElement> {
    className?: string,
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;

}
