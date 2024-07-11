import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useEffect, useRef, useState } from "react";
import { MdPlayCircle } from "react-icons/md";
import SideDeco from "./SideDeco";

function ArticleSlide() {
  return (
    <button
      onClick={() => {
        console.log("clicked");
      }}
      className="flex flex-col justify-center items-center p-3 hover:shadow-[0_0_5px_rgba(0,0,0,.6)] bg-white rounded-[15px] w-full flex-shrink-0 transition"
    >
      <div className="w-full h-[320px] aspect-[19/16] bg-gradient-to-br from-green-2 from-20% to-yellow-1 rounded-[40px] flex justify-center items-center text-white text-[24px] md:text-[30px] font-semibold text-shadow-1">
        Segera Hadir
      </div>
      <div className="flex justify-center items-center gap-5 mt-[20px]">
        <div className="bg-green-1 text-white font-poppins text-[18px] px-8 md:px-12 py-2 rounded-full">
          <span>Senaru</span>
        </div>
        <div className="text-[18px] md:text-[25px] font-semibold">9 Juli 2024</div>
      </div>
      <div className="flex justify-center items-center gap-5 mt-[10px] md:mt-[20px] text-center">
        <h1 className="text-[24px] md:text-[30px] font-bold px-[5%]">Lorem Ipsum, Dolor Sit Amet!</h1>
      </div>
      <div className="flex justify-center items-center gap-5 mt-[10px]">
        <p className="text-[16px] md:text-[18px] w-[90%] max-w-[680px] text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>
      </div>
    </button>
  );
}

export default function ArticleSlider() {
  const [screenWidth, setScreenWidth] = useState(0);
  const [swiper, setSwiper] = useState<any>(null);

  useEffect(() => {
    setScreenWidth(window.innerWidth)
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="flex flex-col sm:flex-row justify-center items-center relative pb-20">
      <SideDeco position={true} />
      <SideDeco position={false} />
      <button
        className="outline outline-transparent hover:outline-green-1 transition-[outline] rounded-full hidden sm:block"
        onClick={() => swiper.slidePrev()}
      >
        <MdPlayCircle className="text-[50px] text-green-1 top-[50%] left-0 scale-[-1]" />
      </button>
      <Swiper
        spaceBetween={50}
        slidesPerView={screenWidth >= 900 ? 2 : 1}
        // breakpoints={{
        //   768: {
        //     slidesPerView: 1,
        //   },
        // }}
        onSlideChange={() => console.log("slide change")}
        className="!flex !justify-center !items-center w-[90%] !max-w-[840px] !p-1 sm:!p-5 sm:!mx-5"
        onSwiper={setSwiper}
      >
        <SwiperSlide className="!flex !justify-center !items-center">
          <ArticleSlide />
        </SwiperSlide>
        <SwiperSlide className="!flex !justify-center !items-center">
          <ArticleSlide />
        </SwiperSlide>
        <SwiperSlide className="!flex !justify-center !items-center">
          <ArticleSlide />
        </SwiperSlide>
        <SwiperSlide className="!flex !justify-center !items-center">
          <ArticleSlide />
        </SwiperSlide>
        <SwiperSlide className="!flex !justify-center !items-center">
          <ArticleSlide />
        </SwiperSlide>
      </Swiper>
      <button
        className="outline outline-transparent hover:outline-green-1 transition-[outline] rounded-full hidden sm:block"
        onClick={() => {
          swiper.slideNext();
        }}
      >
        <MdPlayCircle className="text-[50px] text-green-1 top-[50%] left-0" />
      </button>
      <div className="flex gap-5">
        <button
          className="outline outline-transparent hover:outline-green-1 transition-[outline] rounded-full sm:hidden"
          onClick={() => swiper.slidePrev()}
        >
          <MdPlayCircle className="text-[40px] text-green-1 top-[50%] left-0 scale-[-1]" />
        </button>
        <button
          className="outline outline-transparent hover:outline-green-1 transition-[outline] rounded-full sm:hidden"
          onClick={() => {
            swiper.slideNext();
          }}
        >
          <MdPlayCircle className="text-[40px] text-green-1 top-[50%] left-0" />
        </button>
      </div>
    </section>
  );
}
