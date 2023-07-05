import React, { useState, useRef } from "react";
import Image from "next/image";
import useOutsideClick from "@/hooks/useOutsideClick";

const CustomSelect = () => {
  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Canada");

  const ref = useRef();

  useOutsideClick(ref, () => {
    if (open) setOpen(false);
  });

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setOpen(!open);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const options = ["Option 1", "Option 2", "Option 3", "Option 4"];

  return (
    <div className="relative inline-block">
      <div
        className="rounded py-2 flex items-center cursor-pointer"
        onClick={toggleDropdown}
      >
        <div className="text-dark-grey text-base xl:text-lg font-black flex items-center gap-2">
          {selectedOption || "Select an option"}{" "}
          <Image
            width={10}
            height={12}
            src={"/images/operation-record/icon_chervon_down.png"}
            alt="arrow"
          />
        </div>
      </div>
      {open && (
        <div
          ref={ref}
          className="absolute right-0 top-10 py-2 min-w-[10rem] bg-white rounded-lg shadow-lg z-10"
        >
          {options.map((option, index) => (
            <div
              key={index}
              className="cursor-pointer whitespace-nowrap px-4 py-2 hover:bg-grey/10 text-dark-grey text-base xl:text-lg font-black"
              onClick={() => handleOptionSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
