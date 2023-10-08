import { yupResolver } from '@hookform/resolvers/yup';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import classNames from 'classnames';
import { useState } from 'react';
import { FieldErrors, useForm, UseFormRegister } from 'react-hook-form';
import * as yup from 'yup';

import CustomButton from '../CustomButton';
// import CustomSelect from '../CustomSelect';

export interface UserProfileUpdateFormValues {
  name: string;
  job_title: string;
  email: string;
  telephone: string;
  operation_permission: string;
}

const Schema = yup
  .object({
    name: yup.string().required('姓名為必填項'),
    job_title: yup.string().required('職位名稱為必填項'),
    email: yup.string().email('Enter valid address').required('電子郵件為必填項'),
    telephone: yup
      .string()
      .required('例如：0x-000111 或 09xx-000111')
      .matches(/^09\d{8}$/, '例如：0x-000111 或 09xx-000111'),
    operation_permission: yup.string().required('需要操作權限')
  })
  .required();

const MemberProfileUpdate = () => {
  const {
    register,
    // setValue,
    // handleSubmit,
    formState: { errors }
  } = useForm<UserProfileUpdateFormValues>({ resolver: yupResolver(Schema) });
  const [file, setFile] = useState<string>('/v2/user-info-form/default.svg');
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.files) {
      try {
        setFile(URL.createObjectURL(event.target.files[0]));
      } catch (err) {
        return;
      }
    }
  }
  return (
    <div className="rounded-mdlg bg-trans-white min-[1400px]:py-6.2 py-3.5 min-[1400px]:px-8 px-6 mt-[146px] flex flex-col bg-blend-lighten min-[1400px]:gap-4.5 gap-3 ml-10 w-[87%]">
      <div className="flex min-[1600px]:gap-x-16.7 min-[1500px]:gap-x-13.7 min-[1300px]:gap-x-12 gap-x-10 min-[1600px]:my-21 min-[1500px]:my-18 min-[1300px]:my-14 my-10 mx-auto">
        <div className="relative self-center">
          <IconButton component="label" className="relative z-50 ">
            <label
              className="absolute min-[1600px]:text-sm min-[1500px]:text-xs text-xms z-40 text-white cursor-pointer"
              htmlFor="image"
            >
              更換照片
            </label>
            <Avatar
              src={file}
              className="min-[1600px]:!w-[100px] min-[1600px]:!h-[100px] min-[1500px]:!w-[85px] min-[1500px]:!h-[85px] min-[1200px]:!w-[75px] min-[1200px]:!h-[75px] !w-[60px] !h-[60px]"
            />
            <input type="file" hidden onChange={handleChange} id="image" />
          </IconButton>
        </div>
        {/* <div className="flex flex-col min-[1500px]:gap-y-8.7 min-[1300px]:gap-y-7 gap-y-5">
          <CustomInfo heading="暱稱" data="Steve Jobs" />
          <CustomInfo heading="職稱" data="專員" />
          <CustomInfo heading="Email" data="grimes@xholding.com" />
          <CustomInfo heading="電話" data="02-1234 5678" />
        </div>
        <div className="flex flex-col min-[1500px]:gap-y-8.7 min-[1300px]:gap-y-7 gap-y-5">
          <CustomInfo heading="操作權限" data="操作人員(無後台操作權)" className="font-normal" />
          <CustomInfo heading="帳戶狀態" data="驗證中" className="!text-light-green" />
        </div> */}
        <div className={classNames('flex flex-col gap-y-4.2 w-min')}>
          <CustomInput errors={errors} heading="姓名" id="name" type="text" register={register} />
          <CustomInput errors={errors} heading="職稱" id="job_title" type="text" register={register} />
          <CustomInput errors={errors} heading="Email" id="email" type="text" register={register} />
          <CustomInput errors={errors} heading="電話" id="telephone" type="text" register={register} />
        </div>
        <div className="flex flex-col justify-between min-[1600px]:max-w-[415px] min-[1500px]:max-w-[375px] min-[1300px]:max-w-[325px] max-w-[265px]">
          <div className="flex  min-[1600px]:gap-7.5 min-[1500px]:gap-6 min-[1300px]:gap-5.5 gap-5 self-end">
            <p className="min-[1600px]:text-lg min-[1500px]:text-base text-mdbase text-navy-blue font-bold min-[1600px]:mt-2.5 min-[1500px]:mt-2 min-[1300px]:mt-1.5 min-[1200px]:mt-1 mt-0.5">
              操作權限
            </p>
            {/* <CustomSelect setValue={setValue} /> */}
          </div>
        </div>
      </div>
      <div className="flex justify-between w-full">
        <div className="flex gap-7.2">
          <CustomButton
            children="刪除帳號"
            className="border !border-silverstone !text-silverstone !bg-transparent min-[1600px]:text-lg min-[1500px]:text-base min-[1300px]:text-sm text-xms font-bold rounded-mdlg min-[1600px]:w-[154px] min-[1500px]:w-[125px] min-[1300px]:w-[105px] w-[95px]  min-[1600px]:h-10.5 min-[1500px]:h-9 min-[1300px]:h-8 h-7"
          />
          <CustomButton
            children="凍結帳號"
            className="border !border-silverstone !text-silverstone !bg-transparent min-[1600px]:text-lg min-[1500px]:text-base min-[1300px]:text-sm text-xms font-bold rounded-mdlg min-[1600px]:w-[154px] min-[1500px]:w-[125px] min-[1300px]:w-[105px] w-[95px]  min-[1600px]:h-10.5 min-[1500px]:h-9 min-[1300px]:h-8 h-7"
          />
        </div>
        <CustomButton
          children="資料修改"
          className="bg-pale-yellow !text-silverstone  min-[1600px]:text-lg min-[1500px]:text-base min-[1300px]:text-sm text-xms font-bold rounded-mdlg min-[1600px]:w-[154px] min-[1500px]:w-[125px] min-[1300px]:w-[105px] w-[95px]  min-[1600px]:h-10.5 min-[1500px]:h-9 min-[1300px]:h-8 h-7"
        />
      </div>
    </div>
  );
};

