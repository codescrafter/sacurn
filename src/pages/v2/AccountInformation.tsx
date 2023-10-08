import React from 'react';

import Layout from '@/components/v2/Layout';
import { AccountInformationTypes } from '@/type';

const AccountInformation = () => {
  return (
    <Layout>
      <div className="mt-[124px] w-[90%] rounded-lg min-h-[500px] bg-transparent-blue opacity-[0.9] shadow-account-info-box">
        <div className="account-information-clip-path w-[45%] rounded-tl-lg rounded-bl-lg bg-white min-h-[500px]">
          <div className="">
            <div className="w-[90px] h-[90px] rounded-[50%]">
              <img src="/v2/account-pic.svg" alt="user image" className="w-full h-full object-contain" />
            </div>
            <div>
              {ACCOUNT_INFORMATION.map(({ key, value }: AccountInformationTypes) => (
                <div key={key} className="flex gap-4">
                  <div className="font-bold">{key}:</div>
                  <div className="">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AccountInformation;

const ACCOUNT_INFORMATION: AccountInformationTypes[] = [
  {
    key: '公司名稱',
    value: '艾克斯厚定股份有限公司'
  },
  {
    key: '代表人',
    value: 'Musk'
  },
  {
    key: 'VAT號碼',
    value: '88888888'
  },
  {
    key: '公司電話',
    value: '02-1234 5678'
  },
  {
    key: '公司地址',
    value: '台北市中山區中山北路一段1號'
  }
];
