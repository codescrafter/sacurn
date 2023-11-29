import classNames from 'classnames';

interface IProps {
  className?: string;
  heading: string;
}

const SimpleNav = ({ className, heading }: IProps) => {
  return (
    <div className={classNames('bg-navy-blue flex flex-col h-16 justify-center', className)}>
      <div className="flex flex-row ml-10">
        <img src="/images/navbar/sacurn-logo.svg" width={192} height={39} alt="sacurn" />
        <div className="h-[45%] mx-4 bg-white w-0.3 self-end mb-2" />
        <p className="text-white self-end mb-1">{heading}</p>
      </div>
    </div>
  );
};

export default SimpleNav;
