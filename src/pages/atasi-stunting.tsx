import Image from "next/image";
import Stunting from "@/../public/Stunting.webp";
import { HiQuestionMarkCircle } from "react-icons/hi";
import SideDeco from "@/components/SideDeco";
import { AiTwotonePieChart } from "react-icons/ai";
import StatistikStunting from "@/components/StatistikStunting";
import PenyebabStunting from "@/components/PenyebabStunting";
import MengatasiStunting from "@/components/MengatasiStunting";

export default function AtasiStunting() {
  return (
    <main>
      <section className="min-h-screen flex flex-col justify-center items-center">
        <div className="absolute w-full h-screen">
          <Image
            priority
            src={Stunting}
            alt=""
            className="object-cover object-bottom w-full h-full"
          />
          <div className="bg-gradient-to-b from-black/70 to-black/20 to-95% w-full h-full absolute z-[1] top-0 left-0" />
        </div>
        <div className="text-center text-[24px] md:text-[28px] text-shadow-1 text-white font-normal p-5 sm:p-0 z-[2]">
          {/* <h2 data-aos="fade-up">Masa Depan yang Lebih Sehat,</h2> */}
          <h2
            // data-aos="fade-up"
            data-aos-delay="400"
            className="text-[30px] md:text-[40px] font-normal"
          >
            Kurangi <strong className="font-bold">Angka Stunting</strong>
          </h2>
        </div>
      </section>

      <section className="overflow-hidden relative pt-20 lg:pt-[120px]">
        <SideDeco position={true} />
        <SideDeco position={false} />
        <div
          // data-aos="fade-up"
          className="flex items-center justify-center gap-[11px]"
        >
          <h1 className="text-green-1 font-bold text-[25px] md:text-[30px]">Apa itu Stunting</h1>
          <HiQuestionMarkCircle className="text-[34px] text-green-1" />
        </div>

        <p className="text-[19px] text-center w-[90%] max-w-[730px] mx-auto mt-12 lg:mt-[60px] lg:text-[26px]">
          Stunting adalah kondisi di mana tinggi badan seorang anak <strong>lebih rendah dibandingkan tinggi rata-rata</strong> untuk
          usianya, yang disebabkan oleh banyak faktor. Stunting tidak hanya memengaruhi pertumbuhan fisik, tetapi juga
          perkembangan kognitif, yang <strong>dapat berdampak jangka panjang pada kemampuan</strong> belajar, bekerja, dan hidup sehat
          seorang anak.
          <br />
          <br />
          <strong>Mengatasi stunting sangat penting untuk kesejahteraan individu</strong> dan perkembangan masyarakat secara keseluruhan.
          <strong>Stunting mencerminkan kondisi gizi yang buruk</strong>, serta tingkat sosial dan ekonomi suatu negara.
        </p>
      </section>

      <StatistikStunting />

      <PenyebabStunting />

      <MengatasiStunting />
    </main>
  );
}
