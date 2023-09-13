import 'react-datepicker/dist/react-datepicker.css';

import { yupResolver } from '@hookform/resolvers/yup';
import classNames from 'classnames';
import { useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { useCompanyStore } from '@/store/company';
import { InputSize } from '@/type';
import { CompanyRegistrationSteps, COUNTY_LIST, URBAN_AREA_LIST } from '@/util/constants';

import CompanyInputField from './CompanyInputField';
import CustomButton from './CustomButton';
import UploadCommercialDocuments from './UploadCommercialDocuments';

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
    additionalProp5?: string;
    additionalProp6?: string;
    additionalProp7?: string;
    additionalProp8?: string;
    additionalProp9: string;
    additionalProp10?: string;
    additionalProp11?: string;
    additionalProp12?: string;
  };
  contact_address: string;
};

const schema = yup
  .object({
    name: yup.string().required('Name is required'),
    registration_number: yup
      .string()
      .required('統一編號是必填的')
      .length(8, '統一編號必須是8位數')
      .matches(/^\d{8}$/, '統一編號必須是8位數')
      .test('is-valid', '無效的統一編號', function (value) {
        const weights = [1, 2, 1, 2, 1, 2, 4, 1];
        const nums = value.split('').map(Number);
        let sum = 0;
        for (let i = 0; i < 8; i++) {
          const product = nums[i] * weights[i];
          sum += Math.floor(product / 10) + (product % 10);
        }
        return sum % 10 === 0 || (sum + nums[6]) % 10 === 0;
      }),
    capital: yup
      .number()
      .typeError('Capital must be a number')
      .required('Capital is required')
      .positive('Capital must be a positive number')
      .integer('Capital must be an integer'),
    phone: yup
      .string()
      .required('Phone number is required')
      .matches(/^09\d{8}$/, 'Invalid phone number'),
    founding_date: yup.string().required('請輸入正確企業設立日期'),
    representative: yup
      .string()
      .required('Representative is required')
      .matches(/^[\u4e00-\u9fa5]+$/, 'Representative must be in Chinese'),
    contact_address: yup.string().required('Contact address is required'),
    address: yup
      .object()
      .shape({
        additionalProp1: yup.string().required('Address is required'),
        additionalProp2: yup.string().required('Address is required'),
        additionalProp3: yup.string().required('Address is required'),
        additionalProp4: yup.string().required('Address is required'),
        additionalProp5: yup.string(),
        additionalProp6: yup.string(),
        additionalProp7: yup.string(),
        additionalProp8: yup.string(),
        additionalProp9: yup.string().required('Address is required'),
        additionalProp10: yup.string(),
        additionalProp11: yup.string(),
        additionalProp12: yup.string()
      })
      .required()
  })
  .required();

