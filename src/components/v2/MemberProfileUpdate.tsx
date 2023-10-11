import { yupResolver } from '@hookform/resolvers/yup';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import classNames from 'classnames';
import { useRef, useState } from 'react';
import { FieldErrors, useForm, UseFormRegister, UseFormSetValue } from 'react-hook-form';
import * as yup from 'yup';

import useOutsideClick from '@/hooks/useOutsideClick';

import CustomButton from '../CustomButton';
import CustomInput from './CustomInput';

export interface UserProfileUpdateFormValues {
  name: string;
  job_title: string;
  email: string;
  telephone: string;
  operation_permission: string;
  password1: string;
  password2: string;
}

const Schema = yup
  .object()
  .shape({
    name: yup.string().required('姓名為必填項'),
    job_title: yup.string().required('職位名稱為必填項'),
    email: yup.string().email('Enter valid address').required('電子郵件為必填項'),
    telephone: yup
      .string()
      .required('例如：0x-000111 或 09xx-000111')
      .matches(/^09\d{8}$/, '例如：0x-000111 或 09xx-000111'),
    operation_permission: yup.string().required('需要操作權限'),
    password1: yup
      .string()
      .required()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{12,}$/,
        '密碼需至少有12字元，請混和使用大小寫字母、數字，使密碼更加安全。'
      ),
    password2: yup
      .string()
      .oneOf([yup.ref('password1')], '密碼必須匹配')
      .required('password required')
  })
  .required();

