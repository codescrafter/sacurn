import classNames from 'classnames';

import { ItemColor } from '@/type';

import Card from './Card';

const ProductDetail = () => {
  return (
    <div className="yellowScrollNoBg mr-1 pr-5.5  overflow-auto overflow-x-hidden">
      <div className="h-[65vh]">
        <div className="flex gap-5 mb-5">
          {['1', '2', '3'].map((x) => (
            <Card key={x} />
          ))}
        </div>
        <div className="border border-white rounded grid grid-cols-3">
          <div className="border-r border-white col-span-2">
            <div className="grid grid-cols-3 gap-4 p-4 pb-6">
              {BASIC_DETAILS.map((item) => (
                <Item key={item.title} title={item.title} value={item.value} />
              ))}
            </div>
            <Divider />
            <div className="grid grid-cols-2 gap-6 p-4 pt-3">
              {STANDARD_DETAILS.map((item) => (
                <Item key={item.title} title={item.title} value={item.value} description={item.description} />
              ))}
            </div>
          </div>

          <div className="">
            <div className="pt-4 px-6">
              <Item title="Volume Issued(2016+)" value="12,285,949" className="pb-4" />
              <Item title="Avg. Annual Emission Reduction" value="1,575,268" className="pb-4 w-[170px]" />
              <Item
                title="% of Issued credits Retired (2016+)"
                value="2016 - 52%  2017 - 04%  2018 - 68%  2019 - 25%  2020 - 75%"
                className="pb-4"
              />
            </div>
            <Divider />
            <div className="px-7 py-4">
              <h6 className="font-akaya text-cyan">Project Documents</h6>
              <div className="inline-flex gap-1">
                <p className="text-lg font-semibold text-white">PDD</p>
                <img src="/images/products/green/share.svg" alt="sacurn" />
              </div>
              <div className="inline-flex gap-1 ml-4">
                <p className="text-lg font-semibold text-white">Validation report</p>
                <img src="/images/products/green/share.svg" alt="sacurn" />
              </div>
              <div className="flex gap-1">
                <p className="text-lg font-semibold text-white">Monitoring report</p>
                <img src="/images/products/green/share.svg" alt="sacurn" />
              </div>
            </div>
          </div>
        </div>
        {/* Information */}
        <div>
          <div className="flex items-center gap-7 pt-5 pb-4">
            <Divider color={ItemColor.CYAN} />
            <h6 className="font-akaya text-cyan">Information</h6>
            <Divider color={ItemColor.CYAN} />
          </div>
          <p className="font-medium text-white">
            The Delta Blue Carbon –1 Project (DBC-1)is a mangroves and wetlands afforestation andrestoration project,
            located in the Indus River Delta area in Pakistan. The project covers an areaof 350,000 hectares and is
            estimated to remove over 142,000,000 tCO2e of carbon throughoutits project lifetime of 60 years, from 19
            February 2015 to 18 February 2075. The Indus River Delta is made up of a complex system of river channels,
            low-lying islands,inter-tidal areas, and mangrove forests. The mangroves in the delta are the largest arid
            climatemangroves in the world by area and are located within the main migratory route of thousandsof birds.
            These mangroves have faced rising threats of deforestation in recent years. Some keydrivers of mangrove
            deforestation in the area include the use of mangrove wood as a source offuelwood, fodder, and open-range
            grazing. Over 42,000 people live in the 60 coastal villageslocated within the project area, and over 70%
            live below the poverty line. Many communitieslack access to clean drinking water, basic education, health,
            and hygiene facilities, and arereliant on agriculture as their main source of income. Depleting freshwater
            has increased thesalinity of the mangrove and delta soil, and agriculture and coastal fisheries output
            havedecreased. The DBC-1 aims to alleviate these issues and prevent biodiversity loss in this Key
            BiodiversityArea through the regeneration of mangroves, as well as control drivers of mangrovedeforestation
            and degradation. The project aims to accomplish this through the reforestation ofover 224,000 hectares of
            mangrove and engaging the local community in the planning andimplementation of project activities. The
            locals are engaged in conservation activities through a variety of mechanisms, including Mangrove
            Stewardship Agreements where locals are hired asstewards and the project works with them as partners in the
            restoration, conservation, andsustainable management of mangrove forests. Other project initiatives include
            increasingaccess to education, safe drinking water and healthcare, improving law enforcement,developing
            community-based businesses, microfinancing programs, promoting gender equalityconservation of historical
            heritage sites, and developing income generating activities. Byaddressing underlying drivers of forest
            degradation, the project aims to reduce reliance onmangroves as a primary source of income and increase the
            resilience of the communitytowards the effects of climate change. The DBC-1 Project is the result of a
            public-private partnership between The Sindh Forest andWildlife Department and Indus Delta Capital Limited.
            Indus Delta Capital Limited’s staff aretrained in forest carbon project design, development, and management.
            They also specialise inusing remote sensing, biomass and soil sampling, and coastal ecology to implement
            forest andbiodiversity protection alongside community development.
          </p>
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
  className?: string;
}

const Item = ({ title, value, description, className }: ItemTypes) => {
  return (
    <div className={classNames(className)}>
      <h6 className="font-akaya text-cyan tracking-[]0.51px] leading-5">{title}</h6>
      <p className="text-lg font-semibold text-white tracking-[0.54px]">{value}</p>
      {description && <p className="text-lg font-semibold text-white">{description}</p>}
    </div>
  );
};

const Divider = ({ color = ItemColor.WHITE }: { color?: ItemColor }) => {
  return (
    <div
      className={classNames('h-[1px] w-full ', {
        'bg-cyan': color === ItemColor.CYAN,
        'bg-white': color === ItemColor.WHITE
      })}
    />
  );
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
