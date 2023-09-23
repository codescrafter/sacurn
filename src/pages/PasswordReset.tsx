import IdentityVerification from '@/components/IdentityVerification';
import PasswordResetApplicationFilling from '@/components/PasswordResetApplicationFilling';
import ProgressBar from '@/components/ProgressBar';
import SimpleNav from '@/components/SimpleNav';
import TermsOfServicesModal from '@/components/TermsOfServicesModal';

const PasswordReset = () => {
  return (
    <div className="relative bg-smoke min-h-screen pb-3">
      <SimpleNav heading="忘記密碼" className="relative mb-20 z-50" />
      <ProgressBar steps={3} stepNumber={1} stepName="申請填寫" gap="small" width="normal" />
      {/* <PasswordResetApplicationFilling /> */}
      {/* <TermsOfServicesModal /> */}
      <IdentityVerification />
    </div>
  );
};

export default PasswordReset;
