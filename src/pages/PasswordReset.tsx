import PasswordResetApplicationFilling from '@/components/PasswordResetApplicationFilling';
import ProgressBar from '@/components/ProgressBar';
import SimpleNav from '@/components/SimpleNav';

const PasswordReset = () => {
  return (
    <div className=" bg-smoke min-h-screen">
      <SimpleNav heading="忘記密碼" className="mb-20" />
      <ProgressBar steps={3} stepNumber={1} stepName="申請填寫" gap="small" />
      <PasswordResetApplicationFilling />
    </div>
  );
};

export default PasswordReset;
