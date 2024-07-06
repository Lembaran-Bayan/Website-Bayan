import Link from "next/link";
import Logo from "@/../public/Logo.png";
import Image from "next/image";
import Rinjani from "@/../public/Rinjani.webp"

export default function ComingSoon() {
  return (
    <main className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center font-jakarta">
      <div className="absolute w-full h-screen">
        <Image
          priority
          src={Rinjani}
          alt=""
          className="object-cover w-full h-full"
        />
      </div>
      <section data-aos="fade-up" className="bg-gradient-to-br from-white/40 to-white/20 flex flex-col justify-center items-center px-10 py-6 rounded-[15px] outline outline-white outline-2">
        <Image
          src={Logo}
          alt="Logo Lembaran Bayan"
          className="size-[150px]"
        />
        <h1 className="text-center text-[28px] text-shadow-1 text-white font-bold mb-3 md:mb-5">
          <span className="text-[30px] md:text-[40px]">
            Segera <span className="">Hadir</span>
          </span>
        </h1>
        <Link
          href="/"
          className="underline underline-offset-4 text-white text-[16px] md:text-[20px] text-shadow-2 mb-2"
        >
          Kembali ke beranda
        </Link>
        <span className="text-white text-[16px] md:text-[20px] text-shadow-2">
          atau cek{" "}
          <Link
            href="https://kkn.lembaran-bayan.id"
            className="underline underline-offset-4"
          >
            media sosial kami
          </Link>
          .
        </span>
      </section>
    </main>
  );
}
