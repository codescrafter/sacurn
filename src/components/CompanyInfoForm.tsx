import { yupResolver } from '@hookform/resolvers/yup';
import classNames from 'classnames';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

// import { ExtendedCompany } from '@/libs/api';
import { useCompanyStore } from '@/store/company';
import { InputSize } from '@/type';
import { CompanyRegistrationSteps } from '@/util/constants';

import CompanyInputField from './CompanyInputField';
// import CompanyDocumentUpload from './CompanyDocumentUpload';
import CustomButton from './CustomButton';
import UploadDocuments from './UploadDocuments';

interface IProps {
  nextStep: (val: number) => void;
}

export type FormValues = {
  name: string;
  code: string;
  capital: number;
  phone: string;
  founding_date: string;
  representative: string;
  address?: {
    additionalProp1?: string;
    additionalProp2?: string;
    additionalProp3?: string;
  };
  contact_address: string;
  registration_document: string;
};

const schema = yup
  .object({
    name: yup.string().required('Name is required'),
    code: yup.string().required('Code is required'),
    capital: yup.number().required('Capital is required'),
    phone: yup.string().required('Phone is required'),
    founding_date: yup.string().required('Founding date is required'),
    representative: yup.string().required('Representative is required'),
    contact_address: yup.string().required('Contact address is required'),
    //  address type
    // address: yup.object({
    //   additionalProp1: yup.string().required('Address is required'),
    //   additionalProp2: yup.string().required('Address is required'),
    //   additionalProp3: yup.string().required('Address is required')
    // }),
    registration_document: yup.string().required('Registration document is required')
  })
  .required();

