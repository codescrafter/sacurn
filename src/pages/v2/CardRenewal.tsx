import dateFormat from 'dateformat';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import CardSteps from '@/components/v2/CardSteps';
import CustomCard from '@/components/v2/CustomCard';
import Layout from '@/components/v2/Layout';
import { ReissueEnum } from '@/libs/api';
import { useMemberRecordStore } from '@/store/memberRecord';
import { CardRenewalEnum } from '@/type';

const CardRenewal = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [cardRenewal, setCardRenewal] = useState<CardRenewalEnum>(CardRenewalEnum.COMPLETE_RENEWAL);

  const [memberRecord, getMemberRecord, applyRenewMemberRecord, renewMemberRecord] = useMemberRecordStore((state) => [
    state.memberRecord,
    state.getMemberRecord,
    state.applyRenewMemberRecord,
    state.renewMemberRecord
  ]);

  useEffect(() => {
    if (!memberRecord) getMemberRecord();

    if (state && state?.step) {
      setCardRenewal(state.step);
    }
  }, []);

  useEffect(() => {
    if (memberRecord) {
      setCardRenewal(memberRecord.renewal ? memberRecord.renewal + 1 : CardRenewalEnum.COMPLETE_RENEWAL);
    }
  }, [memberRecord]);

  const setCardRenewalValue = async (value: number) => {
    if (value === CardRenewalEnum.EXPIRY_DATE) {
      const isSuccess = await applyRenewMemberRecord();
      if (isSuccess) setCardRenewal(value + 1);
    } else if (value === CardRenewalEnum.PAYMENT_METHOD) {
      const isSuccess = await renewMemberRecord();
      if (isSuccess) navigate('/v2/cart');
      return;
    } else if (value === CardRenewalEnum.COMPLETE_RENEWAL) {
      return;
    }
  };

  return (
    <Layout>
      <div className="mt-10 px-[12%]">
        <h3 className="text-center text-navy-blue text-[32px] font-bold mb-5">會員卡續卡</h3>
        <div>
          <CardSteps totalSteps={3} currentStep={cardRenewal} />
        </div>
        <div className="my-8 text-center grid grid-cols-3">
          {memberRecord && cardRenewal >= CardRenewalEnum.EXPIRY_DATE && (
            <CustomCard
              name="會員到期日"
              title={memberRecord.expire_at ? dateFormat(memberRecord.expire_at, 'yyyy/MM/dd') : '-'}
              subTitle="離到期日剩下"
              info={`${memberRecord.renewal_deadline_day}日`}
              responseTitle={memberRecord.can_upgrade ? '已可以續約' : '目前無法續約'}
              buttonText={memberRecord.can_upgrade ? '確認續約' : undefined}
              terms="個人資料保護安全政策暨隱私權聲明同續約條款之規定"
              step={CardRenewalEnum.EXPIRY_DATE}
              cardRenewalNumber={cardRenewal}
              getCurrentValue={setCardRenewalValue}
            />
          )}
          {memberRecord && cardRenewal >= CardRenewalEnum.PAYMENT_METHOD && (
            <CustomCard
              name="繳費方式"
              title={memberRecord.current_member}
              subTitle="年費"
              info={`${memberRecord.current_member_annual_renewal_fee}`}
              responseTitle="付款方式"
              responseDetail="點擊確認後，將新增續會費於購物車內，帶付款完成後，系統將寄發通知給您"
              buttonText="確認付款"
              step={CardRenewalEnum.PAYMENT_METHOD}
              cardRenewalNumber={cardRenewal}
              getCurrentValue={setCardRenewalValue}
            />
          )}
          {memberRecord && cardRenewal >= CardRenewalEnum.COMPLETE_RENEWAL && (
            <CustomCard
              name="完成續卡"
              title={memberRecord.upgrade === ReissueEnum._2 ? '已完成續卡' : '未完成續卡'}
              subTitle="您的會員有效日期為"
              info={memberRecord.renewal_expire_at ? dateFormat(memberRecord.renewal_expire_at, 'yyyy/MM/dd') : '-'}
              responseTitle=""
              step={CardRenewalEnum.COMPLETE_RENEWAL}
              cardRenewalNumber={cardRenewal}
              getCurrentValue={setCardRenewalValue}
            />
          )}
        </div>
      </div>
    </Layout>
  );
};

export default CardRenewal;
