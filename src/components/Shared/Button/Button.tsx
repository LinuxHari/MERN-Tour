import { ButtonHTMLAttributes } from "react";
import Spinner from "../Spinner/Spinner";

type ExtendedButtonProps = {
  type?: "button" | "submit";
  className?: string;
  children: React.ReactNode;
  buttonType: "primary" | "secondary" | "icon";
  showIcon?: boolean;
  isLoading?: boolean;
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & ExtendedButtonProps;

const Button = ({
  type = "button",
  className = "",
  children,
  buttonType,
  showIcon = true,
  isLoading = false,
  ...buttonProps
}: ButtonProps) => {
  if (buttonType === "icon") {
    return (
      <button
        type={type}
        className={`button -dark-1 size-35 bg-light-1 rounded-full flex-center ${className}`}
        {...buttonProps}
      >
        {children}
      </button>
    );
  }

  if (buttonType === "secondary") {
    return (
      <button type={type} className={`button -md -outline-accent-1 text-accent-1 ${className}`} {...buttonProps}>
        {children}
        {showIcon && <i className="icon-arrow-top-right text-16 ml-10"></i>}
      </button>
    );
  }

  return (
    <button type={type} className={`button -md -dark-1 bg-accent-1 text-white ${className}`} {...buttonProps}>
        {isLoading && <Spinner/>}
      {children}
      {showIcon && <i className="icon-arrow-top-right text-16 ml-10"></i>}
    </button>
  );
};

export default Button;
