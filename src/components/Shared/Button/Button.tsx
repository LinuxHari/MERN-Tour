import React from "react";

type ButtonProps = {
  type?: "button" | "submit"; 
  className?: string;
  children: React.ReactNode;
  buttonType: "primary" | "secondary" | "icon";
  showIcon?: boolean
};

const Button = ({
  type = "button",
  className = "",
  children,
  buttonType,
  showIcon = true
}: ButtonProps) => {
  if (buttonType === "icon") {
    return (
      <button
        type={type}
        className={`button -dark-1 size-35 bg-light-1 rounded-full flex-center ${className}`}
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
      >
        {children}
        {showIcon && <i className="icon-arrow-top-right text-16 ml-10"></i>}
      </button>
    );
  }

  return (
    <button
      type={type}
      className={`button -md -dark-1 bg-accent-1 text-white ${className}`}
    >
      {children}
      {showIcon && <i className="icon-arrow-top-right text-16 ml-10"></i>}
    </button>
  );
};

export default Button;
