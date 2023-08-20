import classNames from 'classnames';
import React from 'react';

interface IProps {
  className?: string;
  children: React.ReactNode;
}

const GraphCard = ({ className, children }: IProps) => {
  return <div className={classNames('bg-white rounded-[10px] shadow-graph-card', className)}>{children}</div>;
};

export default GraphCard;
