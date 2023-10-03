import AccountSteps from '@/components/v2/AccountSteps';
import Layout from '@/components/v2/Layout';
import UserInfoForm from '@/components/v2/UserInfoForm';

const MemberCenter = () => {
  return (
    <Layout>
      <AccountSteps />
      <UserInfoForm />
    </Layout>
  );
};

export default MemberCenter;
