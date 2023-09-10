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

  const selectedCity = getValues('address');
  console.log('selectedCity', selectedCity?.additionalProp1);
  const handleGetValue = (value: boolean) => {
    setIsChecked(!isChecked);
    const address = getValues('address');
    console.log('address', address);
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
                      {Object.keys(obj).map((city, idx) => {
                        return (
                          <option key={idx} value={city} className="text-black">
                            {city}
                          </option>
                        );
                      })}
                    </select>
                    <select
                      id="address.additionalProp2"
                      {...register(`address.additionalProp2`, { required: true })}
                      className={classNames(
                        'min-[1700px]:w-23.2 min-[1550px]:w-20 w-19 min-[1550px]:text-mdbase min-[1200px]:text-xms text-xxs',
                        Style
                      )}
                      defaultValue="鄉鎮市區"
                    >
                      {selectedCity &&
                        obj[selectedCity.additionalProp1].map((city, idx) => {
                          return (
                            <option key={idx} value={city[idx]} className="text-black">
                              {city[idx]}
                            </option>
                          );
                        })}
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
// const cities = ["基隆市","台北市"];
// const regions_0 = ["仁愛區","信義區","中正區","中山區","安樂區","暖暖區","七堵區"]
// const regions_1 = ["中正區","大同區","中山區","松山區","大安區","萬華區","信義區","士林區","北投區","內湖區","南港區","文山區"];
const obj = {
  基隆市: ['仁愛區', '信義區', '中正區', '中山區', '安樂區', '暖暖區', '七堵區'],
  台北市: [
    '中正區',
    '大同區',
    '中山區',
    '松山區',
    '大安區',
    '萬華區',
    '信義區',
    '士林區',
    '北投區',
    '內湖區',
    '南港區',
    '文山區'
  ],
  新北市: [
    '萬里區',
    '金山區',
    '板橋區',
    '汐止區',
    '深坑區',
    '石碇區',
    '瑞芳',
    '平溪',
    '雙溪',
    '貢寮',
    '新店',
    '坪林',
    '烏來',
    '永和',
    '中和',
    '土城',
    '三峽',
    '樹林',
    '鶯歌',
    '三重',
    '新莊',
    '泰山',
    '林口',
    '蘆洲',
    '五股',
    '八里',
    '淡水',
    '三芝',
    '石門'
  ],
  桃園市: [
    '中壢區',
    '平鎮區',
    '龍潭區',
    '楊梅區',
    '新屋區',
    '觀音區',
    '桃園區',
    '龜山區',
    '八德區',
    '大溪區',
    '復興區',
    '大園區',
    '蘆竹區'
  ],
  新竹市: ['東區', '北區', '香山區'],
  新竹縣: [
    '竹北市',
    '湖口鄉',
    '新豐鄉',
    '新埔鎮',
    '關西鎮',
    '芎林鄉',
    '寶山鄉',
    '竹東鎮',
    '五峰鄉',
    '橫山鄉',
    '尖石鄉',
    '北埔鄉',
    '峨眉鄉'
  ],
  苗栗縣: [
    '竹南鎮',
    '頭份市',
    '三灣鄉',
    '南庄鄉',
    '龍潭鄉',
    '後龍鎮',
    '通霄鎮',
    '苑裡鎮',
    '苗栗市',
    '造橋鄉',
    '頭屋鄉',
    '公館鄉',
    '大湖鄉',
    '泰安鄉',
    '銅鑼鄉',
    '三義鄉',
    '西湖鄉',
    '卓蘭鎮'
  ],
  台中市: [
    '中區',
    '東區',
    '南區',
    '西區',
    '北區',
    '北屯區',
    '西屯區',
    '南屯區',
    '太平區',
    '大里區',
    '霧峰區',
    '烏日區',
    '豐原區',
    '后里區',
    '石岡區',
    '東勢區',
    '和平區',
    '新社區',
    '潭子區',
    '大雅區',
    '神岡區',
    '大肚區',
    '沙鹿區',
    '龍井區',
    '梧棲區',
    '清水區',
    '大甲區',
    '外埔區',
    '大安區'
  ],
  彰化縣: [
    '彰化市',
    '芬園鄉',
    '花壇鄉',
    '秀水鄉',
    '鹿港鎮',
    '福興鄉',
    '線西鄉',
    '和美鎮',
    '伸港鄉',
    '員林市',
    '社頭鄉',
    '永靖鄉',
    '埔心鄉',
    '溪湖鎮',
    '大村鄉',
    '埔鹽鄉',
    '田中鎮',
    '北斗鎮',
    '田尾鄉',
    '埤頭香',
    '溪州鄉',
    '竹塘鄉',
    '二林鎮',
    '大城鄉',
    '芳苑鄉',
    '二水鄉'
  ],
  南投縣: [
    '南投市',
    '中寮鄉',
    '草屯鎮',
    '國姓鄉',
    '埔里鎮',
    '仁愛鄉',
    '名間鄉',
    '集集鎮',
    '水里鄉',
    '魚池鄉',
    '信義鄉',
    '竹山鎮',
    '鹿谷鄉'
  ],
  雲林縣: [
    '斗南鎮',
    '大埤鄉',
    '虎尾鎮',
    '土庫鎮',
    '褒忠鄉',
    '東勢鄉',
    '臺西鄉',
    '崙背鄉',
    '麥寮鄉',
    '斗六市',
    '林內鄉',
    '古坑鄉',
    '莿桐鄉',
    '西螺鎮',
    '二崙鄉',
    '北港鎮',
    '水林鄉',
    '口湖鄉',
    '四湖鄉',
    '元長鄉'
  ],
  嘉義市: ['東區', '西區'],
  嘉義縣: [
    '番路鄉',
    '梅山鄉',
    '竹崎鄉',
    '阿里山鄉',
    '中埔鄉',
    '大埔鄉',
    '水上鄉',
    '鹿草鄉',
    '太保市',
    '朴子市',
    '東石鄉',
    '六腳鄉',
    '新港鄉',
    '民雄鄉',
    '大林鄉',
    '溪口鄉',
    '義竹鄉',
    '布袋鎮'
  ],
  台南市: [
    '中西區',
    '東區',
    '南區',
    '北區',
    '安平區',
    '安南區',
    '永康區',
    '歸仁區',
    '新化區',
    '左鎮區',
    '玉井區',
    '楠西區',
    '南化區',
    '仁德區',
    '關廟區',
    '龍崎區',
    '官田區',
    '麻豆區',
    '佳里區',
    '西港區',
    '七股區',
    '將軍區',
    '學甲區',
    '北門區',
    '新營區',
    '後壁區',
    '白河區',
    '東山區',
    '六甲區',
    '下營區',
    '柳營區',
    '鹽水區',
    '善化區',
    '大內區',
    '山上區',
    '新市區',
    '安定區'
  ],
  高雄市: [
    '新興區',
    '前金區',
    '苓雅區',
    '鹽埕區',
    '鼓山區',
    '旗津區',
    '前鎮區',
    '三民區',
    '楠梓區',
    '小港區',
    '左營區',
    '仁武區',
    '大社區',
    '東沙群島',
    '南沙群島',
    '岡山區',
    '路竹區',
    '阿蓮區',
    '田寮區',
    '燕巢區',
    '橋頭區',
    '梓官區',
    '彌陀區',
    '永安區',
    '湖內區',
    '鳳山區',
    '大寮區',
    '林園區',
    '鳥松區',
    '大樹區',
    '旗山區',
    '美濃區',
    '六龜區',
    '內門區',
    '杉林區',
    '甲仙區',
    '桃源區',
    '那瑪夏區',
    '茂林區',
    '茄萣區'
  ],
  屏東縣: [
    '屏東市',
    '三地門鄉',
    '霧臺鄉',
    '瑪家鄉',
    '九如鄉',
    '里港鄉',
    '高樹鄉',
    '鹽埔鄉',
    '長治鄉',
    '麟洛鄉',
    '竹田鄉',
    '內埔鄉',
    '萬丹鄉',
    '潮州鎮',
    '泰武鄉',
    '來義鄉',
    '萬巒鄉',
    '崁頂鄉',
    '新埤鄉',
    '南州鄉',
    '林邊鄉',
    '東港鎮',
    '琉球鄉',
    '佳冬鄉',
    '新園鄉',
    '枋寮鄉',
    '枋山鄉',
    '春日鄉',
    '獅子鄉',
    '車城鄉',
    '牡丹鄉',
    '恆春鎮',
    '滿州鄉'
  ],
  台東縣: [
    '台東市',
    '綠島鄉',
    '蘭嶼鄉',
    '延平鄉',
    '卑南鄉',
    '鹿野鄉',
    '關山鎮',
    '海端鄉',
    '池上鄉',
    '東河鄉',
    '成功鎮',
    '長濱鄉',
    '太麻里鄉',
    '金峰鄉',
    '大武鄉',
    '達仁鄉'
  ],
  花蓮縣: [
    '花蓮市',
    '新城鄉',
    '秀林鄉',
    '吉安鄉',
    '壽豐鄉',
    '鳳林鎮',
    '光復鄉',
    '豐濱鄉',
    '瑞穗鄉',
    '萬榮鄉',
    '玉里鎮',
    '卓溪鄉',
    '富里鄉'
  ],
  宜蘭縣: [
    '花蓮市',
    '新城鄉',
    '秀林鄉',
    '吉安鄉',
    '壽豐鄉',
    '鳳林鎮',
    '光復鄉',
    '豐濱鄉',
    '瑞穗鄉',
    '萬榮鄉',
    '玉里鎮',
    '卓溪鄉',
    '富里鄉'
  ],
  澎湖縣: ['馬公市', '西嶼鄉', '望安鄉', '七美鄉', '白沙鄉', '湖西鄉'],
  金門縣: ['金沙鎮', '金湖鎮', '金寧鄉', '金城鎮', '烈嶼鄉', '烏坵鄉'],
  連江縣: ['南竿鄉', '北竿鄉', '莒光鄉', '東引鄉']
};

