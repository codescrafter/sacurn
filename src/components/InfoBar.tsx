import { FC } from "react";

const InfoBar: FC = () => {
  return (
    <div
      className="w-full h-11.5 blur-[15px] bg-info-box flex items-center justify-center text-white"
      style={{
        filter: "drop-shadow(0px 2px 1px rgba(0, 0, 0, 0.45))"
      }}
    >
      <p className="font-normal text-xl leading-6 tracking-[0.1em]">
        Southern Cardamom REDD+ Forest Conservation
        <span className="mx-10">
          2023 <span className="mx-3">5</span> 25
        </span>
        <span className="mr-3">(UTC+8)</span> 10:00
      </p>
    </div>
  );
};

export default InfoBar;
