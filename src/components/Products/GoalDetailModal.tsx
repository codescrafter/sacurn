import { Backdrop } from '@mui/material';
import { useState } from 'react';

interface GoalDetailModalIProps {
  icon: string;
  title: string;
  shortDesc: string;
  details: string;
}

const GoalDetailModal = ({ icon, title, shortDesc, details }: GoalDetailModalIProps) => {
  const [showModal, setShowModal] = useState(false);
  console.log('details', details);
  return (
    <>
      <p className="ml-auto text-pale-yellow text-[15px] font-bold" onClick={() => setShowModal(true)}>
        View more
      </p>

      <Backdrop open={showModal} onClick={() => setShowModal(false)}>
        <div className="bg-white w-[942px] rounded-[10px] flex flex-col items-center px-[67px] py-[41px] relative">
          <img
            src="/images/products-page/ic_circle_close.svg"
            alt="close"
            width={32}
            height={32}
            className="absolute top-2.5 right-3 cursor-pointer"
            onClick={() => setShowModal(false)}
          />
          <div className="flex gap-5">
            <img
              width={90}
              height={90}
              src={icon}
              alt="goal"
              className="min-w-[90px] min-h-[90px] max-w-[90px] max-h-[90px]"
            />
            <div>
              <h3 className="text-dark-grey font-semibold uppercase mb-1.5 text-[25px]">{title}</h3>
              <p className="text-dark-grey text-[22px]">{shortDesc}</p>
              <div className="w-[114px] h-[3px] bg-[#888] my-[9px]"></div>
              <div className="text-[20px] leading-7 text-dark-grey">
                <p className="indent-8">
                  Goal 16 is about promoting peaceful and inclusive societies, providing access to justice for all and
                  building effective, accountable and inclusive institutions at all levels. People everywhere should be
                  free of fear from all forms of violence and feel safe as they go about their lives whatever their
                  ethnicity, faith or sexual orientation.
                </p>
                <p className="indent-8">
                  However, ongoing and new violent conflicts around the world are derailing the global path to peace and
                  achievement of Goal 16. Alarmingly, the year 2022 witnessed a more than 50 per cent increase in
                  conflict-related civilian deaths – the first since the adoption of Agenda 2030 – largely due to the
                  war in Ukraine.
                </p>
                <p className="indent-8">
                  High levels of armed violence and insecurity have a destructive impact on a country’s development,
                  while sexual violence, crime, exploitation and torture are prevalent where there is conflict or no
                  rule of law, and countries must take measures to protect those who are most at risk.
                </p>
                <p className="indent-8">
                  Governments, civil society and communities need to work together to find lasting solutions to conflict
                  and insecurity. Strengthening the rule of law and promoting human rights is key to this process, as is
                  reducing the flow of illicit arms, combating corruption, and ensuring inclusive participation at all
                  times.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Backdrop>
    </>
  );
};

export default GoalDetailModal;
