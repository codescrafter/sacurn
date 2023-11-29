import { Accordion, AccordionDetails, Typography } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';

import PermissionAccordianTable from '@/pages/v2/PermissionAccordianTable';
import { usePlatformStore } from '@/store/platform';
import { PermissionTableHeadingType } from '@/type';

const PermissionSettingModal = () => {
  const togglePermissionModal = usePlatformStore((state) => state.togglePermissionSettings);
  const isPermissionModalOpen = usePlatformStore((state) => state.isPermissionSettingsModalOpen);

  return (
    <>
      {isPermissionModalOpen && (
        <>
          <Backdrop open={isPermissionModalOpen} onClick={() => togglePermissionModal()} sx={{ zIndex: '20' }} />

          <div className="w-[80vw] max-w-[1035px] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] absolute bg-white h-[76vh] rounded-[20px] pt-[56px] pl-[42px] pr-[25px] pb-6 z-20 flex flex-col">
            <h1 className="text-3xl text-navy-blue font-bold max-[1400px]:text-xl mb-5">權限設定說明</h1>
            <div className="relative">
              <p className="text-xl font-bold ml-9 mb-5">權限的區分？</p>
              <img
                src="/images/products-page/ic_circle_close.svg"
                alt="close"
                width={32}
                height={32}
                className="absolute top-0 right-12 cursor-pointer"
                onClick={() => togglePermissionModal()}
              />
            </div>
            <div className="overflow-y-scroll yellowScroll w-full h-full pr-5 flex-1">
              <div className="w-full">
                <Accordion
                  classes="mt-5"
                  sx={{ backgroundColor: 'inherit', boxShadow: '0px 0px 0px 0px transparent', Opacity: '0.1' }}
                  expanded={true}
                >
                  <AccordionDetails className="pl-10 border-l-4 border-pale-yellow w-full bg-geyser">
                    <Typography className="pt-2 px-4">
                      <PermissionAccordianTable CardHeading={PERMISSION_TABLE_HEADING} />
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default PermissionSettingModal;

const PERMISSION_TABLE_HEADING: PermissionTableHeadingType[] = [
  {
    img: '',
    title: '',
    subtitle: ' ',
    text: ''
  },
  {
    img: '/v2/permission-instruction-setting/Group.svg',
    title: '管理員',
    subtitle: ' ',
    text: '最多授權2名'
  },
  {
    img: '/v2/permission-instruction-setting/Group (1).svg',
    title: '進階操作人員',
    subtitle: '',
    text: '依會員卡別授權人數'
  },
  {
    img: '/v2/permission-instruction-setting/Group (2).svg',
    title: '基礎操作人員',
    subtitle: '*無後台操作權',
    text: '依會員卡別授權人數'
  }
];
