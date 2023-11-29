import { Link } from 'react-router-dom';

const CartonImpact = () => {
  return (
    <div className="grid grid-cols-2 gap-6 h-[695px]">
      {/* First col */}
      <div>
        <h3 className="text-xl font-bold text-white mb-4">Carbon Risk Rating</h3>
        <div className="grid grid-cols-5 gap-5">
          <div className="col-span-2 p-3 bg-[#c6c6c659] rounded flex flex-col justify-center items-center">
            <h1 className="text-4xl font-semibold text-white">A</h1>
            <h4 className="text-xl font-bold text-white">Carbon Rating</h4>
          </div>
          <p className="text-white text-lg col-span-3">
            Sylvera finds that Cordillera Azul has met 97% of its emissions reductions claims.
          </p>
        </div>
        <div className="p-2 py-5 bg-[#c6c6c659] rounded  mt-4">
          <div className="scroll-right  p-2 h-[310px] ">
            <p className="direction-ltr text-lg text-white text-justify px-2 tracking-[0.54px] indent-5">
              The risk of the ‘net-zero’ commitment accelerating runaway climate change is aggravated when companies
              rely on carbon credits from so-called ‘nature-based solutions’ projects – storage of carbon in soils,
              trees and other vegetation – to cancel out their fossil carbon emissions.
            </p>
            <p className="direction-ltr text-lg text-white text-justify px-2 tracking-[0.54px] indent-5">
              Many climate scientists dismiss the potential of ‘nature-based solutions’ as a serious response to climate
              change, including because as offset projects, they cannot guarantee storage of carbon over the hundreds,
              let alone thousands of years that fossil carbon will interfere with the climate. Recent research also
              underscores major gaps in Western scientific knowledge that may materially affect the calculation of
              alleged additional carbon storage in trees.
            </p>
          </div>
        </div>
        <div className="mt-5 border-l-[3px] border-[#c6c6c659] p-2 py-3">
          <p className="text-white text-justify pl-4 pb-2 tracking-[0.48px] indent-5">
            An article recently published in the academic journal Science shows that in “some dryland regions, the
            albedo warming effect of afforestation may strongly outweigh the cooling effect of carbon sequestration
            owing to the change from bright desert land to darker dense forest cover.”
          </p>
          <Link to="/" className="text-pale-yellow text-sm pl-4 underline underline-offset-[3px]">
            Learn More About Project Risk Rating &gt;
          </Link>
        </div>
      </div>
      {/* Second col */}
      <div className="bg-[url('../public/images/products/green/map.png')] h-full w-full bg-no-repeat bg-cover">
        <div className="rounded bg-light-grey h-8 w-[190px] my-3 mx-4" />
        <div className="w-full h-[90%] mr-[18px] mb-3 flex justify-end items-end">
          <div className="w-[236px]">
            <div className="rounded bg-light-grey w-full h-8 mb-3" />
            <div className="flex gap-3">
              <div className="rounded bg-light-grey w-[126px] h-8" />
              <div className="rounded bg-light-grey w-[45px] h-8" />
              <div className="rounded bg-light-grey w-[45px] h-8" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartonImpact;
