import Image from "next/image";
import Budaya from "@/../public/Budaya 2.webp";
import Footer from "@/components/Footer";
import TopArticle from "@/components/TopArticle";
import ArticleSlider from "@/components/ArticleSlider";
import PostArticle from "@/components/PostArticle";
import { useEffect, useMemo } from "react";
import dynamic from "next/dynamic";
import { MdMap } from "react-icons/md";
import MapPopup from "@/components/MapPopup";
import calculateMiddlePoint from "@/utilities/CalculateCentroid";
import listWisata from "@/data/pariwisata.json";
import SideDeco from "@/components/SideDeco";

export default function ProfilePage() {
  const centroid: [number, number] = [-8.29620868, 116.40897236];
  const zoom = 13;
  const Map = useMemo(
    () =>
      dynamic(() => import("@/components/Map"), {
        ssr: false,
        loading: () => <div>Loading...</div>,
      }),
    []
  );

  const wisataMarkers: any = [];
  listWisata.forEach((wisata) => {
    if (wisata.position[0] == undefined) return;
    wisataMarkers.push({
      position: wisata.position,
      name: wisata.name,
      link: wisata.link,
      children: (
        <MapPopup
          name={wisata.name}
          key={wisata.id}
          link={wisata.link}
          image={wisata.image}
        />
      ),

      iconUrl: "/MarkerIcon.png",
      iconSize: [20, 38],
      iconAnchor: [10, 38],
      popupAnchor: [0, -30],
    });
  });

  useEffect(() => {
    console.log(calculateMiddlePoint(wisataMarkers)[0] + "," + calculateMiddlePoint(wisataMarkers)[1]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

      <section className="flex flex-col justify-center items-center relative z-[0] py-[120px] gap-[30px] overflow-x-hidden">
        <SideDeco position={true} />
        <SideDeco position={false} />
        <div
          data-aos="fade-up"
          className="flex items-center justify-center gap-[11px]"
        >
          <h1 className="text-green-1 font-semibold text-[25px] md:text-[30px]">Peta Pariwisata</h1>
          <MdMap className="text-[34px] text-green-1" />
        </div>
        <Map
          center={centroid}
          markers={wisataMarkers}
          zoom={zoom}
        />
      </section>

      <PostArticle />

      <Footer className="!pt-20" />
    </main>
  );
}
