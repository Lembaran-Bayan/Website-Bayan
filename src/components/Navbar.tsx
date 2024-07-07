import LogoWhite from "@/../public/LogoWhite.png";
import useScrollPosition from "@/hooks/useScrollPosition";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Navbar() {
  const opaqueRoutes = ["/profile"];
  const router = useRouter();
  const scrollPosition = useScrollPosition();
  const [scrollPerVH, setScrollPerVH] = useState<number>(0);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    setScrollPerVH(scrollPosition / window.innerHeight);
  }, [scrollPosition]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [router])

  return (
    <nav
      // data-aos="fade-down"
      // data-aos-delay="0"
      className={
        "fixed top-0 py-3 md:py-5 px-[20px] md:px-[50px] lg:px-[100px] flex w-full justify-between text-white items-center z-[99]"
      }
      style={{ background: opaqueRoutes.includes(router.pathname) ? "rgba(24,64,15)" : `rgba(24,64,15,${scrollPerVH > 0.9 ? 1 : Number(scrollPerVH.toFixed(2))})` }}
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
          className={
            "after:h-[3px] after:bg-white after:absolute relative after:top-[100%] after:left-0 after:w-[0px] hover:after:w-full after:transition-width after:duration-200 " +
            (router.pathname === "/" ? "after:w-full" : "after:w-0")
          }
        >
          Beranda
        </Link>
        <Link
          href="/profile"
          className={
            "after:h-[3px] after:bg-white after:absolute relative after:top-[100%] after:left-0 after:w-[0px] hover:after:w-full after:transition-width after:duration-200 " +
            (router.pathname === "/profile" ? "after:w-full" : "after:w-0")
          }
        >
          Profil
        </Link>
        <Link
          href="/wisata-dan-budaya"
          className={
            "after:h-[3px] after:bg-white after:absolute relative after:top-[100%] after:left-0 after:w-[0px] hover:after:w-full after:transition-width after:duration-200 " +
            (router.pathname === "/wisata-dan-budaya" ? "after:w-full" : "after:w-0")
          }
        >
          Wisata dan Budaya
        </Link>
        <Link
          href="/kegiatan"
          className={
            "after:h-[3px] after:bg-white after:absolute relative after:top-[100%] after:left-0 after:w-[0px] hover:after:w-full after:transition-width after:duration-200 " +
            (router.pathname === "/kegiatan" ? "after:w-full" : "after:w-0")
          }
        >
          Kegiatan
        </Link>
        <Link
          href="/galeri"
          className={
            "after:h-[3px] after:bg-white after:absolute relative after:top-[100%] after:left-0 after:w-[0px] hover:after:w-full after:transition-width after:duration-200 " +
            (router.pathname === "/galeri" ? "after:w-full" : "after:w-0")
          }
        >
          Galeri
        </Link>
      </div>

      <div className="relative flex items-center lg:hidden">
        <button
          className="w-[25px] lg:hidden"
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
          aria-label="Toggle Navigation Menu"
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
              className={"relative block w-fit text-[14px] md:text-[18px] after:block after:h-[3px] after:bg-white text-shadow-2 hover:after:w-full after:transition-width after:duration-200 " + (router.pathname === "/" ? "after:w-full" : "after:w-0")}
              href="/"
            >
              Beranda
            </Link>
            <Link
              className={"relative block w-fit text-[14px] md:text-[18px] after:block after:h-[3px] after:bg-white text-shadow-2 hover:after:w-full after:transition-width after:duration-200 " + (router.pathname === "/profile" ? "after:w-full" : "after:w-0")}
              href="/profile"
            >
              Profil
            </Link>
            <Link
              className={"relative block w-fit text-[14px] md:text-[18px] after:block after:h-[3px] after:bg-white text-shadow-2 hover:after:w-full after:transition-width after:duration-200 " + (router.pathname === "/wisata-dan-budaya" ? "after:w-full" : "after:w-0")}
              href="/wisata-dan-budaya"
            >
              Wisata dan Budaya
            </Link>
            <Link
              className={"relative block w-fit text-[14px] md:text-[18px] after:block after:h-[3px] after:bg-white text-shadow-2 hover:after:w-full after:transition-width after:duration-200 " + (router.pathname === "/kegiatan" ? "after:w-full" : "after:w-0")}
              href="/kegiatan"
            >
              Kegiatan
            </Link>
            <Link
              className={"relative block w-fit text-[14px] md:text-[18px] after:block after:h-[3px] after:bg-white text-shadow-2 hover:after:w-full after:transition-width after:duration-200 " + (router.pathname === "/galeri" ? "after:w-full" : "after:w-0")}
              href="/galeri"
            >
              Galeri
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
