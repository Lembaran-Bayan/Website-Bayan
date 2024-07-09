import { MdMenuBook } from "react-icons/md";
import SideDeco from "./SideDeco";

export default function TopArticle() {
  return (
    <section className="py-20 md:py-[120px] flex flex-col justify-center items-center relative overflow-hidden">
      <SideDeco position={true} />
      <SideDeco position={false} />
      <div
        data-aos="fade-up"
        className="flex items-center justify-center gap-[11px]"
      >
        <h1 className="text-green-1 font-semibold text-[25px] md:text-[30px]">Artikel Pilihan</h1>
        <MdMenuBook className="text-[34px] text-green-1" />
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay="200"
        className="w-[90%] md:max-w-[620px] aspect-[620/325] bg-gradient-to-br from-green-2 from-20% to-yellow-1 rounded-[40px] mt-[60px] flex justify-center items-center text-white text-[24px] md:text-[30px] font-semibold text-shadow-1"
      >
        Segera Hadir
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay="400"
        className="flex justify-center items-center gap-5 mt-[30px]"
      >
        <div className="bg-green-1 text-white font-poppins text-[18px] px-8 md:px-12 py-2 rounded-full">
          <span>Senaru</span>
        </div>
        <div className="text-[18px] md:text-[25px] font-semibold">9 Juli 2024</div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay="600"
        className="flex justify-center items-center gap-5 mt-[15px] md:mt-[30px] text-center"
      >
        <h1 className="text-[24px] md:text-[30px] font-bold px-[5%]">Lorem Ipsum, Dolor Sit Amet!</h1>
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay="800"
        className="flex justify-center items-center gap-5 mt-[15px] md:mt-[30px]"
      >
        <p className="text-[16px] md:text-[18px] w-[90%] max-w-[680px] text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>
      </div>
    </section>
  );
}
