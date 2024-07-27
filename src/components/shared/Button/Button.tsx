import React from "react";

type ButtonProps = {
  type: "primary" | "secondary";
  className?: string;
  children: React.ReactNode;
};

const Button = ({ type, className = "", children }: ButtonProps) => {
  if (type === "secondary") {
    return (
      <button
        className={`button -md -outline-accent-1 col-12 text-accent-1 ${className}`}
      >
        {children}
        <i className="icon-arrow-top-right text-16 ml-10"></i>
      </button>
    );
  }

  return <div>Button</div>;
};

export default Button;
