import { useForgotPasswordStore } from '@/store/forgotPassword';

const DoNotAgreeTermsModal = () => {
  const isDoNotAgreeTermsModalOpen = useForgotPasswordStore((state) => state.isDoNotAgreeTermsModalOpen);
  const setIsDoNotAgreeTermsModalOpen = useForgotPasswordStore((state) => state.setIsDoNotAgreeTermsModalOpen);

  return (
    <>
      {isDoNotAgreeTermsModalOpen && (
        <div className="fixed top-0 left-0 z-50 w-full h-full bg-[#3D3D3D99] ">
          <div className="w-[744px] h-[461px] max-w-[90%] bg-white rounded-[10px] absolute 3xl:top-[30%] top-[20%] left-[50%] translate-x-[-50%] pt-[30px] pb-[67px] mx-7">
            <img
              src="/images/products-page/ic_circle_close.svg"
              alt="close"
              width={32}
              height={32}
              className="absolute top-2.5 right-3 cursor-pointer"
              onClick={() => setIsDoNotAgreeTermsModalOpen(false)}
            />
            <img
              src="/images/password-reset/error-modal.svg"
              alt="error"
              width={110}
              height={110}
              className="mx-auto"
            />
            <h3 className="text-[32px] font-semibold text-black text-center mt-[24px] mb-6">錯誤訊息</h3>
            <p className="text-dark-grey text-[26px] max-w-[467px] mx-auto">
              很抱歉，如您不同意Sacurn服務條款， 無法進行申請密碼重置服務。
            </p>

            <button
              className="w-[180px] h-[56px] rounded-[60px] bg-navy-blue text-white text-xl tracking-[0.6px] font-bold mt-[47px] mx-auto block"
              onClick={() => setIsDoNotAgreeTermsModalOpen(false)}
            >
              確認
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default DoNotAgreeTermsModal;
