import { useState } from 'react';

import CompanyInfoForm from '@/components/CompanyInfoForm';
import ProgressBar from '@/components/ProgressBar';

function CompanyRegistration() {
  const [stepNumber, setStepNumber] = useState(1);
  const stepNumberHandler = (val: number) => {
    setStepNumber(val);
  };

  return (
    <div className="pt-20 bg-smoke h-screen">
      <ProgressBar steps={5} stepNumber={stepNumber} stepName={'填寫寫金融機構帳戶資料'} />
      {stepNumber == 1 && <CompanyInfoForm nextStep={stepNumberHandler} />}
    </div>
  );
}

export default CompanyRegistration;
