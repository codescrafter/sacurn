import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import classNames from 'classnames';
import { useState } from 'react';
import React from 'react';
interface IProps {
  title: string;
  name: string;
}
const PermissionCard = ({ title, name }: IProps) => {
  const [showAccordion, setShowAccordion] = useState(false);

  return (
    <div>
      <h1 className="text-3xl text-Deep-sea-blue font-bold max-[1400px]:text-xl ">{title}</h1>
      <div>
        <Accordion
          className={classNames('mt-5', {
            'border-b-2 border-grey-ghoose border-dashed ': !{ showAccordion },
            'border-b-2 border-grey-ghoose border-dashed': { showAccordion }
          })}
          sx={{ backgroundColor: 'inherit', boxShadow: '0px 0px 0px 0px transparent', Opacity: '0.1' }}
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
              <p className="px-4 text-xl font-bold max-[1400px]:text-base">{name}</p>
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="pl-10 border-l-4 border-candle-light w-full bg-geyser ">
            <Typography>
              <p className="px-4 text-xl text-left font-normal max-[1400px]:text-base py-3"> dd</p>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default PermissionCard;
