import dateFormat from 'dateformat';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import CardSteps from '@/components/v2/CardSteps';
import CustomCard from '@/components/v2/CustomCard';
import Layout from '@/components/v2/Layout';
import { useMemberRecordStore } from '@/store/memberRecord';
import { CardReIssueEnum } from '@/type';

const CardReIssue = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [cardRenewal, setCardRenewal] = useState<CardReIssueEnum>(CardReIssueEnum.REPORT_LOSS);
  const [memberRecord, getMemberRecord, applyReissueMemberRecord, reissueMemberRecord, confirmReissueMemberRecord] =
    useMemberRecordStore((state) => [
      state.memberRecord,
      state.getMemberRecord,
      state.applyReissueMemberRecord,
      state.reissueMemberRecord,
      state.confirmReissueMemberRecord
    ]);

  useEffect(() => {
    if (!memberRecord) getMemberRecord();

    if (state && state?.step) {
      setCardRenewal(state.step);
    }
  }, []);

  const setCardRenewalValue = async (value: number) => {
    if (value === CardReIssueEnum.REPORT_LOSS) {
      const isSuccess = await applyReissueMemberRecord();
      if (isSuccess) setCardRenewal(value + 1);
    } else if (value === CardReIssueEnum.PAYMENT_METHOD) {
      const isSuccess = await reissueMemberRecord();
      if (isSuccess) navigate('/v2/cart');
    } else if (value === CardReIssueEnum.APPLICATION_STATUS) {
      confirmReissueMemberRecord();
    }
  };

  return (
    <Layout>
      <div className="mt-10 px-[12%]">
        <h3 className="text-center text-navy-blue text-[32px] font-bold mb-5">會員卡補發</h3>
        <CardSteps totalSteps={3} currentStep={cardRenewal} />
        <div className="my-8 text-center grid grid-cols-3">
          {memberRecord && cardRenewal >= CardReIssueEnum.REPORT_LOSS && (
            <CustomCard
              name="進行掛失"
              title=""
              subTitle="如確認會員卡已遺失無法尋回且尚在有效期內，為確保憑證的安全性，建議進行元卡片廢止並申請新卡補發。完成掛失申請後，將無法撤銷掛失。"
              info=""
              responseTitle={`新卡補辦費用: $${memberRecord.loss_card_fee}`}
              responseDetail="如會員地址已異動，請於申請前與客服中心聯絡，先行變更地址。"
              buttonText="確認掛失"
              step={CardReIssueEnum.REPORT_LOSS}
              cardRenewalNumber={cardRenewal}
              isStyleChanged={CardReIssueEnum.REPORT_LOSS}
              slug="REPORT_LOSS"
              getCurrentValue={setCardRenewalValue}
            />
          )}
          {memberRecord && cardRenewal >= CardReIssueEnum.PAYMENT_METHOD && (
            <CustomCard
              name="繳費方式"
              title=""
              subTitle="手續費"
              info={`$${memberRecord.loss_card_fee}`}
              responseTitle="付款方式"
              responseDetail="點擊確認後，將新增補卡費用於購物車內，待付款完成後，系統將寄發通知給您。"
              buttonText="確認付款"
              step={CardReIssueEnum.PAYMENT_METHOD}
              cardRenewalNumber={cardRenewal}
              isStyleChanged={CardReIssueEnum.REPORT_LOSS}
              slug="PAYMENT_METHOD"
              getCurrentValue={setCardRenewalValue}
            />
          )}
          {memberRecord && cardRenewal >= CardReIssueEnum.APPLICATION_STATUS && (
            <CustomCard
              name="申請狀態"
              title=""
              subTitle="舊卡已於"
              info={memberRecord.deleted_at ? dateFormat(memberRecord.deleted_at, 'yyyy/MM/dd') : '-'}
              responseTitle="廢止"
              responseDetail="新卡於五個工作天內安排補發，寄送至原收件地址。"
              buttonText="確認"
              step={CardReIssueEnum.APPLICATION_STATUS}
              cardRenewalNumber={cardRenewal}
              isStyleChanged={CardReIssueEnum.REPORT_LOSS}
              getCurrentValue={setCardRenewalValue}
            />
          )}
        </div>
      </div>
    </Layout>
  );
};

export default CardReIssue;
