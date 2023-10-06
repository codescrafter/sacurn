import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useState } from 'react';
interface IProps {
  Card_heading: string;
  Card_name: string;
  Card_description: string;
  Card_heading2: string;
}

const PlatformInstructionCard = ({ Card_heading, Card_name, Card_description, Card_heading2 }: IProps) => {
  const [show, setShow] = useState(true);
  const [show2, setShow2] = useState(true);
  return (
    <div className="">
      <h1 className="text-3xl text-DeepSeaBlue font-bold">{Card_heading}</h1>

      <div className="">
        <div className="flex justify-between px-8 text-xl font-bold py-2">
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
          <div className={`px-10 h-[100px] overflow-y-scroll yellowScroll  ${show ? '' : 'hidden'}`}>
            {show && <p className="text-xl text-justify font-normal py-4"> {Card_description}</p>}
          </div>
        </div>
        <div className="flex justify-between px-8 text-xl font-bold py-2">
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
          <div className={`px-10  h-[100px] overflow-y-scroll yellowScroll  ${show2 ? '' : 'hidden'}`}>
            {show2 && <p className="text-xl text-justify font-normal py-4"> {Card_description}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatformInstructionCard;
