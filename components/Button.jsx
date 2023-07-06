import React from "react";

const Button = ({ className, onClick, children }) => {
  return (
    <button
      className={`bg-navy-blue rounded-1xl text-white p-2 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