const CompanyInfoForm = ({ nextStep }: IProps) => {
  const [isChecked, setIsChecked] = useState(false);
  const [county, setCounty] = useState('');
  const [town, setTown] = useState('');
  const [street, setStreet] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>({ resolver: yupResolver(schema) });

  const createCompany = useCompanyStore((state) => state.createCompany);

  const onSubmit = handleSubmit(async (data) => {
    console.log('data', data);
    console.log('errors', errors);
    // eslint-disable-next-line no-debugger
    debugger;
    const resonse = await createCompany({
      name: data.name,
      code: data.code,
      phone: data.phone,
      representative: data.representative,
      capital: Number(data.capital),
      founding_date: data.founding_date,
      contact_address: isChecked ? `${county}, ${town}, ${street}` : data.contact_address,
      address: {
        additionalProp1: `${county}, ${town}, ${street}`
      },
      id: 0,
      created_at: null,
      updated_at: null,
      registration_document:
        'https://st2.depositphotos.com/1104517/11967/v/950/depositphotos_119675554-stock-illustration-male-avatar-profile-picture-vector.jpg'
    });
    // eslint-disable-next-line no-debugger
    debugger;
    console.log('response', resonse);
    nextStep(CompanyRegistrationSteps.REPRESENTATIVE_INFO_FORM);
  });
  return (
    <form onSubmit={onSubmit}>
      <div className="w-max mx-auto">
        <div className="flex flex-row mb-7">
          <h1 className="text-navy-blue text-2.5xl flex flex-row">
            <div className="bg-navy-blue px-0.5 h-full" />
            &nbsp;請填寫企業資料
          </h1>
        </div>
        <div className="flex flex-row gap-28 justify-center w-full">
          <div>
            <CompanyInputField
              id="name"
              isRequired={true}
              type="text"
              register={register}
              heading="企業名稱"
              errors={errors}
              errorMessage="會員名稱即為提領的金融帳號戶名，請正確填寫"
              size={InputSize.SMALL}
            />

            <CompanyInputField
              id="code"
              isRequired={true}
              type="text"
              register={register}
              heading="統一編號"
              placeholder="請輸入統一編號"
              errors={errors}
              errorMessage="必填字段"
              size={InputSize.SMALL}
            />

            <CompanyInputField
              id="representative"
              isRequired={true}
              type="text"
              register={register}
              heading="代表人中文姓名"
              errors={errors}
              errorMessage="必填字段"
              size={InputSize.SMALL}
            />

            <CompanyInputField
              id="capital"
              isRequired={true}
              type="text"
              register={register}
              heading="實收資本額"
              errors={errors}
              errorMessage="必填字段"
              size={InputSize.SMALL}
            />

            <CompanyInputField
              id="founding_date"
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
              <label className="text-black text-right font-semibold w-[128px] mb-5.2">公司登記地址 :</label>
              <div className="flex flex-col">
                <div className="absolute flex flex-col -translate-y-1.5">
                  <div className="flex flex-row my-1">
                    <select
                      className={classNames(
                        'min-[1700px]:w-23.2 min-[1550px]:w-20 w-19 min-[1550px]:text-mdbase min-[1200px]:text-xms text-xxs',
                        Style
                      )}
                      value={county}
                      defaultValue="縣市"
                      onChange={(e) => setCounty(e.target.value)}
                    >
                      <option value="縣市" className="text-black">
                        縣市
                      </option>
                      <option value="縣市" className="text-black">
                        縣市
                      </option>
                      <option value="縣市" className="text-black">
                        縣市
                      </option>
                    </select>
                    <select
                      className={classNames(
                        'min-[1700px]:w-23.2 min-[1550px]:w-20 w-19 min-[1550px]:text-mdbase min-[1200px]:text-xms text-xxs',
                        Style
                      )}
                      value={town}
                      onChange={(e) => setTown(e.target.value)}
                    >
                      <option value="鄉鎮市區" className="text-black">
                        鄉鎮市區
                      </option>
                      <option value="鄉鎮市區" className="text-black">
                        鄉鎮市區
                      </option>
                      <option value="鄉鎮市區" className="text-black">
                        鄉鎮市區
                      </option>
                    </select>
                    <input
                      type="text"
                      className={classNames(
                        'min-[1700px]:w-16 min-[1550px]:w-14 min-[1200px]:w-13 w-12 mr-2 px-5',
                        Style
                      )}
                      value={street}
                      onChange={(e) => setStreet(e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="路、街、村、段"
                      {...register('address.additionalProp1', { required: true })}
                      className={classNames('px-5 min-[1700px]:w-36 min-[1550px]:w-33 min-[1200px]:w-31 w-29', Style, {
                        'border-bright-red border': errors.address?.additionalProp1
                      })}
                    />
                  </div>
                  <div className="flex flex-row my-1 items-center">
                    {address_row_1.map((item: string) => {
                      return (
                        <>
                          <input
                            id="address.additionalProp2"
                            type="text"
                            className={classNames(
                              'min-[1700px]:w-15 min-[1550px]:w-13 min-[1200px]:w-10 w-9 mr-1.5 min-[1400px]:px-5 px-4 text-center',
                              Style,
                              {
                                'border-bright-red border': errors.address?.additionalProp2
                              }
                            )}
                            {...register('address.additionalProp2', { required: true })}
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
                            id="address.additionalProp3"
                            type="text"
                            className={classNames(
                              'min-[1700px]:w-15 min-[1550px]:w-13 min-[1200px]:w-10 w-9 mr-1.5 min-[1400px]:px-5 px-4 text-center',
                              Style,
                              {
                                'border-bright-red border': errors.address?.additionalProp3
                              }
                            )}
                            {...register('address.additionalProp3', { required: true })}
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
              <CompanyInputField
                id="phone"
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
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => setIsChecked(!isChecked)}
                    className="w-4 h-4"
                  />
                  <label className="text-black ml-2 text-xs">同公司登記地址</label>
                </div>
                <CompanyInputField
                  id="contact_address"
                  isRequired={false}
                  type="text"
                  register={register}
                  heading="會員聯絡地址"
                  size={InputSize.SMALL}
                  value={isChecked ? `${county}, ${town}, ${street}` : ''}
                />
              </div>
              <div className="flex gap-2.7">
                <label className="text-black text-right font-semibold col-span-1 mb-5.2 w-[128px]">
                  營業登記文件 :
                </label>
                <UploadDocuments register={register} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <CustomButton
        type="submit"
        onClick={() => console.log('errors', errors)}
        className="text-white bg-navy-blue px-4.5 py-0.7 font-bold rounded-md absolute bottom-7 right-5"
      >
        储存 | 下一步
      </CustomButton>
    </form>
  );
};

export default CompanyInfoForm;

const Style =
  'rounded-full text-black shadow-company-registration-input bg-white min-[1550px]:h-9.5 min-[1200px]:h-7.5 h-6 min-[1550px]:px-2 min-[1200px]:px-1.5 px-1 py-2.5 text-black min-[1550px]:text-mdbase min-[1200px]:text-xms text-xxs outline-none';
const address_row_1 = ['鄰', '巷', '弄', '街'];
const address_row_2 = ['號之', ',', '樓之', '室'];
