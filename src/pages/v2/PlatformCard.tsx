import AddIcon from '@mui/icons-material/Add';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import RemoveIcon from '@mui/icons-material/Remove';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import classNames from 'classnames';
import { useState } from 'react';
interface IProps {
  title: string;
  name: string;
  description: string;
  subTitle: string;
}

const PlatformCard = ({ title, name, description, subTitle }: IProps) => {
  const [showAccordion, setShowAccordion] = useState(false);
  const [showAccordion2, setShowAccordion2] = useState(false);

  return (
    <div className="">
      <h1 className="text-3xl text-DeepSeaBlue font-bold max-[1400px]:text-xl">{title}</h1>
      <div>
        <Accordion
          className={classNames('mt-5', {
            'border-b-2 border-grey-ghoose border-dashed ': !{ showAccordion },
            'border-b-2 border-grey-ghoose border-dashed': { showAccordion }
          })}
          sx={{ backgroundColor: 'inherit', boxShadow: '0px 0px 0px 0px #ffffffe6', Opacity: '0.1' }}
        >
          {/* ${
            showAccordion
              ? 'border-b-2 border-grey-ghoose border-dashed bg-Geyser'
              : 'border-b-2 border-grey-ghoose border-dashed bg-Geyser'
          } */}
          <AccordionSummary
            expandIcon={
              showAccordion ? (
                <span>
                  <RemoveIcon onClick={() => setShowAccordion(!showAccordion)} />
                </span>
              ) : (
                <span>
                  <AddIcon onClick={() => setShowAccordion(!showAccordion)} />
                </span>
              )
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              <p className="  px-4 text-xl font-bold max-[1400px]:text-base">{name}</p>
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            className={`pl-10 h-[90px] overflow-y-scroll scroll-right w-[100%] bg-Geyser ${
              showAccordion ? '' : 'hidden'
            }`}
          >
            <Typography>
              <p className="px-4 text-xl text-left font-normal max-[1400px]:text-base"> {description}</p>
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          className={classNames('mt-3 mb-5', {
            'border-b-2 border-grey-ghoose border-dashed ': !{ showAccordion2 },
            'border-b-2 border-grey-ghoose border-dashed': { showAccordion2 }
          })}
          sx={{ backgroundColor: 'inherit', boxShadow: '0px 0px 0px 0px #ffffffe6', Opacity: '0.1' }}
        >
          <AccordionSummary
            expandIcon={
              showAccordion2 ? (
                <span>
                  <RemoveIcon onClick={() => setShowAccordion2(!showAccordion2)} />
                </span>
              ) : (
                <span>
                  <AddIcon onClick={() => setShowAccordion2(!showAccordion2)} />
                </span>
              )
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              <p className="px-4 text-xl font-bold max-[1400px]:text-base">{subTitle}</p>
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            className={` px-10 h-[100px] overflow-y-scroll scroll-right w-[100%] bg-Geyser  ${
              showAccordion2 ? '' : 'hidden'
            }`}
          >
            <Typography className="text-xl text-left font-normal py-4  max-[1400px]:text-base">
              {description}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default PlatformCard;
