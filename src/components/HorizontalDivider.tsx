import { FC } from "react";

interface IProps {
  className?: string;
}

const HorizontalDivider: FC<IProps> = ({ className }) => {
  return <div className={`bg-[#F0F0F0] h-[2px] w-full ${className}`} />;
};

export default HorizontalDivider;
