import { AiTwotonePieChart } from "react-icons/ai";
import SideDeco from "./SideDeco";
import { useState } from "react";

export default function StatistikStunting() {
  const [index, setIndex] = useState(0);
  return (
    <section className="overflow-hidden relative py-20 lg:py-[120px]">
      <SideDeco position={true} />
      <SideDeco position={false} />
      <div
        // data-aos="fade-up"
        className="flex items-center justify-center gap-2 lg:gap-[11px] relative z-[1]"
      >
        <h1 className="text-green-1 text-center font-bold text-[25px] md:text-[30px] w-[90%] md:w-fit">
          Statistik Kab. Lombok Utara dan NTB
        </h1>
        <AiTwotonePieChart className="hidden md:inline-block text-[34px] text-green-1 svg-fill" />
      </div>

      <div className="flex flex-row flex-wrap gap-8 lg:gap-[50px] relative z-[1] justify-center items-center py-10 mb-5 w-[90%] mx-auto">
        <button
          type="button"
          onClick={() => setIndex(0)}
        >
          <StatisticBox
            num="15"
            subnum=".98%"
            text="Angka Stunting di Kabupaten Lombok Utara"
          />
        </button>
        <button
          type="button"
          onClick={() => setIndex(1)}
        >
          <StatisticBox
            num="16"
            subnum="dari 38"
            text="Peringkat  Provinsi NTB dalam Angka Stunting tertinggi"
          />
        </button>
        <button
          type="button"
          onClick={() => setIndex(2)}
        >
          <StatisticBox
            num="24"
            subnum=".60%"
            text="Angka Stunting di Provinsi Nusa Tenggara Barat"
          />
        </button>
      </div>

      {index === 1 && (
        <p className="hidden md:block w-[90%] max-w-[920px] text-center mx-auto text-[16px] sm:text-[20px] lg:text-[24px]">
          Nusa Tenggara Barat (NTB) menempati{" "}
          <strong>peringkat 16 dari 38 provinsi di Indonesia dalam hal prevalensi stunting</strong>, menunjukkan
          perlunya intervensi yang berkelanjutan dan komprehensif. Meskipun ada kemajuan terbaru, peringkat tinggi NTB
          menyoroti tantangan yang terus-menerus dihadapi provinsi ini dalam{" "}
          <strong>menangani malnutrisi dan dampaknya pada perkembangan anak</strong>.{" "}
          <strong>Upaya untuk meningkatkan gizi, sanitasi, dan pendidikan kesehatan sangat penting</strong> untuk
          menurunkan peringkat ini. Komitmen provinsi untuk mengatasi stunting melalui program terintegrasi dan
          keterlibatan komunitas sangat{" "}
          <strong>
            penting dalam menciptakan perubahan yang langgeng dan meningkatkan kesehatan serta kesejahteraan populasi
          </strong>{" "}
          secara keseluruhan.
        </p>
      )}
      {index === 0 && (
        <p className="hidden md:block w-[90%] max-w-[920px] text-center mx-auto text-[16px] sm:text-[20px] lg:text-[24px]">
          <strong>
            Angka stunting sebesar 15,98% di Lombok Utara mencerminkan kemajuan signifikan dalam mengatasi masalah gizi
          </strong>{" "}
          buruk dibandingkan dengan rata-rata provinsi. Keberhasilan di kabupaten ini dapat dikaitkan dengan{" "}
          <strong>
            intervensi yang tepat sasaran, seperti program peningkatan gizi ibu hamil, peningkatan akses layanan
            kesehatan, dan partisipasi aktif komunitas
          </strong>{" "}
          dalam inisiatif kesehatan. Penurunan angka stunting menunjukkan efektivitas kerja sama antara pemerintah,
          penyedia layanan kesehatan, dan masyarakat lokal.{" "}
          <strong>
            Dukungan berkelanjutan dan strategi inovatif sangat penting untuk mempertahankan kemajuan ini dan lebih
            lanjut menurunkan angka stunting
          </strong>{" "}
          sesuai dengan target kesehatan nasional.
        </p>
      )}
      {index === 2 && (
        <p className="hidden md:block w-[90%] max-w-[920px] text-center mx-auto text-[16px] sm:text-[20px] lg:text-[24px]">
          Dengan <strong>angka stunting sebesar 24,6%, NTB masih berada di atas target nasional 14%</strong>, menyoroti{" "}
          <strong>perlunya upaya berkelanjutan untuk mengatasi akar penyebab malnutrisi</strong>. Meskipun provinsi ini
          telah membuat kemajuan dalam mengurangi stunting dari tahun-tahun sebelumnya, tantangan seperti ketahanan
          pangan, akses layanan kesehatan yang tidak memadai, dan sanitasi yang buruk masih ada. Pemerintah NTB dan
          organisasi kesehatan{" "}
          <strong>
            harus memperkuat intervensi yang berfokus pada peningkatan gizi ibu dan anak, mempromosikan pemberian ASI
            eksklusif, dan meningkatkan layanan kesehatan
          </strong>
          . Dengan menciptakan lingkungan yang mendukung dan mengatasi masalah ini, NTB dapat bekerja <strong>menuju pencapaian
          target kesehatan dan secara signifikan mengurangi prevalensi stunting</strong>.
        </p>
      )}
    </section>
  );
}

function StatisticBox({ num, subnum, text }: { num: string; subnum: string; text: string }) {
  return (
    <div className="size-[170px] sm:size-[200px] lg:size-[290px] bg-white shadow-[3px_4px_8px_rgba(24,64,15,.75)] rounded-[20px] flex flex-col justify-center items-center hover:scale-[1.1] transition cursor-pointer">
      <p className="font-extrabold text-[46.9px] sm:text-[55.1px] lg:text-[80px] text-green-1">
        {num}
        <span className="text-[20.5px] sm:text-[24.14px] lg:text-[35px] font-semibold">{subnum}</span>
      </p>
      <p className="text-center sm:text-[16.5px] lg:text-[24px] font-semibold text-[14.5px] leading-[125%] p-1">
        {text}
      </p>
    </div>
  );
}
