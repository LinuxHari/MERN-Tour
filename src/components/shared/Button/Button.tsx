import React from "react";

type ButtonProps = {
  type: "primary" | "secondary" | "icon"
  className?: string;
  children: React.ReactNode;
};

const Button = ({ type, className = "", children }: ButtonProps) => {

  if(type === "icon"){
    return(
      <button className={`button -dark-1 size-35 bg-light-1 rounded-full flex-center ${className}`}>
        {children}
    </button>
    )
  }

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

  return <button className="button -md -dark-1 bg-accent-1 text-white">
  {children}
</button>;
};

export default Button;
