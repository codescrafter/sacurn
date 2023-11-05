import CustomAccountTable from '@/components/v2/CustomAccountTable';
import Layout from '@/components/v2/Layout';

const AccountCredit = () => {
  return (
    <Layout>
      <CustomAccountTable tableHeadings={ACCOUNT_TABLE_HEAD} name="account_credit" />
    </Layout>
  );
};

export default AccountCredit;

const ACCOUNT_TABLE_HEAD = [
  {
    id: 1,
    heading: '交易日期'
  },
  {
    id: 2,
    heading: '交易狀態'
  },
  {
    id: 3,
    heading: '訂單編號'
  },
  {
    id: 4,
    heading: '總金額'
  },
  {
    id: 5,
    heading: '點數'
  }
];
