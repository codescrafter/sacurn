import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { useCardStore } from '@/store/card';
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
  const checkGovernmentCard = useCardStore((state) => state.checkGovernmentCard);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = handleSubmit(async () => {
    if (!companyId) return;

    const isOk = await checkGovernmentCard();

    if (isOk) {
      const formData = new FormData();
      formData.append('status', '1');
      await updateCompany(companyId, formData);
      const isSuccess = useCompanyStore.getState().isSuccess;
      if (isSuccess) nextStep(CompanyRegistrationSteps.REGISTRATION_COMPLETED);
    }
  });

  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col items-center py-4 ">
        <h2 className="text-xl font-bold leading-normal text-dark-grey mb-6">《土星永續股份有限公司 會員服務條款》</h2>
        <div className="bg-white rounded-2.5xl shadow-company-registration-input py-3 px-4 h-[50vh] w-[95%] mb-3 relative">
          <div className="overflow-y-scroll yellowScroll w-[calc(100%-5px)] h-full">
            <div className="text-mdbase font-bold break-normal break-keep whitespace-pre-wrap w-[95%]">
              <div className="text-left text-mdbase font-bold break-normal break-keep whitespace-pre-wrap w-full">
                <p>
                  感謝您使用土星永續股份有限公司(下稱「本公司」)所提供的平台(下稱「本平台」)以進行本公司所提供之碳權憑證申購、銷售以及專案碳權抵換服務(下合稱「本服務」)，您茲同
                  意當您存取本公司網站(下稱「本網站」)並使用本服務時， 將受以下條款及條件(下稱「本
                  服務條款」)所拘束。敬請詳閱本協議(定義如後，包含本服務條款)，
                  如不同意本協議之內容，請勿註冊帳號、存取本網站或使用本服務。
                  <br />
                  <br />
                  請注意，在您使用本服務前，必先詳閱本公司個人資料保護政策(下稱「隱私權政策」)以及 Cookie
                  政策(下稱「Cookie 政策」)，如您對「隱私權政策」或「Cookie 政策」有疑義或
                  無法接受，請先與本公司確認，切勿逕行使用本服務。您將與本公司訂立之協議包含本服務條款、隱私權政策、Cookie
                  政策(下合稱「本協議」)。本公司有權隨時變更、修訂或更新本
                  協議內容;針對本服務，未來可能增訂額外的條款，如果您使用本服務，則該等額外條款也會構成本協議之一部。若本協議有任何後續變更、修訂或更新的情形，如您不同意該等後續的變
                  更、 修訂或更新條款，您仍可存取您的交易記錄和碳權憑證，但您可能無法繼續使用本公司提供之完整服務。
                  <br />
                  <br />
                  本公司與您之間同意以電子文件為表示方法，依本協議交換之電子文件，如其內容可完整呈現
                  且可於日後取出供查驗者，其效力與書面文件相同。但依法令有強制規定排除適用者，不在此限。上述電子文件係以文字、聲音、影片、圖像、內容符號或其他資料，以電子之方式所製成足以
                  表達意思表示之紀錄，而提供作電子處理者。本公司公司將記錄相關電子文件資料，如您發現
                  提供之資訊有誤之情形，應立即通知本公司。
                </p>
              </div>
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

        <h3 className="font-bold mb-5.5 text-black">下滑至文章底部即可勾選同意</h3>
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
