import { yupResolver } from '@hookform/resolvers/yup';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';
import { useForm, UseFormSetValue } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import * as yup from 'yup';

import useOutsideClick from '@/hooks/useOutsideClick';
import { PatchedEmployeesPatch } from '@/libs/api';
import { useEmployeeStore } from '@/store/employee';
import { ModalType, useModalStore } from '@/store/modal';

import CustomButton from '../CustomButton';
import CustomInput from './CustomInput';

export interface UserProfileUpdateFormValues {
  name: string;
  job_title?: string;
  email: string;
  telephone: string;
  operation_permission: string;
}

const Schema = yup
  .object()
  .shape({
    name: yup.string().required('姓名為必填項'),
    job_title: yup.string(),
    email: yup.string().email('Enter valid address').required('電子郵件為必填項'),
    telephone: yup
      .string()
      .required('例如：0x-000111 或 09xx-000111')
      .matches(/^09\d{8}$/, '例如：0x-000111 或 09xx-000111'),
    operation_permission: yup.string().required('需要操作權限')
    // password1: yup
    //   .string()
    //   .matches(
    //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{12,}$/,
    //     '密碼需至少有12字元，請混和使用大小寫字母、數字，使密碼更加安全。'
    //   ),
    // password2: yup.string().oneOf([yup.ref('password1')], '密碼必須匹配')
  })
  .required();

