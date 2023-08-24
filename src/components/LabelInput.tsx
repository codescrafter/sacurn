import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

interface IProps {
  id: string;
  isRequired: boolean;
  type: string;
  placeholder?: string;
  register: UseFormRegister<FieldValues>;
  errors?: FieldErrors<FieldValues>;
  heading: string;
  errorMessage?: string;
}

const LabelInput = ({ id, type, placeholder, register, errors, heading, isRequired, errorMessage }: IProps) => {
  return (
    <div className="mb-5.5">
      <div className="flex gap-2.7 items-center ">
        <p className="text-base text-black w-[144px] leading-5 text-right">{heading} :</p>
        <input
          className="rounded-full text-black shadow-company-registration-input bg-white h-9 px-2 py-3.5 min-[1550px]:text-mdsm min-[1200px]:text-xms text-xxs outline-none w-[286px]"
          {...register(id, { required: isRequired })}
          placeholder={placeholder}
          type={type}
        />
      </div>
      <div className="flex">
        <div className="w-[160px]" />
        {errors && errors[id] && <p className="text-xs mt-1 ml-2 text-bright-red">{errorMessage}</p>}
      </div>
    </div>
  );
};

export default LabelInput;
