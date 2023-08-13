import classNames from "classnames";
import React, { FC } from "react";

interface IProps {
  className?: string;
  children: React.ReactNode;
}

const GraphCard: FC<IProps> = ({ className, children }) => {
  return (
    <div
      className={classNames("bg-white rounded-[10px] shadow-graph-card", {
        [`${className}`]: className
      })}
    >
      {children}
    </div>
  );
};

export default GraphCard;
