import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { useCompanyStore } from '@/store/company';
import { COOKIE_AUTH_NAME } from '@/store/user';
import { CompanyRegistrationSteps, MEMBERS_TERMS } from '@/util/constants';
import { getCookie } from '@/util/helper';

import CustomButton from './CustomButton';

interface IProps {
  nextStep: (val: number) => void;
}
const TermsConfirmation = ({ nextStep }: IProps) => {
  const companyId = getCookie(COOKIE_AUTH_NAME);
  const updateCompany = useCompanyStore((state) => state.updateCompany);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = handleSubmit(async () => {
    if (!companyId) return;
    const formData = new FormData();
    formData.append('status', '1');
    await updateCompany(companyId, formData);
    const isSuccess = useCompanyStore.getState().isSuccess;
    if (isSuccess) nextStep(CompanyRegistrationSteps.REGISTRATION_COMPLETED);
  });

  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col items-center py-4 ">
        <h2 className="text-xl font-bold leading-normal text-dark-grey mb-6">《土星永續股份有限公司 會員服務條款》</h2>
        <div className="bg-white rounded-2.5xl shadow-company-registration-input py-3 px-4 h-[50vh] w-[95%] mb-3 relative">
          <div className="overflow-y-scroll yellowScroll w-[calc(100%-5px)] h-full">
            <div className="text-mdbase font-bold break-normal break-keep whitespace-pre-wrap w-[95%]">
              {MEMBERS_TERMS?.map((term) => (
                <div key={term.id}>
                  <div className="flex gap-3 mt-4 mb-1">
                    <p>{term.id}</p>
                    <p>{term.title}</p>
                  </div>
                  <div>
                    {term?.content?.map((x) => (
                      <div key={x.id} className="flex indent-5 mb-2">
                        <p>{x.id}</p>
                        <p>{x.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button className="px-7 py-0.3 absolute -bottom-8 right-1 shadow-download-btn rounded-lg">
            <div className="flex gap-2 items-center">
              <Link
                to="/pdf/Membership_Terms_Service.pdf"
                target="_blank"
                download="土星_平台條款內容"
                className="text-mdbase font-bold text-navy-blue"
              >
                Download
              </Link>
              <img src="/images/company-registration/download.svg" />
            </div>
          </button>
        </div>

        <h3 className="font-bold mb-5.5 text-dark-grey">下滑至文章底部即可勾選同意</h3>
        <div className="mb-5.5">
          <div className="flex gap-2 items-center">
            <input type="checkbox" {...register('terms-and-conditions', { required: true })} />
            <label className="font-bold text-[#095181]">
              本人同意貴公司之《服務條款》、《隱私政策》和《Cookie 政策》
            </label>
          </div>
          {errors && errors['terms-and-conditions'] && (
            <p className="text-xs mt-1 ml-2 text-bright-red">
              需先打勾確認貴公司之《服務條款》、《隱私政策》和《Cookie 政策》
            </p>
          )}
        </div>
        <CustomButton
          className="rounded-full bg-operator-signup shadow-operator-signup-button text-base font-bold h-10 w-[711px] text-white"
          type="submit"
        >
          註冊申請
        </CustomButton>
      </div>
    </form>
  );
};

export default TermsConfirmation;
