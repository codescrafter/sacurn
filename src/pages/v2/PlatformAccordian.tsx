import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import classNames from 'classnames';
import { useState } from 'react';
interface IProps {
  currentIndex?: number;
  title: string;
  items: { name: string; description: string }[];
}

const PlatformAccordian = ({ title, currentIndex, items }: IProps) => {
  const [showAccordion, setShowAccordion] = useState(currentIndex === 0);
  return (
    <div>
      <h1 className="text-3xl text-navy-blue font-bold max-[1400px]:text-xl mt-3  ">{title}</h1>
      <div>
        {items.map((item, index) => {
          console.log('current is:', currentIndex, 'index is:', index);
          return (
            <Accordion
              key={index}
              defaultExpanded={index === 0 ? showAccordion : false}
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
                  <p className="px-4 text-xl font-bold max-[1400px]:text-base ">{item.name}</p>
                </Typography>
              </AccordionSummary>
              <AccordionDetails className="pl-10 border-l-4 border-pale-yellow w-full bg-geyser ">
                <Typography>
                  <p className="px-4 text-xl text-left font-normal max-[1400px]:text-base py-3"> {item.description}</p>
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
