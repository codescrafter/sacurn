import { useState } from 'react';

import CompanyInfoForm from '@/components/CompanyInfoForm';
import ProgressBar from '@/components/ProgressBar';
import SimpleNav from '@/components/SimpleNav';

const CompanyRegistration = () => {
  const [stepNumber, setStepNumber] = useState(1);
  const stepNumberHandler = (val: number) => {
    setStepNumber(val);
  };

  return (
    <div className=" bg-smoke h-screen">
      <SimpleNav className="mb-20" />
      <ProgressBar steps={5} stepNumber={stepNumber} stepName={'填寫寫金融機構帳戶資料'} />
      {stepNumber == 1 && <CompanyInfoForm nextStep={stepNumberHandler} />}
    </div>
  );
};

export default CompanyRegistration;
