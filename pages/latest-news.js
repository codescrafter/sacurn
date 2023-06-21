import Navbar from "@/components/Navbar";
import InfoBar from "@/components/InfoBar";
import News from "@/components/News";

const NewsPage = () => {
  return (
    <div className="w-screen relative min-h-screen bg-no-repeat bg-cover bg-[url('/images/landing-page/landing-page-bg.png')] h-screen">
      <Navbar className={`pt-4 mb-9.5`} />
      <InfoBar />
      <div className="relative flex flex-row pl-19.7 pr-10.7 pt-12.7  h-[70%] w-full">
        <div
          className={`yellowScroll pr-7.5 overflow-scroll overflow-x-hidden`}
        >
          <div className="bg-news-box px-7.7">
            <News />
          </div>
        </div>
      </div>
      <div className="absolute right-0 bottom-2 bg-bottom-note text-white py-1 pr-6 text-xs pl-32">
        免 責 聲 明 
      </div>
    </div>
  );
};

export default NewsPage;
