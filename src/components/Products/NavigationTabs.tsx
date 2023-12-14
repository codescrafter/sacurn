import classNames from 'classnames';

const NavigationTabs = ({ active, className }: { active: number; className: string }) => {
  const scrollIntoView = (btnNumber: number) => {
    let sectionId = '';
    if (btnNumber === 1) sectionId = 'section-1';
    else if (btnNumber === 2) sectionId = 'section-2';
    else if (btnNumber === 3) sectionId = 'section-3';
    const element = document.getElementById(sectionId);
    console.log('element', element);

    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className={classNames('gap-5 flex justify-center', className)}>
      <div
        className={classNames(
          'w-[353px] h-[46px] px-2.5 flex justify-center items-center rounded-[125px] shadow-[0px 2px 11px 0px rgba(77, 77, 77, 0.95)] cursor-pointer active:translate-y-0.5',
          { 'bg-pale-yellow hover:bg-[#e7ce4f]': active === 1 },
          { 'bg-smoke hover:bg-white': active !== 1 }
        )}
        onClick={() => scrollIntoView(1)}
      >
        <p className="text-dark-grey font-medium text-xl">Product Details</p>
      </div>
      <div
        className={classNames(
          'w-[353px] h-[46px] px-2.5 flex justify-center items-center rounded-[125px] shadow-[0px 2px 11px 0px rgba(77, 77, 77, 0.95)]  cursor-pointer active:translate-y-0.5',
          { 'bg-pale-yellow hover:bg-[#e7ce4f]': active === 2 },
          { 'bg-smoke hover:bg-white': active !== 2 }
        )}
        onClick={() => scrollIntoView(2)}
      >
        <p className="text-dark-grey font-medium text-xl">Carbon Impact & Performance</p>
      </div>
      <div
        className={classNames(
          'w-[353px] h-[46px] px-2.5 flex justify-center items-center rounded-[125px] shadow-[0px 2px 11px 0px rgba(77, 77, 77, 0.95)] cursor-pointer active:translate-y-0.5',
          { 'bg-pale-yellow hover:bg-[#e7ce4f]': active === 3 },
          { 'bg-smoke hover:bg-white': active !== 3 }
        )}
        onClick={() => scrollIntoView(3)}
      >
        <p className="text-dark-grey font-medium text-xl">Co-benefit Impact</p>
      </div>
    </div>
  );
};
export default NavigationTabs;
