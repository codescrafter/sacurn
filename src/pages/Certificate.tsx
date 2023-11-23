import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import CustomButton from '@/components/CustomButton';
import Navbar from '@/components/Navbar';
import { BASE_URL } from '@/constant';
import { useCertificateStore } from '@/store/certificate';
import { ModalType, useModalStore } from '@/store/modal';

const Certificate = () => {
  const { carbonId } = useParams();

  const applyCertificate = useCertificateStore((state) => state.applyCertificate);
  const openModal = useModalStore((state) => state.open);
  const [isPdfLoaded, setIsPdfLoaded] = useState(false);

  return (
    <div>
      <Navbar className="relative z-30 !bg-navy-blue h-[70px]" />
      <div className="my-7 px-8">
        <div className="flex items-center gap-2">
          <img src="/images/certificate/bar.svg" alt="certificate-title" className="" />
          <h2 className="text-navy-blue text-[28px]">憑證認證書</h2>
        </div>
        <div className="flex flex-col justify-center items-center mt-2">
          <div className="w-[1033px] h-[730px] shadow-certificate-shadow">
            <iframe
              src={`${BASE_URL}/carbon_credit/certificate/?carbon_credit=${carbonId}#toolbar=0&navpanes=0&statusbar=0&view=FitH`}
              onLoad={() => setIsPdfLoaded(true)}
              className="w-full h-full"
            >
              你的瀏覽器不支援 iframe
            </iframe>
          </div>
          <div className="flex justify-end items-end w-full mt-4">
            <div className="flex justify-between w-[56%]">
              {isPdfLoaded && (
                <CustomButton
                  onClick={() =>
                    openModal(ModalType.StartApplyCertificate, {
                      buttons: [
                        {
                          text: '確認申請',
                          onClick: () => applyCertificate(carbonId)
                        }
                      ]
                    })
                  }
                  className="rounded-[3px] py-2 px-12 flex items-center text-xl gap-2.5"
                >
                  下載證書
                  <img src="/images/certificate/download-icon.svg" alt="download" />
                </CustomButton>
              )}

              <Link to="/sales">
                <CustomButton variant="outline" className="rounded-[3px] py-2 px-12 flex items-center text-xl gap-3">
                  <img src="/images/certificate/left-arrow.svg" alt="download" />
                  回上一頁
                </CustomButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
