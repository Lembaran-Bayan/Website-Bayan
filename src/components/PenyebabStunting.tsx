import { AiTwotonePieChart } from "react-icons/ai";
import SideDeco from "./SideDeco";
import { ReactNode, useState } from "react";
import { HiCursorClick } from "react-icons/hi";
import { GrCycle } from "react-icons/gr";
import Hunger from "@/../public/Hunger.png";
import Baby from "@/../public/Baby.png";
import Healthcare from "@/../public/Healthcare.png";
import BadSanitation from "@/../public/BadSanitation.png";
import Infection from "@/../public/Infection.png";
import Image from "next/image";

export default function PenyebabStunting() {
  const [index, setIndex] = useState(0);
  return (
    <section className="overflow-hidden relative py-10">
      <SideDeco position={true} />
      <SideDeco position={false} />
      <div
        // data-aos="fade-up"
        className="flex items-center justify-center gap-2 lg:gap-[11px] relative z-[1]"
      >
        <h1 className="text-green-1 text-center font-bold text-[25px] md:text-[30px]">
          <span className="hidden sm:inline">Faktor </span>Penyebab Stunting
        </h1>
        <GrCycle className="text-[34px] text-green-1" />
      </div>

      <div className="flex flex-row flex-wrap gap-8 lg:gap-[50px] relative z-[1] justify-center items-center pt-10 w-[90%] mx-auto">
        <button
          type="button"
          onClick={() => setIndex(0)}
          className={index === 0 ? "scale-[1.1]" : "hover:scale-[1.1] transition"}
        >
          <Box
            image={
              <Image
                src={Hunger}
                alt="Kurang Asupan Gizi"
                className="w-[61px] sm:w-[73px] lg:w-[91px]"
              />
            }
          />
        </button>
        <button
          type="button"
          onClick={() => setIndex(1)}
          className={index === 1 ? "scale-[1.1]" : "hover:scale-[1.1] transition"}
        >
          <Box
            image={
              <Image
                src={Baby}
                alt="Kesehatan Ibu yang Buruk"
                className="w-[85px] sm:w-[100px] lg:w-[115px]"
              />
            }
          />
        </button>
        <button
          type="button"
          onClick={() => setIndex(2)}
          className={index === 2 ? "scale-[1.1]" : "hover:scale-[1.1] transition"}
        >
          <Box
            image={
              <Image
                src={Healthcare}
                alt="Layanan Kesehatan yang Terbatas"
                className="w-[72px] sm:w-[86px] lg:w-[98px]"
              />
            }
          />
        </button>
        <button
          type="button"
          onClick={() => setIndex(3)}
          className={index === 3 ? "scale-[1.1]" : "hover:scale-[1.1] transition"}
        >
          <Box
            image={
              <Image
                src={BadSanitation}
                alt="Sanitasi yang Buruk"
                className="w-[69px] sm:w-[83px] lg:w-[94px]"
              />
            }
          />
        </button>
        <button
          type="button"
          onClick={() => setIndex(4)}
          className={index === 4 ? "scale-[1.1]" : "hover:scale-[1.1]"}
        >
          <Box
            image={
              <Image
                src={Infection}
                alt="Infeksi"
                className="w-[82px] sm:w-[98px] lg:w-[110px]"
              />
            }
          />
        </button>
      </div>

      <div
        className="flex my-5 md:my-10 w-max bg-green-1 text-white px-4 py-2 rounded-full items-center gap-2 mx-auto"
        data-aos="fade-left"
        data-aos-delay="200"
      >
        <HiCursorClick className="text-[20px]" />
        Klik untuk berinteraksi
      </div>

      {index === 0 && (
        <div className="mt-10 text-center w-[90%] mx-auto">
          <h1 className="text-[25px] sm:text-[28px] lg:text-[30px] font-extrabold mb-3 md:mb-6">Kurangnya Asupan Gizi</h1>
          <p className="w-[90%] max-w-[920px] text-center mx-auto text-[16px] sm:text-[20px] lg:text-[24px]">
            Malnutrisi atau kekurangan asupan gizi yang seimbang merupakan penyebab utama stunting. Anak-anak yang tidak
            mendapatkan cukup vitamin, mineral, dan protein dari makanan sehari-hari berisiko tinggi mengalami
            pertumbuhan terhambat. Makanan yang kurang bergizi dapat mempengaruhi perkembangan fisik dan kognitif anak
            secara signifikan.
          </p>
        </div>
      )}
      {index === 1 && (
        <div className="mt-10 text-center w-[90%] mx-auto">
          <h1 className="text-[25px] sm:text-[28px] lg:text-[30px] font-extrabold mb-3 md:mb-6">
            Kesehatan Ibu yang Kurang Baik
          </h1>
          <p className="w-[90%] max-w-[920px] text-center mx-auto text-[16px] sm:text-[20px] lg:text-[24px]">
            Kesehatan ibu yang tidak memadai selama kehamilan dan menyusui dapat berkontribusi pada stunting. Ibu hamil
            yang mengalami malnutrisi atau kekurangan energi kronis lebih mungkin melahirkan bayi dengan berat badan
            lahir rendah, yang merupakan faktor risiko utama untuk stunting. Kesehatan ibu yang baik sangat penting
            untuk mendukung pertumbuhan anak yang optimal.
          </p>
        </div>
      )}
      {index === 2 && (
        <div className="mt-10 text-center w-[90%] mx-auto">
          <h1 className="text-[25px] sm:text-[28px] lg:text-[30px] font-extrabold mb-3 md:mb-6">
            Layanan Kesehatan yang Terbatas
          </h1>
          <p className="w-[90%] max-w-[920px] text-center mx-auto text-[16px] sm:text-[20px] lg:text-[24px]">
            Akses terbatas ke layanan kesehatan yang berkualitas dapat memperburuk kondisi stunting. Anak-anak yang
            tidak mendapatkan imunisasi, perawatan medis, atau pemeriksaan kesehatan rutin lebih rentan terhadap
            penyakit yang dapat menghambat pertumbuhan. Layanan kesehatan yang memadai penting untuk memastikan anak
            tumbuh sehat dan kuat.
          </p>
        </div>
      )}
      {index === 3 && (
        <div className="mt-10 text-center w-[90%] mx-auto">
          <h1 className="text-[25px] sm:text-[28px] lg:text-[30px] font-extrabold mb-3 md:mb-6">Kondisi Sanitasi yang Buruk</h1>
          <p className="w-[90%] max-w-[920px] text-center mx-auto text-[16px] sm:text-[20px] lg:text-[24px]">
            Sanitasi dan kebersihan yang buruk dapat menyebabkan infeksi saluran pencernaan dan penyakit lainnya yang
            menghambat penyerapan nutrisi. Lingkungan yang tidak bersih meningkatkan risiko infeksi dan diare pada
            anak-anak, yang secara langsung mempengaruhi pertumbuhan dan perkembangan mereka. Meningkatkan praktik
            sanitasi dan kebersihan adalah langkah penting dalam pencegahan stunting.
          </p>
        </div>
      )}
      {index === 4 && (
        <div className="mt-10 text-center w-[90%] mx-auto">
          <h1 className="text-[25px] sm:text-[28px] lg:text-[30px] font-extrabold mb-3 md:mb-6">Infeksi yang Sering</h1>
          <p className="w-[90%] max-w-[920px] text-center mx-auto text-[16px] sm:text-[20px] lg:text-[24px]">
            Infeksi yang sering, seperti infeksi usus atau pernapasan, dapat mengganggu penyerapan nutrisi dan
            pertumbuhan anak. Anak-anak yang sering sakit memerlukan energi lebih untuk melawan infeksi, yang dapat
            mengurangi energi yang tersedia untuk pertumbuhan. Penting untuk mencegah dan mengobati infeksi untuk
            mendukung pertumbuhan yang sehat.
          </p>
        </div>
      )}
    </section>
  );
}

function Box({ image }: { image: ReactNode }) {
  return (
    <div className="size-[125px] sm:size-[150px] lg:size-[185px] bg-white shadow-[3px_4px_8px_rgba(24,64,15,.75)] rounded-[20px] flex flex-col justify-center items-center transition cursor-pointer">
      {image}
    </div>
  );
}
