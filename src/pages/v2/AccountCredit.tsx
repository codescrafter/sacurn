import React from 'react';

import CustomAccountTable from '@/components/v2/CustomAccountTable';
import Layout from '@/components/v2/Layout';

const AccountCredit = () => {
  return (
    <Layout>
      <CustomAccountTable tableHeadings={ACCOUNT_TABLE_HEAD} tableBody={ACCOUNT_TABLE_BODY} name="account_credit" />
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

const ACCOUNT_TABLE_BODY = [
  {
    id: 1,
    transactionDate: '2023/5/10',
    transactionStatus: '售出',
    orderNumber: 'aes123456789',
    totalAmount: '$99,900',
    points: '10'
  },
  {
    id: 2,
    transactionDate: '2023/5/10',
    transactionStatus: '售出',
    orderNumber: 'aes123456789',
    totalAmount: '$99,900',
    points: '50'
  },
  {
    id: 3,
    transactionDate: '2023/5/10',
    transactionStatus: '售出',
    orderNumber: 'aes123456789',
    totalAmount: '$99,900',
    points: '99'
  },
  {
    id: 4,
    transactionDate: '2023/5/10',
    transactionStatus: '售出',
    orderNumber: 'aes123456789',
    totalAmount: '$99,900',
    points: '99'
  },
  {
    id: 5,
    transactionDate: '2023/5/10',
    transactionStatus: '售出',
    orderNumber: 'aes123456789',
    totalAmount: '$99,900',
    points: '43'
  },
  {
    id: 6,
    transactionDate: '2023/5/10',
    transactionStatus: '售出',
    orderNumber: 'aes123456789',
    totalAmount: '$99,900',
    points: '30'
  },
  {
    id: 7,
    transactionDate: '2023/5/10',
    transactionStatus: '售出',
    orderNumber: 'aes123456789',
    totalAmount: '$99,900',
    points: '30'
  },
  {
    id: 8,
    transactionDate: '2023/5/10',
    transactionStatus: '售出',
    orderNumber: 'aes123456789',
    totalAmount: '$99,900',
    points: '30'
  },
  {
    id: 9,
    transactionDate: '2023/5/10',
    transactionStatus: '售出',
    orderNumber: 'aes123456789',
    totalAmount: '$99,900',
    points: '30'
  },
  {
    id: 10,
    transactionDate: '2023/5/10',
    transactionStatus: '售出',
    orderNumber: 'aes123456789',
    totalAmount: '$99,900',
    points: '30'
  },
  {
    id: 11,
    transactionDate: '2023/5/10',
    transactionStatus: '售出',
    orderNumber: 'aes123456789',
    totalAmount: '$99,900',
    points: '30'
  },
  {
    id: 12,
    transactionDate: '2023/5/10',
    transactionStatus: '售出',
    orderNumber: 'aes123456789',
    totalAmount: '$99,900',
    points: '30'
  },
  {
    id: 13,
    transactionDate: '2023/5/10',
    transactionStatus: '售出',
    orderNumber: 'aes123456789',
    totalAmount: '$99,900',
    points: '30'
  },
  {
    id: 14,
    transactionDate: '2023/5/10',
    transactionStatus: '售出',
    orderNumber: 'aes123456789',
    totalAmount: '$99,900',
    points: '30'
  },
  {
    id: 15,
    transactionDate: '2023/5/10',
    transactionStatus: '售出',
    orderNumber: 'aes123456789',
    totalAmount: '$99,900',
    points: '30'
  },
  {
    id: 16,
    transactionDate: '2023/5/10',
    transactionStatus: '售出',
    orderNumber: 'aes123456789',
    totalAmount: '$99,900',
    points: '30'
  },
  {
    id: 17,
    transactionDate: '2023/5/10',
    transactionStatus: '售出',
    orderNumber: 'aes123456789',
    totalAmount: '$99,900',
    points: '30'
  },
  {
    id: 18,
    transactionDate: '2023/5/10',
    transactionStatus: '售出',
    orderNumber: 'aes123456789',
    totalAmount: '$99,900',
    points: '30'
  },
  {
    id: 19,
    transactionDate: '2023/5/10',
    transactionStatus: '售出',
    orderNumber: 'aes123456789',
    totalAmount: '$99,900',
    points: '30'
  },
  {
    id: 20,
    transactionDate: '2023/5/10',
    transactionStatus: '售出',
    orderNumber: 'aes123456789',
    totalAmount: '$99,900',
    points: '30'
  }
];
