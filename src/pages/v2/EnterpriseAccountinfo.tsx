import AddIcon from '@mui/icons-material/Add';
import React from 'react';

import { CardEnterpriseTypes } from '@/type';

import EnterpriseCard from './EnterpriseCard';

const EnterpriseAccountInfo = () => {
  return (
    <div className="mt-8 overflow-y-scroll yellowScroll pr-5 mr-5 2xl:pr-8 2:mr-8 2.5xl:pr-12 2.5xl:mr-14 flex justify-end xl:justify-center 2xl:block">
      <div className="w-[90%] 2xl:w-auto grid place-items-end grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 xl:gap-8 2.5xl:gap-12 min-h-[600px] max-h-[690px] 2.5xl:max-h-[720px]">
        {ENTERPRISE_CARDS.map(({ title, userName, userEmail, id, img, isActive }: CardEnterpriseTypes) => (
          <EnterpriseCard
            key={id}
            title={title}
            userName={userName}
            userEmail={userEmail}
            id={id}
            img={img}
            isActive={isActive}
          />
        ))}
        <div className="bg-white rounded-lg w-[100%] h-[316px] flex justify-center items-center">
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
    isActive: false
  },
  {
    id: 2,
    title: '可挑選者',
    img: '/images/enterprise-account/user-icon.svg',
    userName: 'Grimes',
    userEmail: 'grimes_musk@xholding.com',
    isActive: true
  },
  {
    id: 3,
    title: '可挑選者',
    img: '/images/enterprise-account/user-icon.svg',
    userName: 'Steve Jobs',
    userEmail: 'steve_jobs@xholding.com',
    isActive: true
  },
  {
    id: 4,
    title: '管理者',
    img: '/images/enterprise-account/user-icon.svg',
    userName: 'Diana',
    userEmail: 'diana@xholding.com',
    isActive: false
  },
  {
    id: 5,
    title: '可下單者',
    img: '/images/enterprise-account/user-icon.svg',
    userName: 'Eason',
    userEmail: 'eason@xholding.com',
    isActive: true
  }
];