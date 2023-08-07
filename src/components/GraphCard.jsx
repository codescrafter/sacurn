import React from "react";

const GraphCard = ({ className, children }) => {
  return (
    <div className={`bg-white rounded-[10px] shadow-graph-card ${className}`}>
      {children}
    </div>
  );
};

export default GraphCard;
