import classNames from 'classnames';

interface IProps {
  className?: string;
}

const HorizontalDivider = ({ className }: IProps) => {
  return <div className={classNames('bg-[#F0F0F0] h-[2px] w-full', className)} />;
};

export default HorizontalDivider;
