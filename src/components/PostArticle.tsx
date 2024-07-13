import { useState } from "react";
import { MdArrowBack } from "react-icons/md";

export default function PostArticle() {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <section className="bg-green-1 pt-20 pb-20 lg:pb-[120px] flex justify-center items-center text-white gap-20 lg:gap-[140px] flex-col lg:flex-row px-[5%] sm:px-0">
      {/* <div className="relative flex-shrink-0 -translate-x-[50px] sm:-translate-x-[80px] lg:-translate-x-0 2xl:-translate-x-[80px]">
        <div className="aspect-[160/105] bg-gradient-to-br from-green-2 to-yellow-1 w-[200px] md:w-[270px] lg:w-[318px] rounded-[16px] shadow-[0_8px_8px_rgba(0,0,0,.4)]" />
        <div className="aspect-[160/105] bg-gradient-to-br from-green-2 to-yellow-1 w-[200px] md:w-[270px] lg:w-[318px] rounded-[16px] absolute top-10 left-[100px] shadow-[0_8px_8px_rgba(0,0,0,.4)]" />
      </div> */}

      <div className="mt-2">
        <h1 className="max-w-[437px] text-[25px] md:text-[30px] lg:text-[36px] font-semibold text-center mx-auto">
          Ingin Artikelmu Dimuat di Lembaran Bayan?
        </h1>
        <p className="text-[16px] md:text-[18px] max-w-[500px] mt-4 text-center">
          Kirimkan draft artikelmu terkait UMKM, wisata, budaya, atau kegiatan yang ada di Bayan.
        </p>
        <button
          className="flex items-center gap-5 text-[16px] md:text-[18px] mt-5 font-medium py-2 mx-auto bg-black/60 hover:bg-black font-poppins px-10 rounded-full transition hover:shadow-[0_0_4px_rgba(0,0,0,.4)] active:shadow-[0_0_8px_#000]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <span>Unggah di sini</span>
          <div className={"text-[30px] " + (isHovered ? "animate-bounce-horizontal" : "")}>
            <MdArrowBack className="rotate-180" />
          </div>
        </button>
      </div>
    </section>
  );
}
