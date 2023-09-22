import { Link } from 'react-router-dom';

import { Policy } from '@/util/constants';

import CustomButton from './CustomButton';
const TermsOfServicesModal = () => {
  return (
    <div className="fixed top-0 left-0 z-40 w-full h-full bg-[#3D3D3D99] flex justify-center items-center">
      <div className="flex flex-col w-[60%] h-[70vh] max-h-[578px] bg-white rounded-2.5xl py-5 px-4.2">
        <p className="text-center font-bold text-dark-grey mb-4">本網站之《服務條款》、《隱私政策》和《Cookie 政策》</p>

        <div className="yellowScroll pr-4.2 overflow-y-scroll h-[70%]">
          <div className="bg-smoke break-normal break-keep whitespace-pre-wrap">{Policy}</div>
        </div>
        <button className="px-7 py-0.3 self-end bg-smoke shadow-download-btn rounded-lg mr-5.5 mt-1.5">
          <div className="flex gap-2 items-center">
            <Link
              to="/download.docx"
              target="_blank"
              download="土星_平台條款內容"
              className="text-mdbase font-bold text-navy-blue"
            >
              Download
            </Link>
            <img src="/images/company-registration/download.svg" />
          </div>
        </button>

        <div className="w-max flex gap-9 mx-auto mt-2">
          <CustomButton
            children="同意"
            className="rounded-full min-[1300px]:text-xl min-[1100px]:text-lg text-base font-bold w-[180px] h-[53px]"
            variant="primary"
            type="button"
          />
          <CustomButton
            children="不同意"
            className="rounded-full border min-[1300px]:text-xl min-[1100px]:text-lg text-base font-bold w-[180px] h-[53px]"
            variant="secondary"
            type="button"
          />
        </div>
      </div>
    </div>
  );
};

export default TermsOfServicesModal;
