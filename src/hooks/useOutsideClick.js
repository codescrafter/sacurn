import { useEffect, useRef } from "react";

const useOutsideClick = (refs, callback) => {
  const refsArray = Array.isArray(refs) ? refs : [refs];

  const handleClick = (event) => {
    let clickedOutside = true;

    refsArray.forEach((ref) => {
      if (ref.current && ref.current.contains(event.target)) {
        clickedOutside = false;
      }
    });

    if (clickedOutside) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [refsArray, callback]);
};

export default useOutsideClick;
