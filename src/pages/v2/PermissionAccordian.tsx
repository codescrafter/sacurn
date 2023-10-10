import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

import { PermissionTableHeadingType } from '@/type';

import PermissionAccordianTable from './PermissionAccordianTable';

interface IProps {
  title: string;
  subTitle: string;
}
const PermissionAccordian = ({ title, subTitle }: IProps) => {
  const [showAccordion, setShowAccordion] = useState(true);

  return (
    <div>
      <h1 className="text-3xl text-navy-blue font-bold max-[1400px]:text-xl ">{title}</h1>
      <div>
        <Accordion
          classes="mt-5"
          sx={{ backgroundColor: 'inherit', boxShadow: '0px 0px 0px 0px transparent', Opacity: '0.1' }}
          expanded={true}
        >
          <AccordionSummary
            expandIcon={
              showAccordion ? (
                <RemoveIcon onClick={() => setShowAccordion(!showAccordion)} />
              ) : (
                <AddIcon onClick={() => setShowAccordion(!showAccordion)} />
              )
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              <p className="px-4 text-xl font-bold max-[1400px]:text-base text-navy-blue">{subTitle}</p>
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="pl-10 border-l-4 border-pale-yellow w-full bg-geyser">
            <Typography className="pt-2 px-4">
              <PermissionAccordianTable CardHeading={PERMISSION_TABLE_HEADING} />
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default PermissionAccordian;
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
