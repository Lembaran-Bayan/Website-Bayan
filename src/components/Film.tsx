import { MdOutlineSlowMotionVideo } from "react-icons/md";
import SideDeco from "./SideDeco";

export default function Film() {
  return (
    <main className="bg-white flex flex-col justify-center items-center relative overflow-x-hidden w-full py-20 overflow-y-hidden">
      <section className="z-[1] flex flex-col justify-center items-center w-full">
        <div data-aos="fade-up" className="flex items-center justify-center gap-[11px]">
          <h1 className="text-green-1 font-semibold text-[25px] md:text-[30px]">Film Dokumenter</h1>
          <MdOutlineSlowMotionVideo className="text-[34px] text-green-1" />
        </div>

        <p data-aos="fade-up" data-aos-delay="400" className="text-[18px] mt-5 text-center px-5">Simak video profil Desa Senaru dan Desa Bayan berikut ini: </p>

        <div data-aos="fade-up" data-aos-delay="600" className="w-[90%] md:max-w-[700px] aspect-[700/368] bg-gradient-to-br from-green-2 from-20% to-yellow-1 rounded-[40px] mt-[60px] flex justify-center items-center text-white text-[24px] md:text-[30px] font-semibold text-shadow-1">
          Segera Hadir
        </div>
      </section>
      <SideDeco position={true} />
      <SideDeco position={false} />
    </main>
  );
}
