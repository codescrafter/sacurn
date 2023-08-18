import Card from './Card';

const ProductDetail = () => {
  return (
    <div className="yellowScrollNoBg mr-1 pr-5.5  overflow-scroll overflow-x-hidden">
      <div className="h-[55vh]">
        <div className="flex gap-5 mb-5">
          {['1', '2', '3'].map(() => (
            <Card />
          ))}
        </div>
        <div className="border border-white rounded p-4">
          <div className="grid grid-cols-3 gap-7 pb-7">
            {BASIC_DETAILS.map((item) => (
              <Item key={item.title} title={item.title} value={item.value} />
            ))}
          </div>
          <Divider />
          <div className="pt-7">
            <div className="grid grid-cols-2 gap-7">
              {STANDARD_DETAILS.map((item) => (
                <Item key={item.title} title={item.title} value={item.value} description={item.description} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

interface ItemTypes {
  title: string;
  value: string;
  description?: string;
}
const Item = ({ title, value, description }: ItemTypes) => {
  return (
    <div>
      <h6 className="font-akaya text-cyan">{title}</h6>
      <p className="text-lg font-semibold text-white">{value}</p>
      {description && <p className="text-lg font-semibold text-white">{description}</p>}
    </div>
  );
};

const Divider = () => {
  return <div className="border border-white w-full" />;
};

const BASIC_DETAILS: ItemTypes[] = [
  {
    title: 'Project Code',
    value: 'VCS-985'
  },
  {
    title: 'Location',
    value: 'Peru'
  },
  {
    title: 'Type',
    value: 'ARR, REDD+, WRC'
  },
  {
    title: 'Available Vintages',
    value: '2018-2020'
  },
  {
    title: 'Hectares',
    value: '350,000'
  },
  {
    title: 'Developer',
    value: 'Multiple Proponents'
  }
];

const STANDARD_DETAILS: ItemTypes[] = [
  {
    title: 'Standards & Methodology',
    value: 'VM0007'
  },
  {
    title: 'Project Validator',
    value: 'SCS Global Services',
    description: '(Issue date: Feb 2013)'
  },
  {
    title: 'CCS Validator',
    value: 'SCS Global Services',
    description: '(Issue date: Feb 2013)'
  },
  {
    title: 'Additional Certifications',
    value: 'CCB-Biodiversity Gold',
    description: 'CCB-Gold'
  }
];
