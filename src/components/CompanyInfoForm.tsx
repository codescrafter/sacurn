import classNames from 'classnames';
import { useForm } from 'react-hook-form';

import { InputSize } from '@/type';
import { CompanyRegistrationSteps } from '@/util/constants';

import CompanyDocumentUpload from './CompanyDocumentUpload';
import CustomButton from './CustomButton';
import LabelInput from './LabelInput';

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
      onSubmit={handleSubmit(() => {
        nextStep(CompanyRegistrationSteps.REPRESENTATIVE_INFO_FORM);
      })}
    >
      <div className="w-max mx-auto">
        <div className="flex flex-row mb-7">
          <h1 className="text-navy-blue text-2.5xl flex flex-row">
            <div className="bg-navy-blue px-0.5 h-full" />
            &nbsp;請填寫企業資料
          </h1>
        </div>
        <div className="flex flex-row gap-28 justify-center w-full">
          <div>
            <LabelInput
              id="company_name"
              isRequired={true}
              type="text"
              register={register}
              heading="企業名稱"
              errors={errors}
              errorMessage="會員名稱即為提領的金融帳號戶名，請正確填寫"
              size={InputSize.SMALL}
            />

            <LabelInput
              id="member_phone"
              isRequired={true}
              type="text"
              register={register}
              heading="統一編號"
              placeholder="請輸入統一編號"
              errors={errors}
              errorMessage="必填字段"
              size={InputSize.SMALL}
            />

            <LabelInput
              id="representative_chinese_name"
              isRequired={true}
              type="text"
              register={register}
              heading="代表人中文姓名"
              errors={errors}
              errorMessage="必填字段"
              size={InputSize.SMALL}
            />

            <LabelInput
              id="paid_in_capital"
              isRequired={true}
              type="text"
              register={register}
              heading="實收資本額"
              errors={errors}
              errorMessage="必填字段"
              size={InputSize.SMALL}
            />

            <LabelInput
              id="approved_establishment_date"
              isRequired={true}
              type="date"
              placeholder='"YYYY-MM-DD"'
              register={register}
              heading="核准設立日期"
              errors={errors}
              errorMessage="必填字段"
              size={InputSize.SMALL}
            />
            <div className="flex gap-2.7">
              <label className="text-black text-right font-semibold w-[128px] mb-5.2">會員聯絡地址 :</label>
              <div className="flex flex-col">
                <div className="absolute flex flex-col -translate-y-1.5">
                  <div className="flex flex-row my-1">
                    <select
                      className={classNames(
                        'min-[1700px]:w-23.2 min-[1550px]:w-20 w-19 min-[1550px]:text-mdbase min-[1200px]:text-xms text-xxs',
                        Style
                      )}
                    >
                      <option className="text-black">縣市</option>
                      <option className="text-black">縣市</option>
                      <option className="text-black">縣市</option>
                    </select>
                    <select
                      className={classNames(
                        'min-[1700px]:w-23.2 min-[1550px]:w-20 w-19 min-[1550px]:text-mdbase min-[1200px]:text-xms text-xxs',
                        Style
                      )}
                    >
                      <option className="text-black">鄉鎮市區</option>
                      <option className="text-black">鄉鎮市區</option>
                      <option className="text-black">鄉鎮市區</option>
                    </select>
                    <input
                      type="text"
                      className={classNames(
                        'min-[1700px]:w-16 min-[1550px]:w-14 min-[1200px]:w-13 w-12 mr-2 px-5',
                        Style
                      )}
                    />
                    <input
                      type="text"
                      placeholder="路、街、村、段"
                      {...register('local_address')}
                      className={classNames('px-5 min-[1700px]:w-36 min-[1550px]:w-33 min-[1200px]:w-31 w-29', Style, {
                        'border-bright-red border': errors.local_address
                      })}
                    />
                  </div>
                  <div className="flex flex-row my-1 items-center">
                    {address_row_1.map((item) => {
                      return (
                        <>
                          <input
                            type="text"
                            className={classNames(
                              'min-[1700px]:w-15 min-[1550px]:w-13 min-[1200px]:w-10 w-9 mr-1.5 min-[1400px]:px-5 px-4 text-center',
                              Style,
                              {
                                'border-bright-red border': errors[item]
                              }
                            )}
                            {...register(item, { required: true })}
                          />
                          <label className="text-black font-bold mr-1.5 text-[12px]">{item}</label>
                        </>
                      );
                    })}
                  </div>
                  <div className="flex flex-row my-1 items-center">
                    {address_row_2.map((item) => {
                      return (
                        <>
                          <input
                            type="text"
                            className={classNames(
                              'min-[1700px]:w-15 min-[1550px]:w-13 min-[1200px]:w-10 w-9 mr-1.5 min-[1400px]:px-5 px-4 text-center',
                              Style,
                              {
                                'border-bright-red border': errors[item]
                              }
                            )}
                            {...register(item, { required: true })}
                          />
                          <label className="text-black font-bold mr-1.5 text-[12px]">{item}</label>
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <LabelInput
                id="member_phone"
                isRequired={true}
                type="text"
                register={register}
                heading="會員電話"
                errors={errors}
                errorMessage="例: 0x-000111或09xx-000111"
                size={InputSize.SMALL}
              />
              <div>
                <div className="flex flex-row items-center mb-1 ml-[155px] font-bold">
                  <input type="checkbox" />
                  <label className="text-black ml-2 text-xs">同公司登記地址</label>
                </div>
                <LabelInput
                  id="member_contact_address"
                  isRequired={false}
                  type="text"
                  register={register}
                  heading="會員聯絡地址"
                  size={InputSize.SMALL}
                />
              </div>
              <div className="flex gap-2.7">
                <label className="text-black text-right font-semibold col-span-1 mb-5.2 w-[128px]">
                  營業登記文件 :
                </label>
                <CompanyDocumentUpload register={register} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <CustomButton className="text-white bg-navy-blue px-4.5 py-0.7 font-bold rounded-md absolute bottom-7 right-5">
        储存 | 下一步
      </CustomButton>
    </form>
  );
};

export default CompanyInfoForm;

const Style =
  'rounded-full text-black shadow-company-registration-input bg-white min-[1550px]:h-9.5 min-[1200px]:h-7.5 h-6 min-[1550px]:px-2 min-[1200px]:px-1.5 px-1 py-2.5 text-black min-[1550px]:text-mdbase min-[1200px]:text-xms text-xxs outline-none';
const address_row_1 = ['鄰', '巷', '弄', '街'];
const address_row_2 = ['號之', ',', '號之', '室'];
