import AddIcon from '@mui/icons-material/Add';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import RemoveIcon from '@mui/icons-material/Remove';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
// import * as React from 'react';
interface IProps {
  Card_heading: string;
  Card_name: string;
  Card_description: string;
  Card_heading2: string;
}

const PlatformInstructionCard = ({ Card_heading, Card_name, Card_description, Card_heading2 }: IProps) => {
  // const [show, setShow] = useState(false);
  // const [show2, setShow2] = useState(false);
  const [showAccordion, setShowAccordion] = useState(false);
  const [showAccordion2, setShowAccordion2] = useState(false);

  // const toggleAccordion = () => {
  //   setShowAccordion(!showAccordion);
  // };

  return (
    <div className="">
      <h1 className="text-3xl text-DeepSeaBlue font-bold max-[1400px]:text-xl">{Card_heading}</h1>

      <div className="">
        {/* <div className="flex justify-between px-8 text-xl font-bold py-2  max-[1400px]:text-base">
          <p>{Card_name}</p>

          <button onClick={() => setShow(!show)}>
            {show ? (
              <span>
                <RemoveIcon />
              </span>
            ) : (
              <span>
                <AddIcon />
              </span>
            )}
          </button>
        </div>
        <div className="w-[100%] border-b-2 border-grey-ghoose border-dashed bg-Geyser ">
          <div className={`px-10 h-[100px] overflow-y-scroll scroll-right  ${show ? '' : 'hidden'}`}>
            {show && <p className="text-xl text-left font-normal py-4  max-[1400px]:text-base"> {Card_description}</p>}
          </div>
        </div> */}
        <Accordion className="mt-5 ">
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
            <Typography className=" ">
              <p className="  px-4 text-xl font-bold max-[1400px]:text-base">{Card_name}</p>
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            className={`pl-10 h-[100px] overflow-y-scroll scroll-right w-[100%] border-b-2 border-grey-ghoose border-dashed bg-Geyser ${
              showAccordion ? '' : 'hidden'
            }`}
          >
            <Typography className="  ">
              <p className="px-4 text-xl text-left font-normal max-[1400px]:text-base"> {Card_description}</p>
            </Typography>
          </AccordionDetails>
        </Accordion>
        {/* <div className="flex justify-between px-8 text-xl font-bold py-2">
          <p>{Card_heading2}</p>
          <button onClick={() => setShow2(!show2)}>
            {show2 ? (
              <span>
                <RemoveIcon />
              </span>
            ) : (
              <span>
                <AddIcon />
              </span>
            )}
          </button>
        </div>
        <div className=" w-[100%] border-b-2 border-grey-ghoose border-dashed bg-Geyser">
          <div className={`px-10  h-[100px] overflow-y-scroll scroll-right  ${show2 ? '' : 'hidden'} `}>
            {show2 && (
              <p className="text-xl text-left font-normal py-4  max-[1400px]:text-base "> {Card_description}</p>
            )}
          </div>
        </div> */}
        <Accordion className="mt-3 mb-5">
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
              <p className="px-4 text-xl font-bold max-[1400px]:text-base">{Card_heading2}</p>
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            className={` px-10 h-[100px] overflow-y-scroll scroll-right w-[100%] border-b-2 border-grey-ghoose border-dashed bg-Geyser  ${
              showAccordion2 ? '' : 'hidden'
            }`}
          >
            <Typography className="text-xl text-left font-normal py-4  max-[1400px]:text-base">
              {Card_description}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default PlatformInstructionCard;
