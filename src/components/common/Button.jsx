// src/components/common/Button.js
import React from "react";

const Button = ({ children, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-off-white text-dark-grey px-4 py-2 rounded border-3 border-off-white hover:bg-dark-grey hover:text-off-white transition-colors ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
