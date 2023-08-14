import React from 'react';

import CarbonCommodity from '../components/CarbonCommodity';
import HorizontalSlider from '../components/HorizontalSlider';
import InfoBar from '../components/InfoBar';
import MultiSlideSlider from '../components/MultiSlideSlider';
import Navbar from '../components/Navbar';
import VerticalSlider from '../components/VerticalSlider';

const Dashboard = () => {
  return (
    <div className="w-screen min-h-screen bg-no-repeat bg-cover bg-[url('../public/images/landing-page/landing-page-bg.png')] 2xl:h-screen">
      <div className="bg-dark-green invisible"></div>
      <Navbar className="pt-4 2xl:mb-9.5 mb-5" />
      <InfoBar />
      <div className="flex justify-between ml-[4.3%] mt-2.5 2xl:gap-[5.9%] gap-[3%]">
        <div className="relative w-[54%] 2xl:max-h-[418px] max-h-[295px] bg-black bg-opacity-[0.15]">
          <VerticalSlider />
          <div className="flex 2xl:gap-6 gap-4 mt-2">
            <img
              src={'/images/landing-page/ic_co2.svg'}
              width={72}
              height={52}
              alt="co2 icon"
              className="2xl:w-18 2xl:h-13 w-14 h-10"
            />
            <h6 className="font-semibold 2xl:text-3xl text-2xl 2xl:leading-10 leading-7">即時熱門碳權商品</h6>
          </div>
          <div className="2xl:mt-8.5 mt-5.5 flex flex-col 2xl:gap-2.5 gap-2">
            {commodityData.map((item, index) => (
              <CarbonCommodity key={index} {...item} />
            ))}
          </div>
        </div>
        <div className="2xl:mt-7 mt-5 flex-1 overflow-hidden">
          <p className="flex items-center">
            <img
              src={'/images/landing-page/ic_volume.svg'}
              width={32}
              height={30}
              className="2xl:w-8 2xl:h-7.5 w-6 h-5.2"
              alt="sacurn"
            />
            <span className="font-semibold 2xl:text-3xl text-2xl 2xl:leading-9 ml-3">最新消息</span>
          </p>
          <HorizontalSlider />
          <p className="flex 2xl:mt-6 2xl:mb-3 mt-5 mb-2.5">
            <img
              src={'/images/landing-page/ic_book.svg'}
              alt="sacurn"
              width={29}
              height={33}
              className="2xl:w-8 2xl:h-7.5 w-6 h-5.2"
            />
            <span className="font-semibold 2xl:text-3xl text-2xl 2xl:leading-9 ml-3">碳權趨勢</span>
          </p>
          <MultiSlideSlider />
          <div className="w-[227px] h-[23px] bg-[url('../public/images/landing-page/disclaimer.svg')] bg-no-repeat bg-cover ml-auto mt-4">
            <p className="text-xs leading-4 ml-auto mr-10 text-right pt-1">免責聲明</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

const commodityData = [
  {
    image: '/images/landing-page/carbon-cure.png',
    linkText: 'carbon removal',
    heading: 'CarbonCure Concrete Mineralization',
    subHeading: 'Project developed by CarbonCure Technologies',
    linkIcon: '/images/landing-page/upload.svg'
  },
  {
    image: '/images/landing-page/soil-carbon.png',
    linkText: 'carbon avoidance',
    heading: 'Andes Inorganic Soil Carbon',
    subHeading: 'Project developed by CarbonCure Technologies',
    linkIcon: '/images/landing-page/download.svg'
  },
  {
    image: '/images/landing-page/carbon-avoid.png',
    linkText: 'carbon removal',
    heading: 'Kasigau Corridor II REDD+ Forest Conservation Carbon avoidance',
    subHeading: 'Project developed by CarbonCure Technologies',
    linkIcon: '/images/landing-page/upload.svg'
  }
];
