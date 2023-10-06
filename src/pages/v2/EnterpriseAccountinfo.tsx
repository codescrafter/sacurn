import AddIcon from '@mui/icons-material/Add';
import React from 'react';

import { CardEnterpriseTypes } from '@/type';

import EnterpriseCard from './EnterpriseCard';
const EnterpriseAccountInfo = () => {
  return (
    <div className="w-[90%] h-[565px] mx-auto mt-4 overflow-y-scroll yellowScroll  min-[1400px]:h-[750px] min-[1700px]:h-[780px]">
      <div className=" w-[94%]  grid grid-cols-3 gap-8 xl:h-[820px]">
        {ENTERPRISE_CARDS.map(({ title, userName, userEmail, id, color, bgColor, img }: CardEnterpriseTypes) => {
          return (
            <EnterpriseCard
              title={title}
              userName={userName}
              userEmail={userEmail}
              id={id}
              color={color}
              bgColor={bgColor}
              img={img}
            />
          );
        })}
        <div className="bg-white rounded-lg p-10 pb-12">
          <div className="flex flex-col items-center gap-11 mt-10">
            <div className="border-2 border-dashed border-deep-sea-blue rounded-full h-24 w-24  xl:h-28 xl:w-28">
              <div className="h-20 w-20 border-4 border-white rounded-full bg-deep-sea-blue my-1.5 mx-1.5 flex justify-center items-center hover:cursor-pointer md:h-20 md:w-20 xl:h-24 xl:w-24">
                <AddIcon className="text-white" />
              </div>
            </div>
            <h1 className="text-deep-sea-blue font-bold text-sm xl:text-base">新增使用者</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterpriseAccountInfo;

const ENTERPRISE_CARDS: CardEnterpriseTypes[] = [
  {
    id: 1,
    title: '主視覺-藍',
    img: '/images/enterprise-account/user-icon.svg',
    userName: 'Belinda',
    userEmail: 'belinda@xholding.com',
    bgColor: '',
    color: ''
  },
  {
    id: 2,
    title: '可挑選者',
    img: '/images/enterprise-account/user-icon.svg',
    userName: 'Grimes',
    userEmail: 'grimes_musk@xholding.com',
    color: '#68A362',
    bgColor: '#60C757'
  },
  {
    id: 3,
    title: '可挑選者',
    img: '/images/enterprise-account/user-icon.svg',
    userName: 'Steve Jobs',
    userEmail: 'steve_jobs@xholding.com',
    color: '#68A362',
    bgColor: '#60C757'
  },
  {
    id: 4,
    title: '管理者',
    img: '/images/enterprise-account/user-icon.svg',
    userName: 'Diana',
    userEmail: 'diana@xholding.com',
    bgColor: '',
    color: ''
  },
  {
    id: 5,
    title: '可下單者',
    img: '/images/enterprise-account/user-icon.svg',
    userName: 'Eason',
    userEmail: 'eason@xholding.com',
    bgColor: '#60C757',
    color: '#005487'
  }
];
