import { useState } from 'react';

import CompanyInfoForm from '@/components/CompanyInfoForm';
import Navbar from '@/components/Navbar';
import ProgressBar from '@/components/ProgressBar';

function CompanyRegistration() {
  const [stepNumber, setStepNumber] = useState(1);
  const stepNumberHandler = (val: number) => {
    setStepNumber(val);
  };

  return (
    <div className=" bg-smoke h-screen">
      <Navbar className="relative z-30 !bg-navy-blue h-[70px]" />
      <div className="mt-20">
        <ProgressBar steps={5} stepNumber={stepNumber} stepName="填寫寫金融機構帳戶資料" />
        {stepNumber == 1 && <CompanyInfoForm nextStep={stepNumberHandler} />}
      </div>
    </div>
  );
}

export default CompanyRegistration;
