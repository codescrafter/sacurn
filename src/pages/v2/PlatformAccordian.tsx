import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import classNames from 'classnames';
import { useState } from 'react';

import { usePlatformStore } from '@/store/platform';

import { INSTRUCTION_CARD_DATA } from './PlatformInstructions';

interface IProps {
  currentIndex?: number;
  title: string;
  items: { name: string; description: string }[];
}

const PlatformAccordian = ({ title, items, currentIndex }: IProps) => {
  const [accordionSlugList, setAccordionSlugList] = useState<string[]>([`${INSTRUCTION_CARD_DATA?.[0]?.id}0`]);
  const togglePermissionSettings = usePlatformStore((state) => state.togglePermissionSettings);
  const handleChange = (panel: string) => {
    if (accordionSlugList.includes(panel)) {
      setAccordionSlugList(accordionSlugList.filter((item) => item !== panel));
    } else setAccordionSlugList([...accordionSlugList, panel]);
  };

  const iconClickHandler = (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>,
    item: { name: string; description: string }
  ) => {
    if (item.name === '權限的區分？') {
      e.stopPropagation();
      togglePermissionSettings();
    }
  };
  return (
    <div>
      <h1 className="!text-3xl text-navy-blue font-bold max-[1400px]:text-xl mt-3  ">{title}</h1>
      <div>
        {items.map((item, index) => {
          return (
            <Accordion
              key={index}
              defaultExpanded={`${INSTRUCTION_CARD_DATA?.[0]?.id}0` === `${currentIndex}${index}` ? true : false}
              className={classNames('mt-5 font=', {
                'border-b-2 border-grey-ghoose border-dashed ': !{},
                'border-b-2 border-grey-ghoose border-dashed': {}
              })}
              onChange={() => {
                handleChange(`${currentIndex}${index}`);
              }}
              sx={{
                backgroundColor: 'inherit',
                boxShadow: '0px 0px 0px 0px transparent',
                Opacity: '0.1',
                '&:before': {
                  display: 'none'
                }
              }}
            >
              <AccordionSummary
                expandIcon={
                  <span onClick={(e) => iconClickHandler(e, item)}>
                    {accordionSlugList.includes(`${currentIndex}${index}`) ? <RemoveIcon /> : <AddIcon />}
                  </span>
                }
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className="px-4 !text-xl font-bold max-[1400px]:text-base">{item.name}</Typography>
              </AccordionSummary>
              <AccordionDetails className="pl-10 border-l-4 border-pale-yellow w-full bg-geyser ">
                <Typography className="px-4 !text-xl text-left max-[1400px]:text-base py-3 font-normal">
                  {item.description}
                </Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </div>
    </div>
  );
};

export default PlatformAccordian;
