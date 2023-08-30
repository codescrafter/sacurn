import CustomButton from '@/components/CustomButton';
import Navbar from '@/components/Navbar';

const Certificate = () => {
  return (
    <div>
      <Navbar className="relative z-30 !bg-navy-blue h-[70px]" />
      <div className="my-7 px-8">
        <h2 className="border-l-4 border-navy-blue text-navy-blue text-[28px] pl-4">憑證認證書</h2>
        <div className="flex flex-col justify-center items-center mt-2">
          <div className="w-[1033px] h-[730px]">
            <img src="/images/certificate/certificate.svg" alt="certificate" className="w-full h-full object-contain" />
          </div>
          <div className="flex justify-end items-end w-full mt-4">
            <div className="flex justify-between w-[56%]">
              <CustomButton className="rounded-[3px] py-2 px-12 flex items-center text-xl gap-2.5">
                下載證書
                <img src="/images/certificate/download-icon.svg" alt="download" />
              </CustomButton>
              <CustomButton variant="outline" className="rounded-[3px] py-2 px-12 flex items-center text-xl gap-3">
                <img src="/images/certificate/left-arrow.svg" alt="download" />
                回上一頁
              </CustomButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
