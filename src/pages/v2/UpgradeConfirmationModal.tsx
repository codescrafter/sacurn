import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { createModal } from 'react-modal-promise';
import { InstanceProps } from 'react-modal-promise/lib/types';

import CustomButton from '@/components/CustomButton';

type UpgradeConfirmationModalProps = InstanceProps<boolean, boolean>;

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2)
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1)
  }
}));

const UpgradeConfirmationModal = ({ isOpen, onResolve }: UpgradeConfirmationModalProps) => {
  const onClose = () => onResolve(false);

  return (
    <div>
      <BootstrapDialog onClose={onClose} aria-labelledby="customized-dialog-title" open={isOpen}>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 0,
            top: 0,
            color: '#005487'
          }}
        >
          <CancelOutlinedIcon sx={{ fontSize: '35px' }} />
        </IconButton>
        <DialogContent
          sx={{
            mt: '40px'
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              paddingX: '55px',
              paddingBottom: '22px'
            }}
          >
            <Typography gutterBottom>
              <img src="/v2/upgrade-confirmation-image/confirmation-image.svg" alt="" />
            </Typography>
            <DialogTitle
              sx={{ m: 0, p: 2, color: '#000000', fontWeight: 700, fontSize: '25px' }}
              id="customized-dialog-title"
            >
              會員卡升等申請
            </DialogTitle>
            <Typography
              gutterBottom
              sx={{
                color: '#525252',
                fontWeight: '400',
                fontSize: '20px'
              }}
            >
              會員卡升等申請核准後, 原卡片將廢止並寄送升等卡至會員收件地址。
            </Typography>
            <Typography
              gutterBottom
              sx={{
                fontSize: '15px',
                color: '#FF0000',
                fontWeight: '400',
                alignSelf: 'self-start'
              }}
            >
              如會員地址已異動，請於申請前與客服中心聯絡，先行變更地址。
            </Typography>
            <CustomButton
              variant="primary"
              className="rounded-[20px] px-12 h-12 text-lg mt-3 hover:border-2 hover:bg-white hover:text-navy-blue "
              onClick={() => onResolve(true)}
            >
              確認
            </CustomButton>
          </Box>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
};

const PromiseUpgradeConfirmationModal = createModal<UpgradeConfirmationModalProps>(UpgradeConfirmationModal);
export default PromiseUpgradeConfirmationModal;
