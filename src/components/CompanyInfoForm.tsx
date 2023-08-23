import { FieldValues, useForm } from 'react-hook-form';

import CompanyDocumentUpload from './CompanyDocumentUpload';
import InputWithLabel from './InputWithLabel';
import SubmitButton from './SubmitButton';

interface IProps {
  nextStep: (val: number) => void;
}

const CompanyInfoForm = ({ nextStep }: IProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  return (
    <form
      className="max-w-[1020px] px-5 mx-auto"
      onSubmit={handleSubmit((data: FieldValues) => {
        console.log(data);
        nextStep(1);
      })}
    >
      <div className="flex flex-col items-start">
        <div className="flex flex-row mb-7">
          <h1 className="text-navy-blue text-2.5xl flex flex-row">
            <div className="bg-navy-blue px-0.5 h-full" />
            &nbsp;請填寫企業資料
          </h1>
        </div>

        <div className="flex gap-5 justify-between">
          <div className="left-col">
            <InputWithLabel
              id="company_name"
              isRequired={true}
              label="會員名稱 :"
              register={register}
              type="text"
              errors={errors}
              errorText="會員名稱即為提領的金融帳號戶名，請正確填寫"
            />
            <InputWithLabel
              id="uniform_numbers"
              isRequired={false}
              label="統一編號 :"
              register={register}
              type="text"
              placeholder="請輸入統一編號"
            />
            <InputWithLabel
              id="representative_chinese_name"
              isRequired={false}
              label="代表人中文姓名 :"
              register={register}
              type="text"
            />
            <InputWithLabel
              id="paid_in_capital"
              isRequired={false}
              label="實收資本額 :"
              register={register}
              type="text"
            />
            <InputWithLabel
              id="approved_establishment_date"
              isRequired={false}
              label="核准設立日期 :"
              register={register}
              type="date"
            />
            <div>
              <div className="flex gap-4 mb-1.5">
                <label className="text-black text-right font-normal w-[122px]">會員登記地址 :</label>
                <div className="flex items-center">
                  <select className="w-23.2 rounded-full text-black py-2 px-3.5 text-xs font-bold outline-none">
                    <option className="text-black">縣市</option>
                    <option className="text-black">縣市</option>
                    <option className="text-black">縣市</option>
                  </select>
                  <select className="w-23.2 rounded-full text-black py-2 px-3.5 text-xs font-bold outline-none">
                    <option className="text-black">鄉鎮市區</option>
                    <option className="text-black">鄉鎮市區</option>
                    <option className="text-black">鄉鎮市區</option>
                  </select>
                  <input
                    type="text"
                    className="w-14 mr-3 px-3.5 py-2 text-xs font-bold rounded-full outline-none text-black"
                  />
                  <input
                    type="text"
                    placeholder="路、街、村、段"
                    className="lg:w-36 w-24 px-3.5 py-2 text-xs font-bold rounded-full text-center outline-none text-black"
                  />
                </div>
              </div>
              <div className="flex mb-1.5 gap-4">
                <div className="w-[122px] h-5"></div>
                <div>
                  {address_row_1.map((item) => {
                    return (
                      <>
                        <input type="text" className={`${Style} w-15 mr-1.5 px-5`} />
                        <label className="text-black font-bold mr-1.5 text-[12px]">{item}</label>
                      </>
                    );
                  })}
                </div>
              </div>
              <div className="flex mb-1.5 gap-4">
                <div className="w-[122px] h-5"></div>
                <div>
                  {address_row_2.map((item) => {
                    return (
                      <>
                        <input type="text" className={`${Style} w-15 mr-1.5 px-5`} />
                        <label className="text-black font-bold mr-1.5 text-[12px]">{item}</label>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="right-col">
            <InputWithLabel
              id="member_phone"
              isRequired={true}
              label="會員電話 :"
              register={register}
              type="text"
              errors={errors}
              errorText="例: 0x-000111或09xx-000111"
            />
            <div className="flex flex-row items-center mb-1 font-bold gap-4">
              <div className="w-[122px] h-5"></div>
              <div>
                <input type="checkbox" />
                <label className="text-black ml-2 text-xs">同公司登記地址</label>
              </div>
            </div>
            <InputWithLabel
              id="member_contact_address"
              isRequired={false}
              label="會員聯絡地址 :"
              register={register}
              type="text"
            />
            <div className="flex">
              <label className="text-black text-right font-normal mb-5.2 min-w-[122px]">營業登記文件 :</label>
              <CompanyDocumentUpload register={register} />
            </div>
          </div>
        </div>
      </div>
      <SubmitButton text={undefined} className={undefined} />
    </form>
  );
};

export default CompanyInfoForm;

const Style =
  'rounded-full text-black shadow-company-registration-input bg-white min-[1550px]:h-9.5 min-[1200px]:h-7.5 h-6 px-2 py-2.5 text-black min-[1550px]:text-mdsm min-[1200px]:text-xms text-xxs outline-none';
const address_row_1 = ['鄰', '巷', '弄', '街'];
const address_row_2 = ['號之', ',', '號之', '室'];
