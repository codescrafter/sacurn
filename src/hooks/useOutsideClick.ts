import { MutableRefObject, useEffect } from 'react';

const useOutsideClick = <T>(refs: MutableRefObject<T>, callback: () => void) => {
  const refsArray = Array.isArray(refs) ? refs : [refs];

  const handleClick = (event: MouseEvent) => {
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
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [refsArray, callback]);
};

export default useOutsideClick;
