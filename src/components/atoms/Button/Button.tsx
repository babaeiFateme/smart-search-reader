import type { IButtonType } from "../../../core/types/Button.type";


const Button: React.FC<IButtonType> = ({
    className,
    children,
    icon,
    iconPosition = "start",
    ...props
}) => {
    return (
        <button className={`btn ${className}`} {...props}>
            {icon && iconPosition === "start" && icon}
            {children}
            {icon && iconPosition === "end" && icon}
        </button>
    );
};

export default Button;
