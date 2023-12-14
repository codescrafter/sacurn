import classNames from 'classnames';
import { useState } from 'react';
import { useNavigate } from 'react-router';

import { useCarbonCreditStore } from '@/store/carbonCredit';
import { formatNumberByComma } from '@/util/helper';

import Navbar from '../Navbar';
import CreditRetiredModal from './CreditRetiredModal';
import GoalsTile from './GoalsTile';
import ImgSlider from './ImgSlider';
import NavigationTabs from './NavigationTabs';

const NewProductDetails = () => {
  const carbonCredit = useCarbonCreditStore((state) => state.carbonCredit);

  const [fvrtState, setFvrtState] = useState<boolean>(false);
  const navigate = useNavigate();
  const params = new URLSearchParams(window.location.search);
  const type = params.get('type');

  let imgsArray = ['/images/products/green/detail1.png'];
  if (type === 'green' || !type) {
    imgsArray = ['/images/products/green/detail1.png'];
  } else if (type === 'yellow') {
    imgsArray = ['/images/products/yellow/detail1.png'];
  } else if (type === 'blue') {
    imgsArray = ['/images/products/blue/detail1.svg'];
  }

  return (
    <div
      className={classNames('bg-no-repeat bg-cover bg-center h-screen min-h-[700px]', {
        "bg-[url('../public/images/products/green/bg-green.png')]": type === 'green' || !type,
        "bg-[url('../public/images/products/yellow/bg-yellow.png')]": type === 'yellow',
        "bg-[url('../public/images/products/blue/bg-blue.png')]": type === 'blue'
      })}
    >
      <div className="py-4">
        <Navbar />
      </div>
      <div className="overflow-y-scroll overflow-x-hidden yellowScroll 2xl:h-[90vh] h-[87vh] mr-[17px]">
        <div className="pl-5 pr-4.2" id="section-1">
          <div className="flex items-center 2xl:gap-10 gap-5">
            <ImgSlider images={imgsArray} location={carbonCredit?.location || ''} />
            <div className="font-istok-web flex-1">
              <h2 className="2xl:text-[30px] text-[22px] font-normal text-white leading-normal font-istok-web ml-2.5 mr-1.9">
                (VCS-985)Cordillera Azul REDD+ ProductCordillera Azul REDD+ Product (VCS-985)Cordillera Azul REDD+
                ProductCordillera Azul REDD+ Product
              </h2>
              <div className="flex border border-white h-[145px] mt-2.5 mr-[23px]">
                <div className="border-r border-white h-full min-[1875px]:w-[20%] 3xl:w-[254px]">
                  <div className="flex justify-center px-3 min-w-[175px]">
                    <div className="min-[1875px]:w-[166px]">
                      <p className="min-[1775px]:text-lg 2xl:text:base font-bold leading-normal text-white text-center mt-[13px]">
                        Ratings Breakdown
                      </p>
                      <div className="flex gap-2 justify-between items-center mt-1">
                        <p className="text-white text-sm font-bold leading-normal tracking-[0.98px]">Carbon Rating</p>
                        <p className="text-pale-yellow text-[30px] font-bold leading-normal tracking-[2.153px]">A</p>
                      </div>
                      <div className="flex gap-2 justify-between items-center">
                        <p className="text-white text-sm font-bold leading-normal tracking-[0.98px]">Co-benefit</p>
                        <p className="text-pale-yellow text-[30px] font-bold leading-normal tracking-[2.153px] relative left-1">
                          4
                          <span className="text-white text-[13px] font-bold leading-normal tracking-[0.904px]">/5</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-x border-white h-full w-[26%] 3xl:w-[339px] min-w-[250px]">
                  <div className="">
                    <p className="min-[1775px]:text-lg 2xl:text-base font-bold leading-normal text-white mt-[13px] pl-6">
                      Certification From
                    </p>
                    <div>
                      <img src="/images/products/carbon-credit-icon.svg" alt="carbon credit icon" className="" />
                    </div>
                  </div>
                </div>
                <div className="border-x border-white h-full min-[1875px]:w-[31%] min-[1700px]:min-w-[445px] px-2.5 pt-3.2">
                  <p className="min-[1775px]:text-lg 2xl:text-base font-bold font-istok-web text-white ml-3.5">Price</p>

                  <p className="font-bold text-pale-yellow font-istok-web ml-3.5">
                    <span className="min-[1775px]:text-[19.2px] 2xl:text-base text-sm">TWD</span>
                    <span className="min-[1770px]:text-[43px] 2xl:text-[36px] text-[28px]">
                      {formatNumberByComma(55500)}~{formatNumberByComma(55500)}
                    </span>
                    <span className="text-[12.3px]">/Tonne</span>
                  </p>
                  <p className="text-sm font-bold text-white tracking-[0.98px] ml-3.5">Ranges from vintage 2017</p>
                </div>
                <div className="border-l border-white h-full pl-3.2 pt-3.2 flex min-w-[230px]">
                  <div className="flex flex-col gap-1.2 items-center relative">
                    <p className="min-[1775px]:text-lg 2xl:text-base font-bold font-istok-web text-white">
                      Add to Wish List
                    </p>

                    <img
                      src={fvrtState ? '/images/products/favor_add.svg' : '/images/products/favor_remove.svg'}
                      alt="favourite-icon"
                      width={78}
                      height={69}
                      onClick={() => setFvrtState(!fvrtState)}
                    />
                    <div className="absolute w-0.5 h-[26px] bg-white right-[-3px] top-12"></div>
                  </div>

                  <div className="flex flex-col gap-1.2 items-center ml-3">
                    <p className="min-[1775px]:text-lg 2xl:text-base font-bold font-istok-web text-white">Prices</p>
                    <img src="/images/products/dollar.svg" alt="dollar-icon" width={77} height={77} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="xl:w-[217px] w-[180px] h-9.5 border border-[#A0ADB7] rounded-[10px] flex items-center justify-center gap-2.5 ml-auto shadow-[0px 1.788px 8.342px 0px rgba(0, 0, 0, 0.45), 0px 0px 10.726px 0px rgba(0, 84, 135, 0.20)] mr-4.2 my-2.5 hover:bg-[#dfdfdf41] cursor-pointer active:translate-y-0.5"
          onClick={() => navigate(-1)}
        >
          <p className="font-normal text-base text-white">Back</p>
          <img src="/images/products-page/back-icon.svg" alt="sacurn" width={23} height={16} />
        </div>
        <div className="pl-5 pr-4.2">
          <div className="border bg-[#1b1b1b4d] border-pale-yellow pt-[33px] px-[30px]">
            <NavigationTabs active={1} className="mb-[21px]" />
            <div className="gap-[72px] flex items-center justify-center">
              <div className="h-[1px] bg-white w-[32%]"></div>
              <h3 className="text-[28px] leading-10 text-white">Information</h3>
              <div className="h-[1.3px] bg-white w-[32%]"></div>
            </div>

            <div className="text-white indent-9 text-justify font-istok-web text-xl font-normal leading-7 tracking-[1.4px] mb-20">
              <p>
                The Delta Blue Carbon –1 Project (DBC-1)is a mangroves and wetlands afforestation andrestoration
                project, located in the Indus River Delta area in Pakistan. The project covers an areaof 350,000
                hectares and is estimated to remove over 142,000,000 tCO2e of carbon throughoutits project lifetime of
                60 years, from 19 February 2015 to 18 February 2075.
              </p>
              <p>
                The Indus River Delta is made up of a complex system of river channels, low-lying islands,inter-tidal
                areas, and mangrove forests. The mangroves in the delta are the largest arid climatemangroves in the
                world by area and are located within the main migratory route of thousandsof birds. These mangroves have
                faced rising threats of deforestation in recent years. Some keydrivers of mangrove deforestation in the
                area include the use of mangrove wood as a source offuelwood, fodder, and open-range grazing. Over
                42,000 people live in the 60 coastal villageslocated within the project area, and over 70% live below
                the poverty line. Many communitieslack access to clean drinking water, basic education, health, and
                hygiene facilities, and arereliant on agriculture as their main source of income. Depleting freshwater
                has increased thesalinity of the mangrove and delta soil, and agriculture and coastal fisheries output
                havedecreased.
              </p>
              <p>
                The DBC-1 aims to alleviate these issues and prevent biodiversity loss in this Key BiodiversityArea
                through the regeneration of mangroves, as well as control drivers of mangrovedeforestation and
                degradation. The project aims to accomplish this through the reforestation ofover 224,000 hectares of
                mangrove and engaging the local community in the planning andimplementation of project activities. The
                locals are engaged in conservation activities through a variety of mechanisms, including Mangrove
                Stewardship Agreements where locals are hired asstewards and the project works with them as partners in
                the restoration, conservation, andsustainable management of mangrove forests. Other project initiatives
                include increasingaccess to education, safe drinking water and healthcare, improving law
                enforcement,developing community-based businesses, microfinancing programs, promoting gender
                equalityconservation of historical heritage sites, and developing income generating activities.
                Byaddressing underlying drivers of forest degradation, the project aims to reduce reliance onmangroves
                as a primary source of income and increase the resilience of the communitytowards the effects of climate
                change.
              </p>
              <p className="mt-7">
                The DBC-1 Project is the result of a public-private partnership between The Sindh Forest andWildlife
                Department and Indus Delta Capital Limited. Indus Delta Capital Limited’s staff aretrained in forest
                carbon project design, development, and management. They also specialise inusing remote sensing, biomass
                and soil sampling, and coastal ecology to implement forest andbiodiversity protection alongside
                community development.
              </p>
            </div>

            <div className="flex gap-[33px] mb-[58px]">
              <div className="border border-white flex-1 px-8 py-2.7 flex gap-[22px]">
                <div className="flex items-center">
                  <img
                    src="/images/products/green/tree.svg"
                    width={55}
                    height={55}
                    className="min-w-[55px] max-w-[55px] h-[55px]"
                    alt=""
                  />
                </div>
                <div>
                  <div className="flex gap-4 items-center">
                    <h5 className="text-2xl font-bold text-white font-istok-web"> Over 3,550,000</h5>
                  </div>
                  <p className="text-white text-lg font-normal">
                    Tons of emission removals over the project’s lifetime to date.Tons of emission removals over the
                    project’s lifetime to date.
                  </p>
                </div>
              </div>
              <div className="border border-white flex-1 px-8 py-2.7 flex gap-[22px]">
                <div className="flex items-center">
                  <img
                    src="/images/products/green/parrot.svg"
                    width={55}
                    height={40}
                    className="w-[55px] h-10"
                    alt=""
                  />
                </div>
                <div>
                  <div className="flex gap-4 items-center">
                    <h5 className="text-2xl font-bold text-white font-istok-web"> 198,465</h5>
                  </div>
                  <p className="text-white text-lg font-normal">Hectares of mangrove land protected.</p>
                </div>
              </div>
              <div className="border border-white flex-1 px-8 py-2.7 flex gap-[22px]">
                <div className="flex items-center">
                  <img
                    src="/images/products/green/users.svg"
                    width={55}
                    height={42}
                    className="w-[55px] h-[42px]"
                    alt=""
                  />
                </div>
                <div>
                  <div className="flex gap-4 items-center">
                    <h5 className="text-2xl font-bold text-white font-istok-web"> 10,274</h5>
                  </div>
                  <p className="text-white text-lg font-normal">People directly employed for project activities.</p>
                </div>
              </div>
            </div>

            <div className="py-5 px-[55.55px]">
              <div className="flex flex-col gap-5">
                <div className="flex justify-between">
                  <div className="max-w-[440px] flex-1">
                    <p className="text-[25px] leading-10 tracking-[0.75px] text-pale-yellow">Project Code</p>
                    <p className="text-lg font-bold tracking-[0.54px] text-white">VCS-985</p>
                  </div>
                  <div className="max-w-[440px] flex-1">
                    <p className="text-[25px] leading-10 tracking-[0.75px] text-pale-yellow">Location</p>
                    <p className="text-lg font-bold tracking-[0.54px] text-white">Peru</p>
                  </div>
                  <div className="max-w-[440px] flex-1">
                    <p className="text-[25px] leading-10 tracking-[0.75px] text-pale-yellow">Type</p>
                    <p className="text-lg font-bold tracking-[0.54px] text-white">ARR, REDD+, WRC</p>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="max-w-[440px] flex-1">
                    <p className="text-[25px] leading-10 tracking-[0.75px] text-pale-yellow">Available Vintages</p>
                    <p className="text-lg font-bold tracking-[0.54px] text-white">2018-2020</p>
                  </div>
                  <div className="max-w-[440px] flex-1">
                    <p className="text-[25px] leading-10 tracking-[0.75px] text-pale-yellow">Hectares</p>
                    <p className="text-lg font-bold tracking-[0.54px] text-white">{formatNumberByComma(350000)}</p>
                  </div>
                  <div className="max-w-[440px] flex-1">
                    <p className="text-[25px] leading-10 tracking-[0.75px] text-pale-yellow">Developer</p>
                    <p className="text-lg font-bold tracking-[0.54px] text-white">Multiple Propnents</p>
                  </div>
                </div>
              </div>

              <hr className="h-[3.33px] bg-light-grey my-[30px] pt-[2.5px]" />

              <div className="flex flex-col gap-5">
                <div className="flex justify-between">
                  <div className="max-w-[440px] flex-1">
                    <p className="text-[25px] leading-10 tracking-[0.75px] text-pale-yellow">Standards & Methodology</p>
                    <p className="text-lg font-bold tracking-[0.54px] text-white">VM0007</p>
                  </div>
                  <div className="max-w-[440px] flex-1">
                    <p className="text-[25px] leading-10 tracking-[0.75px] text-pale-yellow">Project Validator</p>
                    <p className="text-lg font-bold tracking-[0.54px] text-white">VCSValidation/VerificationBody</p>
                    <div className="flex gap-2.7">
                      <p className="text-lg font-bold tracking-[0.54px] text-white">(Issue date: Mar 2022)</p>
                      <img src="/images/products/external-link.svg" alt="info" />
                    </div>
                  </div>
                  <div className="max-w-[440px] flex-1">
                    <p className="text-[25px] leading-10 tracking-[0.75px] text-pale-yellow">CCS Validator</p>
                    <p className="text-lg font-bold tracking-[0.54px] text-white">SCS Global Services</p>
                    <div className="flex gap-2.7">
                      <p className="text-lg font-bold tracking-[0.54px] text-white">(Issue date: Feb 2013)</p>
                      <img src="/images/products/external-link.svg" alt="info" />
                    </div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="max-w-[440px] flex-1">
                    <p className="text-[25px] leading-10 tracking-[0.75px] text-pale-yellow">
                      Additional Certifications
                    </p>
                    <p className="text-lg font-bold tracking-[0.54px] text-white">CCB-Biodiversity Gold CCB-Gold</p>
                  </div>
                </div>
              </div>

              <hr className="h-[3.33px] bg-light-grey my-[30px] pt-[2.5px]" />

              <div className="flex flex-col gap-11">
                <div className="flex justify-between">
                  <div className="max-w-[440px] flex-1">
                    <p className="text-[25px] leading-10 tracking-[0.75px] text-pale-yellow">Volume Issued</p>
                    <p className="text-lg font-bold tracking-[0.54px] text-white">
                      {formatNumberByComma(12285949)} Tonnes
                    </p>
                  </div>
                  <div className="max-w-[440px] flex-1">
                    <p className="text-[25px] leading-10 tracking-[0.75px] text-pale-yellow">
                      Avg. Annual Emission Reduction
                    </p>
                    <p className="text-lg font-bold tracking-[0.54px] text-white">{formatNumberByComma(1575268)}</p>
                  </div>
                  <div className="max-w-[440px] flex-1">
                    <p className="text-[25px] leading-10 tracking-[0.75px] text-pale-yellow">
                      Percentage of Issued credits Retired
                    </p>
                    <p className="text-lg font-bold tracking-[0.54px] text-white font-istok-web">2016 - 52%</p>
                    <p className="text-lg font-bold tracking-[0.54px] text-white font-istok-web">2017 - 4%</p>
                    <p className="text-lg font-bold tracking-[0.54px] text-white font-istok-web">2018 - 68%</p>
                    <p className="text-lg font-bold tracking-[0.54px] text-white font-istok-web">2019 - 35%</p>

                    <CreditRetiredModal />
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="max-w-[440px] flex-1">
                    <p className="text-[25px] leading-10 tracking-[0.75px] text-pale-yellow">Project Documents </p>
                    <div className="flex gap-[33.33px]">
                      <div className="flex gap-2.7">
                        <p className="text-lg font-bold tracking-[0.54px] text-white">PDD</p>
                        <img src="/images/products/external-link.svg" alt="info" />
                      </div>
                      <div className="flex gap-2.7">
                        <p className="text-lg font-bold tracking-[0.54px] text-white">Monitoring Report</p>
                        <img src="/images/products/external-link.svg" alt="info" />
                      </div>
                    </div>
                    <div className="flex gap-2.7 mt-2.5">
                      <p className="text-lg font-bold tracking-[0.54px] text-white">Validation Report</p>
                      <img src="/images/products/external-link.svg" alt="info" />
                    </div>
                  </div>
                </div>
              </div>

              <hr className="h-[3.33px] bg-light-grey mt-20 mb-[88px] pt-[2.5px] mx-auto w-[90%]" id="section-2" />
            </div>

            <NavigationTabs active={2} className="mb-8" />
            {/*  */}
            <div className="flex flex-col gap-[30px] text-white">
              <div className="flex flex-col gap-4">
                <p className="text-xl font-bold tracking-[0.6px]">Carbon Risk Rating</p>
                <div className="flex gap-5 items-center">
                  <div className="w-[198px] h-[92px] rounded-[5px] bg-[#c6c6c640] flex flex-col items-center">
                    <p className="text-[35px] font-bold tracking-[2.5px]">A</p>
                    <p className="text-[21px] font-bold tracking-[1.5px]">Carbon Rating</p>
                  </div>
                  <p className="text-[28px] tracking-[0.8px]">
                    Sylvera finds that Cordillera Azul has met 97% of its emissions reductions claims.
                  </p>
                </div>
              </div>
              <div className="px-2.5 py-5 bg-[#adadad40]">
                <p className="text-xl leading-7 tracking-[0.6px] text-justify indent-8">
                  The risk of the ‘net-zero’ commitment accelerating runaway climate change is aggravated when companies
                  rely on carbon credits from so-called ‘nature-based solutions’ projects – storage of carbon in soils,
                  trees and other vegetation – to cancel out their fossil carbon emissions.
                </p>
                <p className="text-xl leading-7 tracking-[0.6px] text-justify indent-8">
                  Many climate scientists dismiss the potential of ‘nature-based solutions’ as a serious response to
                  climate change, including because as offset projects, they cannot guarantee storage of carbon over the
                  hundreds, let alone thousands of years that fossil carbon will interfere with the climate. Recent
                  research also underscores major gaps in Western scientific knowledge that may materially affect the
                  calculation of alleged additional carbon storage in trees.
                </p>
              </div>
              <div className="pl-2.2 border-l-[3px] border-white">
                <p className="text-xl leading-7 tracking-[0.6px] text-justify indent-9">
                  An article recently published in the academic journal Science shows that in “some dry land regions,
                  the albedo warming effect of afforestation may strongly outweigh the cooling effect of carbon
                  sequestration owing to the change from bright desert land to darker dense forest cover.”An article
                  recently published in the academic journal Science shows that in “some dry land regions, the albedo
                  warming effect of afforestation may strongly outweigh the cooling effect of carbon sequestration owing
                  to the change from bright desert land to darker dense forest cover.”An article recently published in
                  the academic journal Science shows that in “some dry land regions, the albedo warming effect of
                  afforestation may strongly outweigh the cooling effect of carbon sequestration owing to the change
                  from bright desert land to darker dense forest cover.”An article recently published in the academic
                  journal Science shows that in “some dry land regions, the albedo warming effect of afforestation may
                  strongly outweigh the cooling effect of carbon sequestration owing to the change from bright desert
                  land to darker dense forest cover.”
                </p>
              </div>
              <div className="w-full h-[700px]">
                <img src="/images/products/map.png" alt="impact" className="w-full h-full object-cover" />
              </div>
            </div>

            <hr className="h-[3.33px] bg-light-grey mt-20 my-[88px] pt-[2.5px] mx-auto w-[84%]" id="section-3" />
            <NavigationTabs active={3} className="mb-8" />
            {/*  */}
            <div className="flex gap-8">
              <div className="flex-1">
                <img src="/images/products/treatment.png" alt="impact" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col gap-[33px] w-[35.3%]">
                <div className="w-full h-[200px] border border-white px-[9.6%] py-[11.11px] flex flex-col justify-center">
                  <div className="flex gap-[22.22px]">
                    <div className="flex items-center min-w-[55px]">
                      <img src="/images/products/green/tree.svg" alt="tree" width={55} height={55} />
                    </div>
                    <div className="text-white font-istok-web flex flex-col gap-[11.11px]">
                      <h3 className="text-[25px] font-bold font-istok-web">Over {formatNumberByComma(3550000)}</h3>
                      <p className="text-[18px] font-medium">
                        Tons of emission removals over the project’s lifetime to date.Tons of emission removals over the
                        project’s lifetime to date.
                      </p>
                      <p className="text-sm leading-4 text-light">
                        Emission reductions are expected to continue over the project’s lifetime of 20 years.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full h-[200px] border border-white px-[9.6%] py-[11.11px] flex flex-col justify-center">
                  <div className="flex gap-[22.22px]">
                    <div className="flex items-center min-w-[55px]">
                      <img src="/images/products/green/parrot.svg" alt="tree" width={55} height={40} />
                    </div>
                    <div className="text-white font-istok-web flex flex-col gap-[11.11px]">
                      <h3 className="text-[25px] font-bold font-istok-web">{formatNumberByComma(198465)}</h3>
                      <p className="text-[18px] font-medium">Hectares of mangrove land protected.</p>
                      <p className="text-sm leading-4 text-light">
                        The projects activities aim to provide local communities with the means to make a living
                        sustainably in the fields of handicrafts, tourism associations, forestry, beekeeping, and more.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full h-[200px] border border-white px-[9.6%] py-[11.11px] flex flex-col justify-center">
                  <div className="flex gap-[22.22px]">
                    <div className="flex items-center min-w-[55px]">
                      <img src="/images/products/green/users.svg" alt="tree" width={55} height={42} />
                    </div>
                    <div className="text-white font-istok-web flex flex-col gap-[11.11px]">
                      <h3 className="text-[25px] font-bold font-istok-web">{formatNumberByComma(10274)}</h3>
                      <p className="text-[18px] font-medium">People directly employed for project activities.</p>
                      <p className="text-sm leading-4 text-light">
                        39 species on the ICUN Red List, of which 7 are Endangered, benefit from reduced threats in the
                        project area.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="text-[25px] font-bold tracking-[0.75px] text-white text-center px-3 border-l-4 border-r-4 border-white w-fit mx-auto my-[33px]">
              This project contributes to 17 Sustainable Development Goals
            </h3>
            {/* create grid with twoo cards in each row */}
            <div className="grid grid-cols-2 mb-7 gap-y-5 gap-x-[12.4%] max-w-[1635px] mx-auto">
              {dataArray.map((item, index) => (
                <GoalsTile key={index} title={item.heading} description={item.description} img={item.img} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProductDetails;

const dataArray = [
  {
    heading: 'SDG 1 No Poverty',
    description: 'End poverty in all its forms everywhere.',
    img: '/images/products/goals/img-1.jpeg'
  },
  {
    heading: 'SDG 2 Zero Hunger',
    description: 'End hunger, achieve food security and improved nutrition and promote sustainable agriculture.',
    img: '/images/products/goals/img-2.png'
  },
  {
    heading: 'SDG 3 Good Health and Well-being',
    description: 'Ensure healthy lives and promote well-being for all at all ages.',
    img: '/images/products/goals/img-3.jpeg'
  },
  {
    heading: 'SDG 4 Quality Education',
    description:
      'Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all.',
    img: '/images/products/goals/img-4.png'
  },
  {
    heading: 'SDG 5 Gender Equality',
    description: 'Achieve gender equality and empower all women and girls.',
    img: '/images/products/goals/img-5.jpeg'
  },
  {
    heading: 'SDG 6 Clean Water and Sanitation',
    description: 'Ensure availability and sustainable management of water and sanitation for all.',
    img: '/images/products/goals/img-6.jpeg'
  },
  {
    heading: 'SDG 7 Affordable and Clean Energy',
    description: 'Ensure access to affordable, reliable, sustainable and modern energy for all.',
    img: '/images/products/goals/img-7.jpeg'
  },
  {
    heading: 'SDG 8 Decent Work and Economic Growth',
    description:
      'Promote sustained, inclusive and sustainable economic growth, full and productive employment and decent work for all.',
    img: '/images/products/goals/img-8.jpeg'
  },
  {
    heading: 'SDG 9 Industries, Innovation and Infrastructure',
    description: 'Build resilient infrastructure, promote sustainable industrialization and foster innovation.',
    img: '/images/products/goals/img-9.png'
  },
  {
    heading: 'SDG 10 Reduced Inequalities',
    description: 'Reduce inequality within and among countries.',
    img: '/images/products/goals/img-10.jpeg'
  },
  {
    heading: 'SDG 11 Sustainable Cities and Communities',
    description: 'Make cities inclusive, safe, resilient and sustainable.',
    img: '/images/products/goals/img-11.jpeg'
  },
  {
    heading: 'SDG 12 Responsible Consumption and Production',
    description: 'Ensure sustainable consumption and production patterns.',
    img: '/images/products/goals/img-12.jpeg'
  },
  {
    heading: 'SDG 13 Climate Action',
    description: 'Take urgent action to combat climate change and its impacts.',
    img: '/images/products/goals/img-13.jpeg'
  },
  {
    heading: 'SDG 14 Life Below Water',
    description: 'Conserve and sustainably use the oceans, seas and marine resources for sustainable development.',
    img: '/images/products/goals/img-14.jpeg'
  },
  {
    heading: 'SDG 15 Life on Land',
    description:
      'Protect, restore and promote sustainable use of terrestrial ecosystems, sustainably manage forests, combat desertification, and halt and reverse land degradation and halt biodiversity loss.',
    img: '/images/products/goals/img-15.jpeg'
  },
  {
    heading: 'SDG 16 Peace, Justice and Strong Institutions',
    description:
      'Promote peaceful and inclusive societies for sustainable development, provide access to justice for all and build effective, accountable and inclusive institutions at all levels.',
    img: '/images/products/goals/img-16.jpeg'
  },
  {
    heading: 'SDG 17 Partnerships for the Goals',
    description:
      'Strengthen the means of implementation and revitalize the Global Partnership for Sustainable Development.',
    img: '/images/products/goals/img-17.jpeg'
  }
];
