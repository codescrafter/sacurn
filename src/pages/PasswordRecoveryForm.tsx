import ProgressBar from '@/components/ProgressBar';
import SimpleNav from '@/components/SimpleNav';
import DoNotAgreeTermsModal from '@/components/v2/DoNotAgreeTermsModal';
import RequireTermsReadModal from '@/components/v2/RequireTermsReadModal';
import { useForgotPasswordStore } from '@/store/forgotPassword';
import { ForgotPasswordProgressBarItems } from '@/util/constants';

import AuthenticationPasswordRecovery from './AuthenticationPasswordRecovery';
import PasswordRecoveryCodeNotifier from './PasswordRecoveryCodeNotifier';
import PasswordRecoveryFilling from './PasswordRecoveryFilling';
import PasswordRecoveryTermsModal from './PasswordRecoveryTermsModal';

const PasswordRecoveryForm = () => {
  const currentStep = useForgotPasswordStore((state) => state.currentStep);
  return (
    <div className="w-full  bg-neutral-150 min-h-[100vh]">
      <SimpleNav heading="忘記密碼" className="relative mb-20 z-50" />
      <ProgressBar
        steps={3}
        stepNumber={currentStep}
        stepName={ForgotPasswordProgressBarItems[currentStep - 1]}
        gap="small"
        width="normal"
      />
      {currentStep === 1 && <PasswordRecoveryFilling />}
      {currentStep === 2 && <PasswordRecoveryCodeNotifier />}
      {currentStep === 3 && <AuthenticationPasswordRecovery />}

      <PasswordRecoveryTermsModal />
      <RequireTermsReadModal />
      <DoNotAgreeTermsModal />
    </div>
  );
};

export default PasswordRecoveryForm;
