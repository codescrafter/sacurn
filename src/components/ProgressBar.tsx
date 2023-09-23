import classNames from 'classnames';

interface ProgressBarProps {
  steps: number;
  stepNumber: number;
  stepName: string;
  gap: 'large' | 'small';
  width: 'wide' | 'normal';
}

const ProgressBar = ({ steps, stepNumber, stepName, gap, width }: ProgressBarProps) => {
  const noOfSteps = Array.from({ length: steps }, (value, index) => index);
  return (
    <div className="relative flex flex-col items-center w-full">
      <div
        className={classNames('bg-navy-blue py-1 rounded-full', {
          'w-[90%]': width === 'wide',
          'w-[87%]': width === 'normal'
        })}
      ></div>
      <div
        className={classNames('flex flex-row relative -translate-y-5.5 w-[75%]', {
          'justify-around': gap === 'small',
          'justify-between': gap === 'large'
        })}
      >
        {noOfSteps.map((step, index) => {
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
