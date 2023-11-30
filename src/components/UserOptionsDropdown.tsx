import { LinearProgress, linearProgressClasses, MenuItem } from '@mui/material';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses, TooltipProps } from '@mui/material/Tooltip';
import * as React from 'react';
import { Link } from 'react-router-dom';

import { useInventoryStore } from '@/store/inventory';
import { useUserStore } from '@/store/user';
import { formatNumberByComma } from '@/util/helper';

const CustomWidthTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: 210,
    width: 210,
    backgroundColor: '#FFFFFF'
  }
});
const BorderLinearProgress = styled(LinearProgress)(() => ({
  height: 9,
  borderRadius: 5,
  width: '142px',

  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: '#FFD600',
    borderRadius: 5
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: '#005487'
  }
}));

export default function UserOptionsDropdown() {
  const getOrdersInfo = useInventoryStore((state) => state.getOrdersInfo);
  React.useEffect(() => {
    getOrdersInfo();
  }, []);

  return (
    <CustomWidthTooltip title={<UserMenu />} arrow>
      <img
        alt="sacurn"
        src="/images/navbar/member.svg"
        className="2xl:w-10.5 2xl:h-10.5 w-8 h-8 cursor-pointer pt-1"
        width={42}
        height={42}
      />
    </CustomWidthTooltip>
  );
}

const UserMenu = () => {
  const ordersInfo = useInventoryStore((state) => state.ordersInfo);
  const logout = useUserStore((state) => state.logout);

  const logoutHandler = async () => {
    await logout();
    window.location.replace('/login');
  };

  return (
    <div className="pt-5 flex flex-col items-center gap-2">
      <p className="text-lg font-normal text-black">X Holdings・Musk</p>
      <div className="border-4 border-pale-yellow rounded-full w-[67px] h-[67px]">
        <img
          alt="sacurn"
          src="/images/navbar/musk.jpeg"
          className="w-full h-full object-cover rounded-full"
          width={67}
          height={67}
        />
      </div>
      <div className="relative p-0.7 rounded-[20px] flex items-center bg-pale-yellow">
        <BorderLinearProgress
          variant="determinate"
          value={(ordersInfo.acc_amount || 0 / ordersInfo?.upgrade?.points) * 100}
        />
      </div>
      <p className="text-sm font-normal text-black">
        {formatNumberByComma(ordersInfo.acc_point as number)}/{formatNumberByComma(ordersInfo?.upgrade?.points)}
      </p>
      <p className="text-navy-blue text-sm"> 管理者</p>
      <div>
        <Link to="/v2/account-information">
          <MenuItem
            sx={{ color: 'black', display: 'flex', justifyContent: 'center', fontSize: '18px' }}
            className="text-black hover:text-navy-blue active:text-navy-blue flex justify-center"
          >
            會員中心
          </MenuItem>
        </Link>
        <Link to="/historical-order">
          <MenuItem
            sx={{ color: 'black', display: 'flex', justifyContent: 'center', fontSize: '18px' }}
            className="text-black hover:text-navy-blue active:text-navy-blue"
          >
            歷史訂單
          </MenuItem>
        </Link>
        <Link to="/operation-record">
          <MenuItem
            sx={{ color: 'black', display: 'flex', justifyContent: 'center', fontSize: '18px' }}
            className="text-black hover:text-navy-blue active:text-navy-blue"
          >
            操作記錄
          </MenuItem>
        </Link>
        <MenuItem
          onClick={logoutHandler}
          sx={{ color: 'black', display: 'flex', justifyContent: 'center', fontSize: '18px' }}
          className="text-black hover:text-navy-blue active:text-navy-blue"
        >
          登出
        </MenuItem>
      </div>
    </div>
  );
};
