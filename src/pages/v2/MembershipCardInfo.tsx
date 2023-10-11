import React from 'react';

import Layout from '@/components/v2/Layout';
import MemberCardCompareInfo from '@/components/v2/MemberCardCompareInfo';

const MembershipCardInfo = () => {
  return (
    <Layout variant="secondary">
      <MemberCardCompareInfo />
    </Layout>
  );
};

export default MembershipCardInfo;

export const MEMBERSHIPDATA = [
  {
    id: 1,
    title: '會員級別',
    variant: 'primary',
    cardcontent: [
      {
        id: 1.1,
        source: 'white-card',
        classname: 'bg-bgYellow',
        detail: 'ECOGREEN'
      },
      {
        id: 1.2,
        source: 'grey-card',
        classname: 'bg-bgLimeGreen',
        detail: 'ECOLAND'
      },
      {
        id: 1.3,
        source: 'blue-card',
        classname: 'bg-bgBlue',
        detail: 'ECOOCEAN'
      }
    ]
  },
  {
    id: 2,
    title: '註冊費',
    variant: 'secondary',
    content: '$30,000'
  },
  {
    id: 3,
    title: '年續會費',
    variant: 'secondary',
    content: '$80,000'
  },
  {
    id: 4,
    title: '會員期限',
    variant: 'secondary',
    content: '12個月'
  },
  {
    id: 5,
    title: '推薦入會',
    variant: 'secondary',
    content: '被推薦者入會成功後，推薦雙方各贈300積分(價值$30,000)'
  },
  {
    id: 6,
    title: '專案積分',
    variant: 'secondary',
    content: '依據專案，提供積分條件'
  },
  {
    id: 7,
    title: '身份',
    variant: 'tertiary',
    subcontent: [
      {
        id: 7.1,
        detail: '法人',
        classname: 'text-textYellow'
      },
      {
        id: 7.2,
        detail: '法人/會員升級',
        classname: 'text-textGreen'
      },
      {
        id: 7.3,
        detail: '法人/會員升級',
        classname: 'text-textBlue'
      }
    ]
  },
  {
    id: 8,
    title: '續卡/升級',
    variant: 'tertiary',
    subcontent: [
      {
        id: 8.1,
        detail: '續會費/年',
        classname: 'text-textYellow'
      },
      {
        id: 8.2,
        detail: '200張訂單/年 積分100,000點/年',
        classname: 'text-textGreen'
      },
      {
        id: 8.3,
        detail: '350張訂單/年 積分300,000點/年',
        classname: 'text-textBlue'
      }
    ]
  },
  {
    id: 9,
    title: '積分倍數',
    variant: 'tertiary',
    subcontent: [
      {
        id: 9.1,
        detail: '訂單金額*1%',
        classname: 'text-textYellow'
      },
      {
        id: 9.2,
        detail: '訂單金額*1.5%',
        classname: 'text-textGreen'
      },
      {
        id: 9.3,
        detail: '訂單金額*2%',
        classname: 'text-textBlue'
      }
    ]
  },
  {
    id: 10,
    title: '手續費',
    variant: 'tertiary',
    subcontent: [
      {
        id: 10.1,
        detail: '買5%、賣8%',
        classname: 'text-textYellow'
      },
      {
        id: 10.2,
        detail: '買4%、賣6%',
        classname: 'text-textGreen'
      },
      {
        id: 10.3,
        detail: '買3%、賣5%',
        classname: 'text-textBlue'
      }
    ]
  },
  {
    id: 11,
    title: '交易上限',
    subtitle1: '單日',
    subtitle2: '單月',
    variant: 'tertiary',
    variation: 'duo',
    subcontent: [
      {
        id: 11.1,
        detail: '$50,000 資本額*1%',
        classname: 'text-textYellow'
      },
      {
        id: 11.2,
        detail: '$150,000 資本額*3%',
        classname: 'text-textGreen'
      },
      {
        id: 11.3,
        detail: '$300,000 資本額*8%',
        classname: 'text-textBlue'
      }
    ]
  },
  {
    id: 12,
    title: '系統權限',
    variant: 'tertiary',
    subcontent: [
      {
        id: 12.1,
        detail: '3人',
        classname: 'text-textYellow'
      },
      {
        id: 12.2,
        detail: '5人',
        classname: 'text-textGreen'
      },
      {
        id: 12.3,
        detail: '10人',
        classname: 'text-textBlue'
      }
    ]
  },
  {
    id: 13,
    title: '專屬報價',
    variant: 'tertiary',
    subcontent: [
      {
        id: 13.1,
        detail: '依平台條件',
        classname: 'text-textYellow'
      },
      {
        id: 13.2,
        detail: '碳權優先購買權',
        classname: 'text-textGreen'
      },
      {
        id: 13.3,
        detail: '碳權優先購買權',
        classname: 'text-textBlue'
      }
    ]
  },
  {
    id: 14,
    title: '電子報',
    subtitle3: '(碳權、活動)',
    variation: 'mono',
    variant: 'quaternary',
    tickcontent: [
      {
        id: 14.1,
        isTick: 'true'
      },
      {
        id: 14.2,
        isTick: 'true'
      },
      {
        id: 14.3,
        isTick: 'true'
      }
    ]
  },
  {
    id: 15,
    title: '碳市場走勢',
    variant: 'quaternary',
    tickcontent: [
      {
        id: 15.1,
        isTick: 'false'
      },
      {
        id: 15.2,
        isTick: 'true'
      },
      {
        id: 15.3,
        isTick: 'true'
      }
    ]
  },
  {
    id: 16,
    title: '新碳權上架預告',
    variant: 'quaternary',
    tickcontent: [
      {
        id: 16.1,
        isTick: 'false'
      },
      {
        id: 16.2,
        isTick: 'true'
      },
      {
        id: 16.3,
        isTick: 'true'
      }
    ]
  },
  {
    id: 17,
    title: 'Rebate Program',
    variant: 'quaternary',
    tickcontent: [
      {
        id: 17.1,
        isTick: 'false'
      },
      {
        id: 17.2,
        isTick: 'false'
      },
      {
        id: 17.3,
        isTick: 'true'
      }
    ]
  }
];
