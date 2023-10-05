import classNames from 'classnames';
import React from 'react';
interface IProps {
  title: string;
  color: string;
  bgColor: string;
  username: string;
  email: string;
  id: string;
}

const EnterpriseCard = ({ title, username, email, color, bgColor, id }: IProps) => {
  return (
    <div className="bg-white rounded-lg p-10 pb-12 md:p-7 xl:p-10">
      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="text-DeepseaBlue font-bold text-xl md:text-base xl:text-xl">{title}</h1>
        <div
          className={classNames('h-20 w-20 border-4 rounded-full bg-MoonSoon mt-2 flex justify-center items-end', {
            'border-OrangeYellow': !color,
            'border-[#68A362]': color,
            'border-[#005487]': id
          })}
        >
          <img src="/images/enterprise-account/user-icon.svg" alt="no Image" />
        </div>
        <div
          className={classNames(
            'h-5 w-5 rounded-full border-4 border-white shadow-sm shadow-smokegray relative -top-9 left-6',
            {
              ' bg-GrayCloud': !bgColor,
              'bg-[#68A362]': bgColor
            }
          )}
        ></div>
        <h1 className="font-bold text-xl md:text-base xl:text-xl">{username}</h1>
        <p className="font-normal text-sm text-smokegray md:text-xs xl:text-base">{email}</p>
      </div>
    </div>
  );
};

export default EnterpriseCard;
