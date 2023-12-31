import BenefitAccordion from './Accordion';

const BenefitImpact = () => {
  return (
    <div className="grid grid-cols-5 gap-3 h-[695px]">
      {/* First col */}
      <div className="col-span-2">
        <img src="/images/products/green/co-benefit.png" alt="sacurn" className="w-[466px] h-[380px] object-center" />
        <div>
          {DATA.map((item) => (
            <div key={item.title} className="bg-card-bg-light p-3 mt-5 rounded-[5px]">
              <div className="flex gap-4 items-center">
                <img src={item.image} alt={item.description} className="max-w-[33px] max-h-[24px] object-contain" />
                <h5 className="text-xl font-semibold text-white">{item.value}</h5>
              </div>
              <p className="text-white leading-[18px]">{item.title}</p>
              <p className="text-[15px] text-text-light leading-4">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Second col */}
      <div className="col-span-3 yellowScrollNoBg mr-1 pr-5.5  overflow-scroll overflow-x-hidden h-full">
        <h1 className="border-l px-3 py-1 border-white text-xl font-bold text-white w-[90%]">
          Project contributes to 13 sustainable development goals.
        </h1>
        <div>
          {IMPACT_DATA.map((item) => (
            <BenefitAccordion key={item.title} title={item.title} description={item.description} image={item.image} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BenefitImpact;

const DATA = [
  {
    value: 'Over 3,550,000',
    title: 'Tons of emission removals over the project’s lifetime to date',
    description: 'Emission reductions are expected to continue over the project’s lifetime of 20 years.',
    image: '/images/products/green/tree.svg'
  },
  {
    value: '198,465',
    title: 'Hectares of mangrove land peotected',
    description:
      'The projects activities aim to provide local communities with the means to make a living sustainably in the fields of handicrafts, tourism associations, forestry, beekeeping, and more.',
    image: '/images/products/bird-icon.svg'
  }
];

const IMPACT_DATA = [
  {
    title: 'SDG 1 No Poverty',
    description: 'Providing livelihood support to vulnerable communities.',
    link: '/',
    image: '/images/products/green/impact1.png'
  },
  {
    title: 'SDG 2 Zero Hunger',
    description: 'Reducing cost of living and increasing access to food',
    link: '/',
    image: '/images/products/green/impact2.png'
  },
  {
    title: 'SDG 3 Good Health',
    description: 'Ensure healthy lives and promote well-being for all at all ages.',
    link: '/',
    image: '/images/products/green/impact3.png'
  },
  {
    title: 'SDG 4 Quality Education',
    description: 'Providing quality education for all is fundamental to creating a peaceful and prosperous world.',
    link: '/',
    image: '/images/products/green/impact4.png'
  },
  {
    title: 'SDG 5 Gender Equality',
    description: 'Achieve gender equality and empower all women and girls.',
    link: '/',
    image: '/images/products/green/impact1.png'
  },
  {
    title: 'SDG 6 Gender Equality',
    description: 'Achieve gender equality and empower all women and girls.',
    link: '/',
    image: '/images/products/green/impact1.png'
  },
  {
    title: 'SDG 7 Gender Equality',
    description: 'Achieve gender equality and empower all women and girls.',
    link: '/',
    image: '/images/products/green/impact1.png'
  },
  {
    title: 'SDG 8 Gender Equality',
    description: 'Achieve gender equality and empower all women and girls.',
    link: '/',
    image: '/images/products/green/impact1.png'
  },
  {
    title: 'SDG 9 Gender Equality',
    description: 'Achieve gender equality and empower all women and girls.',
    link: '/',
    image: '/images/products/green/impact1.png'
  }
];
