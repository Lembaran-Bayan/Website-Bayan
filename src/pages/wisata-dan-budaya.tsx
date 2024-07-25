import Image from "next/image";
import Budaya from "@/../public/Budaya 2.webp";
import Footer from "@/components/Footer";
import TopArticle from "@/components/TopArticle";
import ArticleSlider from "@/components/ArticleSlider";
import PostArticle from "@/components/PostArticle";
import { Children, useMemo } from "react";
import dynamic from "next/dynamic";
import { MdMap } from "react-icons/md";

export default function ProfilePage() {
  const Map = useMemo(
    () =>
      dynamic(() => import("@/components/Map"), {
        ssr: false,
        loading: () => <div>Loading...</div>,
      }),
    []
  );
  return (
    <main className="bg-white min-h-screen">
      <section className="min-h-screen flex flex-col justify-center items-center relative overflow-x-hidden">
        <div className="absolute w-full h-screen">
          <Image
            priority
            src={Budaya}
            alt=""
            className="object-cover w-full h-full"
          />
          <div className="bg-gradient-to-b from-black/70 to-black/20 to-95% w-full h-full absolute z-[1] top-0 left-0" />
        </div>
        <div className="text-center text-[24px] md:text-[28px] text-shadow-1 text-white font-medium p-5 sm:p-0 z-[2]">
          <h2 data-aos="fade-up">Pesona Nusantara,</h2>
          <h2
            data-aos="fade-up"
            data-aos-delay="400"
            className="text-[30px] md:text-[40px]"
          >
            Keindahan dan Kekayaan <strong>Budaya</strong>
          </h2>
        </div>
      </section>

      <TopArticle />

      <ArticleSlider />

      <PostArticle />

      <section className="flex flex-col justify-center items-center relative z-[0] min-h-screen gap-[30px]">
        <div
          data-aos="fade-up"
          className="flex items-center justify-center gap-[11px]"
        >
          <h1 className="text-green-1 font-semibold text-[25px] md:text-[30px]">Peta Pariwisata</h1>
          <MdMap className="text-[34px] text-green-1" />
        </div>
        <Map
          center={[-8.2666852, 116.4271543]}
          current={[0, 0]}
          image="/Logo.png"
          markers={[
            {
              position: [-8.2666852, 116.4271543],
              name: "Masjid Kuno Bayan",
              iconUrl: "/MarkerIcon.png",
              iconSize: [20, 38],
              iconAnchor: [20, 20],
              popupAnchor: [20, 20],
              children: (
                <div className="bg-white/70 p-4 rounded-[14px]">
                  <h1 className="text-[20px] font-jakarta font-semibold">Masjid Kuno Bayan</h1>
                </div>
              ),
            },
          ]}
        />
      </section>

      <Footer className="!pt-20" />
    </main>
  );
}
