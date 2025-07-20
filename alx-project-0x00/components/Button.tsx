import React from "react";
import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, className, onClick }) => {
  return (
    <button
      className={`px-4 py-2 bg-blue-500 text-white rounded ${className}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;