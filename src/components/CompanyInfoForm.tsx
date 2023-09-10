import { yupResolver } from '@hookform/resolvers/yup';
import classNames from 'classnames';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { useCompanyStore } from '@/store/company';
import { InputSize } from '@/type';
import { CompanyRegistrationSteps } from '@/util/constants';

import CompanyInputField from './CompanyInputField';
import CustomButton from './CustomButton';
import UploadDocuments from './UploadDocuments';

interface IProps {
  nextStep: (val: number) => void;
}

export type FormValues = {
  name: string;
  registration_number: string;
  capital: number;
  phone: string;
  founding_date: string;
  representative: string;
  address: {
    additionalProp1: string;
    additionalProp2: string;
    additionalProp3: string;
    additionalProp4: string;
    additionalProp5: string;
    additionalProp6: string;
    additionalProp7: string;
    additionalProp8: string;
    additionalProp9: string;
    additionalProp10: string;
    additionalProp11: string;
    additionalProp12: string;
  };
  contact_address: string;
};

const schema = yup
  .object({
    name: yup.string().required('Name is required'),
    registration_number: yup.string().required('registration_number is required'),
    capital: yup.number().required('Capital is required'),
    phone: yup.string().required('Phone is required'),
    founding_date: yup.string().required('Founding date is required'),
    representative: yup.string().required('Representative is required'),
    contact_address: yup.string().required('Contact address is required'),
    address: yup
      .object()
      .shape({
        additionalProp1: yup.string().required('Address is required'),
        additionalProp2: yup.string().required('Address is required'),
        additionalProp3: yup.string().required('Address is required'),
        additionalProp4: yup.string().required('Address is required'),
        additionalProp5: yup.string().required('Address is required'),
        additionalProp6: yup.string().required('Address is required'),
        additionalProp7: yup.string().required('Address is required'),
        additionalProp8: yup.string().required('Address is required'),
        additionalProp9: yup.string().required('Address is required'),
        additionalProp10: yup.string().required('Address is required'),
        additionalProp11: yup.string().required('Address is required'),
        additionalProp12: yup.string().required('Address is required')
      })
      .required()
  })
  .required();

