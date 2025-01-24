import {ButtonHTMLAttributes} from "react";
import {Link} from "react-router-dom";
// import Spinner from "../Spinner/Spinner";

type ExtendedButtonPropsBase = {
  type?: "button" | "submit";
  className?: string;
  children: React.ReactNode;
  buttonType: "primary" | "secondary" | "icon" | "link";
  showIcon?: boolean;
  isLoading?: boolean;
  to?: string;
};

type ExtendedButtonProps =
  | (ExtendedButtonPropsBase & {
      buttonType: Exclude<ExtendedButtonPropsBase["buttonType"], "link">;
      to?: never;
      styleType?: never;
    })
  | (ExtendedButtonPropsBase & {
      buttonType: "link";
      to: string;
      styleType?: "primary" | "secondary";
    });

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ExtendedButtonProps;

const Button = ({
  type = "button",
  className = "",
  children,
  buttonType,
  showIcon = true,
  isLoading = false,
  to,
  styleType = "primary",
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
      <button
        type={type}
        className={`button -md -outline-accent-1 text-accent-1 ${className}`}
        {...buttonProps}
      >
        {children}
        {showIcon && <i className="icon-arrow-top-right text-16 ml-10" />}
      </button>
    );
  }

  if (buttonType === "link") {
    const styleClass =
      styleType === "primary"
        ? "bg-accent-1 text-white"
        : "-outline-accent-1 text-accent-1";

    return (
      <Link
        className={`button -md -dark-1 ${styleClass} ${className}`}
        to={to || "/"}
      >
        {children}
        {showIcon && <i className="icon-arrow-top-right text-16 ml-10" />}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={`button -md -dark-1 bg-accent-1 text-white ${className}`}
      {...buttonProps}
    >
      {/* {isLoading && <Spinner/>} */}
      {children}
      {showIcon && <i className="icon-arrow-top-right text-16 ml-10" />}
    </button>
  );
};

export default Button;
