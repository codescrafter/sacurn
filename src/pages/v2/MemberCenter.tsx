import { DevTool } from '@hookform/devtools';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

// import { useForm } from 'react-hook-form';
// import { FormValues } from '@/components/CompanyInfoForm';
import Layout from '@/components/v2/Layout';

import MemberCenterInput from './MemberCenterInput';
export type FormValues = {
  name: string;
  professionaltitle: string;
  email: string;
  phone: string;
  extention: string;
};
const schema = yup.object({
  name: yup.string().required('name is requred'),
  professionaltitle: yup.string().required('rquired'),
  email: yup.string().email('Email format is not valid').required('email is requred'),
  phone: yup.string().required('例: 0x-000111或09xx-000111'),
  extention: yup.string().required('extention name is not correct ')
});
const MemberCenter = () => {
  const form = useForm<FormValues>({
    defaultValues: {
      name: '',
      professionaltitle: '',
      email: '',
      phone: '',
      extention: ''
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
        <div className=" bg-white bg-opacity-80 rounded-lg border p-7 m-auto my-28  w-[90%]">
          <div className="flex gap-5 ">
            {/* child 1 */}
            <div className=" flex flex-col gap-17 items-center">
              <h1 className="text-lg font-bold text-deepseablue">| 新增使用者</h1>
              <div
                className="bg-deepseablue h-28 w-28 rounded-full flex justify-center items-center"
                // onClick={() => {
                //   console.log(errors);
                // }}
              >
                <h2 className="text-white "> 更換照片</h2>
              </div>
            </div>
            {/* second child */}
            <div className="flex flex-col gap-4 pt-13 pb-10 ">
              <MemberCenterInput id="name" heading="姓名" type="text" isRequired={true} register={register} />
              <MemberCenterInput
                id="professionaltitle"
                heading="職稱"
                type="text"
                isRequired={true}
                register={register}
              />
              <MemberCenterInput id="email" heading="Email" type="email" isRequired={true} register={register} />
              <MemberCenterInput
                id="phone"
                heading="電話"
                type="number"
                register={register}
                errorMessage="例: 0x-000111或09xx-000111"
                isRequired={true}
              />
              <MemberCenterInput id="extention" heading="分機" type="text" isRequired={true} register={register} />
            </div>
            {/* Third Child */}
            <div className=" flex flex-col justify-between ">
              {/* third-child-1 */}
              <div className=" flex  justify-between items-center gap-2 mt-13">
                <label htmlFor="" className="font-bold text-xl text-deepseablue">
                  操作權限
                </label>
                <div className="w-60 h-10 rounded-full bg-white pl-4">
                  <select name="" id="">
                    <option value="">身份選擇</option>
                    <option value="">Saab</option>
                    <option value="">Mercedes</option>
                    <option value="">Audi</option>
                  </select>
                  <input type="" name="" id="" className="rounded-full h-10 w-[132px] bg-white outline-none px-4 " />
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <div className=" flex flex-col">
                  <div className="flex gap-2">
                    <input type="checkbox" name="" id="" className="h-8 w-8" />
                    <label htmlFor="" className="font-bold text-base text-deepseablue">
                      確認後無法修改, 系統將自動寄送email至指定信箱進行身分驗證。
                    </label>
                  </div>
                  <p className="text-sunset-orange ml-7 text-xs">請務必確認勾選此框。</p>
                </div>
                {/* third-child-2 */}
                <div className="flex justify-end gap-6 items-center">
                  <button
                    type="button"
                    className="border px-10 py-1 font-bold rounded-xl outline-none text-deepseablue"
                  >
                    取消
                  </button>
                  <button
                    type="button"
                    className="px-10 py-1 font-bold rounded-xl bg-deepseablue text-white outline-none "
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
