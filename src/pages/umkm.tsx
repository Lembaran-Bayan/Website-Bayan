import Image from "next/image";
import Umkm from "@/../public/Umkm 2.webp";
import TopArticle from "@/components/TopArticle";
import Footer from "@/components/Footer";
import ArticleSlider from "@/components/ArticleSlider";
import PostArticle from "@/components/PostArticle";
import { MdMap } from "react-icons/md";
import dynamic from "next/dynamic";
import { useEffect, useMemo } from "react";
import listUmkm from "@/data/pariwisata.json";
import calculateMiddlePoint from "@/utilities/CalculateCentroid";
import MapPopup from "@/components/MapPopup";

export default function ProfilePage() {
  const centroid: [number, number] = [-8.269707961538461,116.41556806153848];
  const zoom = 13;
  const Map = useMemo(
    () =>
      dynamic(() => import("@/components/Map"), {
        ssr: false,
        loading: () => <div>Loading...</div>,
      }),
    []
  );

  const UmkmMarkers: any = [];
  listUmkm.forEach((umkm) => {
    if (umkm.position[0] == undefined) return;
    UmkmMarkers.push({
      position: umkm.position,
      name: umkm.name,
      link: umkm.link,
      children: (
        <MapPopup
          name={umkm.name}
          key={umkm.id}
          link={umkm.link}
          image={umkm.image}
        />
      ),

      iconUrl: "/MarkerIcon.png",
      iconSize: [20, 38],
      iconAnchor: [10, 38],
      popupAnchor: [0, -30],
    });
  });

  useEffect(() => {
    console.log(calculateMiddlePoint(UmkmMarkers)[0] + "," + calculateMiddlePoint(UmkmMarkers)[1]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return(
    <main className="bg-white min-h-screen">
      <section className="min-h-screen flex flex-col justify-center items-center">
      <div className="absolute w-full h-screen">
        <Image
          priority
          src={Umkm}
          alt=""
          className="object-cover w-full h-full"
        />
        <div className="bg-gradient-to-b from-black/60 to-black/10 to-95% w-full h-full absolute z-[1] top-0 left-0" />
      </div>
      <div className="text-center text-[24px] md:text-[28px] text-shadow-1 text-white font-medium p-5 sm:p-0 z-[2]">
        <h2 data-aos="fade-up">Nadi Ekonomi Negeri,</h2>
        <h2
          data-aos="fade-up"
          data-aos-delay="400"
          className="text-[30px] md:text-[40px]"
        >
          Kenali <span className="font-bold">UMKM</span>
        </h2>
      </div>
      </section>

      <TopArticle />

      <ArticleSlider />

      <PostArticle />

      <section className="flex flex-col justify-center items-center relative z-[0] my-[120px] gap-[30px]">
        <div
          data-aos="fade-up"
          className="flex items-center justify-center gap-[11px]"
        >
          <h1 className="text-green-1 font-semibold text-[25px] md:text-[30px]">Peta UMKM</h1>
          <MdMap className="text-[34px] text-green-1" />
        </div>
        <Map
          center={centroid}
          markers={UmkmMarkers}
          zoom={zoom}
        />
      </section>

      <Footer className="!pt-20" />
    </main>
  )
}