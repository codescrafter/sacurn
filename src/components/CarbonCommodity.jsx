import React from "react";

const CarbonCommodity = ({
  image,
  linkText,
  linkIcon,
  heading,
  subHeading,
}) => {
  return (
    <div className="flex">
      <img
        src={image}
        alt="Carbon Commodity"
        width={78}
        height={78}
        className="2xl:mr-4 mr-3 2xl:w-20 2xl:h-20 w-17 h-17"
      />
      <div>
        <p className="h-6 max-w-fit flex 2xl:px-5 px-4 rounded-[20px] bg-light-grey text-medium-grey font-semibold">
          {linkText}
          <img
            src={linkIcon}
            alt={linkText}
            width={16}
            height={13}
            className="ml-2.5"
          />
        </p>
        <h3 className="2xl:text-2xl text-xl font-medium ">{heading}</h3>
        <p className="text-[#ffffff99] 2xl:text-lg text-base font-semibold ">
          {subHeading}
        </p>
      </div>
    </div>
  );
};

export default CarbonCommodity;
