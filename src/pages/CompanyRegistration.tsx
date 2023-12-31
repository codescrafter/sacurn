import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import CompanyInfoForm from '@/components/CompanyInfoForm';
import FinancialInfoForm from '@/components/FinancialInfoForm';
import ProgressBar from '@/components/ProgressBar';
import RegistrationCompleted from '@/components/RegistrationCompleted';
import RepresentativeInfoForm from '@/components/RepresentativeInfoForm';
import SimpleNav from '@/components/SimpleNav';
import TermsConfirmation from '@/components/TermsConfirmation';
import { useCompanyStore } from '@/store/company';
import { ModalType, useModalStore } from '@/store/modal';
import { CompanyStatus } from '@/type';
import { CompanyRegistrationSteps, ProgressBarItems } from '@/util/constants';

const CompanyRegistration = () => {
  const [stepNumber, setStepNumber] = useState(CompanyRegistrationSteps.COMPANY_INFO_FORM);
  const company = useCompanyStore((state) => state.company);
  const open = useModalStore((state) => state.open);
  const navigate = useNavigate();

  useEffect(() => {
    if (company?.status?.toString() === CompanyStatus.Reviewing.toString()) {
      open(ModalType.CompanyReviewing, {
        buttons: [
          {
            text: '了解',
            onClick: () => navigate('/login')
          }
        ]
      });
    } else if (company?.status?.toString() === CompanyStatus.CompleteInfo.toString()) {
      setStepNumber(CompanyRegistrationSteps.COMPANY_INFO_FORM);
    }
  }, []);

  return (
    <div className=" bg-smoke min-h-screen">
      <SimpleNav heading="法人用戶會員註冊" className="mb-20" />
      <ProgressBar
        steps={5}
        stepNumber={stepNumber}
        stepName={ProgressBarItems[stepNumber - 1]}
        gap="large"
        width="wide"
      />
      {stepNumber === 1 && <CompanyInfoForm nextStep={setStepNumber} />}
      {stepNumber === 2 && <RepresentativeInfoForm nextStep={setStepNumber} />}
      {stepNumber === 3 && <FinancialInfoForm nextStep={setStepNumber} />}
      {stepNumber === 4 && <TermsConfirmation nextStep={setStepNumber} />}
      {stepNumber === 5 && <RegistrationCompleted />}
    </div>
  );
};

export default CompanyRegistration;
