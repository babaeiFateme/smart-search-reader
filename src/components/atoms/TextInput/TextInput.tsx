
import type { ITextInput } from "../../../core/types/TextInput.type";
import { forwardRef } from "react";

const TextInput = forwardRef<HTMLInputElement, ITextInput>(
    ({ placeholder, className, onChange, onKeyDown }, ref) => {
        return (
            <input
                type="text"
                placeholder={placeholder}
                className={className}
                onChange={onChange}
                onKeyDown={onKeyDown}
                ref={ref}
            />
        );
    }
);

export default TextInput;
