import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function ArticleSlide() {
  return (
    <div className="flex flex-col justify-center items-center">
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
    </div>
  );
}

export default function ArticleSlider() {
  return (
    <section className="flex flex-col justify-center items-center">
      <Swiper
        spaceBetween={50}
        slidesPerView={2}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="!flex !justify-center !items-center !w-[840px] bg-blue-500/10"
      >
        <SwiperSlide className="!flex !justify-center !items-center">
          <ArticleSlide />
        </SwiperSlide>
        <SwiperSlide className="!flex !justify-center !items-center">
          <div className="w-[410px] h-[400px] bg-red-500/20">Slide 2</div>
        </SwiperSlide>
        <SwiperSlide className="!flex !justify-center !items-center">
          <div className="w-[410px] h-[400px] bg-red-500/20">Slide 3</div>
        </SwiperSlide>
        <SwiperSlide className="!flex !justify-center !items-center">
          <div className="w-[410px] h-[400px] bg-red-500/20">Slide 4</div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
