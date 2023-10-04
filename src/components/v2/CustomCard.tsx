import classNames from 'classnames';

import { CardMembershipEnum, CardReIssueEnum } from '@/type';

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
  isStyleChanged?: CardMembershipEnum.APPLICATION | CardMembershipEnum.COMPLETE | CardReIssueEnum.REPORT_LOSS;
  slug?: string;
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
  slug,
  cardRenewalNumber,
  getCurrentValue
}: CustomCardProps) => {
  return (
    <div className="flex items-center">
      <div className="2.5xl:w-[310px] flex flex-col justify-center gap-5 flex-1">
        <h5 className="text-navy-blue text-[28px] font-extrabold">{name}</h5>
        <div
          className={classNames('w-full min-h-[500px] bg-white rounded-[10px] px-6 pb-2', {
            'flex flex-col justify-center': step === 3,
            'bg-ceramic-bg text-hit-grey': step < cardRenewalNumber
          })}
        >
          <h6
            className={classNames('text-lg xl:text-2xl 2.5xl:text-[30px] font-bold text-black pt-12 pb-8', {
              'text-navy-blue': step === 3,
              'text-hit-grey': step < cardRenewalNumber,
              'pt-5 pb-3': slug === 'REPORT_LOSS'
            })}
          >
            {title}
          </h6>
          <p
            className={classNames('text-xl xl:text-2xl', {
              ['text-base xl:text-lg pb-4']: slug === 'REPORT_LOSS'
            })}
          >
            {subTitle}
          </p>
          <h2
            className={classNames('text-2xl 2.5xl:text-3xl 3xl:text-5xl font-extrabold pt-3 pb-10 text-navy-blue', {
              '!text-hit-grey': step < cardRenewalNumber,
              'pb-0': step === CardMembershipEnum.APPLICATION || step === CardMembershipEnum.COMPLETE,
              hidden: slug === 'REPORT_LOSS'
            })}
          >
            {info}
          </h2>
          {responseTitle && (
            <div className="flex flex-col gap-4 min-h-[220px] justify-between items-center">
              <p
                className={classNames('text-xl xl:text-2xl', {
                  'text-navy-blue': step === CardMembershipEnum.APPLICATION || step === CardMembershipEnum.COMPLETE,
                  '!text-hit-grey': step < cardRenewalNumber,
                  'text-base xl:text-lg': slug === 'REPORT_LOSS'
                })}
              >
                {responseTitle}
              </p>
              {(step === CardMembershipEnum.APPLICATION || step === CardMembershipEnum.COMPLETE) &&
              slug !== 'PAYMENT_METHOD' ? (
                <ul className="list-disc px-4">
                  {responseDetail?.split('\n').map((item, index) => (
                    <li key={index} className="text-start text-base xl:text-lg mb-1">
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p
                  className={classNames('text-base xl:text-lg', {
                    'text-bright-red': slug === 'REPORT_LOSS',
                    '!text-hit-grey': step < cardRenewalNumber
                  })}
                >
                  {responseDetail}
                </p>
              )}
              {buttonText && (
                <CustomButton
                  className={classNames('px-6 2.5xl:px-8 py-1.5 text-lg font-bold rounded-[10px] mb-10', {
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
      {step < cardRenewalNumber && <img src="/v2/cart/left-arrow.svg" className="w-5 h-5 object-contain mx-2" />}
    </div>
  );
};

export default CustomCard;
