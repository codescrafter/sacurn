import Navbar from './Navbar';

interface IProps {
  children: React.ReactNode;
}

const LightLayout = ({ children }: IProps) => {
  return (
    <div>
      <Navbar className="relative z-30 !bg-navy-blue h-[70px]" />
      <div className="px-7">{children}</div>
    </div>
  );
};

export default LightLayout;
