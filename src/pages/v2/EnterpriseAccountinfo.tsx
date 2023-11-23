import AddIcon from '@mui/icons-material/Add';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useEmployeeStore } from '@/store/employee';

import EnterpriseCard from './EnterpriseCard';

const EnterpriseAccountInfo = () => {
  const employeeList = useEmployeeStore((store) => store.employeeList);
  const getEmployeeList = useEmployeeStore((store) => store.getEmployeeList);

  useEffect(() => {
    getEmployeeList();
  }, []);

  return (
    <div className="mt-8 overflow-y-scroll yellowScroll pr-5 mr-5 2xl:pr-8 2:mr-8 2.5xl:pr-12 2.5xl:mr-14 flex justify-end xl:justify-center 2xl:block">
      <div className="w-[90%] 2xl:w-auto grid place-items-end grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 xl:gap-8 2.5xl:gap-12 min-h-[600px] max-h-[690px] 2.5xl:max-h-[720px]">
        {employeeList.map((employee) => (
          <EnterpriseCard
            key={employee.id}
            title={employee.group_name}
            userName={employee.username}
            userEmail={employee.email}
            id={employee.id}
            img={employee.photo || '/images/enterprise-account/user-icon.svg'}
            // status 1 means active
            isActive={employee.status === 1}
          />
        ))}
        <div className="bg-white rounded-lg w-[100%] h-[316px] flex justify-center items-center">
          <div className="flex flex-col items-center gap-11 mt-10">
            <Link to="/v2">
              <div className="border-2 border-dashed border-navy-blue rounded-full h-24 w-24  xl:h-28 xl:w-28">
                <div className="h-20 w-20 border-4 border-white rounded-full bg-navy-blue my-1.5 mx-1.5 flex justify-center items-center hover:cursor-pointer md:h-20 md:w-20 xl:h-24 xl:w-24">
                  <AddIcon className="text-white" />
                </div>
              </div>
            </Link>
            <h1 className="text-navy-blue font-bold text-sm xl:text-base">新增使用者</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterpriseAccountInfo;
