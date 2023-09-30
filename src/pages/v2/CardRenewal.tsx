import CustomCard from '@/components/v2/CustomCard';
import Layout from '@/components/v2/Layout';

const CardRenewal = () => {
  return (
    <Layout>
      <div className="h-[100px]">{/* steps section */}</div>
      <div className="mt-10 px-[12%]">
        <h3 className="text-center text-navy-blue text-[32px] font-bold mb-5">會員卡續卡</h3>
        <div>
          <RenewalSteps totalSteps={3} />
        </div>
        <div className="my-8 text-center">
          <CustomCard
            name="會員到期日"
            title="2023/06/30"
            subTitle="離到期日剩下"
            info="17日"
            responseTitle="已可以續約"
            buttonText="確認續約"
            terms="個人資料保護安全政策暨隱私權聲明同續約條款之規定"
          />
        </div>
      </div>
    </Layout>
  );
};

export default CardRenewal;

interface RenewalStepsProps {
  totalSteps: number;
}

const RenewalSteps = ({ totalSteps }: RenewalStepsProps) => {
  const steps = Array.from({ length: totalSteps }, (_, i) => i + 1);
  return (
    <div className="w-full h-1 bg-navy-blue rounded-lg flex justify-around items-center">
      {steps.map((step) => (
        <div key={step} className="w-6 h-6 rounded-[100%] bg-navy-blue" />
      ))}
    </div>
  );
};
