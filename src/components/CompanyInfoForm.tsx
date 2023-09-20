/* eslint-disable no-debugger */
import 'react-datepicker/dist/react-datepicker.css';

import { yupResolver } from '@hookform/resolvers/yup';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { useCompanyStore } from '@/store/company';
import { COOKIE_AUTH_NAME } from '@/store/user';
import { InputSize } from '@/type';
import { CompanyRegistrationSteps, COUNTY_LIST, REGION_AREA_LIST, URBAN_AREA_LIST } from '@/util/constants';
import { getCookie } from '@/util/helper';

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
  // address: {
  //   additionalProp1: string;
  //   additionalProp2: string;
  //   additionalProp3: string;
  //   additionalProp4: string;
  // };
  // contact_address: {
  //   additionalProp1: string;
  //   additionalProp2: string;
  //   additionalProp3: string;
  //   additionalProp4: string;
  // };
  // // contact_address: string;
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
        const nums = value?.split('').map(Number);
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
    founding_date: yup
      .string()
      .default(() => new Date().toISOString().slice(0, 10))
      .required('請輸入正確企業設立日期'),

    representative: yup
      .string()
      .required('Representative is required')
      .matches(/^[\u4e00-\u9fa5]+$/, 'Representative must be in Chinese')
    // contact_address: yup.string().required('Contact address is required'),
    // address: yup
    //   .object()
    //   .shape({
    //     additionalProp1: yup.string().required('Address is required'),
    //     additionalProp2: yup.string().required('Address is required'),
    //     additionalProp3: yup.string().required('Address is required'),
    //     additionalProp4: yup.string().required('Address is required')
    //   })
    //   .required(),
    // contact_address: yup
    //   .object()
    //   .shape({
    //     additionalProp1: yup.string().required('Address is required'),
    //     additionalProp2: yup.string().required('Address is required'),
    //     additionalProp3: yup.string().required('Address is required'),
    //     additionalProp4: yup.string().required('Address is required')
    //   })
    //   .required()
  })
  .required();

interface ICountyAddress {
  value: string;
  slug?: string;
}
interface IUrbanAddress {
  value: string[];
  slug?: string;
}

