import { yupResolver } from '@hookform/resolvers/yup';
import classNames from 'classnames';
import { ChangeEvent, useEffect, useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import { FieldErrors, FieldValues, useForm, UseFormRegister } from 'react-hook-form';
import * as yup from 'yup';
import { COOKIE_AUTH_NAME } from '@/store/user';
import { useCompanyStore } from '@/store/company';
import { InputSize } from '@/type';
import { CompanyRegistrationSteps } from '@/util/constants';
import { getCookie } from '@/util/helper';

import CustomButton from './CustomButton';
import UploadDocuments from './UploadDocuments';
interface IProps {
  nextStep: (val: number) => void;
}

export type RepresentativeFormTypes = {
  representative_country: string;
  representative_id_card_number: string;
  representative_birthday: string;
};

const schema = yup
  .object({
    representative_country: yup.string().required('representative country is required'),
    representative_id_card_number: yup
      .string()
      .required('身分證字號是必填的')
      .length(10, '身分證字號必須是10個字元')
      .matches(/^[A-Z][1-2]\d{8}$/, '無效的身分證字號'),
    representative_birthday: yup.string().required('請輸入正確日期')
  })
  .required();

const RepresentativeInfoForm = ({ nextStep }: IProps) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [uploadedDocs, setUploadedDocs] = useState<File[] | any>([]);
  const [selectedValue, setSelectedValue] = useState<string>('本國籍');
  const [date, setDate] = useState<string>('1');
  const [month, setMonth] = useState<string>('1');
  const [year, setYear] = useState<string>('2023');
  const [dateList, setDateList] = useState<string[]>(dates);
  const [region, setRegion] = useState<string>('台北市');
  const [cardIssue, setCardIssue] = useState<string>('台北市');
  const [imageErrorMessage, setImageErrorMessage] = useState<string | null>(null);

  // const companyId = useUserStore.getState().companyId;

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues
  } = useForm<RepresentativeFormTypes>({ resolver: yupResolver(schema) });

  const companyId = getCookie(COOKIE_AUTH_NAME);
  const updateCompany = useCompanyStore((state) => state.updateCompany);
  const getCompanyInfo = useCompanyStore((state) => state.getCompany);

  useEffect(() => {
    (async () => {
      if (!companyId) return;
      const data = await getCompanyInfo(companyId);
      if (!data) return;
      if (data.representative_country) setValue('representative_country', data.representative_country);
      if (data.representative_id_card_number)
        setValue('representative_id_card_number', data.representative_id_card_number);
      if (data.representative_birthday) setValue('representative_birthday', data.representative_birthday);
      if (data.representative_id_card_issue_date) {
        const date = new Date(data.representative_id_card_issue_date);
        setYear(date.getFullYear().toString());
        setMonth((date.getMonth() + 1).toString());
        setDate(date.getDate().toString());
      }
      if (data.representative_id_card_issue_location) {
        const location = data.representative_id_card_issue_location.split(',');
        setRegion(location[0]);
        setCardIssue(location[1]);
      }
      if (data.representative_id_card_front && data.representative_id_card_back) {
        setUploadedDocs([data.representative_id_card_front, data.representative_id_card_back]);
      }
    })();
  }, []);

  const onSubmit = handleSubmit(async (data) => {
    try {
      if (uploadedDocs.length < 2) return setImageErrorMessage('請上傳身分證正反面圖檔');
      if (!companyId) return;
      const formData = new FormData();
      formData.append('representative_country', data.representative_country);
      formData.append('representative_id_card_number', data.representative_id_card_number);
      formData.append(
        'representative_id_card_issue_date',
        new Date(parseInt(year), parseInt(month) - 1, parseInt(date)).toISOString()
      );
      formData.append('representative_id_card_issue_location', `${region},${cardIssue}`);
      formData.append('representative_birthday', data.representative_birthday);
      if (typeof uploadedDocs[0] !== 'string' && typeof uploadedDocs[1] !== 'string' && uploadedDocs.length === 2) {
        formData.append('representative_id_card_front', uploadedDocs?.[0]);
        formData.append('representative_id_card_back', uploadedDocs?.[1]);
      }
      await updateCompany(companyId, formData);
      const isSuccess = useCompanyStore.getState().isSuccess;
      if (isSuccess) nextStep(CompanyRegistrationSteps.FINANCIAL_INFO_FORM);
      useCompanyStore.setState({ isSuccess: false });
    } catch (error) {
      console.log(error);
    }
  });

  // Attach onChange event handlers to the radio buttons
  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="mx-auto px-5 w-[570px]">
        <div className="flex flex-row mb-7">
          <h1 className="text-navy-blue text-2.5xl flex flex-row">
            <div className="bg-navy-blue px-0.5 h-full" />
            &nbsp;請填寫企業資料
          </h1>
        </div>
        <div>
          <div className="flex gap-2.7 mb-5.5">
            <p className="text-base text-black w-[144px] text-right">代表人國籍: </p>
            <div>
              <div className="flex gap-2.7 my-1">
                <div className="flex gap-0.5 items-center">
                  <input
                    type="radio"
                    {...register('representative_country')}
                    value="本國籍"
                    defaultChecked={true}
                    className="border-navy-blue w-3.2 checked:bg-navy-blue"
                    onChange={handleRadioChange}
                  />
                  <label className="text-xs font-bold">本國籍</label>
                </div>
                <div className="flex gap-0.5 items-center">
                  <input
                    type="radio"
                    {...register('representative_country')}
                    value="外國籍"
                    className="border-navy-blue w-3.2 checked:bg-navy-blue"
                    onChange={handleRadioChange}
                  />
                  <label className="text-xs font-bold">外國籍</label>
                </div>
              </div>

              {/* <SimpleSelect
                register={register}
                id="representative_id_card_number"
                className="w-[286px]"
                options={selectedValue === '本國籍' ? ['國民身分證'] : ['護照']}
              /> */}
            </div>
          </div>

          <LabelInput
            register={register}
            type="text"
            id="representative_id_card_number"
            isRequired={true}
            heading={selectedValue === '本國籍' ? '代表人身分證字號' : '代表人護照號碼'}
            placeholder={selectedValue === '本國籍' ? '請輸入代表人身分證字號' : '請輸入代表人護照號碼'}
            errors={errors}
            errorMessage={selectedValue === '本國籍' ? '請輸入正確身分證字號' : '請輸入正確護照號碼'}
          />

          <div className="flex gap-2.7 mb-5.5 items-center">
            <p className="text-base text-black w-[144px] text-right">
              {selectedValue === '本國籍' ? '身分證發證日期' : '發照日期:'}
            </p>
            <div className="flex justify-between w-[286px] items-center">
              <select
                className="rounded-full text-black font-bold shadow-company-registration-input bg-white h-7.5 text-xs py-2 px-3.5 outline-none w-21.7"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              >
                {yearArray.map((year) => (
                  <option key={year} value={year} className="text-black">
                    {year}
                  </option>
                ))}
              </select>
              <select
                className="rounded-full text-black font-bold shadow-company-registration-input bg-white h-7.5 text-xs py-2 px-3.5 outline-none w-21.7"
                value={month}
                onChange={(e) => {
                  setMonth(e.target.value);
                  const value = e.target.value;
                  if (value === '2') {
                    setDateList(Array.from({ length: 28 }, (_, i) => (i + 1).toString()));
                  } else if (value === '4' || value === '6' || value === '9' || value === '11') {
                    setDateList(Array.from({ length: 30 }, (_, i) => (i + 1).toString()));
                  } else {
                    const a = Array.from({ length: 31 }, (_, i) => (i + 1).toString());
                    setDateList(a);
                  }
                }}
              >
                {months.map((month) => (
                  <option key={month} value={month} className="text-black">
                    {month}
                  </option>
                ))}
              </select>
              <select
                className="rounded-full text-black font-bold shadow-company-registration-input bg-white h-7.5 text-xs py-2 px-3.5 outline-none w-21.7"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              >
                {dateList.map((item) => (
                  <option key={item} value={item} className="text-black">
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex gap-2.7 mb-5.5 items-center">
            <p className="text-base text-black w-[144px] text-right">
              {selectedValue === '本國籍' ? '身分證發證地點:' : '發照機關:'}
            </p>

            <select
              className="rounded-full text-black font-bold shadow-company-registration-input bg-white 7.5 text-xs py-2 px-3.5 outline-none w-21.7"
              value={region}
              onChange={(e) => setRegion(e.target.value)}
            >
              {regionCityLocation.map((item) => (
                <option key={item} value={item} className="text-black">
                  {item}
                </option>
              ))}
            </select>
            <select
              className="rounded-full text-black font-bold shadow-company-registration-input bg-white h-7.5 text-xs py-2 px-3.5 outline-none w-21.7"
              value={cardIssue}
              onChange={(e) => setCardIssue(e.target.value)}
            >
              {['初發', '補發', '換發'].map((issue) => (
                <option key={issue} value={issue} className="text-black">
                  {issue}
                </option>
              ))}
            </select>
          </div>

          <div className="flex gap-2.7 items-start mb-5.5">
            <label className="text-base text-black leading-5 text-right w-36 mt-1">
              {selectedValue === '本國籍' ? '出生年月日:' : '出生日期:'}
            </label>
            <div>
              <ReactDatePicker
                dateFormat="yyyy/MM/dd"
                selected={
                  getValues('representative_birthday') ? new Date(getValues('representative_birthday')) : new Date()
                }
                onChange={(date) => {
                  date &&
                    setValue('representative_birthday', date.toISOString().split('T')[0], { shouldValidate: true });
                }}
                className={classNames(
                  'rounded-full text-black shadow-company-registration-input bg-white  min-[1550px]:text-mdbase min-[1200px]:text-xs text-xs outline-none ',
                  'min-[1700px]:w-[368px] min-[1500px]:w-[320px] min-[1200px]:w-[270px] w-[220px] min-[1550px]:h-9.5 h-7.5  px-2 py-1'
                )}
                maxDate={new Date()}
                showYearDropdown
                dateFormatCalendar="MMMM"
                yearDropdownItemNumber={100}
                scrollableYearDropdown
              />
              {errors.representative_birthday?.message && (
                <p className="text-xs mt-1 ml-2 text-bright-red">{errors.representative_birthday.message}</p>
              )}
            </div>
          </div>

          <div className="flex gap-2.7">
            <p className="text-black text-base min-w-[144px] text-right">
              {selectedValue === '本國籍' ? '身分證文件上傳:' : '護照文件上傳:'}
            </p>
            <UploadDocuments
              uploadedDocs={uploadedDocs}
              setUploadedDocs={setUploadedDocs}
              errorMessage={imageErrorMessage}
              setErrorMessage={setImageErrorMessage}
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-7 right-5 flex gap-2">
        <CustomButton
          className="px-4.5 py-0.7 font-bold  rounded-md border border-navy-blue"
          variant="secondary"
          type="button"
          onClick={() => {
            nextStep(CompanyRegistrationSteps.COMPANY_INFO_FORM);
          }}
        >
          修改 | 上一步
        </CustomButton>
        <CustomButton className="text-white bg-navy-blue px-4.5 py-0.7 font-bold rounded-md " type="submit">
          儲存 | 下一步
        </CustomButton>
      </div>
    </form>
  );
};

export default RepresentativeInfoForm;

interface LabelInputProps {
  id: string;
  isRequired: boolean;
  type: string;
  placeholder?: string;
  register: UseFormRegister<RepresentativeFormTypes>;
  errors?: FieldErrors<FieldValues>;
  heading: string;
  errorMessage?: string;
  size?: InputSize;
}

const LabelInput = ({
  id,
  type,
  placeholder,
  register,
  errors,
  heading,
  isRequired,
  errorMessage,
  size
}: LabelInputProps) => {
  return (
    <div className="mb-5.5">
      <div className="flex gap-2.7 items-center ">
        <label
          className={classNames('text-base text-black leading-5 text-right', {
            'w-[144px]': size === undefined || size === InputSize.MEDIUM,
            'w-[128px] font-bold': size === InputSize.SMALL
          })}
        >
          {heading} :
        </label>
        <input
          className={classNames(
            'rounded-full text-black shadow-company-registration-input bg-white  min-[1550px]:text-mdbase min-[1200px]:text-xs text-xs outline-none ',
            {
              'w-[286px] h-7.5 px-2 py-1': size === undefined || size === InputSize.MEDIUM,
              'min-[1700px]:w-[368px] min-[1500px]:w-[320px] min-[1200px]:w-[270px] w-[220px] min-[1550px]:h-9.5 h-7.5  px-2 py-1':
                size === InputSize.SMALL
            }
          )}
          {...register(id as 'representative_country' | 'representative_id_card_number' | 'representative_birthday', {
            required: isRequired
          })}
          placeholder={placeholder}
          type={type}
        />
      </div>
      <div className="flex">
        <div
          className={classNames({
            'w-[160px]': size === InputSize.MEDIUM || size === undefined,
            'w-[145px]': size === InputSize.SMALL
          })}
        />
        {errors && errors[id] && <p className="text-xs mt-1 ml-2 text-bright-red">{errorMessage}</p>}
      </div>
    </div>
  );
};
const regionCityLocation = [
  '台北市',
  '新北市',
  '基隆市',
  '新竹市',
  '桃園市',
  '新竹縣',
  '宜蘭縣',
  '臺中市',
  '苗栗縣',
  '彰化縣',
  '南投縣',
  '雲林縣',
  '高雄市',
  '臺南市',
  '嘉義市',
  '嘉義縣',
  '屏東縣',
  '澎湖縣',
  '花蓮縣',
  '臺東縣',
  '金門縣',
  '連江縣'
];
const months = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
const dates = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
  '20',
  '21',
  '22',
  '23',
  '24',
  '25',
  '26',
  '27',
  '28',
  '29',
  '30',
  '31'
];
const yearArray = Array.from({ length: 124 }, (_, index) => 1900 + index);
