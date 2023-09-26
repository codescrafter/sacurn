import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Box from '@mui/material/Box';
import { SxProps } from '@mui/system';
import * as React from 'react';

interface IProps {
  isLowToHight: boolean;
  onSortChange: () => void;
}

export default function SortFiltersModal({ isLowToHight, onSortChange }: IProps) {
  const [openSortModal, setOpenSortModal] = React.useState(false);

  const handleClickAway = () => {
    setOpenSortModal(false);
  };

  const styles: SxProps = {
    position: 'absolute',
    top: 28,
    right: 0,
    zIndex: 1,
    p: 1,
    border: '2px solid #DFDFDF',
    bgcolor: 'background.paper',
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
    color: 'black',
    width: '205px',
    borderRadius: '5px'
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className="relative text-white">
        <span className="cursor-pointer" onClick={() => setOpenSortModal(true)}>
          {isLowToHight ? 'Sort: Low to High' : 'Sort: High to Low'}
        </span>
        {openSortModal && <KeyboardArrowDownIcon />}
        {!openSortModal && <KeyboardArrowUpIcon />}
        {openSortModal ? (
          <Box sx={styles}>
            <div className="px-2.5 py-3">
              <h6 className="text-[#525252] text-lg font-bold mb-4">Price</h6>
              <div onClick={onSortChange} className="flex cursor-pointer justify-between items-center mb-4">
                <span className="text-[#525252] text-lg font-normal">Low to High</span>
                <input type="radio" name="price" className="w-5 h-5" checked={isLowToHight} />
              </div>
              <div className="flex cursor-pointer justify-between items-center mb-4">
                <span onClick={onSortChange} className="text-[#525252] text-lg font-normal">
                  High to Low
                </span>
                <input type="radio" name="price" className="w-5 h-5" checked={!isLowToHight} onChange={onSortChange} />
              </div>
              <h6 className="text-[#525252] text-lg font-bold mb-4">Vintages</h6>
              <div className="flex justify-between items-center">
                <span className="text-[#525252] text-lg font-normal">Newest to Oldest</span>
                <input type="radio" name="price" className="w-5 h-5" />
              </div>
              <div className="flex justify-between items-center mt-3">
                <span className="text-[#525252] text-lg font-normal">Oldest to Newest</span>
                <input type="radio" name="price" className="w-5 h-5" />
              </div>
            </div>
          </Box>
        ) : null}
      </div>
    </ClickAwayListener>
  );
}
