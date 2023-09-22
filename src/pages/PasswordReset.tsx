import PasswordResetApplicationFilling from '@/components/PasswordResetApplicationFilling';
import ProgressBar from '@/components/ProgressBar';
import SimpleNav from '@/components/SimpleNav';
import TermsOfServicesModal from '@/components/TermsOfServicesModal';

const PasswordReset = () => {
  return (
    <div className="relative bg-smoke min-h-screen">
      <SimpleNav heading="忘記密碼" className="relative mb-20 z-50" />
      <ProgressBar steps={3} stepNumber={1} stepName="申請填寫" gap="small" />
      <PasswordResetApplicationFilling />
      <TermsOfServicesModal />
    </div>
  );
};

export default PasswordReset;