const CompanyInfoForm = ({ nextStep }: IProps) => {
  const [isChecked, setIsChecked] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue
  } = useForm<FormValues>({ resolver: yupResolver(schema) });

  const [uploadedDocs, setUploadedDocs] = useState<File[]>([]);

  const createCompany = useCompanyStore((state) => state.createCompany);

  const handleGetValue = (value: boolean) => {
    setIsChecked(!isChecked);
    const address = getValues('address');
    if (!value) {
      setValue('contact_address', '');
      return;
    }
    if (!address) return;
    const {
      additionalProp1,
      additionalProp2,
      additionalProp3,
      additionalProp4,
      additionalProp5,
      additionalProp6,
      additionalProp7,
      additionalProp8,
      additionalProp9,
      additionalProp10,
      additionalProp11,
      additionalProp12
    } = address;
    setValue(
      'contact_address',
      `${additionalProp1} 
      ${additionalProp2} 
      ${additionalProp3} 
      ${additionalProp4} 
      ${additionalProp5} 
      ${additionalProp6} 
      ${additionalProp7} 
      ${additionalProp8} 
      ${additionalProp9} 
      ${additionalProp10} 
      ${additionalProp11} 
      ${additionalProp12}`,

      { shouldValidate: true }
    );
  };

  const onSubmit = handleSubmit(async (data) => {
    const concatenatedAddresss = `${data.address.additionalProp1}, ${data.address.additionalProp2}, ${data.address.additionalProp3}, ${data.address.additionalProp4}, ${data.address.additionalProp5}, ${data.address.additionalProp6}, ${data.address.additionalProp7}, ${data.address.additionalProp8} ${data.address.additionalProp9}, ${data.address.additionalProp10}, ${data.address.additionalProp11}, ${data.address.additionalProp12}`;
    const dataToSubmit = {
      id: 0,
      name: data.name,
      registration_number: data.registration_number,
      phone: data.phone,
      representative: data.representative,
      capital: Number(data.capital),
      founding_date: data.founding_date,
      contact_address: isChecked ? concatenatedAddresss : data.contact_address,
      address: {
        additionalProp1: `${data.address.additionalProp1}, ${data.address.additionalProp2}, ${data.address.additionalProp3}, ${data.address.additionalProp4}`,
        additionalProp2: `${data.address.additionalProp5}, ${data.address.additionalProp6}, ${data.address.additionalProp7}, ${data.address.additionalProp8}`,
        additionalProp3: `${data.address.additionalProp9}, ${data.address.additionalProp10}, ${data.address.additionalProp11}, ${data.address.additionalProp12}`
      },
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      registration_document: uploadedDocs
    };
    console.log('dataToSubmit', dataToSubmit);

    const formData = new FormData();

    formData.append('id', dataToSubmit.id.toString());
    formData.append('name', dataToSubmit.name);
    formData.append('registration_number', dataToSubmit.registration_number);
    formData.append('phone', dataToSubmit.phone);
    formData.append('representative', dataToSubmit.representative);
    formData.append('capital', dataToSubmit.capital.toString());
    formData.append('founding_date', dataToSubmit.founding_date);
    formData.append('contact_address', dataToSubmit.contact_address);
    formData.append('address', JSON.stringify(dataToSubmit.address));
    formData.append('created_at', dataToSubmit.created_at);
    formData.append('updated_at', dataToSubmit.updated_at);
    // formData.append('registration_document', dataToSubmit.registration_document); // appending in form data
    for (const img of uploadedDocs) {
      formData.append('registration_document', img);
    }
    await createCompany(formData);

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
              id="registration_number"
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
                      id="address.additionalProp1"
                      {...register(`address.additionalProp1`, { required: true })}
                      className={classNames(
                        'min-[1700px]:w-23.2 min-[1550px]:w-20 w-19 min-[1550px]:text-mdbase min-[1200px]:text-xms text-xxs',
                        Style
                      )}
                      defaultValue="縣市"
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
                      id="address.additionalProp2"
                      {...register(`address.additionalProp2`, { required: true })}
                      className={classNames(
                        'min-[1700px]:w-23.2 min-[1550px]:w-20 w-19 min-[1550px]:text-mdbase min-[1200px]:text-xms text-xxs',
                        Style
                      )}
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
                      id="address.additionalProp3"
                      {...register(`address.additionalProp3`, { required: true })}
                      type="text"
                      className={classNames(
                        'min-[1700px]:w-16 min-[1550px]:w-14 min-[1200px]:w-13 w-12 mr-2 px-5',
                        Style,
                        {
                          'border-bright-red border': errors.address?.additionalProp3
                        }
                      )}
                    />
                    <input
                      id="address.additionalProp4"
                      {...register(`address.additionalProp4`, { required: true })}
                      type="text"
                      placeholder="路、街、村、段"
                      className={classNames('px-5 min-[1700px]:w-36 min-[1550px]:w-33 min-[1200px]:w-31 w-29', Style, {
                        'border-bright-red border': errors.address?.additionalProp4
                      })}
                    />
                  </div>
                  <div className="flex flex-row my-1 items-center">
                    {address_row_1.map((item: string, idx: number) => {
                      let id = '' as
                        | 'address.additionalProp5'
                        | 'address.additionalProp6'
                        | 'address.additionalProp7'
                        | 'address.additionalProp8';

                      if (idx === 0) id = 'address.additionalProp5';
                      else if (idx === 1) id = 'address.additionalProp6';
                      else if (idx === 2) id = 'address.additionalProp7';
                      else id = 'address.additionalProp8';

                      return (
                        <>
                          <input
                            id={id}
                            {...register(id, { required: false })}
                            type="text"
                            className={classNames(
                              'min-[1700px]:w-15 min-[1550px]:w-13 min-[1200px]:w-10 w-9 mr-1.5 min-[1400px]:px-5 px-4 text-center',
                              Style,
                              {
                                'border-bright-red border':
                                  errors.address &&
                                  Object.prototype.hasOwnProperty.call(errors.address, id.replace('address.', ''))
                              }
                            )}
                          />
                          <label className="text-black font-bold mr-1.5 text-[12px]">{item}</label>
                        </>
                      );
                    })}
                  </div>
                  <div className="flex flex-row my-1 items-center">
                    {address_row_2.map((item, idx) => {
                      let id = '' as
                        | 'address.additionalProp9'
                        | 'address.additionalProp10'
                        | 'address.additionalProp11'
                        | 'address.additionalProp12';

                      if (idx === 0) id = 'address.additionalProp9';
                      else if (idx === 1) id = 'address.additionalProp10';
                      else if (idx === 2) id = 'address.additionalProp11';
                      else id = 'address.additionalProp12';

                      return (
                        <>
                          <input
                            id={id}
                            type="text"
                            className={classNames(
                              'min-[1700px]:w-15 min-[1550px]:w-13 min-[1200px]:w-10 w-9 mr-1.5 min-[1400px]:px-5 px-4 text-center',
                              Style,
                              {
                                'border-bright-red border':
                                  errors.address &&
                                  Object.prototype.hasOwnProperty.call(errors.address, id.replace('address.', ''))
                              }
                            )}
                            {...register(id, { required: true })}
                          />
                          <label className="text-black font-bold mr-1.5 text-[12px]">{item}</label>
                        </>
                      );
                    })}
                  </div>
                  {errors.address && <p className="text-[#FF0000] text-xs font-normal">( 紅色框格請務必填寫 )</p>}
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
                    onChange={(e) => handleGetValue(e.target.checked)}
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
                />
              </div>
              <div className="flex gap-2.7">
                <label className="text-black text-right font-semibold col-span-1 mb-5.2 w-[128px]">
                  營業登記文件 :
                </label>
                <UploadDocuments uploadedDocs={uploadedDocs} setUploadedDocs={setUploadedDocs} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <CustomButton
        type="submit"
        className="text-white bg-navy-blue px-4.5 py-0.7 font-bold rounded-md absolute bottom-7 right-5"
      >
        儲存 | 下一步
      </CustomButton>
    </form>
  );
};

export default CompanyInfoForm;

const Style =
  'rounded-full text-black shadow-company-registration-input bg-white min-[1550px]:h-9.5 min-[1200px]:h-7.5 h-6 min-[1550px]:px-2 min-[1200px]:px-1.5 px-1 py-2.5 text-black min-[1550px]:text-mdbase min-[1200px]:text-xms text-xxs outline-none';
const address_row_1 = ['鄰', '巷', '弄', '街'];
const address_row_2 = ['號之', ',', '樓之', '室'];
