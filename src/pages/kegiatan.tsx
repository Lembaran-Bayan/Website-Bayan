import Image from "next/image";
import Kegiatan from "@/../public/Kegiatan.webp";
import TopArticle from "@/components/TopArticle";
import Footer from "@/components/Footer";
import ArticleSlider from "@/components/ArticleSlider";
import { useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { MdMap } from "react-icons/md";
import MapPopup from "@/components/MapPopup";
import listKegiatan from "@/data/kegiatan.json";
import calculateMiddlePoint from "@/utilities/CalculateCentroid";
import SideDeco from "@/components/SideDeco";
import axios from "axios";

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

export default function ProfilePage() {
  const centroid: [number, number] = [-8.269707961538461, 116.41556806153848];
  const zoom = 13;
  const Map = useMemo(
    () =>
      dynamic(() => import("@/components/Map"), {
        ssr: false,
        loading: () => <div>Loading...</div>,
      }),
    []
  );
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    axios
      .get(process.env.NEXT_PUBLIC_API_URL + "/article")
      .then((res) => {
        const verifiedArticles = res.data.filter((article: Article) => {
          return article.status === "Verified" && article.category === "Kegiatan";
        });
        setArticles(verifiedArticles);
      })
      .catch((err) => {
        console.log(err.data);
      });
  }, []);

  const kegiatanMarkers: any = [];
  listKegiatan.forEach((kegiatan) => {
    if (kegiatan.position[0] == undefined) return;
    kegiatanMarkers.push({
      position: kegiatan.position,
      name: kegiatan.name,
      kegiatans: kegiatan.kegiatans,
      children: (
        <MapPopup
          name={kegiatan.name}
          key={kegiatan.id}
          kegiatans={kegiatan.kegiatans}
        />
      ),

      iconUrl: "/MarkerIcon.png",
      iconSize: [20, 38],
      iconAnchor: [10, 38],
      popupAnchor: [0, -30],
    });
  });

  useEffect(() => {
    console.log(calculateMiddlePoint(kegiatanMarkers)[0] + "," + calculateMiddlePoint(kegiatanMarkers)[1]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="bg-white min-h-screen">
      <section className="min-h-screen flex flex-col justify-center items-center">
        <div className="absolute w-full h-screen">
          <Image
            priority
            src={Kegiatan}
            alt=""
            className="object-cover w-full h-full"
          />
          <div className="bg-gradient-to-b from-black/70 to-black/20 to-95% w-full h-full absolute z-[1] top-0 left-0" />
        </div>
        <div className="text-center text-[24px] md:text-[28px] text-shadow-1 text-white font-medium p-5 sm:p-0 z-[2]">
          <h2 data-aos="fade-up">Aktivitas dan Inisiatif,</h2>
          <h2
            data-aos="fade-up"
            data-aos-delay="400"
            className="text-[30px] md:text-[40px] font-normal"
          >
            Membangun <strong className="font-bold">Masa Depan</strong>
          </h2>
        </div>
      </section>

      <TopArticle id="" />

      <ArticleSlider articles={articles} />

      <section className="flex flex-col justify-center items-center relative z-[0] py-[120px] gap-[30px] overflow-x-hidden">
        <SideDeco position={true} />
        <SideDeco position={false} />
        <div
          data-aos="fade-up"
          className="flex items-center justify-center gap-[11px]"
        >
          <h1 className="text-green-1 font-semibold text-[25px] md:text-[30px]">Peta Kegiatan</h1>
          <MdMap className="text-[34px] text-green-1" />
        </div>
        <Map
          center={centroid}
          markers={kegiatanMarkers}
          zoom={zoom}
        />
      </section>

      <Footer className="!pt-20" />
    </main>
  );
}