const MemberProfileUpdate = () => {
  const {
    register,
    setValue,
    getValues,
    handleSubmit,
    formState: { errors }
  } = useForm<UserProfileUpdateFormValues>({
    resolver: yupResolver(Schema)
  });

  const { id } = useParams();
  const [infoUpdateAble, setInfoUpdateAble] = useState(false);
  const [passwordUpdateAble, setPasswordUpdateAble] = useState(false);
  const roleList = useEmployeeStore((store) => store.roleList);
  const getRoleList = useEmployeeStore((store) => store.getRoleList);
  const getSelectedEmployee = useEmployeeStore((state) => state.getSelectedEmployee);
  const deleteEmployeeAccount = useEmployeeStore((state) => state.deleteEmployeeAccount);
  const open = useModalStore((state) => state.open);
  const selectedEmployee = useEmployeeStore((state) => state.selectedEmployee);
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [password1Error, setPassword1Error] = useState('');
  const [password2Error, setPassword2Error] = useState('');
  const updateEmployeeDetails = useEmployeeStore((state) => state.updateEmployeeDetails);

  useEffect(() => {
    if (!id) return;
    getSelectedEmployee && getSelectedEmployee(Number(id));
  }, [id]);

  useEffect(() => {
    if (!selectedEmployee) return;
    console.log('selectedEmployee', selectedEmployee);
    setValue('name', selectedEmployee.username);
    setValue('job_title', selectedEmployee.position || '');
    setValue('email', selectedEmployee.email);
    setValue('telephone', selectedEmployee.phone || '');
    setValue('operation_permission', selectedEmployee.group_name);

    setFileURL(selectedEmployee.photo || '');
  }, [selectedEmployee]);

  useEffect(() => {
    getRoleList();
  }, []);

  console.log('operation_permission', getValues().operation_permission);

  const infoUpdateAbleHandler = (val: boolean) => {
    setInfoUpdateAble(val);
  };
  const passwordUpdateAbleHandler = (val: boolean) => {
    setPasswordUpdateAble(val);
  };
  const [file, setFile] = useState<File | null>(null);
  const [fileURL, setFileURL] = useState('');

  const deleteAccount = () => {
    if (!id) return;
    deleteEmployeeAccount && deleteEmployeeAccount(Number(id));
  };

  const freezeAccount = () => {
    if (!id) return;
    const formData = new FormData();
    formData.append('status', '2');
    updateEmployeeDetails(Number(id), formData);
  };

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.files) {
      try {
        setFile(event.target.files[0]);
        setFileURL(URL.createObjectURL(event.target.files[0]));
      } catch (err) {
        return;
      }
    }
  }
  console.log('errors', errors);
  const onSubmit = handleSubmit((data) => {
    console.log('data', data);
    // checks if password1 is valid
    if (!infoUpdateAble) return;
    if (passwordUpdateAble) {
      if (!password1.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{12,}$/)) {
        setPassword1Error('密碼需至少有12字元，請混和使用大小寫字母、數字，使密碼更加安全。');
        return;
      } else {
        setPassword1Error('');
      }
      // checks if password2 is valid
      if (password1 !== password2) {
        setPassword2Error('密碼必須匹配');
        return;
      } else {
        setPassword2Error('');
      }
    }

    let dataToSend: PatchedEmployeesPatch = {
      email: data.email,
      last_name: data.name,
      position: data.job_title,
      tel: data.telephone,
      group_name: data.operation_permission
    };

    if (passwordUpdateAble) {
      dataToSend = {
        ...dataToSend,
        password: password1
      };
    }

    // create form data
    const formData = new FormData();
    // append dataToSend to formData
    Object.entries(dataToSend).forEach(([key, value]) => {
      formData.append(key, value.toString());
    });

    // append file to formData
    if (file) formData.append('photo', file);

    updateEmployeeDetails && updateEmployeeDetails(Number(id), formData);
  });

  return (
    <form onSubmit={onSubmit}>
      <div className="rounded-mdlg bg-trans-white min-[1400px]:py-6.2 py-3.5 min-[1400px]:px-8 px-6 mt-[146px] flex flex-col bg-blend-lighten min-[1400px]:gap-4.5 gap-3 ml-10 w-[89%] max-w-[1035px]">
        <div
          className={classNames('flex min-[1600px]:my-21 min-[1500px]:my-18 min-[1300px]:my-14 my-10 overflow-hidden', {
            'min-[1600px]:gap-x-16.7 min-[1500px]:gap-x-13.7 min-[1300px]:gap-x-12 gap-x-10': !infoUpdateAble
          })}
        >
          <div className="relative self-center flex-1 flex justify-center">
            <IconButton component="label" className="relative z-50 ">
              <label
                className="absolute min-[1600px]:text-sm min-[1500px]:text-xs text-xms z-40 text-white cursor-pointer"
                htmlFor="image"
              >
                更換照片
              </label>
              <Avatar
                src={fileURL}
                className="min-[1600px]:!w-[100px] min-[1600px]:!h-[100px] min-[1500px]:!w-[85px] min-[1500px]:!h-[85px] min-[1200px]:!w-[75px] min-[1200px]:!h-[75px] !w-[60px] !h-[60px]"
              />
              {infoUpdateAble && <input type="file" hidden onChange={handleChange} id="image" />}
            </IconButton>
          </div>
          {!infoUpdateAble && (
            <div className="flex min-[1600px]:gap-x-16.7 min-[1500px]:gap-x-13.7 min-[1300px]:gap-x-12 gap-x-10 flex-[3.5]">
              <div className="flex flex-col min-[1500px]:gap-y-8.7 min-[1300px]:gap-y-7 gap-y-5">
                <CustomInfo heading="暱稱" data={selectedEmployee?.username || ''} />
                <CustomInfo heading="職稱" data={selectedEmployee?.position || ''} />
                <CustomInfo heading="Email" data={selectedEmployee?.email || ''} />
                <CustomInfo heading="電話" data={selectedEmployee?.phone || ''} />
              </div>
              <div className="flex flex-col min-[1500px]:gap-y-8.7 min-[1300px]:gap-y-7 gap-y-5">
                <CustomInfo heading="操作權限" data={selectedEmployee?.group_name || ''} className="font-normal" />
                <CustomInfo
                  heading="帳戶狀態"
                  data={selectedEmployee?.status_cht || ''}
                  className="!text-light-green"
                />
              </div>
            </div>
          )}
          {infoUpdateAble && (
            <div className="flex min-[1700px]:gap-x-16.7 min-[1500px]:gap-x-13.7 min-[1300px]:gap-x-12 gap-x-10 flex-[3.5]">
              <div className={classNames('flex flex-col gap-y-4.2 w-min')}>
                <CustomInput<UserProfileUpdateFormValues>
                  errors={errors}
                  label="姓名"
                  id="name"
                  type="text"
                  register={register}
                  className="text-dark-grey min-[1400px]:!px-4 min-[1200px]:px-3 px-2.5 min-[1300px]:text-base text-sm"
                />
                <CustomInput<UserProfileUpdateFormValues>
                  errors={errors}
                  label="職稱"
                  id="job_title"
                  type="text"
                  register={register}
                  className="text-dark-grey min-[1400px]:!px-4 min-[1200px]:px-3 px-2.5 min-[1300px]:text-base text-sm"
                />
                <CustomInput<UserProfileUpdateFormValues>
                  errors={errors}
                  label="Email"
                  id="email"
                  type="text"
                  register={register}
                  className="text-dark-grey min-[1400px]:!px-4 min-[1200px]:px-3 px-2.5 min-[1300px]:text-base text-sm"
                />
                <CustomInput<UserProfileUpdateFormValues>
                  errors={errors}
                  label="電話"
                  id="telephone"
                  type="text"
                  register={register}
                  className="text-dark-grey min-[1400px]:!px-4 min-[1200px]:px-3 px-2.5 min-[1300px]:text-base text-sm"
                />
              </div>
              <div className="flex gap-y-4.2 flex-col min-[1600px]:max-w-[415px] min-[1500px]:max-w-[375px] min-[1300px]:max-w-[325px] max-w-[265px]">
                <div className="flex  min-[1700px]:gap-7.5 min-[1500px]:gap-6 min-[1300px]:gap-5.5 gap-5 self-end">
                  <p className="min-[1600px]:text-xl min-[1500px]:text-lg min-[1300px]:text-base text-sm text-navy-blue font-bold min-[1600px]:mt-2.5 min-[1500px]:mt-2 min-[1300px]:mt-1.5 min-[1200px]:mt-1 mt-0.5 whitespace-nowrap">
                    操作權限
                  </p>
                  <CustomSelect
                    setValue={setValue}
                    selectedValue={getValues().operation_permission}
                    options={roleList.map((role) => role.name)}
                  />
                </div>

                {passwordUpdateAble && (
                  <div className="flex min-[1600px]:gap-7.5 min-[1500px]:gap-6 min-[1300px]:gap-5.5 gap-5">
                    <p className="min-[1600px]:text-xl min-[1500px]:text-lg min-[1300px]:text-base text-sm text-navy-blue font-bold min-[1600px]:mt-2.5 min-[1500px]:mt-2 min-[1300px]:mt-1.5 min-[1200px]:mt-1 mt-0.5 whitespace-nowrap">
                      密碼設定
                    </p>
                    <div className="relative z-40 flex flex-col gap-y-0.5">
                      <PasswordInput value={password1} setValue={setPassword1} id="password1" />
                      <div
                        className={classNames(
                          'min-[1700px]:text-xs min-[1300px]:text-xms text-xxs min-[1700px]:w-[296px] min-[1500px]:w-[260px] min-[1300px]:w-[215px] w-[165px] px-2',
                          { 'text-bright-red': password1Error }
                        )}
                      >
                        提示：密碼需至少有12字元，請混和使用大小寫字母、數字，使密碼更加安全。
                      </div>
                      <PasswordInput
                        value={password2}
                        setValue={setPassword2}
                        id="password2"
                        errorMessage={password2Error}
                        placeholder="確認新密碼"
                      />
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
                onClick={() =>
                  open(ModalType.DeleteEmployeeAccount, {
                    buttons: [
                      { text: '取消送出' },
                      {
                        text: '確認刪除帳號',
                        onClick: () => {
                          deleteAccount();
                        }
                      }
                    ]
                  })
                }
              />
              <CustomButton
                children="凍結帳號"
                className="border !border-silverstone !text-silverstone !bg-transparent min-[1600px]:text-lg min-[1500px]:text-base min-[1300px]:text-sm text-xms font-bold rounded-mdlg min-[1600px]:w-[154px] min-[1500px]:w-[125px] min-[1300px]:w-[105px] w-[95px]  min-[1600px]:h-10.5 min-[1500px]:h-9 min-[1300px]:h-8 h-7"
                onClick={() => {
                  open(ModalType.FreezeEmployeeAccount, {
                    buttons: [
                      { text: '取消送出' },
                      {
                        text: '確認凍結帳號',
                        onClick: () => {
                          freezeAccount();
                        }
                      }
                    ]
                  });
                }}
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
              children="密碼重置"
              className="border !border-silverstone !text-silverstone !bg-transparent min-[1600px]:text-lg min-[1500px]:text-base min-[1300px]:text-sm text-xms font-bold rounded-mdlg min-[1600px]:w-[154px] min-[1500px]:w-[125px] min-[1300px]:w-[105px] w-[95px]  min-[1600px]:h-10.5 min-[1500px]:h-9 min-[1300px]:h-8 h-7"
              onClick={() => {
                if (!passwordUpdateAble) passwordUpdateAbleHandler(true);
                else passwordUpdateAbleHandler(false);
              }}
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
                className="min-[1600px]:text-lg min-[1500px]:text-base min-[1300px]:text-sm text-xms font-bold rounded-mdlg min-[1600px]:w-[122px] min-[1500px]:w-[100px] min-[1300px]:w-[85px] w-[75px] min-[1600px]:h-9 min-[1500px]:h-7.5 min-[1300px]:h-6.5 h-5.5"
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
          'min-[1600px]:text-xl min-[1500px]:text-lg min-[1300px]:text-base text-sm font-bold text-dark-grey ',
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
  selectedValue?: string;
  options: string[];
}

const CustomSelect = ({ setValue, selectedValue, options }: CustomSelectIProps) => {
  const dropDownRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);
  const [isSelected, setIsSelected] = useState(selectedValue || '');
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
  console.log('selectedvalue', selectedValue);
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
          {isSelected ? isSelected : '可挑選碳權'}
        </p>
        <img src="/v2/user-info-form/down-arrow.svg" className="" />
      </div>
      {isOpen && (
        <div className="absolute z-10 shadow-input-field rounded-b-2.5xl bg-white py-1 flex flex-col min-[1400px]:gap-4 gap-2 min-[1400px]:pb-3 pb-2 min-[1600px]:px-10 min-[1500px]:px-8.7 min-[1300px]:px-7 px-4.5 min-[1600px]:max-h-[132px] min-[1500px]:max-h-[122px] min-[1400px]:max-h-[110px] min-[1300px]:max-h-[93px] min-[1200px]:max-h-[77px] max-h-[70px] overflow-y-scroll overflow-x-hidden grayScrollNoBg w-full">
          {options.map((option, index) => (
            <label
              className={classNames(
                'bg-white hover:text-light-blue cursor-pointer min-[1600px]:text-lg min-[1500px]:text-base min-[1300px]:text-sm min-[1200px]:text-xs text-xms',
                {
                  'font-extrabold underline text-navy-blue leading-normal': isSelected === option
                }
              )}
              key={index}
              onClick={() => {
                isSelectedHandler(option);
                setIsOpen(false);
              }}
            >
              {option}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

interface PasswordInputProps {
  className?: string;
  id: 'password1' | 'password2';
  errorMessage?: string;
  placeholder?: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const PasswordInput = ({ className, errorMessage, placeholder, value, setValue }: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="min-[1700px]:w-[296px] min-[1500px]:w-[260px] min-[1300px]:w-[215px] w-[165px] flex flex-col gap-0.5">
      <div className="relative rounded-full items-center !bg-white bg-opacity-100 shadow-input-field min-[1700px]:h-11.5 min-[1500px]:h-10 min-[1300px]:h-8.5 h-7 px-2 py-1  text-black flex justify-between">
        <input
          className={classNames(
            'outline-none bg-white w-[85%] min-[1400px]:px-2 min-[1200px]:px-1 px-0.5 min-[1300px]:text-base text-sm text-dark-grey',
            className
          )}
          type={showPassword ? 'text' : 'password'}
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <img
          src={showPassword ? '/images/operator-signup/visible.svg' : '/images/operator-signup/invisible.svg'}
          className="w-[13%]"
          onClick={() => setShowPassword((prev) => !prev)}
        />
      </div>
      {errorMessage && (
        <p className="text-bright-red min-[1500px]:text-xs min-[1200px]:text-xms text-xxs ml-4">{errorMessage}</p>
      )}
    </div>
  );
};
