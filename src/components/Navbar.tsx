import LogoWhite from "@/../public/LogoWhite.png";
import useScrollPosition from "@/hooks/useScrollPosition";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Navbar() {
  const router = useRouter();
  const scrollPosition = useScrollPosition();
  const [scrollPerVH, setScrollPerVH] = useState<number>(0);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    setScrollPerVH(scrollPosition / window.innerHeight);
  }, [scrollPosition]);

  return (
    <nav
      // data-aos="fade-down"
      // data-aos-delay="0"
      className={
        "fixed top-0 py-3 md:py-5 px-[20px] md:px-[50px] lg:px-[100px] flex w-full justify-between text-white items-center z-[99]"
      }
      style={{ background: `rgba(24,64,15,${scrollPerVH > 0.9 ? 1 : Number(scrollPerVH.toFixed(2))})` }}
    >
      <Link href="/">
        <div className="flex font-medium text-white items-center gap-2">
          <Image
            src={LogoWhite}
            alt=""
            className="size-[48px]"
          />
          <h1 className="text-shadow-2 text-[18px] md:text-[25px]">
            Lembaran <span className="font-bold">Bayan</span>
          </h1>
        </div>
      </Link>

      <div className="text-shadow-2 lg:flex gap-7 hidden">
        <Link
          href="/"
          className="after:w-full after:h-[3px] after:bg-white after:absolute relative after:top-[100%] after:left-0 //after:shadow-[0_0_5px_#000]"
        >
          Beranda
        </Link>
        <Link
          href="/coming-soon"
          className="after:h-[3px] after:bg-white after:absolute relative after:top-[100%] after:left-0 after:w-[0px] hover:after:w-full after:transition-width after:duration-200"
        >
          Profil
        </Link>
        <Link
          href="/coming-soon"
          className="after:h-[3px] after:bg-white after:absolute relative after:top-[100%] after:left-0 after:w-[0px] hover:after:w-full after:transition-width after:duration-200"
        >
          Wisata dan Budaya
        </Link>
        <Link
          href="/coming-soon"
          className="after:h-[3px] after:bg-white after:absolute relative after:top-[100%] after:left-0 after:w-[0px] hover:after:w-full after:transition-width after:duration-200"
        >
          Kegiatan
        </Link>
      </div>

      <div className="relative flex items-center lg:hidden">
        <button
          className="w-[25px] lg:hidden"
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
        >
          <div className="flex flex-col gap-1.5 w-[25px] justify-center items-center relative">
            <div
              className={"bg-white h-[3px] rounded-full w-full transition " + (isMenuOpen ? "scale-0" : "delay-200")}
            />
            <div
              className={"bg-white h-[3px] rounded-full w-full transition " + (isMenuOpen ? "rotate-45 delay-200" : "")}
            />
            <div
              className={
                "bg-white h-[3px] rounded-full w-full transition absolute " + (isMenuOpen ? "-rotate-45 delay-200" : "")
              }
            />
            <div
              className={
                "bg-white h-[3px] rounded-full w-full transition origin-left " + (isMenuOpen ? "scale-0" : "delay-200")
              }
            />
          </div>
        </button>

        <div
          className={
            "absolute top-[calc(100%+40px)] right-0 bg-transparent font-medium text-white //text-green-1 grid px-8 py-5 transition-[grid-template-rows,padding,color] " +
            (isMenuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr] !py-0") +
            (scrollPerVH > 0.6 ? " //bg-green-1 text-white" : "")
          }
          style={{ background: `rgba(24,64,15,${scrollPerVH > 0.9 ? 1 : Number(scrollPerVH.toFixed(2))})` }}
        >
          <div className="overflow-hidden flex flex-col gap-2 w-max">
            <Link
              className="block w-fit text-[14px] md:text-[18px] after:block after:w-full after:h-[2px] after:bg-white text-shadow-2"
              href="/"
            >
              Beranda
            </Link>
            <Link
              className="block w-fit text-[14px] md:text-[18px] after:block after:w-full after:h-[2px] after:bg-white text-shadow-2 after:scale-x-0 hover:after:scale-x-[100%] after:transition after:duration-300 after:origin-left"
              href="/coming-soon"
            >
              Profil
            </Link>
            <Link
              className="block w-fit text-[14`px] md:text-[18px] after:block after:w-full after:h-[2px] after:bg-white text-shadow-2 after:scale-x-0 hover:after:scale-x-[100%] after:transition after:duration-300 after:origin-left"
              href="/coming-soon"
            >
              Wisata dan Budaya
            </Link>
            <Link
              className="block w-fit text-[14`px] md:text-[18px] after:block after:w-full after:h-[2px] after:bg-white text-shadow-2 after:scale-x-0 hover:after:scale-x-[100%] after:transition after:duration-300 after:origin-left"
              href="/coming-soon"
            >
              Kegiatan
            </Link>
            <Link
              className="block w-fit text-[14px] md:text-[18px] after:block after:w-full after:h-[2px] after:bg-white text-shadow-2 after:scale-x-0 hover:after:scale-x-[100%] after:transition after:duration-300 after:origin-left"
              href="/coming-soon"
            >
              Galeri
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
