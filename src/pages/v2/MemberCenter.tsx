import Layout from '@/components/v2/Layout';
import MembershipCenterNav from '@/components/v2/MembershipCenterNav';
import UserInfoForm from '@/components/v2/UserInfoForm';

const MemberCenter = () => {
  return (
    <Layout>
      <div className="">
        <MembershipCenterNav />
        <UserInfoForm />
      </div>
    </Layout>
  );
};

export default MemberCenter;
