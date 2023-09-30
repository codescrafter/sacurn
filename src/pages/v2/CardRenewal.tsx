import { useState } from 'react';

import CardSteps from '@/components/v2/CardSteps';
import CustomCard from '@/components/v2/CustomCard';
import Layout from '@/components/v2/Layout';
import { CardRenewalEnum } from '@/type';

const CardRenewal = () => {
  const [cardRenewal, setCardRenewal] = useState<CardRenewalEnum>();
  const [cardRenewalList, setCardRenewalList] = useState([CARD_RENEWAL[0]]);

  const getCardRenewalValue = (value: number) => {
    setCardRenewal(CardRenewalEnum.EXPIRY_DATE + value);
    const updatedList = [...cardRenewalList, CARD_RENEWAL[value]];
    setCardRenewalList(updatedList);
  };

  return (
    <Layout>
      <div className="h-[100px]">{/* steps section */}</div>
      <div className="mt-10 px-[12%]">
        <h3 className="text-center text-navy-blue text-[32px] font-bold mb-5">會員卡續卡</h3>
        <div>
          <CardSteps totalSteps={3} currentStep={cardRenewal} />
        </div>
        <div className="my-8 text-center grid grid-cols-3 gap-5">
          {cardRenewalList &&
            cardRenewalList.map((item) => (
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
                getCurrentValue={(value) => getCardRenewalValue(value)}
              />
            ))}
        </div>
      </div>
    </Layout>
  );
};

export default CardRenewal;

const CARD_RENEWAL = [
  {
    id: 1,
    name: '會員到期日',
    title: '2023/06/30',
    subTitle: '離到期日剩下',
    info: '17日',
    responseTitle: '已可以續約',
    buttonText: '確認續約',
    terms: '個人資料保護安全政策暨隱私權聲明同續約條款之規定'
  },
  {
    id: 2,
    name: '繳費方式',
    title: 'ECOGREEN',
    subTitle: '年費',
    info: '$20,000',
    responseTitle: '付款方式',
    responseDetail: '點擊確認後，將新增續會費於購物車內，帶付款完成後，系統將寄發通知給您',
    buttonText: '確認付款'
  },
  {
    id: 3,
    name: '完成續卡',
    title: '已完成續卡',
    subTitle: '您的會員有效日期為',
    info: '2024/6/30',
    responseTitle: ''
  }
];
