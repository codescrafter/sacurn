import { useState } from 'react';

import CompanyInfoForm from '@/components/CompanyInfoForm';
import FinancialInfoForm from '@/components/FinancialInfoForm';
import ProgressBar from '@/components/ProgressBar';
import RegistrationCompleted from '@/components/RegistrationCompleted';
import RepresentativeInfoForm from '@/components/RepresentativeInfoForm';
import SimpleNav from '@/components/SimpleNav';
import TermsConfirmation from '@/components/TermsConfirmation';
import { ProgressBarItems } from '@/util/constants';

function CompanyRegistration() {
  const [stepNumber, setStepNumber] = useState(1);
  const stepNumberHandler = (val: number) => {
    setStepNumber(val);
  };

  return (
    <div className=" bg-smoke h-screen">
      <SimpleNav className="mb-20" />
      <ProgressBar steps={5} stepNumber={stepNumber} stepName={ProgressBarItems[stepNumber]} />
      {stepNumber === 1 && <CompanyInfoForm nextStep={stepNumberHandler} />}
      {stepNumber === 2 && <RepresentativeInfoForm nextStep={stepNumberHandler} />}
      {stepNumber === 3 && <FinancialInfoForm nextStep={stepNumberHandler} />}
      {stepNumber === 4 && <TermsConfirmation nextStep={stepNumberHandler} />}
      {stepNumber === 5 && <RegistrationCompleted />}
    </div>
  );
}

export default CompanyRegistration;
