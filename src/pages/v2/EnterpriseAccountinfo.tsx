import AddIcon from '@mui/icons-material/Add';
import React, { useEffect, useState } from 'react';

import { IsOnlineEnum } from '@/libs/api';
import { useEmployeeStore } from '@/store/employee';

import EnterpriseCard from './EnterpriseCard';

interface EnterpriseAccounts
  extends Array<{
    id: number;
    isActive: IsOnlineEnum | undefined;
    userName: string;
    userEmail: string;
    img: string | null | undefined;
    title: string | null | undefined;
  }> {}

const EnterpriseAccountInfo = () => {
  const employeeList = useEmployeeStore((state) => state.employeeList);
  const getEmployeeList = useEmployeeStore((state) => state.getEmployeeList);
  const [enterpriseAccounts, setEnterpriseAccounts] = useState<EnterpriseAccounts>([]);

  useEffect(() => {
    getEmployeeList();
    const data = employeeList.map((employee) => {
      return {
        id: employee.id,
        isActive: employee.is_online,
        userName: employee.username,
        userEmail: employee.email,
        img: employee.photo,
        title: employee.position
      };
    });
    if (data) {
      setEnterpriseAccounts(data);
    }
  }, []);

  return (
    <div className="mt-8 overflow-y-scroll yellowScroll pr-5 mr-5 2xl:pr-8 2:mr-8 2.5xl:pr-12 2.5xl:mr-14 flex justify-end xl:justify-center 2xl:block">
      {enterpriseAccounts.length > 0 && (
        <div className="w-[90%] 2xl:w-auto grid place-items-end grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 xl:gap-8 2.5xl:gap-12 min-h-[600px] max-h-[690px] 2.5xl:max-h-[720px]">
          {enterpriseAccounts.map(({ title, userName, userEmail, id, img, isActive }) => (
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
              <div className="border-2 border-dashed border-navy-blue rounded-full h-24 w-24  xl:h-28 xl:w-28">
                <div className="h-20 w-20 border-4 border-white rounded-full bg-navy-blue my-1.5 mx-1.5 flex justify-center items-center hover:cursor-pointer md:h-20 md:w-20 xl:h-24 xl:w-24">
                  <AddIcon className="text-white" />
                </div>
              </div>
              <h1 className="text-navy-blue font-bold text-sm xl:text-base">新增使用者</h1>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EnterpriseAccountInfo;
