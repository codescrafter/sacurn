import { useForgotPasswordStore } from '@/store/forgotPassword';

const RequireTermsReadModal = () => {
  const isTermsReadModalOpen = useForgotPasswordStore((state) => state.isRequireTermsReadModalOpen);
  const setIsTermsReadModalOpen = useForgotPasswordStore((state) => state.setIsRequireTermsReadModalOpen);
  const setIsTermsModalOpen = useForgotPasswordStore((state) => state.setIsTermsModalOpen);

  return (
    <>
      {isTermsReadModalOpen && (
        <div className="fixed top-0 left-0 z-50 w-full h-full bg-[#3D3D3D99] ">
          <div className="w-[744px] h-[461px] max-w-[90%] bg-white rounded-[10px] absolute 3xl:top-[30%] top-[20%] right-[50%] translate-x-1/2 pt-[30px] pb-[67px] mx-7">
            <img
              src="/images/products-page/ic_circle_close.svg"
              alt="close"
              width={32}
              height={32}
              className="absolute top-2.5 right-3 cursor-pointer"
              onClick={() => setIsTermsReadModalOpen(false)}
            />
            <img
              src="/images/password-reset/error-modal.svg"
              alt="error"
              width={110}
              height={110}
              className="mx-auto"
            />
            <h3 className="text-[32px] font-semibold text-black text-center mt-[24px] mb-16">錯誤訊息</h3>
            <p className="text-dark-grey text-[26px] text-center">
              請瀏覽
              <span
                className="text-bright-red cursor-pointer"
                onClick={() => {
                  setIsTermsReadModalOpen(false);
                  setIsTermsModalOpen(true);
                }}
              >
                「Sacurn服務條款」
              </span>
              並同意內容後，進行勾選。
            </p>

            <button
              className="w-[180px] h-[56px] rounded-[60px] bg-navy-blue text-white text-xl tracking-[0.6px] font-bold mt-[63px] mx-auto block"
              onClick={() => setIsTermsReadModalOpen(false)}
            >
              確認
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default RequireTermsReadModal;
