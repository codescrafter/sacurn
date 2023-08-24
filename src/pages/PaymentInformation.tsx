import CustomButton from '@/components/CustomButton';
import LightLayout from '@/components/LightLayout';

const PaymentInformation = () => {
  return (
    <LightLayout>
      <div className="pt-7">
        <h2 className="text-[28px] border-l-4 pl-2 text-navy-blue">付款資訊</h2>
        <div className="grid grid-cols-3 gap-6">
          {/* First col */}
          <div className="box-shadow mt-5 h-[712px] flex flex-col justify-between py-5">
            <div>
              <div className="flex justify-between mb-2.5">
                <p className="border-l-[7px] border-pale-yellow pl-[20px] text-lg font-bold">商品共計</p>
                <p className="text-lg font-bold pr-7">NT$ 12,380,000</p>
              </div>
              <div className="px-7">
                <p className="text-grey text-sm font-bold mb-5">3項(以下含稅金5%及手續費)</p>
                <div className="flex gap-4 justify-between mb-5">
                  <p className="text-lg font-bold text-grey">
                    Kasigau Corridor II REDD+ Forest Conservation Carbon avoidance
                  </p>
                  <p className="text-lg font-bold text-grey">$ 12,000,000</p>
                </div>
                <div className="flex gap-4 justify-between mb-5">
                  <p className="text-lg font-bold text-grey">Andes Inorganic Soil Carbon</p>
                  <p className="text-lg font-bold text-grey">$ 5,625,000</p>
                </div>
                <div className="flex gap-4 justify-between mb-5">
                  <p className="text-lg font-bold text-grey">KOKO Networks Clean Ethanol Cooking Fuel</p>
                  <p className="text-lg font-bold text-grey">$ 25,000</p>
                </div>
              </div>
            </div>
            <div className="px-7">
              <div className="flex gap-4 justify-between mb-5">
                <p className="text-lg font-bold text-grey">手續費</p>
                <p className="text-lg font-bold text-grey">$ 120,000</p>
              </div>
              <div className="flex gap-4 justify-between mb-5">
                <p className="text-lg font-bold text-grey">稅金5%</p>
                <p className="text-lg font-bold text-grey">$ 619,000</p>
              </div>
              <div className="flex gap-4 justify-between">
                <p className="text-lg font-bold text-black">總付款金額</p>
                <p className="text-lg font-bold text-bright-red">NT$ 619,000</p>
              </div>
            </div>
          </div>
          {/* Second col */}
          <div className="box-shadow mt-5 h-[712px] flex flex-col justify-between py-5">
            <h4 className="text-xl font-bold text-navy-blue text-center">購買須知</h4>
            <div className="yellowScrollNoBg mr-2 overflow-scroll overflow-x-hidden mt-4">
              <div className="bg-neutral-150 m-4 rounded pt-4">
                {PURCHASE_NOTES.map((note, index) => (
                  <div key={index} className="px-7 mb-7 text-black">
                    <p className="text-sm mb-3">{note.title}:</p>
                    <p className="text-sm indent-8">{note.content}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center mt-6">
              <CustomButton variant="rounded">確認付款</CustomButton>
            </div>
          </div>
          {/* Third col */}
          <div className="box-shadow mt-5 h-[712px] flex flex-col justify-between py-5"></div>
        </div>
      </div>
    </LightLayout>
  );
};

export default PaymentInformation;

const PURCHASE_NOTES = [
  {
    title: '購買須知1',
    content:
      '內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容.....'
  },
  {
    title: '購買須知2',
    content:
      '內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容.....'
  },
  {
    title: '購買須知3',
    content:
      '內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容.....'
  },
  {
    title: '購買須知4',
    content:
      '內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容.....'
  },
  {
    title: '購買須知5',
    content:
      '內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容.....'
  },
  {
    title: '購買須知6',
    content:
      '內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容.....'
  },
  {
    title: '購買須知7',
    content:
      '內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容.....'
  },
  {
    title: '購買須知8',
    content:
      '內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容.....'
  },
  {
    title: '購買須知9',
    content:
      '內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容.....'
  },
  {
    title: '購買須知10',
    content:
      '內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容.....'
  },
  {
    title: '購買須知11',
    content:
      '內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容.....'
  }
];
