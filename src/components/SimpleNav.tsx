import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
interface IProps {
  className?: string;
  heading: string;
}

const SimpleNav = ({ className, heading }: IProps) => {
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate('/login');
  };
  return (
    <div className={classNames('bg-navy-blue flex flex-col h-16 justify-center', className)}>
      <div className="flex flex-row ml-10">
        <button onClick={goToLogin}>
          <img src="/images/navbar/sacurn-logo.svg" width={192} height={39} alt="sacurn" />
        </button>
        <div className="h-[45%] mx-4 bg-white w-0.3 self-end mb-2" />
        <p className="text-white self-end mb-1">{heading}</p>
      </div>
    </div>
  );
};

export default SimpleNav;
