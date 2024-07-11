import { useState } from "react";
import { MdArrowBack } from "react-icons/md";

export default function PostArticle() {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <section className="bg-green-1 pt-20 pb-[120px] flex justify-center items-center text-white gap-[180px]">
      <div className="relative">
        <div className="aspect-[160/105] bg-gradient-to-br from-green-2 to-yellow-1 w-[318px] rounded-[16px] shadow-[0_8px_8px_rgba(0,0,0,.4)]" />
        <div className="aspect-[160/105] bg-gradient-to-br from-green-2 to-yellow-1 w-[318px] rounded-[16px] absolute top-10 left-[100px] shadow-[0_8px_8px_rgba(0,0,0,.4)]" />
      </div>

      <div className="mt-2">
        <h1 className="max-w-[437px] text-[36px] font-semibold">Ingin Artikelmu Dimuat di Lembaran Bayan?</h1>
        <p className="text-[18px] max-w-[500px] mt-4">
          Kirimkan draft artikelmu terkait UMKM, wisata, budaya, atau kegiatan yang ada di Bayan.
        </p>
        <button
          className="flex items-center gap-5 text-[18px] mt-5 font-medium py-2"
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
