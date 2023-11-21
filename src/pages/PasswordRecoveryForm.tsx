// import React, { useState } from 'react';
// import { useEffect, useState } from 'react';

// import { useNavigate } from 'react-router-dom';
// import CompanyInfoForm from '@/components/CompanyInfoForm';
// import FinancialInfoForm from '@/components/FinancialInfoForm';
// import ProgressBar from '@/components/ProgressBar';
import ProgressBar from '@/components/ProgressBar';
// import RegistrationCompleted from '@/components/RegistrationCompleted';
// import RepresentativeInfoForm from '@/components/RepresentativeInfoForm';
import SimpleNav from '@/components/SimpleNav';

// import SimpleNav from '@/components/SimpleNav';
// import TermsConfirmation from '@/components/TermsConfirmation';
// import { useCompanyStore } from '@/store/company';
// import { ModalType, useModalStore } from '@/store/modal';
// import { CompanyStatus } from '@/type';
// import { CompanyRegistrationSteps, ProgressBarItems } from '@/util/constants';
import PasswordRecoveryFilling from './PasswordRecoveryFilling';

const PasswordRecoveryForm = () => {
  // const [stepNumber, setStepNumber] = useState(CompanyRegistrationSteps.COMPANY_INFO_FORM);
  // const company = useCompanyStore((state) => state.company);
  // const open = useModalStore((state) => state.open);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (company?.status?.toString() === CompanyStatus.Reviewing.toString()) {
  //     open(ModalType.CompanyReviewing, {
  //       buttons: [
  //         {
  //           text: '了解',
  //           onClick: () => navigate('/login')
  //         }
  //       ]
  //     });
  //   } else if (company?.status?.toString() === CompanyStatus.CompleteInfo.toString()) {
  //     setStepNumber(CompanyRegistrationSteps.COMPANY_INFO_FORM);
  //   }
  // }, []);
  return (
    <div className="w-full  bg-neutral-150 min-h-[100vh]">
      <SimpleNav heading="忘記密碼" className="relative mb-20 z-50" />
      <ProgressBar steps={3} stepNumber={1} stepName="申請填寫" gap="small" width="normal" />
      {/* {stepNumber === 1 && <PasswordRecoveryFilling nextStep={setStepNumber} />}
      {stepNumber === 2 && <RepresentativeInfoForm nextStep={setStepNumber} />}
      {stepNumber === 3 && <FinancialInfoForm nextStep={setStepNumber} />}
      {stepNumber === 4 && <TermsConfirmation nextStep={setStepNumber} />}
      {stepNumber === 5 && <RegistrationCompleted />} */}
      <PasswordRecoveryFilling />
    </div>
  );
};

export default PasswordRecoveryForm;