const CompanyInfoForm = ({ nextStep }: IProps) => {
  const [isChecked, setIsChecked] = useState(false);
  const [selectedCounty, setSelectedCounty] = useState<string | null>('基隆市');
  const [imageErrorMessage, setImageErrorMessage] = useState<string | null>(null);
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
      `${additionalProp1} ${additionalProp2} ${additionalProp3} ${additionalProp4} ${additionalProp5} ${additionalProp6} ${additionalProp7} ${additionalProp8} ${additionalProp9} ${additionalProp10} ${additionalProp11} ${additionalProp12}`,
      { shouldValidate: true }
    );
  };

  const onSubmit = handleSubmit(async (data) => {
    if (!uploadedDocs.length) return setImageErrorMessage('請上傳營業登記文件');
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
    const isSuccess = useCompanyStore.getState().isSuccess;
    if (isSuccess) nextStep(CompanyRegistrationSteps.REPRESENTATIVE_INFO_FORM);
    useCompanyStore.setState({ isSuccess: false });
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
              errorMessage="請輸入正確統一編號"
              size={InputSize.SMALL}
            />

            <CompanyInputField
              id="representative"
              isRequired={true}
              type="text"
              register={register}
              heading="代表人中文姓名"
              errors={errors}
              errorMessage="請輸入中文姓名"
              size={InputSize.SMALL}
            />

            <CompanyInputField
              id="capital"
              isRequired={true}
              type="text"
              register={register}
              heading="實收資本額"
              errors={errors}
              errorMessage="請輸入資本額數字"
              size={InputSize.SMALL}
            />

            <div className="flex gap-2.7 items-start mb-5.5">
              <label className="text-base text-black leading-5 text-right w-[128px] font-bold mt-1">
                核准設立日期 :
              </label>
              <div>
                <ReactDatePicker
                  dateFormat="yyyy/MM/dd"
                  selected={getValues('founding_date') ? new Date(getValues('founding_date')) : new Date()}
                  onChange={(date) => {
                    date && setValue('founding_date', date.toISOString().split('T')[0], { shouldValidate: true });
                  }}
                  className={classNames(
                    'rounded-full text-black shadow-company-registration-input bg-white  min-[1550px]:text-mdbase min-[1200px]:text-xs text-xs outline-none ',
                    'min-[1700px]:w-[368px] min-[1500px]:w-[320px] min-[1200px]:w-[270px] w-[220px] min-[1550px]:h-9.5 min-[1200px]:h-7.5 h-7  px-2 py-1'
                  )}
                  maxDate={new Date()}
                  showYearDropdown
                  dateFormatCalendar="MMMM"
                  yearDropdownItemNumber={40}
                  scrollableYearDropdown
                />
                {errors.founding_date?.message && (
                  <p className="text-xs mt-1 ml-2 text-bright-red">{errors.founding_date.message}</p>
                )}
              </div>
            </div>

            <div className="flex gap-2.7">
              <label className="text-black text-right font-semibold w-[128px] mb-5.2">公司登記地址 :</label>
              <div className="flex flex-col">
                <div className="absolute flex flex-col -translate-y-1.5">
                  <div className="flex flex-row my-1">
                    <select
                      id="address.additionalProp1"
                      {...register(`address.additionalProp1`, { required: true })}
                      className={classNames(
                        'min-[1700px]:w-23.2 min-[1550px]:w-20 w-19 min-[1550px]:text-mdbase min-[1200px]:text-xs text-xs',
                        Style
                      )}
                      defaultValue="縣市"
                      onChange={(e) => setSelectedCounty(e.target.value)}
                    >
                      {COUNTY_LIST?.map((county) => (
                        <option value={county.value} className="text-black">
                          {county.value}
                        </option>
                      ))}
                    </select>
                    <select
                      id="address.additionalProp2"
                      {...register(`address.additionalProp2`, { required: true })}
                      className={classNames(
                        'min-[1700px]:w-23.2 min-[1550px]:w-20 w-19 min-[1550px]:text-mdbase min-[1200px]:text-xs text-xs',
                        Style
                      )}
                    >
                      {URBAN_AREA_LIST?.filter((item) => item.slug === selectedCounty).map(({ value }) =>
                        value.map((item) => (
                          <option value={item} className="text-black">
                            {item}
                          </option>
                        ))
                      )}
                    </select>
                    <input
                      id="address.additionalProp3"
                      {...register(`address.additionalProp3`, { required: true })}
                      type="text"
                      className={classNames(
                        'min-[1700px]:w-16 min-[1550px]:w-14 min-[1200px]:w-13 w-12 mr-2 px-2',
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
                      className={classNames('px-2 min-[1700px]:w-36 min-[1550px]:w-33 min-[1200px]:w-31 w-29', Style, {
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
                              'min-[1700px]:w-15 min-[1550px]:w-13 min-[1200px]:w-10 w-9 mr-1.5 min-[1400px]:px-5 px-1 text-center',
                              Style
                              // {
                              //   'border-bright-red border':
                              //     errors.address &&
                              //     Object.prototype.hasOwnProperty.call(errors.address, id.replace('address.', ''))
                              // }
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
                              'min-[1700px]:w-15 min-[1550px]:w-13 min-[1200px]:w-10 w-9 mr-1.5 min-[1400px]:px-5 px-1 text-center',
                              Style,
                              idx === 0 && {
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
                  {(errors.address?.additionalProp1 ||
                    errors.address?.additionalProp2 ||
                    errors.address?.additionalProp3 ||
                    errors.address?.additionalProp4 ||
                    errors.address?.additionalProp9) && (
                    <p className="text-[#FF0000] text-xs font-normal">( 紅色框格請務必填寫 )</p>
                  )}
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
                  isRequired={true}
                  type="text"
                  register={register}
                  heading="會員聯絡地址"
                  errors={errors}
                  errorMessage="請提供公司聯絡地址"
                  size={InputSize.SMALL}
                />
              </div>
              <div className="flex gap-2.7">
                <label className="text-black text-right font-semibold col-span-1 mb-5.2 w-[128px]">
                  營業登記文件 :
                </label>
                <UploadCommercialDocuments
                  uploadedDocs={uploadedDocs}
                  setUploadedDocs={setUploadedDocs}
                  errorMessage={imageErrorMessage}
                  setErrorMessage={setImageErrorMessage}
                />
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
  'rounded-full text-black shadow-company-registration-input bg-white min-[1550px]:h-9.5 min-[1200px]:h-7.5 h-7 min-[1550px]:px-2 min-[1200px]:px-1.5 px-1 py-1 text-black min-[1550px]:text-mdbase min-[1200px]:text-xs text-xs outline-none';
const address_row_1 = ['鄰', '巷', '弄', '街'];
const address_row_2 = ['號之', ',', '樓之', '室'];
