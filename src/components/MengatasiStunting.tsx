import { AiTwotonePieChart } from "react-icons/ai";
import SideDeco from "./SideDeco";
import { ReactNode, useState } from "react";
import { HiCursorClick } from "react-icons/hi";
import { GrCycle } from "react-icons/gr";
import Fish from "@/../public/Fish.png";
import Milk from "@/../public/Milk.png";
import Ring from "@/../public/Ring.png";
import Asi from "@/../public/Asi.png";
import Nutrition from "@/../public/Nutrition.png";
import Image from "next/image";

export default function MengatasiStunting() {
  const [index, setIndex] = useState(0);
  return (
    <section className="overflow-hidden relative pt-10 pb-[150px]">
      <SideDeco position={true} />
      <SideDeco position={false} />
      <div
        // data-aos="fade-up"
        className="flex items-center justify-center gap-2 lg:gap-[11px] relative z-[1]"
      >
        <h1 className="text-green-1 text-center font-bold text-[25px] md:text-[30px]">Mengatasi Stunting</h1>
        <GrCycle className="text-[34px] text-green-1" />
      </div>

      <div className="flex flex-row flex-wrap gap-8 lg:gap-[50px] relative z-[1] justify-center items-center pt-10 w-[90%] mx-auto">
        <button
          type="button"
          onClick={() => setIndex(0)}
          className={index === 0 ? "scale-[1.05] transition" : "hover:scale-[1.05] transition"}
        >
          <Box
            image={
              <Image
                src={Fish}
                alt="Makan Ikan"
                className="w-[82px] sm:w-[95px] lg:w-[122px]"
              />
            }
          />
        </button>
        <button
          type="button"
          onClick={() => setIndex(1)}
          className={index === 1 ? "scale-[1.05] transition" : "hover:scale-[1.05] transition"}
        >
          <Box
            image={
              <Image
                src={Milk}
                alt="Minum Susu"
                className="w-[80px] sm:w-[96px] lg:w-[110px]"
              />
            }
          />
        </button>
        <button
          type="button"
          onClick={() => setIndex(2)}
          className={index === 2 ? "scale-[1.05] transition" : "hover:scale-[1.05] transition"}
        >
          <Box
            image={
              <Image
                src={Ring}
                alt="Hindari Pernikahan Dini"
                className="w-[88px] sm:w-[105px] lg:w-[120px]"
              />
            }
          />
        </button>
        <button
          type="button"
          onClick={() => setIndex(3)}
          className={index === 3 ? "scale-[1.05] transition" : "hover:scale-[1.05] transition"}
        >
          <Box
            image={
              <Image
                src={Asi}
                alt="Pemberian ASI"
                className="w-[49px] sm:w-[59px] lg:w-[67px]"
              />
            }
          />
        </button>
        <button
          type="button"
          onClick={() => setIndex(4)}
          className={index === 4 ? "scale-[1.05] transition" : "hover:scale-[1.05] transition"}
        >
          <Box
            image={
              <Image
                src={Nutrition}
                alt="Konseling Gizi"
                className="w-[78px] sm:w-[93px] lg:w-[106px]"
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
          <h1 className="text-[25px] sm:text-[28px] lg:text-[30px] font-extrabold mb-3 md:mb-6">Makan Ikan</h1>
          <p className="w-[90%] max-w-[920px] text-center mx-auto text-[16px] sm:text-[20px] lg:text-[24px]">
            Makan ikan secara teratur adalah langkah penting dalam mengatasi stunting. Ikan merupakan sumber protein
            berkualitas tinggi yang dapat mendukung pertumbuhan anak. Selain itu, ikan kaya akan omega-3 yang penting
            untuk perkembangan otak. Mengonsumsi ikan segar dan terjamin kualitasnya dapat meningkatkan asupan nutrisi
            esensial dan membantu pertumbuhan anak yang optimal.
          </p>
        </div>
      )}
      {index === 1 && (
        <div className="mt-10 text-center w-[90%] mx-auto">
          <h1 className="text-[25px] sm:text-[28px] lg:text-[30px] font-extrabold mb-3 md:mb-6">Minum Susu</h1>
          <p className="w-[90%] max-w-[920px] text-center mx-auto text-[16px] sm:text-[20px] lg:text-[24px]">
            Minum susu setiap hari memberikan sumber kalsium, vitamin D, dan protein yang sangat dibutuhkan untuk
            pertumbuhan tulang dan perkembangan anak. Susu juga mengandung nutrisi penting lainnya seperti vitamin A,
            B12, dan riboflavin yang membantu mendukung sistem kekebalan tubuh dan kesehatan secara keseluruhan.
            Pastikan anak-anak mendapatkan asupan susu yang cukup sebagai bagian dari pola makan seimbang.
          </p>
        </div>
      )}
      {index === 2 && (
        <div className="mt-10 text-center w-[90%] mx-auto">
          <h1 className="text-[25px] sm:text-[28px] lg:text-[30px] font-extrabold mb-3 md:mb-6">
            Hindari Pernihakan Dini
          </h1>
          <p className="w-[90%] max-w-[920px] text-center mx-auto text-[16px] sm:text-[20px] lg:text-[24px]">
            Hindari pernikahan dini untuk mencegah stunting pada generasi berikutnya. Pernikahan dini sering kali
            menyebabkan kehamilan yang tidak direncanakan dan kurangnya kesiapan untuk menghadapi tanggung jawab sebagai
            orang tua. Dengan menunda pernikahan dan kehamilan hingga usia yang lebih matang, calon ibu dapat lebih
            mempersiapkan kesehatan dan nutrisi yang lebih baik untuk anak-anak mereka di masa depan.
          </p>
        </div>
      )}
      {index === 3 && (
        <div className="mt-10 text-center w-[90%] mx-auto">
          <h1 className="text-[25px] sm:text-[28px] lg:text-[30px] font-extrabold mb-3 md:mb-6">Pemberian ASI</h1>
          <p className="w-[90%] max-w-[920px] text-center mx-auto text-[16px] sm:text-[20px] lg:text-[24px]">
            Pemberian ASI eksklusif selama enam bulan pertama kehidupan bayi adalah langkah krusial dalam pencegahan
            stunting. ASI memberikan semua nutrisi yang dibutuhkan bayi dan membantu memperkuat sistem kekebalan tubuh.
            ASI eksklusif juga mendukung perkembangan kognitif yang lebih baik dan mengurangi risiko infeksi yang dapat
            mengganggu pertumbuhan anak.
          </p>
        </div>
      )}
      {index === 4 && (
        <div className="mt-10 text-center w-[90%] mx-auto">
          <h1 className="text-[25px] sm:text-[28px] lg:text-[30px] font-extrabold mb-3 md:mb-6">Konseling Gizi</h1>
          <p className="w-[90%] max-w-[920px] text-center mx-auto text-[16px] sm:text-[20px] lg:text-[24px]">
            Konseling gizi adalah langkah penting dalam mendidik orang tua dan pengasuh tentang pentingnya nutrisi
            seimbang untuk pertumbuhan anak. Melalui konseling gizi, keluarga dapat memahami cara memilih makanan yang
            tepat, membuat pola makan yang seimbang, dan menghindari makanan yang kurang bergizi. Ini membantu
            memastikan anak mendapatkan nutrisi yang diperlukan untuk pertumbuhan yang sehat.
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
