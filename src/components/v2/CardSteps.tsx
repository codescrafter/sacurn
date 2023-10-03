import classNames from 'classnames';

interface RenewalStepsProps {
  totalSteps: number;
  currentStep?: number;
}

const CardSteps = ({ totalSteps, currentStep }: RenewalStepsProps) => {
  const steps = Array.from({ length: totalSteps }, (_, i) => i + 1);
  return (
    <div className="w-full h-1 bg-navy-blue rounded-lg flex justify-around items-center">
      {steps.map((step) => {
        return (
          <div
            key={step}
            className={classNames('w-6 h-6 rounded-[100%] bg-navy-blue border-[5px] border-navy-blue', {
              'bg-white': step <= Number(currentStep)
            })}
          />
        );
      })}
    </div>
  );
};

export default CardSteps;
