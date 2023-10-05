import React from 'react';

import Layout from '@/components/v2/Layout';
import MembershipCenterNav from '@/components/v2/MembershipCenterNav';

import EnterpriseAccountinfo from './EnterpriseAccountinfo';
const EnterpriseAccount = () => {
  return (
    <Layout>
      <div>
        <MembershipCenterNav />
        <EnterpriseAccountinfo
        // isborder="#68A362"
        />
      </div>
    </Layout>
  );
};

export default EnterpriseAccount;
