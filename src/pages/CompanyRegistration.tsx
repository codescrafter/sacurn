import { useState } from 'react';

import CompanyInfoForm from '@/components/CompanyInfoForm';
import FinancialInfoForm from '@/components/FinancialInfoForm';
import ProgressBar from '@/components/ProgressBar';
import RegistrationCompleted from '@/components/RegistrationCompleted';
import RepresentativeInfoForm from '@/components/RepresentativeInfoForm';
import SimpleNav from '@/components/SimpleNav';
import TermsConfirmation from '@/components/TermsConfirmation';

function CompanyRegistration() {
  const [stepNumber, setStepNumber] = useState(4);
  const stepNumberHandler = (val: number) => {
    setStepNumber(val);
  };

  return (
    <div className=" bg-smoke h-screen">
      <SimpleNav className="mb-20" />
      <ProgressBar steps={5} stepNumber={stepNumber} stepName="填寫寫金融機構帳戶資料" />
      {stepNumber === 1 && <CompanyInfoForm nextStep={stepNumberHandler} />}
      {stepNumber === 2 && <RepresentativeInfoForm nextStep={stepNumberHandler} />}
      {stepNumber === 3 && <FinancialInfoForm nextStep={stepNumberHandler} />}
      {stepNumber === 4 && <TermsConfirmation nextStep={stepNumberHandler} />}
      {stepNumber === 5 && <RegistrationCompleted />}
    </div>
  );
}

export default CompanyRegistration;
