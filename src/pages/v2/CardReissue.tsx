import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import CardSteps from '@/components/v2/CardSteps';
import CustomCard from '@/components/v2/CustomCard';
import Layout from '@/components/v2/Layout';
import { CardReIssueEnum, CardRenewalTypes } from '@/type';

const CardReIssue = () => {
  const { state } = useLocation();
  const [cardRenewal, setCardRenewal] = useState<CardReIssueEnum>();
  const [cardReIssueList, setCardReIssueList] = useState<CardRenewalTypes[]>([CARD_REISSUE[0]]);

  useEffect(() => {
    if (state && state?.step) {
      setCardRenewal(state.step);
      setCardReIssueList(CARD_REISSUE);
    }
  }, []);

  const getCardRenewalValue = (value: number) => {
    if (value === CardReIssueEnum.APPLICATION_STATUS) {
      return;
    }
    setCardRenewal(CardReIssueEnum.REPORT_LOSS + value);
    const updatedList = [...cardReIssueList, CARD_REISSUE[value]];
    setCardReIssueList(updatedList);
  };

  return (
    <Layout>
      <div className="mt-10 px-[12%]">
        <h3 className="text-center text-navy-blue text-[32px] font-bold mb-5">會員卡補發</h3>
        <CardSteps totalSteps={3} currentStep={cardRenewal} />
        <div className="my-8 text-center grid grid-cols-3">
          {cardReIssueList &&
            cardReIssueList.map((item: CardRenewalTypes) => (
              <CustomCard
                key={item.id}
                name={item.name}
                title={item.title}
                subTitle={item.subTitle}
                info={item.info}
                responseTitle={item.responseTitle}
                responseDetail={item.responseDetail}
                buttonText={item.buttonText}
                terms={item.terms}
                step={item.id}
                cardRenewalNumber={cardRenewal || 1}
                isStyleChanged={CardReIssueEnum.REPORT_LOSS}
                slug={item.slug}
                getCurrentValue={(value) => getCardRenewalValue(value)}
              />
            ))}
        </div>
      </div>
    </Layout>
  );
};

export default CardReIssue;

const CARD_REISSUE: CardRenewalTypes[] = [
  {
    id: 1,
    name: '進行掛失',
    title: '',
    subTitle:
      '如確認會員卡已遺失無法尋回且尚在有效期內，為確保憑證的安全性，建議進行元卡片廢止並申請新卡補發。完成掛失申請後，將無法撤銷掛失。',
    info: '',
    responseTitle: '新卡補辦費用: $2,000',
    responseDetail: '如會員地址已異動，請於申請前與客服中心聯絡，先行變更地址。',
    slug: 'REPORT_LOSS',
    buttonText: '確認掛失'
  },
  {
    id: 2,
    name: '繳費方式',
    title: '',
    subTitle: '手續費',
    info: '$2,000',
    responseTitle: '付款方式',
    responseDetail: `點擊確認後，將新增補卡費用於購物車內，待付款完成後，系統將寄發通知給您。`,
    slug: 'PAYMENT_METHOD',
    buttonText: '確認付款'
  },
  {
    id: 3,
    name: '申請狀態',
    title: '',
    subTitle: '舊卡已於',
    info: '2023/08/10',
    responseTitle: '廢止',
    responseDetail: `新卡於五個工作天內安排補發，寄送至原收件地址。`,
    buttonText: '確認'
  }
];
