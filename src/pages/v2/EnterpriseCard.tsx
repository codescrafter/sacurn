import classNames from 'classnames';
import React from 'react';
interface IProps {
  title: string;
  color: string;
  bgColor: string;
  userName: string;
  userEmail: string;
  id: number;
  img: string;
}

const EnterpriseCard = ({ title, userName, userEmail, color, bgColor, id, img }: IProps) => {
  return (
    <div className="bg-white rounded-lg p-10 pb-12 md:p-7 xl:p-10">
      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="text-deep-sea-blue font-bold text-xl md:text-base xl:text-xl 2xl:text-2xl ">{title}</h1>
        <div
          className={classNames(
            'h-20 w-20 border-4 rounded-full bg-moon-soon mt-2 flex justify-center items-end xl:h-24 xl:w-24',
            {
              'border-mustard-yellow': !color,
              'border-muted-green': color,
              'border-deep-sea-blue': id == 5
            }
          )}
        >
          <img src={img} alt="no Image" className="h-15 xl:h-18 " />
        </div>
        <div
          className={classNames(
            'h-5 w-5 rounded-full border-4 border-white shadow-sm shadow-smoke-gray relative -top-9 left-6',
            {
              ' bg-gray-cloud': !bgColor,
              'bg-muted-green': bgColor
            }
          )}
        ></div>
        <h1 className="font-bold text-xl md:text-base xl:text-xl 2xl:text-2xl">{userName}</h1>
        <p className="font-normal text-sm text-smoke-gray md:text-xs xl:text-base 2xl:text-xl">{userEmail}</p>
      </div>
    </div>
  );
};

export default EnterpriseCard;
