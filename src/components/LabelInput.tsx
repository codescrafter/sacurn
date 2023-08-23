import { FieldError, FieldValues, UseFormRegister } from 'react-hook-form';

interface IProps {
  id: string;
  isRequired: boolean;
  type: string;
  placeholder?: string;
  register: UseFormRegister<FieldValues>;
  error?: FieldError;
  heading: string;
  errorMessage?: string;
}

const LabelInput = ({ id, type, placeholder, register, error, heading, isRequired, errorMessage }: IProps) => {
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
      {error && <p className="text-xs mt-1 ml-2 text-bright-red">{errorMessage}</p>}
    </div>
  );
};

export default LabelInput;
