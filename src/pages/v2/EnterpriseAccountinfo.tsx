import AddIcon from '@mui/icons-material/Add';
import React from 'react';

import EnterpriseCard from './EnterpriseCard';
const EnterpriseAccountinfo = () => {
  return (
    <div className="w-[90%] h-[550px] mx-auto mt-4 overflow-y-scroll yellowScroll md:w-[70%] md:h-[550px] lg:h-[540px] lg:w-[80%] xl:h-[570px] xl:w-[90%] min-[1390]:h-[650px] max-[1550]:h-[770px] 2xl:h-[800px]">
      <div className=" w-[94%]  grid grid-cols-3 gap-8 xl:h-[820px]">
        {ENTERPRISE_CARDS.map((element) => {
          return (
            <EnterpriseCard
              title={element.enterpriseTitle}
              username={element.enterpriseUsername}
              email={element.enterpriseUsermail}
              color={element.color}
              bgColor={element.bgColor}
              id={element.id}
            />
          );
        })}
        <div className="bg-white rounded-lg p-10 pb-12">
          <div className="flex flex-col items-center gap-11 mt-10">
            <div className="border-2 border-dashed border-DeepseaBlue rounded-full h-24 w-24">
              <div className="h-20 w-20 border-4 border-white rounded-full bg-DeepseaBlue my-1.5 mx-1.5 flex justify-center items-center hover:cursor-pointer">
                <AddIcon className="text-white" />
              </div>
            </div>
            <h1 className="text-DeepseaBlue font-bold text-sm">新增使用者</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterpriseAccountinfo;

const ENTERPRISE_CARDS = [
  {
    enterpriseTitle: '主視覺-藍',
    enterpriseImg: '/images/enterprise-account/user-icon.svg"',
    enterpriseUsername: 'Belinda',
    enterpriseUsermail: 'belinda@xholding.com'
  },
  {
    enterpriseTitle: '可挑選者',
    enterpriseImg: '/images/enterprise-account/user-icon.svg"',
    enterpriseUsername: 'Grimes',
    enterpriseUsermail: 'grimes_musk@xholding.com',
    color: '#68A362',
    bgColor: '#60C757'
  },
  {
    enterpriseTitle: '可挑選者',
    enterpriseImg: '/images/enterprise-account/user-icon.svg"',
    enterpriseUsername: 'Steve Jobs',
    enterpriseUsermail: 'steve_jobs@xholding.com',
    color: '#68A362',
    bgColor: '#60C757'
  },
  {
    enterpriseTitle: '管理者',
    enterpriseImg: '/images/enterprise-account/user-icon.svg"',
    enterpriseUsername: 'Diana',
    enterpriseUsermail: 'diana@xholding.com'
  },
  {
    id: 5,
    enterpriseTitle: '可下單者',
    enterpriseImg: '/images/enterprise-account/user-icon.svg"',
    enterpriseUsername: 'Eason',
    enterpriseUsermail: 'eason@xholding.com',
    bgColor: '#60C757'
  }
];
