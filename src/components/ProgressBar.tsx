interface ProgressBarProps {
  steps: number;
  stepNumber: number;
  stepName: string;
}

const ProgressBar = ({ steps, stepNumber, stepName }: ProgressBarProps) => {
  const noOfSteps = Array.from({ length: steps }, (value, index) => index);
  return (
    <div className="relative flex flex-col items-center w-full">
      <div className="bg-navy-blue py-1 rounded-full w-[90%]"></div>
      <div className="flex flex-row relative -translate-y-5.5 justify-between w-[75%]">
        {noOfSteps.map((step, index) => {
          console.log('here');
          return (
            <div className="flex flex-col relative items-center">
              {stepNumber === index + 1 && (
                <p className="text-navy-blue text-2.5xl absolute w-max font-bold -mt-10">{stepName}</p>
              )}
              <div className="h-10 w-10 flex items-center justify-center rounded-full bg-navy-blue">
                {stepNumber >= index + 1 && <div className="bg-white rounded-full h-6 w-6"></div>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressBar;
