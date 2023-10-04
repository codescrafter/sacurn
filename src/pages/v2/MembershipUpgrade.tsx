import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import CardSteps from '@/components/v2/CardSteps';
import CustomCard from '@/components/v2/CustomCard';
import Layout from '@/components/v2/Layout';
import { CardMembershipEnum, CardMembershipTypes } from '@/type';

const MembershipUpgrade = () => {
  const { state } = useLocation();
  const [cardRenewal, setCardRenewal] = useState<CardMembershipEnum>();
  const [membershipUpgradeList, setMembershipUpgradeList] = useState<CardMembershipTypes[]>([MEMBERSHIP_UPGRADE[0]]);

  useEffect(() => {
    if (state && state?.step) {
      setCardRenewal(state.step);
      setMembershipUpgradeList(MEMBERSHIP_UPGRADE);
    }
  }, []);

  const getCardRenewalValue = (value: number) => {
    if (value === CardMembershipEnum.COMPLETE) {
      return;
    }
    setCardRenewal(CardMembershipEnum.APPLY + value);
    const updatedList = [...membershipUpgradeList, MEMBERSHIP_UPGRADE[value]];
    setMembershipUpgradeList(updatedList);
  };

  return (
    <Layout>
      <div className="mt-10 px-[12%]">
        <h3 className="text-center text-navy-blue text-[32px] font-bold mb-5">會員卡升級</h3>
        <CardSteps totalSteps={3} currentStep={cardRenewal} />
        <div className="my-8 text-center grid grid-cols-3">
          {membershipUpgradeList &&
            membershipUpgradeList.map((item: CardMembershipTypes) => (
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
                slug={item.slug}
                isStyleChanged={CardMembershipEnum.APPLICATION}
                getCurrentValue={(value) => getCardRenewalValue(value)}
              />
            ))}
        </div>
      </div>
    </Layout>
  );
};

export default MembershipUpgrade;

const MEMBERSHIP_UPGRADE: CardMembershipTypes[] = [
  {
    id: 1,
    name: '申請升級',
    title: 'ECOGREEN',
    subTitle: '手續費',
    info: '買5% 賣8%',
    responseTitle: '已達升等',
    responseDetail: 'ECOLAND',
    buttonText: '升等申請'
  },
  {
    id: 2,
    name: '申請完成',
    title: '',
    subTitle: '本卡已於',
    info: '2023/08/03',
    responseTitle: '申請升等',
    slug: 'INFO_MARGIN',
    responseDetail: `申請日非核准日。\n 升等核准後，原卡片將廢止並寄送升等卡至會員收件地址`,
    buttonText: '確認'
  },
  {
    id: 3,
    name: '完成升等',
    title: '',
    subTitle: '本卡已於',
    info: '2023/08/10',
    responseTitle: '完成升等',
    slug: 'INFO_MARGIN',
    responseDetail: `新卡於五個工作日內寄至註冊收件地址 \n 舊卡已廢止`,
    buttonText: '確認'
  }
];