export default MemberProfileUpdate;

// interface CustomInfoIProps {
//   heading: string;
//   data: string;
//   className?: string;
// }

// const CustomInfo = ({ heading, data, className }: CustomInfoIProps) => {
//   return (
//     <div className="flex">
//       <p className="min-[1600px]:text-xl min-[1500px]:text-lg min-[1300px]:text-base text-sm font-bold text-navy-blue">
//         {heading} ：
//       </p>
//       <p
//         className={classNames(
//           'min-[1600px]:text-xl min-[1500px]:text-lg min-[1300px]:text-base text-sm font-bold text-smoke-gray ',
//           className
//         )}
//       >
//         {data}
//       </p>
//     </div>
//   );
// };

interface CustomInputIProps {
  id: 'name' | 'job_title' | 'email' | 'telephone' | 'operation_permission';
  register: UseFormRegister<UserProfileUpdateFormValues>;
  type: string;
  placeholder?: string;
  heading?: string;
  className?: string;
  errors: FieldErrors<UserProfileUpdateFormValues>;
}

const CustomInput = ({ id, register, type, placeholder, heading, className, errors }: CustomInputIProps) => {
  return (
    <div
      className={classNames(
        'flex items-center min-[1600px]:gap-7.5 min-[1500px]:gap-6 min-[1300px]:gap-5.5 gap-5 max-w-max',
        {
          'mb-0.5': errors && errors[id]
        }
      )}
    >
      <p className="min-[1600px]:text-xl min-[1500px]:text-lg min-[1300px]:text-base text-sm text-navy-blue text-right font-bold min-[1600px]:min-w-[54px] min-[1500px]:min-w-[52px] min-[1300px]:min-w-[51px] min-w-[50px]">
        {heading}
      </p>
      <div className={classNames('flex flex-col relative', { 'gap-0.5': errors && errors[id] })}>
        <input
          className={classNames(
            'rounded-full shadow-input-field min-[1600px]:h-11.5 min-[1600px]:w-[296px] min-[1500px]:h-10 min-[1500px]:w-[260px] min-[1300px]:h-8.5 min-[1300px]:w-[215px] h-7 w-[165px] px-2 py-1 outline-none ',
            className
          )}
          {...register(id)}
          placeholder={placeholder}
          type={type}
        />
        <div className="relative w-full">
          {errors && errors[id] && (
            <p className="min-[1500px]:text-xs min-[1200px]:text-xms text-xms text-bright-red ml-4 absolute">
              {errors[id]?.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
