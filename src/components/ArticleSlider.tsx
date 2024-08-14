/* eslint-disable @next/next/no-img-element */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useEffect, useRef, useState } from "react";
import { MdPlayCircle } from "react-icons/md";
import SideDeco from "./SideDeco";
import { useRouter } from "next/router";

type Article = {
  title: string;
  writer: string;
  desa: string;
  status: string;
  category: string;
  links: string[];
  image: string;
  createdAt: string;
  paragraphs: string[];
  _id: string;
};

function ArticleSlide({ article }: { article: Article }) {
  const router = useRouter();
  return (
    <button
      title={article.title}
      onClick={() => {
        router.push("/article/" + article._id);
      }}
      className="flex flex-col justify-center items-center p-3 hover:shadow-[0_0_5px_rgba(0,0,0,.6)] bg-white rounded-[15px] w-full flex-shrink-0 transition min-h-[370px]"
    >
      {/* <div className="w-full h-[320px] aspect-[19/16] bg-gradient-to-br from-green-2 from-20% to-yellow-1 rounded-[40px] flex justify-center items-center text-white text-[16px] md:text-[18px] font-semibold text-shadow-1 overflow-hidden">
        <img
          src={process.env.NEXT_PUBLIC_API_URL + "/article/image/" + article.image}
          alt="Thumbnail Artikel"
          className="w-full h-full object-cover"
        />
      </div> */}

      <div className="flex justify-center items-center gap-5 mt-[10px] md:mt-[20px] text-center">
        <h1 className="text-[24px] md:text-[30px] font-bold px-[5%]">
          {/* {article.title.length > 27 ? article.title.slice(0, 27) + "..." : article.title} */}
          {article.title.length > 27
            ? article.title.slice(0, article.title.slice(0, 33).lastIndexOf(" ")) + "..."
            : article.title}
        </h1>
      </div>
      <div className="flex justify-center items-center gap-5 mt-[20px]">
        <div className="bg-green-1 text-white font-poppins text-[18px] px-8 md:px-12 py-2 rounded-full">
          <span>{article.desa}</span>
        </div>
        <div className="text-[18px] md:text-[25px] font-semibold">
          {new Date(article.createdAt).toLocaleDateString()}
        </div>
      </div>
      <div className="flex justify-center items-center gap-5 mt-[10px]">
        <p className="text-[16px] md:text-[18px] w-[90%] max-w-[680px] text-center">
          {article.paragraphs[0].length < 150 ? article.paragraphs[0] : article.paragraphs[0].slice(0, 147)}
          <span className="font-bold"> ... Baca Selengkapnya</span>
        </p>
      </div>
    </button>
  );
}

export default function ArticleSlider({ articles = [] }: { articles: Article[] }) {
  const [screenWidth, setScreenWidth] = useState(0);
  const [swiper, setSwiper] = useState<any>(null);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="flex flex-col sm:flex-row justify-center items-center relative pb-5 lg:pb-10 overflow-x-hidden">
      <SideDeco position={true} />
      <SideDeco position={false} />
      <button
        className="outline outline-transparent hover:outline-green-1 transition-[outline] rounded-full hidden sm:block relative z-[1]"
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
        className={
          "!flex !justify-center /items-center w-[90%] !max-w-[840px] !p-1 sm:!p-5 sm:!mx-5 relative " +
          (articles.length === 0 ? "min-h-[600px]" : "")
        }
        onSwiper={setSwiper}
      >
        {articles.length === 0 && (
          <div className="w-full h-[90%] bg-slate-500/20 rounded-[30px] animate-pulse absolute grid place-items-center">
            {/* <span className="text-[40px] font-semibold !opacity-100">Belum ada artikel</span> */}
          </div>
        )}
        {articles?.map((article: Article, index: number) => {
          return (
            <SwiperSlide
              key={index}
              className=""
            >
              <ArticleSlide article={article} />
            </SwiperSlide>
          );
        })}
        {/* <SwiperSlide className="!flex !justify-center !items-center">
          <ArticleSlide />
        </SwiperSlide> */}
      </Swiper>
      <button
        className="outline outline-transparent hover:outline-green-1 transition-[outline] rounded-full hidden sm:block relative z-[1]"
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
