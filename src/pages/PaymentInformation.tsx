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
          <div className="box-shadow mt-5 h-[712px] flex flex-col justify-between py-5"></div>
        </div>
      </div>
    </LightLayout>
  );
};

export default PaymentInformation;
