import AccountSteps from '@/components/v2/AccountSteps';
import Layout from '@/components/v2/Layout';
import UserInfoForm from '@/components/v2/UserInfoForm';

const MemberCenter = () => {
  return (
    <Layout>
      <div className="">
        <AccountSteps />
        <UserInfoForm />
      </div>
    </Layout>
  );
};

export default MemberCenter;
