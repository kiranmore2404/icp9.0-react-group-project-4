import React from "react";

const Button = ({
  text,
  onClick,
  style = "primary",
  size = "medium",
  type = "button",
}) => {
  const buttonStyles = {
    primary: "bg-green-700 text-white hover:bg-green-800",
    secondary: "bg-blue-900 text-white hover:bg-blue-950",
    outlined: "border border-orange-500 text-orange-500 hover:bg-orange-100",
  };

  const sizeStyles = {
    small: "px-4 py-2 text-sm rounded-md bold",
    medium: "px-5 py-2 text-base rounded-lg bold",
    large: "px-6 py-2 text-lg rounded-xl bold",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${buttonStyles[style]} ${sizeStyles[size]} transition-all duration-300`}
    >
      {text}
    </button>
  );
};

export default Button;