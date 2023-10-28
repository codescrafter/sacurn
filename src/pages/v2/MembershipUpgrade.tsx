import dateFormat from 'dateformat';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import CardSteps from '@/components/v2/CardSteps';
import CustomCard from '@/components/v2/CustomCard';
import Layout from '@/components/v2/Layout';
import { useMemberRecordStore } from '@/store/memberRecord';
import { CardMembershipEnum } from '@/type';
import { INFO_MARGIN } from '@/util/constants';

const MembershipUpgrade = () => {
  const { state } = useLocation();
  const [cardRenewal, setCardRenewal] = useState<CardMembershipEnum>(CardMembershipEnum.APPLY);

  const [memberUpgradeRecord, getMemberUpgradeRecord, upgradeMember] = useMemberRecordStore((state) => [
    state.memberUpgradeRecord,
    state.getMemberUpgradeRecord,
    state.upgradeMember
  ]);

  useEffect(() => {
    if (!memberUpgradeRecord) getMemberUpgradeRecord();

    if (state && state?.step) {
      setCardRenewal(state.step);
    }
  }, []);

  useEffect(() => {
    if (memberUpgradeRecord) {
      setCardRenewal(memberUpgradeRecord.upgrade ? memberUpgradeRecord.upgrade + 1 : CardMembershipEnum.APPLY);
    }
  }, [memberUpgradeRecord]);

  const setCardRenewalValue = async (value: number) => {
    if (value === CardMembershipEnum.APPLY) {
      await upgradeMember();
      return;
    } else if (value === CardMembershipEnum.COMPLETE) {
      return;
    }
    setCardRenewal(value + 1);
  };

  return (
    <Layout>
      <div className="mt-10 px-[12%]">
        <h3 className="text-center text-navy-blue text-[32px] font-bold mb-5">會員卡升級</h3>
        <CardSteps totalSteps={3} currentStep={cardRenewal} />
        <div className="my-8 text-center grid grid-cols-3">
          {memberUpgradeRecord && cardRenewal >= CardMembershipEnum.APPLY && (
            <CustomCard
              name="申請升級"
              title={memberUpgradeRecord.current_member || '-'}
              subTitle="手續費"
              info={`買${(memberUpgradeRecord.buy_cost || 1) * 100}% 賣${(memberUpgradeRecord.sell_cost || 1) * 100}%`}
              responseTitle={memberUpgradeRecord.can_upgrade ? '已達升等' : '未達升等'}
              responseDetail={memberUpgradeRecord.can_upgrade ? memberUpgradeRecord.next_member : ''}
              buttonText={memberUpgradeRecord.can_upgrade ? '升等申請' : undefined}
              step={CardMembershipEnum.APPLY}
              cardRenewalNumber={cardRenewal}
              isStyleChanged={CardMembershipEnum.APPLICATION}
              getCurrentValue={setCardRenewalValue}
            />
          )}

          {memberUpgradeRecord && cardRenewal >= CardMembershipEnum.APPLICATION && (
            <CustomCard
              name="申請完成"
              title=""
              subTitle="本卡已於"
              info={memberUpgradeRecord.updated_at ? dateFormat(memberUpgradeRecord.updated_at, 'yyyy/MM/dd') : '-'}
              responseTitle="申請升等"
              responseDetail={`申請日非核准日。\n 升等核准後，原卡片將廢止並寄送升等卡至會員收件地址`}
              buttonText="確認"
              step={CardMembershipEnum.APPLICATION}
              cardRenewalNumber={cardRenewal}
              slug={INFO_MARGIN}
              isStyleChanged={CardMembershipEnum.APPLICATION}
              getCurrentValue={setCardRenewalValue}
            />
          )}

          {memberUpgradeRecord && cardRenewal >= CardMembershipEnum.COMPLETE && (
            <CustomCard
              name="完成升等"
              title=""
              subTitle="本卡已於"
              info={
                memberUpgradeRecord.upgrade_complete_at
                  ? dateFormat(memberUpgradeRecord.upgrade_complete_at, 'yyyy/MM/dd')
                  : '-'
              }
              responseTitle="完成升等"
              responseDetail={`新卡於五個工作日內寄至註冊收件地址 \n 舊卡已廢止`}
              step={CardMembershipEnum.COMPLETE}
              cardRenewalNumber={cardRenewal}
              slug={INFO_MARGIN}
              buttonText="確認"
              isStyleChanged={CardMembershipEnum.APPLICATION}
              getCurrentValue={setCardRenewalValue}
            />
          )}
        </div>
      </div>
    </Layout>
  );
};

export default MembershipUpgrade;