const MemberProfileUpdate = () => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors }
  } = useForm<UserProfileUpdateFormValues>({
    resolver: yupResolver(Schema)
  });

  const [infoUpdateAble, setInfoUpdateAble] = useState(false);
  const [passwordUpdateAble, setPasswordUpdateAble] = useState(false);
  const infoUpdateAbleHandler = (val: boolean) => {
    setInfoUpdateAble(val);
  };
  const passwordUpdateAbleHandler = (val: boolean) => {
    setPasswordUpdateAble(val);
  };
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

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form onSubmit={onSubmit}>
      <div className="rounded-mdlg bg-trans-white min-[1400px]:py-6.2 py-3.5 min-[1400px]:px-8 px-6 mt-[146px] flex flex-col bg-blend-lighten min-[1400px]:gap-4.5 gap-3 ml-10 w-[89%]">
        <div
          className={classNames('flex min-[1600px]:my-21 min-[1500px]:my-18 min-[1300px]:my-14 my-10 mx-auto', {
            'min-[1600px]:gap-x-16.7 min-[1500px]:gap-x-13.7 min-[1300px]:gap-x-12 gap-x-10': !infoUpdateAble
          })}
        >
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
              {infoUpdateAble && <input type="file" hidden onChange={handleChange} id="image" />}
            </IconButton>
          </div>
          {!infoUpdateAble && (
            <div className="flex min-[1600px]:gap-x-16.7 min-[1500px]:gap-x-13.7 min-[1300px]:gap-x-12 gap-x-10">
              <div className="flex flex-col min-[1500px]:gap-y-8.7 min-[1300px]:gap-y-7 gap-y-5">
                <CustomInfo heading="暱稱" data="Steve Jobs" />
                <CustomInfo heading="職稱" data="專員" />
                <CustomInfo heading="Email" data="grimes@xholding.com" />
                <CustomInfo heading="電話" data="02-1234 5678" />
              </div>
              <div className="flex flex-col min-[1500px]:gap-y-8.7 min-[1300px]:gap-y-7 gap-y-5">
                <CustomInfo heading="操作權限" data="操作人員(無後台操作權)" className="font-normal" />
                <CustomInfo heading="帳戶狀態" data="驗證中" className="!text-light-green" />
              </div>
            </div>
          )}
          {infoUpdateAble && (
            <div className="flex min-[1700px]:gap-x-16.7 min-[1500px]:gap-x-13.7 min-[1300px]:gap-x-12 gap-x-10">
              <div className={classNames('flex flex-col gap-y-4.2 w-min')}>
                <CustomInput<UserProfileUpdateFormValues>
                  errors={errors}
                  label="姓名"
                  id="name"
                  type="text"
                  register={register}
                />
                <CustomInput<UserProfileUpdateFormValues>
                  errors={errors}
                  label="職稱"
                  id="job_title"
                  type="text"
                  register={register}
                />
                <CustomInput<UserProfileUpdateFormValues>
                  errors={errors}
                  label="Email"
                  id="email"
                  type="text"
                  register={register}
                />
                <CustomInput<UserProfileUpdateFormValues>
                  errors={errors}
                  label="電話"
                  id="telephone"
                  type="text"
                  register={register}
                />
              </div>
              <div className="flex gap-y-4.2 flex-col min-[1600px]:max-w-[415px] min-[1500px]:max-w-[375px] min-[1300px]:max-w-[325px] max-w-[265px]">
                <div className="flex  min-[1700px]:gap-7.5 min-[1500px]:gap-6 min-[1300px]:gap-5.5 gap-5 self-end">
                  <p className="min-[1600px]:text-xl min-[1500px]:text-lg min-[1300px]:text-base text-sm text-navy-blue font-bold min-[1600px]:mt-2.5 min-[1500px]:mt-2 min-[1300px]:mt-1.5 min-[1200px]:mt-1 mt-0.5">
                    操作權限
                  </p>
                  <CustomSelect setValue={setValue} />
                </div>

                {passwordUpdateAble && (
                  <div className="flex min-[1600px]:gap-7.5 min-[1500px]:gap-6 min-[1300px]:gap-5.5 gap-5">
                    <p className="min-[1600px]:text-xl min-[1500px]:text-lg min-[1300px]:text-base text-sm text-navy-blue font-bold min-[1600px]:mt-2.5 min-[1500px]:mt-2 min-[1300px]:mt-1.5 min-[1200px]:mt-1 mt-0.5">
                      密碼設定
                    </p>
                    <div className="relative z-40 flex flex-col gap-y-0.5">
                      <PasswordInput register={register} id="password1" defaultValue="password123" />
                      <div className="min-[1700px]:text-xs min-[1300px]:text-xms text-xxs min-[1700px]:w-[296px] min-[1500px]:w-[260px] min-[1300px]:w-[215px] w-[165px] px-2">
                        提示：密碼需至少有12字元，請混和使用大小寫字母、數字，使密碼更加安全。
                      </div>
                      <PasswordInput register={register} id="password2" errors={errors} />
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        {!infoUpdateAble && (
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
              onClick={() => infoUpdateAbleHandler(true)}
            />
          </div>
        )}
        {infoUpdateAble && (
          <div className="flex justify-between w-full">
            <CustomButton
              children="刪除帳號"
              className="border !border-silverstone !text-silverstone !bg-transparent min-[1600px]:text-lg min-[1500px]:text-base min-[1300px]:text-sm text-xms font-bold rounded-mdlg min-[1600px]:w-[154px] min-[1500px]:w-[125px] min-[1300px]:w-[105px] w-[95px]  min-[1600px]:h-10.5 min-[1500px]:h-9 min-[1300px]:h-8 h-7"
              onClick={() => passwordUpdateAbleHandler(true)}
              type="button"
            />
            <div className="flex gap-7.2 items-center">
              <CustomButton
                children="取消"
                className="border !border-navy-blue min-[1600px]:text-lg min-[1500px]:text-base min-[1300px]:text-sm text-xms font-bold rounded-mdlg min-[1600px]:w-[122px] min-[1500px]:w-[100px] min-[1300px]:w-[85px] w-[75px] min-[1600px]:h-9 min-[1500px]:h-7.5 min-[1300px]:h-6.5 h-5.5"
                variant="secondary"
                onClick={() => infoUpdateAbleHandler(false)}
              />
              <CustomButton
                children="儲存"
                className=" min-[1600px]:text-lg min-[1500px]:text-base min-[1300px]:text-sm text-xms font-bold rounded-mdlg min-[1600px]:w-[122px] min-[1500px]:w-[100px] min-[1300px]:w-[85px] w-[75px] min-[1600px]:h-9 min-[1500px]:h-7.5 min-[1300px]:h-6.5 h-5.5"
                variant="primary"
                type="submit"
              />
            </div>
          </div>
        )}
      </div>
    </form>
  );
};

export default MemberProfileUpdate;

interface CustomInfoIProps {
  heading: string;
  data: string;
  className?: string;
}

const CustomInfo = ({ heading, data, className }: CustomInfoIProps) => {
  return (
    <div className="flex">
      <p className="min-[1600px]:text-xl min-[1500px]:text-lg min-[1300px]:text-base text-sm font-bold text-navy-blue">
        {heading} ：
      </p>
      <p
        className={classNames(
          'min-[1600px]:text-xl min-[1500px]:text-lg min-[1300px]:text-base text-sm font-bold text-smoke-gray ',
          className
        )}
      >
        {data}
      </p>
    </div>
  );
};

interface CustomSelectIProps {
  setValue: UseFormSetValue<UserProfileUpdateFormValues>;
}

const CustomSelect = ({ setValue }: CustomSelectIProps) => {
  const dropDownRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);
  const [isSelected, setIsSelected] = useState('');
  const isOpenHandler = (val: boolean) => {
    setIsOpen((state) => {
      if (state == true && val == true) return false;
      return val;
    });
  };

  const isSelectedHandler = (val: string) => {
    setValue('operation_permission', val);
    setIsSelected(val);
  };

  useOutsideClick(dropDownRef, () => {
    if (isOpen) isOpenHandler(false);
  });

  return (
    <div
      className={classNames({
        'bg-white shadow-input-field relative rounded-2.5xl h-max z-50': isOpen
      })}
      ref={dropDownRef}
    >
      <div
        className={classNames(
          'bg-white relative z-20 min-[1700px]:h-11.5 min-[1700px]:w-[296px] min-[1500px]:h-10 min-[1500px]:w-[260px] min-[1300px]:h-8.5 min-[1300px]:w-[215px] h-7 w-[165px] min-[1500px]:px-6 min-[1300px]:px-4.5 px-3 py-2.5 outline-none  flex items-center cursor-pointer gap-2.5',
          {
            ' shadow-input-field rounded-full': !isOpen,
            'rounded-t-2.5xl': isOpen
          }
        )}
        onClick={() => isOpenHandler(true)}
      >
        <p className="min-[1700px]:text-lg min-[1500px]:text-base min-[1300px]:text-sm min-[1200px]:text-xs text-xms">
          可挑選碳權
        </p>
        <img src="/v2/user-info-form/down-arrow.svg" className="" />
      </div>
      {isOpen && (
        <div className="absolute z-10 shadow-input-field rounded-b-2.5xl bg-white py-1 flex flex-col min-[1400px]:gap-4 gap-2 min-[1400px]:pb-3 pb-2 min-[1600px]:px-10 min-[1500px]:px-8.7 min-[1350px]:px-7 px-4.5 w-full">
          {options.map((option, index) => (
            <label
              className={classNames(
                'bg-white hover:text-light-blue cursor-pointer min-[1600px]:text-lg min-[1500px]:text-base min-[1300px]:text-sm min-[1200px]:text-xs text-xms',
                {
                  'font-extrabold underline text-navy-blue leading-normal': isSelected === option
                }
              )}
              key={index}
              onClick={() => isSelectedHandler(option)}
            >
              {option}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

const options = ['管理員', '操作人員', '操作人員(無後台操作權)'];

interface PasswordInputProps {
  className?: string;
  register: UseFormRegister<UserProfileUpdateFormValues>;
  id: 'password1' | 'password2';
  errors?: FieldErrors<UserProfileUpdateFormValues>;
  defaultValue?: string;
}

const PasswordInput = ({ className, register, id, errors, defaultValue }: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="min-[1700px]:w-[296px] min-[1500px]:w-[260px] min-[1300px]:w-[215px] w-[165px] flex flex-col gap-0.5">
      <div className="relative rounded-full items-center !bg-white bg-opacity-100 shadow-input-field min-[1700px]:h-11.5 min-[1500px]:h-10 min-[1300px]:h-8.5 h-7 px-2 py-1  text-black flex justify-between">
        <input
          {...register(id)}
          className={classNames('outline-none bg-white w-[85%]', className)}
          type={showPassword ? 'text' : 'password'}
          defaultValue={defaultValue}
        />
        <img
          src={showPassword ? '/images/operator-signup/visible.svg' : '/images/operator-signup/invisible.svg'}
          className="w-[13%]"
          onClick={() => setShowPassword((prev) => !prev)}
        />
      </div>
      {errors && errors[id] && (
        <p className="text-bright-red min-[1500px]:text-xs min-[1200px]:text-xms text-xxs ml-2">
          {errors[id]?.message?.toString()}
        </p>
      )}
    </div>
  );
};
