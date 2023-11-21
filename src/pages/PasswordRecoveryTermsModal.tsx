import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import * as React from 'react';

import CustomButton from '@/components/CustomButton';

import { PURCHASE_INFO_NOTE } from './PaymentInformation';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2)
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1)
  }
}));
const PasswordRecoveryTermsModal = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <CustomButton onClick={handleClickOpen} variant="primary" className="rounded-xl px-18 h-13 text-xl mt-3 border-2">
        下一步
      </CustomButton>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullWidth={true}
        maxWidth="md"
        sx={{
          '& .MuiPaper-rounded': {
            borderRadius: '20px'
          }
        }}
      >
        <DialogContent>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Typography
              sx={{ m: 0, color: '#525252', fontWeight: 700, fontSize: '18px', textAlign: 'center', pb: '15px' }}
              id="customized-dialog-title"
            >
              <p> 本網站之《服務條款》、《隱私政策》和《Cookie 政策》</p>
            </Typography>
            <Box className="yellowScroll" sx={{ overflowY: 'scroll', height: '350px', width: '100%' }}>
              <Box sx={{ background: '#F5F5F5', width: '98%', p: '11px', color: '#525252' }}>
                {PURCHASE_INFO_NOTE.map((note) => (
                  <div key={note.id}>
                    <div className="mb-1 flex gap-2 items-center px-2">
                      <p className="text-base font-medium">{note.id}.</p>
                      <p className="text-sm">{note.title}</p>
                    </div>
                    <div>
                      {note.content.map((content) => (
                        <div key={content.id}>
                          <div className="flex mb-2 items-baseline gap-2 indent-8">
                            <p className="text-sm font-medium">{content.id}:</p>
                            <p className="text-sm indent-0">{content.id === 1.2 ? content.title : content.detail}</p>
                          </div>
                          <div>
                            {content.id === 1.2 && (
                              <div>
                                {content.subContent?.map((x) => (
                                  <div className="flex gap-2 indent-16 items-baseline mb-2">
                                    <p className="text-sm font-medium">{x.id}:</p>
                                    <p key={x.id} className="text-sm indent-0">
                                      {x.detail}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </Box>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', width: '95%' }}>
              <CustomButton
                variant="secondary"
                className="rounded-md bg-white-smoke font-bold shadow-download-btn text-lg mt-3 px-10 self-end flex gap-2 items-center "
              >
                Download
                <img src="/v2/icon/download-icon.svg" alt="" />
              </CustomButton>
            </Box>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '30px',
                px: '10px',
                paddingTop: '10px',
                width: '100%'
              }}
            >
              <CustomButton variant="primary" className="rounded-full px-17 h-12 text-lg mt-3 ">
                同意
              </CustomButton>
              <CustomButton
                variant="primary"
                className="rounded-full px-15 h-12 text-lg mt-3 !text-navy-blue bg-white border-2 "
              >
                不同意
              </CustomButton>
            </Box>
          </Box>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
};

export default PasswordRecoveryTermsModal;
