import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import CardSteps from '@/components/v2/CardSteps';
import CustomCard from '@/components/v2/CustomCard';
import Layout from '@/components/v2/Layout';
import formatDate from '@/helpers/formatDate';
import { useCardRevokeStore } from '@/store/cardRevoke';
import { CardMembershipTypes, CardRevokedEnum } from '@/type';
import { INFO_MARGIN } from '@/util/constants';

const CardRevoked = () => {
  const { state } = useLocation();
  const [cardRenewal, setCardRenewal] = useState<CardRevokedEnum>(CardRevokedEnum.ANNULMENT);
  const [cardReIssueList, setCardReIssueList] = useState<CardMembershipTypes[]>([CARD_REVOKED[0]]);
  const getCardDetails = useCardRevokeStore((state) => state.getCardDetails);
  const cardDetails = useCardRevokeStore((state) => state.cardDetails);
  const cardRevokeApply = useCardRevokeStore((state) => state.cardRevokeApply);
  const cardRevokeConfirm = useCardRevokeStore((state) => state.cardRevokeConfirm);

  useEffect(() => {
    getCardDetails();
  }, []);

  useEffect(() => {
    console.log(cardDetails);
    if (cardDetails?.revoke === 0) {
      setCardRenewal(CardRevokedEnum.ANNULMENT);
      setCardReIssueList([CARD_REVOKED[0]]);
    }
    if (cardDetails?.revoke === 1 || cardDetails?.revoke === 3) {
      setCardRenewal(CardRevokedEnum.CANCELLATION_CONFIRMATION);
      const updatedInfo = { ...CARD_REVOKED[1], info: cardDetails.revoke_at || '' };
      setCardReIssueList([CARD_REVOKED[0], updatedInfo]);
    }
    if (cardDetails?.revoke === 4) {
      setCardRenewal(CardRevokedEnum.COMPLETE_ABOLITION);
      const updatedInfo1 = { ...CARD_REVOKED[1], info: cardDetails.revoke_at || '' };
      const updatedInfo2 = { ...CARD_REVOKED[2], info: cardDetails.revoke_complete_at || '' };
      setCardReIssueList([CARD_REVOKED[0], updatedInfo1, updatedInfo2]);
    }
  }, [cardDetails]);

  useEffect(() => {
    if (state && state?.step) {
      setCardRenewal(state.step);
      setCardReIssueList(CARD_REVOKED);
    }
  }, []);

  const getCardRenewalValue = () => {
    if (cardDetails?.revoke === 0) return cardRevokeApply();
    if (cardDetails?.revoke === 1) return cardRevokeConfirm();
  };

  return (
    <Layout>
      <div className="mt-10 px-[12%]">
        <h3 className="text-center text-navy-blue text-[32px] font-bold mb-5">會員卡補發</h3>
        <CardSteps totalSteps={3} currentStep={cardRenewal} />
        <div className="my-8 text-center grid grid-cols-3">
          {cardReIssueList &&
            cardReIssueList.map((item: CardMembershipTypes) => (
              <CustomCard
                key={item.id}
                name={item.name}
                title={item.title}
                subTitle={item.subTitle}
                info={formatDate(item.info)}
                responseTitle={item.responseTitle}
                responseDetail={item.responseDetail}
                buttonText={item.buttonText}
                terms={item.terms}
                step={item.id}
                cardRenewalNumber={cardRenewal}
                // isStyleChanged={CardReIssueEnum.REPORT_LOSS}
                slug={item.slug}
                getCurrentValue={() => getCardRenewalValue()}
              />
            ))}
        </div>
      </div>
    </Layout>
  );
};

export default CardRevoked;

const CARD_REVOKED: CardMembershipTypes[] = [
  {
    id: 1,
    name: '進行掛失',
    title: '',
    subTitle: '如會員卡尚在效期內，但因企業異動，可自行申請會員卡廢止。',
    info: '',
    responseTitle: '會員卡費止作業經核准，此會員卡已永久失效，如有使用需求需重新申請。',
    responseDetail: '',
    slug: 'REPORT_LOSS',
    buttonText: '確認廢止'
  },
  {
    id: 2,
    name: '廢止確認',
    title: '',
    subTitle: '本卡於',
    info: '2023/06/12',
    responseTitle: '申請廢止',
    responseDetail: `請注意，申請日非廢止日。\n 平台將於5個工作日，寄發廢止通知至您的註冊信箱。`,
    slug: INFO_MARGIN,
    buttonText: '確認'
  },
  {
    id: 3,
    name: '完成廢止',
    title: '',
    subTitle: '本卡已於',
    info: '2023/06/17',
    responseTitle: '完成廢止',
    slug: INFO_MARGIN,
    responseDetail: `會員卡已永久失效，如需使用請重新申請。`,
    buttonText: '確認'
  }
];
