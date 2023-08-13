import classNames from "classnames";
import { FC } from "react";
import Button from "./Button";

interface IProps {
  children: React.ReactNode;
  setIsAlert: React.Dispatch<React.SetStateAction<boolean>>;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const Alert: FC<IProps> = ({ children, setIsAlert, size = "md", className }) => {
  // Define the default size classes for the alert box
  const defaultSizeClasses = "min-h-[500px] min-w-[700px]";

  // Use Tailwind CSS responsive classes to override the default size based on the 'size' prop
  const sizeClasses = {
    sm: "min-w-[477px] min-h-[461px]",
    md: "md:min-h-[500px] md:min-w-[700px]",
    lg: "xl:min-w-[892px] min-w-[600px] min-h-[400px] xl:min-h-[598px]"
  };

  // Combine the default size classes with the specific size classes if available
  const alertBoxClass = `${defaultSizeClasses} ${sizeClasses[size]}`;

  return (
    <div className="flex justify-center items-center z-50 absolute inset-0 bg-black/30 backdrop-blur-[2px]">
      <div
        className={classNames(
          "flex flex-col items-center justify-center rounded-[20px] bg-white relative",
          alertBoxClass,
          className
        )}
      >
        <Button
          className="!bg-transparent absolute right-0 top-0"
          onClick={() => setIsAlert(false)}
        >
          <img src="/images/sales/cross_icon.png" width={32} height={32} alt="cross icon" />
        </Button>

        {children}
      </div>
    </div>
  );
};

export default Alert;
