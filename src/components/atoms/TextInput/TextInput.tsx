import type React from "react";
import type { ITextInput } from "../../../core/types/textInput.type";

const TextInput: React.FC<ITextInput> = ({ className, ...props }) => {
    return <input {...props} className={className} type="text" />;
};

export default TextInput;
