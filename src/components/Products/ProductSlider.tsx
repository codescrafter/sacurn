import classNames from 'classnames';
import Slider from 'react-slick';

const ProductSlider = () => {
  function SampleNextArrow(props: {
    className?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    style?: any;
    onClick?: () => void;
  }) {
    const { className, style, onClick } = props;
    return (
      <div
        className={classNames(
          className,
          "slick-button-before !bg-black !bg-[url('../public/images/products/green/right-arrow.svg')] !bg-no-repeat !bg-center"
        )}
        style={{
          ...style,
          display: 'flex',
          background: 'red',
          right: '8px',
          backgroundColor: '#525252',
          borderRadius: '5px',
          justifyContent: 'center',
          alignItems: 'center'
        }}
        onClick={onClick}
      />
    );
  }
  function SamplePrevArrow(props: {
    className?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    style?: any;
    onClick?: () => void;
  }) {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style, display: 'none', background: 'green' }} onClick={onClick} />;
  }

  const settings = {
    dots: false,
    infinite: true,
    initialSlide: 0,
    slidesToShow: 5,
    slidesToScroll: 1,
    // className: 'center',
    // centerMode: true,
    // centerPadding: '30px',
    // autoplay: true,
    // speed: 3000,
    // autoplaySpeed: 3000,
    // cssEase: 'linear',
    pauseOnHover: true,
    nextArrow: <SampleNextArrow style={{ display: 'none' }} />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1380,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <Slider {...settings} className="product-list-slider pl-1.5">
      {[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
        <div key={index} className="m-4">
          <div className="border-2 border-white max-w-[200px] rounded-xl p-2  flex justify-center items-center bg-white">
            <h3 className="text-silk-blue font-semibold">{'(VCS-985)Cordillera Azul REDD+ Prodct'}</h3>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default ProductSlider;