const CompanyInfoForm = ({ nextStep }: IProps) => {
  const [isChecked, setIsChecked] = useState(false);
  // const [selectedCounty, setSelectedCounty] = useState<string | null>('基隆市');
  // const [contactSelectedCounty, setContactSelectedCounty] = useState<string | null>('基隆市');
  // const [selectedRegion, setSelectedRegion] = useState<string | null>('仁愛區');
  // const [selectedContactRegion, setSelectedContactRegion] = useState<string | null>('仁愛區');
  const [imageErrorMessage, setImageErrorMessage] = useState<string | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [uploadedDocs, setUploadedDocs] = useState<File[] | any>([]);
  const [firstAddress, setFirstAddress] = useState<string>(COUNTY_LIST[0].value);
  const [secondAddress, setSecondAddress] = useState<string>(URBAN_AREA_LIST[0].value[0]);
  const [thirdAddress, setThirdAddress] = useState<string>(REGION_AREA_LIST[0].value);
  const [fourthAddress, setFourthAddress] = useState<string>('');
  const [contactFirstAddress, setContactFirstAddress] = useState<string>(COUNTY_LIST[0].value);
  const [contactSecondAddress, setContactSecondAddress] = useState<string>(URBAN_AREA_LIST[0].value[0]);
  const [contactThirdAddress, setContactThirdAddress] = useState<string>(REGION_AREA_LIST[0].value);
  const [contactFourthAddress, setContactFourthAddress] = useState<string>('');
  const [addressError, setAddressError] = useState<boolean>(false);
  const [contactAddressError, setContactAddressError] = useState<boolean>(false);
  const [countyList] = useState<ICountyAddress[]>(COUNTY_LIST);
  const [urbanAreaList, setUrbanAreaList] = useState<IUrbanAddress[]>(URBAN_AREA_LIST);
  const [contactUrbanAreaList] = useState<IUrbanAddress[]>(URBAN_AREA_LIST);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue
  } = useForm<FormValues>({ resolver: yupResolver(schema) });

  // const companyId = useUserStore.getState().companyId;
  const companyId = getCookie(COOKIE_AUTH_NAME);
  const createCompany = useCompanyStore((state) => state.createCompany);
  const updateCompany = useCompanyStore((state) => state.updateCompany);
  const getCompanyInfo = useCompanyStore((state) => state.getCompany);

  useEffect(() => {
    (async () => {
      if (!companyId) return;
      const data = await getCompanyInfo(companyId);
      if (!data) return;
      // update form value
      if (data.name) setValue('name', data.name);
      if (data.registration_number) setValue('registration_number', data.registration_number);
      if (data.capital) setValue('capital', data.capital);
      if (data.phone) setValue('phone', data.phone);
      if (data.founding_date) setValue('founding_date', data.founding_date);
      if (data.representative) setValue('representative', data.representative);
      if (data.contact_address) {
        const contactAddress = data.contact_address.split(',');
        setContactFirstAddress(contactAddress[0].trim());
        setContactSecondAddress(contactAddress[1].trim());
        setContactThirdAddress(contactAddress[2].trim());
        setContactFourthAddress(contactAddress[3].trim());
      }

      if (data.address) {
        const address1 = data.address?.additionalProp1?.split(',');
        const address2 = data.address?.additionalProp2?.split(',');
        const address3 = data.address?.additionalProp3?.split(',');
        setFirstAddress(address1[0].trim());
        setSecondAddress(address1[1].trim());
        setThirdAddress(address2[0].trim());
        setFourthAddress(address3[0].trim());
      }
      if (data.registration_document.length) setUploadedDocs(data.registration_document);
      if (data.address && data.contact_address) {
        const address1 = data.address?.additionalProp1?.split(',');
        const address2 = data.address?.additionalProp2?.split(',');
        const address3 = data.address?.additionalProp3?.split(',');
        const contactAddress = data.contact_address.split(',');
        if (
          address1[0]?.trim() === contactAddress[0]?.trim() &&
          address1[1]?.trim() === contactAddress[1]?.trim() &&
          address2[0]?.trim() === contactAddress[2]?.trim() &&
          address3[0]?.trim() === contactAddress[3]?.trim()
        ) {
          setIsChecked(true);
        }
      }
    })();
  }, []);

  const handleGetValue = (value: boolean) => {
    setIsChecked(!isChecked);
    if (!value) return;
    if (value) {
      setContactFirstAddress(firstAddress);
      setContactSecondAddress(secondAddress);
      setContactThirdAddress(thirdAddress);
      setContactFourthAddress(fourthAddress);
    }
  };

  const onSubmit = handleSubmit(async (data) => {
    if (!firstAddress || !secondAddress || !thirdAddress || !fourthAddress) {
      return setAddressError(true);
    }
    if (!contactFirstAddress || !contactSecondAddress || !contactThirdAddress || !contactFourthAddress) {
      return setContactAddressError(true);
    }
    if (!uploadedDocs.length) return setImageErrorMessage('請上傳營業登記文件');
    const dataToSubmit = {
      id: 0,
      name: data.name,
      registration_number: data.registration_number,
      phone: data.phone,
      representative: data.representative,
      capital: Number(data.capital),
      founding_date: data.founding_date,
      contact_address: `${contactFirstAddress}, ${contactSecondAddress}, ${contactThirdAddress}, ${contactFourthAddress}`,
      address: {
        additionalProp1: `${firstAddress}, ${secondAddress}`,
        additionalProp2: `${thirdAddress}`,
        additionalProp3: `${fourthAddress}`
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
    for (const img of uploadedDocs) {
      formData.append('registration_document', img);
    }
    if (companyId) {
      await updateCompany(companyId, formData);
    } else {
      await createCompany(formData);
    }
    const isSuccess = await useCompanyStore.getState().isSuccess;
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
                    date && setValue('founding_date', date?.toISOString()?.split('T')[0], { shouldValidate: true });
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
                      className={classNames(
                        'min-[1700px]:w-23.2 min-[1550px]:w-20 w-19 min-[1550px]:text-mdbase min-[1200px]:text-xs text-xs',
                        Style
                      )}
                      value={firstAddress}
                      onChange={(e) => {
                        setFirstAddress(e.target.value);
                        const urbanArea = URBAN_AREA_LIST?.find((item) => item.slug === e.target.value);
                        const postalCode = REGION_AREA_LIST?.find((item) => item.slug === urbanArea?.value[0]);
                        setThirdAddress(postalCode?.value || '');
                        if (isChecked && contactSecondAddress) {
                          // setContactFirstAddress(e.target.value);
                          setIsChecked(false);
                        }
                        setUrbanAreaList([
                          {
                            value: urbanArea?.value || [],
                            slug: urbanArea?.slug
                          }
                        ]);
                      }}
                    >
                      {countyList?.map((county) => (
                        <option value={county.value} className="text-black">
                          {county.value}
                        </option>
                      ))}
                    </select>
                    <select
                      className={classNames(
                        'min-[1700px]:w-23.2 min-[1550px]:w-20 w-19 min-[1550px]:text-mdbase min-[1200px]:text-xs text-xs',
                        Style
                      )}
                      id="selectCompanyArea"
                      defaultValue={secondAddress}
                      value={secondAddress}
                      onChange={(e) => {
                        setSecondAddress(e.target.value);
                        const postalCode = REGION_AREA_LIST?.find((item) => item.slug === e.target.value);
                        setThirdAddress(postalCode?.value || '');
                        if (isChecked && contactSecondAddress) {
                          setIsChecked(false);
                        }
                      }}
                    >
                      {urbanAreaList
                        ?.filter((item) => item.slug === firstAddress)
                        .map(({ value }) => {
                          return value.map((x) => (
                            <option value={x} className="text-black">
                              {x}
                            </option>
                          ));
                        })}
                    </select>
                    <input
                      type="text"
                      placeholder="郵遞區號"
                      className={classNames('w-24 px-3', Style, {})}
                      value={thirdAddress}
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="詳細地址"
                    className={classNames(
                      'mt-1 rounded-full text-black shadow-company-registration-input bg-white  min-[1550px]:text-mdbase min-[1200px]:text-xs text-xs outline-none ',
                      {
                        'w-[286px] h-9 px-2 py-3.5': InputSize.MEDIUM,
                        'min-[1700px]:w-[368px] min-[1500px]:w-[320px] min-[1200px]:w-[270px] w-[220px] min-[1550px]:h-9.5 min-[1200px]:h-7.5 h-7  px-2 py-1':
                          InputSize.SMALL
                      }
                    )}
                    value={fourthAddress}
                    onChange={(e) => {
                      setFourthAddress(e.target.value);
                      if (isChecked && contactFourthAddress) {
                        setIsChecked(false);
                      }
                    }}
                  />
                  {addressError && <p className="text-[#FF0000] text-xs font-normal">( 紅色框格請務必填寫 )</p>}
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
                {/* <CompanyInputField
                  id="contact_address"
                  isRequired={true}
                  type="text"
                  register={register}
                  heading="聯絡地址"
                  errors={errors}
                  errorMessage="請提供公司聯絡地址"
                  size={InputSize.SMALL}
                /> */}
                <div className="pt-4 pb-14">
                  <div className="flex">
                    <label className="text-black text-right font-semibold w-[128px] mb-5.2">聯絡地址 :</label>
                    <div className="flex flex-col">
                      <div className="absolute flex flex-col -translate-y-1.5 ml-2">
                        <div className="flex flex-row my-1">
                          <select
                            className={classNames(
                              'min-[1700px]:w-23.2 min-[1550px]:w-20 w-19 min-[1550px]:text-mdbase min-[1200px]:text-xs text-xs',
                              Style
                            )}
                            value={contactFirstAddress}
                            onChange={(e) => {
                              setContactFirstAddress(e.target.value);
                              const urbanArea = URBAN_AREA_LIST?.find((item) => item.slug === e.target.value);
                              const postalCode = REGION_AREA_LIST?.find((item) => item.slug === urbanArea?.value[0]);
                              setContactThirdAddress(postalCode?.value || '');
                            }}
                          >
                            {countyList?.map((county) => (
                              <option value={county.value} className="text-black">
                                {county.value}
                              </option>
                            ))}
                          </select>
                          <select
                            className={classNames(
                              'min-[1700px]:w-23.2 min-[1550px]:w-20 w-19 min-[1550px]:text-mdbase min-[1200px]:text-xs text-xs',
                              Style
                            )}
                            value={contactSecondAddress}
                            onChange={(e) => {
                              setContactSecondAddress(e.target.value);
                              setIsChecked(false);
                              const postalCode = REGION_AREA_LIST?.find((item) => item.slug === e.target.value);
                              setContactThirdAddress(postalCode?.value || '');
                            }}
                          >
                            {contactUrbanAreaList
                              ?.filter((item) => item.slug === contactFirstAddress)
                              .map(({ value }) =>
                                value.map((item) => (
                                  <option value={item} className="text-black">
                                    {item}
                                  </option>
                                ))
                              )}
                          </select>
                          <input
                            type="text"
                            placeholder="郵遞區號"
                            className={classNames('w-24 px-3', Style, {
                              // 'border-bright-red border': errors.contact_address?.additionalProp3
                            })}
                            value={contactThirdAddress}
                          />
                        </div>
                        <input
                          type="text"
                          placeholder="詳細地址"
                          className={classNames(
                            'mt-1 rounded-full text-black shadow-company-registration-input bg-white  min-[1550px]:text-mdbase min-[1200px]:text-xs text-xs outline-none ',
                            {
                              'w-[286px] h-9 px-2 py-3.5': InputSize.MEDIUM,
                              'min-[1700px]:w-[368px] min-[1500px]:w-[320px] min-[1200px]:w-[270px] w-[220px] min-[1550px]:h-9.5 min-[1200px]:h-7.5 h-7  px-2 py-1':
                                InputSize.SMALL
                            }
                          )}
                          value={contactFourthAddress}
                          onChange={(e) => {
                            setContactFourthAddress(e.target.value);
                          }}
                        />
                        {contactAddressError && (
                          <p className="text-[#FF0000] text-xs font-normal pt-1">( 紅色框格請務必填寫 )</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
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
  'rounded-full text-black shadow-company-registration-input bg-white min-[1550px]:h-9.5 min-[1200px]:h-7.5 h-7 min-[1550px]:px-2 min-[1200px]:px-2 px-1 py-1 text-black min-[1550px]:text-mdbase min-[1200px]:text-xs text-xs outline-none';
