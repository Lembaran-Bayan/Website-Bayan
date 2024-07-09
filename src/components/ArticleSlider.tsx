import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

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
          <div className="w-[410px] h-[400px] bg-red-500/20">
            Slide 1
          </div>
        </SwiperSlide>
        <SwiperSlide className="!flex !justify-center !items-center">
          <div className="w-[410px] h-[400px] bg-red-500/20">
            Slide 2
          </div>
        </SwiperSlide>
        <SwiperSlide className="!flex !justify-center !items-center">
          <div className="w-[410px] h-[400px] bg-red-500/20">
            Slide 3
          </div>
        </SwiperSlide>
        <SwiperSlide className="!flex !justify-center !items-center">
          <div className="w-[410px] h-[400px] bg-red-500/20">
            Slide 4
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
