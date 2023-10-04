import { DevTool } from '@hookform/devtools';
import { yupResolver } from '@hookform/resolvers/yup';
// import classNames from 'classnames';
// import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

// import { useForm } from 'react-hook-form';
// import { FormValues } from '@/components/CompanyInfoForm';
import Layout from '@/components/v2/Layout';

import countries from './Countries.json';
import MemberCenterInput from './MemberCenterInput';
export type FormValues = {
  name: string;
  professionaltitle: string;
  email: string;
  phone: string;
  extention: string;
  check: boolean;
  identity: string;
};
const schema = yup.object().shape({
  name: yup.string().required(),
  professionaltitle: yup.string().required(),
  email: yup.string().email('Email format is not valid').required('email is requred'),
  phone: yup
    .string()
    .required()
    .matches(/^09\d{8}$/, 'Invalid phone number'),
  extention: yup.string().required(),
  check: yup.boolean().default(false).oneOf([true], '請務必確認勾選此框。').required('請務必確認勾選此框。'),
  identity: yup.string().required('Country is requiured')
});
const MemberCenter = () => {
  const form = useForm<FormValues>({
    defaultValues: {
      name: '',
      professionaltitle: '',
      email: '',
      phone: '',
      extention: '',
      check: false
    },
    resolver: yupResolver(schema)
  });
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;
  const onSubmit = (data: FormValues) => {
    // eslint-disable-next-line no-debugger
    // debugger;
    console.log('form is submited', data);
  };
  console.log(errors);
  return (
    <Layout>
      <form action="" onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className=" bg-white bg-opacity-80 rounded-lg border p-7 m-auto my-28 w-[90%] xl:p-7 ">
          <div className="flex  md:gap-5 xl:gap-7">
            {/* child 1 */}
            <div className=" flex flex-col gap-24 items-center md:w-[20%] xl:w-[15%] ">
              <h1 className=" text-lg font-bold text-deepseablue md:text-sm xl:text-lg 2xl:text-2xl">| 新增使用者</h1>
              <div
                className="rounded-full bg-deepseablue h-28 w-28  flex justify-center items-center md:h-20 md:w-20 xl:h-24 xl:w-24 2xl:h-32 2xl:w-32 "
                // onClick={() => {
                //   console.log(errors);
                // }}
              >
                <h2 className="text-white md:text-xs xl:text-lg 2xl:text-xl"> 更換照片</h2>
              </div>
            </div>
            {/* second child */}
            <div className="flex flex-col gap-4 pt-13 pb-10 md:w-[33%] lg:w-[40%] xl:w-[40%]">
              <MemberCenterInput
                id="name"
                heading="姓名"
                type="text"
                isRequired={true}
                register={register}
                errors={errors}
                errorMessage="Name is Required"
              />
              <MemberCenterInput
                id="professionaltitle"
                heading="職稱"
                type="text"
                isRequired={true}
                register={register}
                errors={errors}
                errorMessage="title is required"
              />
              <MemberCenterInput
                id="email"
                heading="Email"
                type="email"
                isRequired={true}
                register={register}
                errors={errors}
                errorMessage="email is not valid "
              />
              <MemberCenterInput
                id="phone"
                heading="電話"
                type="number"
                register={register}
                errors={errors}
                errorMessage="例: 0x-000111或09xx-000111"
                isRequired={true}
              />
              <MemberCenterInput
                id="extention"
                heading="分機"
                type="text"
                isRequired={true}
                register={register}
                errors={errors}
                errorMessage="enter right extention"
                isHalfWidth={true}
                isleftmargin={true}
              />
            </div>
            {/* Third Child */}
            <div className="flex flex-col justify-between md:w-[40%] lg:w-[36%] 2xl:">
              {/* third-child-1 */}
              <div className=" flex items-center gap-5 mt-13 xl:gap-10 2xl:gap-15">
                <label htmlFor="" className="font-bold text-xl text-deepseablue md:text-xs lg:text-sm 2xl:text-base">
                  操作權限
                </label>
                <div className="w-[65%] lg:w-[63%] xl:w-[61%] 2xl:w-[64%] ">
                  <div className="w-100 h-10 rounded-full bg-white pl-4 flex md:w-full md:h-6 lg:h-8 xl:h-10 2xl:w-full 2xl:h-11">
                    <select
                      id=""
                      className="w-24 outline-none md:w-20 md:text-xs xl:w-24 2xl:text-base"
                      {...register('identity')}
                    >
                      <option value="">身份選擇</option>
                      {countries.map((item) => {
                        return (
                          <option value="" key={item.country}>
                            {item.country}
                          </option>
                        );
                      })}
                    </select>
                    <input
                      type=""
                      name=""
                      id=""
                      className="rounded-full h-full w-32 bg-white outline-none px-4 md:w-full md:hidden"
                    />
                  </div>
                  {errors.identity && <p className="text-sunset-orange ml-7 text-xs">{errors.identity.message}</p>}
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <div className=" flex flex-col">
                  <div className="flex gap-4 2xl:gap-5">
                    <input type="checkbox" id="" className="h-8 w-8 md:-mt-1" {...register('check')} />
                    <label
                      htmlFor=""
                      className="font-bold text-base text-deepseablue md:text-xs xl:text-base 2xl:text-lg"
                    >
                      確認後無法修改, 系統將自動寄送email至指定信箱進行身分驗證。
                    </label>
                  </div>
                </div>
                {errors.check && <p className="text-sunset-orange ml-7 text-xs">{errors.check.message}</p>}
                {/* third-child-2 */}
                <div className="flex justify-end gap-6 items-center md:w-full">
                  <button
                    type="submit"
                    className="border px-10 py-1 font-bold rounded-xl outline-none text-deepseablue md:px-4 md:py-2 md:text-xs  xl:px-10 xl:py-2 xl:text-base 2xl:px-10 2xl:py-2 2xl:text-lg"
                  >
                    取消
                  </button>
                  <button
                    type="submit"
                    className="px-10 py-1 font-bold rounded-xl bg-deepseablue text-white  outline-none md:px-4 md:py-2 md:text-xs xl:px-10 xl:py-2 xl:text-base 2xl:px-10 2xl:py-2 2xl:text-lg"
                  >
                    確認
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <DevTool control={control} />
    </Layout>
  );
};

export default MemberCenter;
