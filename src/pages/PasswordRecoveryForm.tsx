// import React, { useState } from 'react';

import ProgressBar from '@/components/ProgressBar';
import SimpleNav from '@/components/SimpleNav';

import PasswordRecoveryFilling from './PasswordRecoveryFilling';

const PasswordRecoveryForm = () => {
  return (
    <div className="w-full  bg-neutral-150 min-h-[100vh]">
      <SimpleNav heading="忘記密碼" className="relative mb-20 z-50" />
      <ProgressBar steps={3} stepNumber={1} stepName="申請填寫" gap="small" width="normal" />

      <PasswordRecoveryFilling />
    </div>
  );
};

export default PasswordRecoveryForm;
