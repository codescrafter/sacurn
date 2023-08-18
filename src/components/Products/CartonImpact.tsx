const CartonImpact = () => {
  return (
    <div className="grid grid-cols-2 gap-6">
      {/* First col */}
      <div className="bg-[url('../public/images/products/green/map.png')] h-[400px] w-full">
        <div className="rounded bg-light-grey h-8 w-[190px] my-3 mx-4"></div>
      </div>
      {/* Second col */}
      <div>
        <h3 className="text-xl font-bold text-white">Carbon Risk Rating</h3>
        <div className="grid grid-cols-5 gap-5">
          <div className="col-span-2 p-3 bg-[#c6c6c659] rounded flex flex-col justify-center items-center">
            <h1 className="text-4xl font-semibold text-white">A</h1>
            <h4 className="text-xl font-bold text-white">Carbon Rating</h4>
          </div>
          <p className="text-white text-lg col-span-3">
            Sylvera finds that Cordillera Azul has met 97% of its emissions reductions claims.
          </p>
        </div>
        <div className="p-2 bg-[#c6c6c659] rounded  mt-3">
          <div className="scroll-right  p-2 h-[233px] ">
            <p className="direction-ltr text-lg text-white text-justify px-2">
              The risk of the ‘net-zero’ commitment accelerating runaway climate change is aggravated when companies
              rely on carbon credits from so-called ‘nature-based solutions’ projects – storage of carbon in soils,
              trees and other vegetation – to cancel out their fossil carbon emissions. Many climate scientists dismiss
              the potential of ‘nature-based solutions’ as a serious response to climate change, including because as
              offset projects, they cannot guarantee storage of carbon over the hundreds, let alone thousands of years
              that fossil carbon will interfere with the climate. Recent research also underscores major gaps in Western
              scientific knowledge that may materially affect the calculation of alleged additional carbon storage in
              trees.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartonImpact;
