import Image from "next/image";
import Rinjani from "@/../public/Rinjani.webp";

export default function Hero() {
  return (
    <main className="min-h-screen //bg-[url('/Rinjani.webp')] bg-cover bg-center flex justify-center items-center relative overflow-hidden">
      <div className="absolute w-full h-full">
        <Image
          priority
          src={Rinjani}
          alt=""
          className="object-cover w-full h-full"
        />
        <div className="bg-gradient-to-b from-black/20 from-10% via-transparent to-white/0 w-full h-full absolute z-[1] top-0 left-0" />
      </div>
      <div className="text-center text-[24px] md:text-[28px] text-shadow-1 text-white font-medium p-5 sm:p-0">
        <h2 data-aos="fade-up">Memulai Lembaran</h2>
        <h2
          data-aos="fade-up"
          data-aos-delay="400"
          className="text-[30px] md:text-[40px]"
        >
          Dengan Keindahan <span className="font-bold">Bayan</span>
        </h2>
      </div>
    </main>
  );
}
