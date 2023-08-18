import { useState } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';
function CompanyDocumentUpload({ register }: { register: UseFormRegister<FieldValues> }) {
  const [documentQuantity, setDocumentQuantity] = useState(1);
  return (
    <div className="flex flex-col w-full ml-3 max">
      <p className="text-black min-[1500px]:text-base text-sm">
        影業登記文件檔上傳,限小於<span className="text-bright-red">2MB</span>的JPG、PNG檔案。
      </p>
      <p className="text-navy-blue underline">了解營業登記文件上傳...</p>
      <div className="flex flex-row flex-wrap max-w-[360px] gap-4 mt-2">
        {Array.from({ length: documentQuantity }, (value, index) => index + 1).map((item) => {
          return (
            <div className="flex flex-col rounded-xl border items-center border-silverstone h-23.2 w-26.7">
              <p className="text-[36px] text-black mt-2">{item}</p>
              <label className="rounded-full bg-navy-blue p-0.5 px-5 text-xms text-white" htmlFor={'get-file'}>
                {' '}
                選擇
              </label>
              <input id="get-file" {...register('get-file')} type="file" className="invisible" />
            </div>
          );
        })}
        <div
          className="flex flex-col rounded-xl border border-silverstone bg-light-trans-grey items-center justify-center h-23.2 w-26.7"
          onClick={() => setDocumentQuantity((prev) => prev + 1)}
        >
          {PlusSign}
        </div>
      </div>
    </div>
  );
}

export default CompanyDocumentUpload;

export const PlusSign = (
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="27" viewBox="0 0 26 27" fill="none">
    <path
      d="M10.8353 26.1822V0.719971H15.1562V26.1822H10.8353ZM0.264648 15.6115V11.2906H25.7268V15.6115H0.264648Z"
      fill="#B3B4B4"
    />
  </svg>
);
