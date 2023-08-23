import classNames from 'classnames';
import { FieldValues, useForm, UseFormRegister } from 'react-hook-form';

import CompanyDocumentUpload from './CompanyDocumentUpload';
import LabelInput from './LabelInput';
import SubmitButton from './SubmitButton';
interface IProps {
  nextStep: (val: number) => void;
}

const RepresentativeInfoForm = ({ nextStep }: IProps) => {
  const { register, handleSubmit } = useForm();
  return (
    <form
      onSubmit={handleSubmit((data: FieldValues) => {
        console.log(data);
        nextStep(2);
      })}
    >
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
                <RadioOption label="本國籍" id="nationality" register={register} />
                <RadioOption label="外國籍" id="foreign_nationality" register={register} />
                <RadioOption label="法人" id="legal_person" register={register} />
              </div>
              <SimpleSelect
                register={register}
                id="national-card"
                className="w-[286px]"
                options={['國民身分證', '國民身分證', '國民身分證']}
              />
            </div>
          </div>
          <LabelInput
            register={register}
            type="text"
            id="id_number"
            isRequired={false}
            heading="代表人身分證字號"
            placeholder="請輸入代表人身分證字號"
          />
          <div className="flex gap-2.7 mb-5.5 items-center">
            <p className="text-base text-black w-[144px] text-right">身分證發證日期: </p>
            <div className="flex justify-between w-[286px] items-center">
              <SimpleSelect register={register} id="year" className="w-21.7" options={['年']} />
              /
              <SimpleSelect register={register} id="month" className="w-21.7" options={['年']} />
              /
              <SimpleSelect register={register} id="day" className="w-21.7" options={['年']} />
            </div>
          </div>
          <div className="flex gap-2.7 mb-5.5 items-center">
            <p className="text-base text-black w-[144px] text-right">身分證發證地點: </p>
            <SimpleSelect register={register} id="where_id_issued_1" className="w-[87px]" options={['選擇', '選擇']} />
            <SimpleSelect register={register} id="where_id_issued_2" className="w-[81px]" options={['初發', '初發']} />
          </div>
          <LabelInput
            register={register}
            type="text"
            id="date_of_birth"
            isRequired={false}
            heading="出生年月日"
            placeholder="YYYY-MM-DD"
          />
          <div className="flex gap-2.7">
            <p className="text-black text-base min-w-[144px] text-right">身分證文件:</p>
            <CompanyDocumentUpload register={register} />
          </div>
        </div>
      </div>
      <SubmitButton text={undefined} className={undefined} />
    </form>
  );
};

export default RepresentativeInfoForm;

interface RadioOptionProps {
  register: UseFormRegister<FieldValues>;
  id: string;
  label: string;
}

const RadioOption = ({ register, id, label }: RadioOptionProps) => {
  return (
    <div className="flex gap-0.5 items-center">
      <input
        type="radio"
        {...register(id)}
        name="nationality"
        className="border-navy-blue w-3.2 checked:bg-navy-blue"
      />
      <label className="text-xs font-bold">{label}</label>
    </div>
  );
};

interface SimpleSelectProps {
  options: string[];
  register: UseFormRegister<FieldValues>;
  id: string;
  className: string;
}

const SimpleSelect = ({ register, className, id, options }: SimpleSelectProps) => {
  return (
    <select
      {...register(id)}
      className={classNames(
        'rounded-full text-black font-bold shadow-company-registration-input bg-white h-9 text-xs py-2 px-3.5 outline-none',
        className
      )}
    >
      {options.map((option) => {
        return <option className="text-black">{option}</option>;
      })}
    </select>
  );
};
