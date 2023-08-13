import { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import ViewStyleBar from "../components/ViewStyleBar";
import ProductsListView from "../components/ProductsListView";
import ProductDeatilView from "../components/ProductDetailView";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function AllProducts() {
  const [active, setActive] = useState<string>("white");
  const [display, setDisplay] = useState<string>("list-view");

  const setActiveDisplayHandler = (selected_color: string) => {
    setActive(selected_color);
    if (selected_color === "white") {
      setDisplay("list-view");
    } else if ((selected_color = "green")) {
      setDisplay("detail-view");
    } else {
      setDisplay("no-view");
    }
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const tabIndex = urlParams.get("tabIndex");
    if (Number(tabIndex) === 0) {
      setActive("white");
      setDisplay("list-view");
    } else if (Number(tabIndex) === 1) {
      setActive("dark-green");
      setDisplay("detail-view");
    } else if (Number(tabIndex) === 2) {
      setActive("navy-blue");
      setDisplay("no-view");
    } else if (Number(tabIndex) === 3) {
      setActive("pale-yellow");
      setDisplay("no-view");
    } else {
      setActive("white");
      setDisplay("no-view");
    }
  }, []);

  return (
    <div className="w-screen relative bg-no-repeat bg-cover bg-[url('../public/images/products-page/cover.png')] h-screen overflow-hidden">
      <Navbar className={`pt-4 relative z-30`} />
      <div className="h-full flex flex-row justify-start">
        <div className={`${"2xl:w-[620px] w-[500px] h-auto"}`}>
          <div className="2xl:w-[650px] w-[520px] absolute top-0 left-0 overflow-hidden">
            <ImgSlider />
          </div>
        </div>
        <div className="flex flex-col max-h-[973px] items-end mr-9.5 relative z-50 flex-1">
          <ViewStyleBar activeColor={active} setDisplay={setActiveDisplayHandler} />
          {display === "list-view" && (
            <div className="yellowScrollNoBg mr-1 pr-5.5 mt-13 mb-15.7 overflow-scroll overflow-x-hidden ">
              <ProductsListView />
            </div>
          )}
          {display === "detail-view" && <ProductDeatilView />}
        </div>
      </div>
    </div>
  );
}

export default AllProducts;

const ImgSlider = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const sliderRef = useRef<Slider | null>(null);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: false,
    verticalSwiping: false,
    swipeToSlide: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6000,
    fade: true,
    afterChange: (currSlide: number) => setCurrentSlide(currSlide)
  };
  return (
    <div className="relative h-full">
      <div className="absolute z-20 left-0 bottom-4 right-0 gap-1.5 flex pr-[30%] pl-6">
        {["01", "02", "03"].map((item, index) => (
          <div
            key={index}
            onClick={() => {
              setCurrentSlide(index);
              sliderRef?.current?.slickGoTo(index);
            }}
            className={`cursor-pointer flex-1 h-1 w-full rounded-[20px] ${
              currentSlide === index ? "bg-light-grey" : "bg-white"
            }`}
          ></div>
        ))}
      </div>
      <Slider {...settings} ref={sliderRef}>
        <img
          className="w-full h-screen"
          src={"/images/products-page/ocean.png"}
          alt="sacurn products"
        />
        <img
          className="w-full h-screen"
          src={"/images/products-page/forest.png"}
          alt="sacurn products"
        />
        {/* <Image className="w-full h-screen" src={oceanImg} /> */}
      </Slider>
    </div>
  );
};
