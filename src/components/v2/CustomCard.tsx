import classNames from 'classnames';

import CustomButton from '../CustomButton';

interface CustomCardProps {
  name: string;
  title: string;
  subTitle: string;
  info: string;
  responseTitle: string;
  responseDetail?: string;
  buttonText?: string;
  terms?: string;
  step: number;
  cardRenewalNumber: number;
  getCurrentValue?: (values: number) => void;
}

const CustomCard = ({
  name,
  title,
  subTitle,
  info,
  responseTitle,
  responseDetail,
  buttonText,
  terms,
  step,
  cardRenewalNumber,
  getCurrentValue
}: CustomCardProps) => {
  return (
    <div className="w-[310px] flex flex-col justify-center gap-5">
      <h5 className="text-navy-blue text-[28px] font-extrabold">{name}</h5>
      <div
        className={classNames('w-full min-h-[500px] bg-white rounded-[10px] px-6 pb-2', {
          'flex flex-col justify-center': step === 3,
          'bg-ceramic-bg text-hit-grey': step < cardRenewalNumber
        })}
      >
        <h6
          className={classNames('text-[30px] font-bold text-black pt-12 pb-8', {
            'text-navy-blue': step === 3,
            'text-hit-grey': step < cardRenewalNumber
          })}
        >
          {title}
        </h6>
        <p className="text-2xl">{subTitle}</p>
        <h2
          className={classNames('text-navy-blue text-5xl font-extrabold pt-3 pb-10', {
            'text-hit-grey': step < cardRenewalNumber
          })}
        >
          {info}
        </h2>
        {responseTitle && (
          <div className="flex flex-col gap-4 h-[220px] justify-between items-center">
            <p className="text-2xl">{responseTitle}</p>
            <p className="text-lg">{responseDetail}</p>
            {buttonText && (
              <CustomButton
                className={classNames('px-8 py-1.5 text-lg font-bold rounded-[10px] mb-10', {
                  '!bg-hit-grey text-ceramic': step < cardRenewalNumber
                })}
                onClick={() => {
                  if (step === cardRenewalNumber && getCurrentValue) getCurrentValue(step);
                }}
              >
                {buttonText}
              </CustomButton>
            )}
          </div>
        )}
        {terms && <p className="text-[10px] text-center font-normal">{terms}</p>}
      </div>
    </div>
  );
};

export default CustomCard;
