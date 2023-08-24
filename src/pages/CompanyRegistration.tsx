import { useState } from 'react';

import CompanyInfoForm from '@/components/CompanyInfoForm';
import FinancialInfoForm from '@/components/FinancialInfoForm';
import ProgressBar from '@/components/ProgressBar';
import RepresentativeInfoForm from '@/components/RepresentativeInfoForm';
import SimpleNav from '@/components/SimpleNav';

function CompanyRegistration() {
  const [stepNumber, setStepNumber] = useState(3);
  const stepNumberHandler = (val: number) => {
    setStepNumber(val);
    console.log(val + '  ' + stepNumber);
  };

  return (
    <div className=" bg-smoke h-screen">
      <SimpleNav className="mb-20" />
      <ProgressBar steps={5} stepNumber={stepNumber} stepName={'填寫寫金融機構帳戶資料'} />
      {stepNumber === 1 && <CompanyInfoForm nextStep={stepNumberHandler} />}
      {stepNumber === 2 && <RepresentativeInfoForm nextStep={stepNumberHandler} />}
      {stepNumber === 3 && <FinancialInfoForm nextStep={stepNumberHandler} />}
    </div>
  );
}

export default CompanyRegistration;
