import { Policy } from '@/util/constants';

import CustomButton from './CustomButton';

interface IProps {
  nextStep: (val: number) => void;
}
const TermsConfirmation = ({ nextStep }: IProps) => {
  return (
    <form
      onSubmit={() => {
        nextStep(5);
      }}
    >
      <div className="flex flex-col items-center">
        <h2 className="text-xl font-bold leading-normal text-dark-grey mb-6">
          本網站之《服務條款》、《隱私政策》和《Cookie 政策》
        </h2>
        <div className="bg-white rounded-2.5xl shadow-company-registration-input py-3 px-4 h-[50vh] w-[95%] mb-3 relative">
          <div className="overflow-y-scroll  yellowScroll w-[calc(100%-5px)] h-full">
            <div className="w-[92%] h-full">
              <pre className="text-mdbase font-bold">{Policy}</pre>
            </div>
          </div>
          <button className="px-7 py-0.3 absolute -bottom-8 right-1 shadow-download-btn rounded-lg">
            <div className="flex gap-2 items-center">
              <p className="text-mdbase font-bold text-navy-blue">Download</p>
              <img src="/images/company-registration/download.svg" />
            </div>
          </button>
        </div>

        <h3 className="font-bold mb-5.5 text-dark-grey">下滑至文章底部即可勾選同意</h3>

        <div className="flex gap-2 items-center mb-5.5">
          <input type="checkbox" />
          <label className="font-bold text-[#095181]">
            本人同意貴公司之《服務條款》、《隱私政策》和《Cookie 政策》
          </label>
        </div>
        <CustomButton
          className="rounded-full bg-operator-signup shadow-operator-signup-button text-base font-bold h-10 w-[711px] text-white"
          type="submit"
        >
          註冊申請
        </CustomButton>
      </div>
    </form>
  );
};

export default TermsConfirmation;
