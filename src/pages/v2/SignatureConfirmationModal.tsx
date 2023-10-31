import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import classNames from 'classnames';
import * as React from 'react';

import CustomButton from '@/components/CustomButton';
import { SignatureConfirmationModalType } from '@/type';
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2)
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1)
  }
}));
const SignatureConfirmationModal = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Signature
      </Button>

      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullWidth={true}
        maxWidth="lg"
      >
        <div>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 0,
              top: 0,
              color: '#005487'
            }}
          >
            <CancelOutlinedIcon sx={{ fontSize: '30px' }} />
          </IconButton>
          <DialogContent
            sx={{
              mt: '40px',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <div className="flex">
              <Box className="flex flex-col w-[65%]">
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                    // width: '98%',
                    borderRadius: '20px',
                    mt: '-13px',
                    paddingY: '20px',
                    paddingX: '10px'
                  }}
                >
                  <Box className="yellowScroll " sx={{ overflowY: 'scroll', height: '440px' }}>
                    <Typography
                      gutterBottom
                      sx={{
                        color: '#525252',
                        fontWeight: '400',
                        fontSize: '15px',
                        textAlign: 'justify',
                        paddingRight: '15px',
                        colorAdjust: '#525252'
                      }}
                    >
                      <p>
                        非常歡迎您光臨「sacrun網站」（以下簡稱本網站），為了讓您能夠安心的使用本網站的各項服務與資訊，特此向您說明本網站的隱私權保護政策，以保障您的權益，請您詳閱下列內容：
                      </p>

                      {SIGNATURE_CONFIRMATION_MODAL.map(({ title, content }: SignatureConfirmationModalType, index) => (
                        <div key={index}>
                          <h1 className="text-lg font-bold text-dark-grey">{title}</h1>
                          <ul
                            className={classNames(' ml-[24px]', {
                              'list-disc': content.some((item) => item.isListDisc)
                            })}
                          >
                            {content.map((item, itemIndex) => (
                              <li key={itemIndex}>{item.text}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </Typography>
                  </Box>
                </Box>
                <CustomButton
                  variant="secondary"
                  className="rounded-md bg-white-smoke font-bold shadow-md text-lg mt-3 px-10 self-end flex gap-2 items-center "
                >
                  Download
                  <img src="/v2/icon/download-icon.svg" alt="" />
                </CustomButton>
              </Box>
              <Box className="w-[35%] flex justify-center item-center">
                <div className="w-[100%] flex flex-col items-center pt-12 pb-29">
                  <div className="text-center mb-9">
                    <h1 className="font-bold text-[32px] leading-[38px]">
                      申請合約
                      <br /> 工商憑證簽章程序
                    </h1>
                  </div>
                  <h3 className="text-[32px] font-bold text-[#888] text-center mb-5">環境監測成功</h3>
                  <p className="mb-9 text-[26px] font-bold leading-[22px] text-[#FD1515]">請插入工商憑證並輸入密碼</p>
                  <form className="flex flex-col items-center w-full mb-[22px]">
                    <div className="w-4/5 bg-snowflake-grey shadow-input-box rounded-[18px] flex items-center 2xl:h-[53px] h-10">
                      <img
                        className="mr-3.5 ml-6 2xl:w-6 2xl:h-6 w-4 h-4"
                        src="/images/login/user.svg"
                        width={24}
                        height={24}
                        alt="user-icon"
                      />
                      <input
                        className="text-navy-blue !bg-transparent flex-1 h-full outline-none 2xl:text-xl text-base input-no-bg"
                        type="text"
                        placeholder={'username'}
                      />
                      {/* <div>{formState.errors?.username?.message}</div> */}
                    </div>

                    <div className="w-4/5 bg-snowflake-grey shadow-input-box rounded-[18px] flex items-center 2xl:h-[53px] h-10 mt-5 mb-[22px]">
                      <img
                        className="mr-3.5 ml-6 2xl:w-6 2xl:h-6 w-4 h-4"
                        src="/images/login/key.svg"
                        width={24}
                        height={24}
                        alt="key-icon"
                      />
                      <input
                        className="text-navy-blue !bg-transparent flex-1 h-full outline-none 2xl:text-xl text-base input-no-bg"
                        type="password"
                        placeholder={'password'}
                      />
                      {/* <div>{formState.errors?.password?.message}</div> */}
                    </div>

                    <button
                      type="submit"
                      className="w-[180px] 2xl:h-[53px] h-10 bg-navy-blue rounded-[26px] 2xl:text-xl text-base font-bold bg-blue-btn shadow-btn text-white"
                    >
                      確認
                    </button>
                  </form>
                </div>
              </Box>
            </div>
          </DialogContent>
        </div>
      </BootstrapDialog>
    </div>
  );
};

export default SignatureConfirmationModal;

const SIGNATURE_CONFIRMATION_MODAL: SignatureConfirmationModalType[] = [
  {
    title: ' 一、隱私權保護政策的適用範圍',
    content: [
      {
        text: '隱私權保護政策內容，包括本網站如何處理在您使用網站服務時收集到的個人識別資料。隱私權保護政策不適用於本網站以外的相關連結網站，也不適用於非本網站所委託或參與管理的人員。',
        isListDisc: false
      }
    ]
  },
  {
    title: ' 二、個人資料的蒐集、處理及利用方式',
    content: [
      {
        text: ' 當您造訪本網站或使用本網站所提供之功能服務時，我們將視該服務功能性質，請您提供必要的個人資料，並在該特定目的範圍內處理及利用您的個人資料；非經您書面同意，本網站不會將個人資料用於其他用途。',
        isListDisc: true
      },
      {
        text: ' 本網站在您使用服務信箱、問卷調查等互動性功能時，會保留您所提供的姓名、電子郵件地址、聯絡方式及使用時間等。',
        isListDisc: true
      },
      {
        text: ' 於一般瀏覽時，伺服器會自行記錄相關行徑，包括您使用連線設備的 IP 位址、使用時間、使用的瀏覽器、瀏覽及點選資料記錄等，做為我們增進網站服務的參考依據，此記錄為內部應用，決不對外公佈。',
        isListDisc: true
      },
      {
        text: '  為提供精確的服務，我們會將收集的問卷調查內容進行統計與分析，分析結果之統計數據或說明文字呈現，除供內部研究外，我們會視需要公佈統計數據及說明文字，但不涉及特定個人之資料。',
        isListDisc: true
      },
      {
        text: '  您可以隨時向我們提出請求，以更正或刪除您的帳戶或本網站所蒐集的個人資料等隱私資訊。聯繫方式請見最下方聯繫管道。',
        isListDisc: true
      }
    ]
  },
  {
    title: ' 三、資料之保護',
    content: [
      {
        text: ' 本網站主機均設有防火牆、防毒系統等相關的各項資訊安全設備及必要的安全防護措施，加以保護網站及您的個人資料採用嚴格的保護措施，只由經過授權的人員才能接觸您的個人資料，相關處理人員皆簽有保密合約，如有違反保密義務者，將會受到相關的法律處分。',
        isListDisc: true
      },
      {
        text: ' 如因業務需要有必要委託其他單位提供服務時，本網站亦會嚴格要求其遵守保密義務，並且採取必要檢查程序以確定其將確實遵守。',
        isListDisc: true
      }
    ]
  },
  {
    title: ' 四、網站對外的相關連結',
    content: [
      {
        text: ' 本網站的網頁提供其他網站的網路連結，您也可經由本網站所提供的連結，點選進入其他網站。但該連結網站不適用本網站的隱私權保護政策，您必須參考該連結網站中的隱私權保護政策。',
        isListDisc: false
      }
    ]
  },
  {
    title: '五、與第三人共用個人資料之政策',
    content: [
      {
        text: ' 本網站絕不會提供、交換、出租或出售任何您的個人資料給其他個人、團體、私人企業或公務機關，但有法律依據或合約義務者，不在此限。前項但書之情形包括不限於： 經由您書面同意。 法律明文規定。為免除您生命、身體、自由或財產上之危險。與公務機關或學術研究機構合作，基於公共利益為統計或學術研究而有必要，且資料經過提供者處理或蒐集者依其揭露方式無從識別特定之當事人。當您在網站的行為，違反服務條款或可能損害或妨礙網站與其他使用者權益或導致任何人遭受損害時，經網站管理單位研析揭露您的個人資料是為了辨識、聯絡或採取法律行動所必要者。有利於您的權益。本網站委託廠商協助蒐集、處理或利用您的個人資料時，將對委外廠商或個人善盡監督管理之責。',
        isListDisc: false
      }
    ]
  },
  {
    title: ' 六、Cookie 之使用 為了提供您最佳的服務，本網站會在您的電腦中放置並取用我們的',
    content: [
      {
        text: ' Cookie，若您不願接受 Cookie 的寫入，您可在您使用的瀏覽器功能項中設定隱私權等級為高，即可拒絕 Cookie 的寫入，但可能會導致網站某些功能無法正常執行 。 七、隱私權保護政策之修正 本網站隱私權保護政策將因應需求隨時進行修正，修正後的條款將刊登於網站上。 八、聯繫管道 對於本站之隱私權政策有任何疑問，或者想提出變更、移除個人資料之請求，請前往本站「聯絡我們」頁面提交表單。',
        isListDisc: false
      }
    ]
  }
];
