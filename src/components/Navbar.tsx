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

  useEffect(() => {
    setScrollPerVH(scrollPosition / window.innerHeight)
  }, [scrollPosition])

  return(
    <nav data-aos="fade-down" data-aos-delay="0" className={"fixed top-0 py-5 px-[20px] md:px-[50px] lg:px-[100px] flex w-full justify-between text-white items-center z-[99]"} style={{background: `rgba(24,64,15,${scrollPerVH > 0.9 ? 1 : scrollPerVH})`}}>
      <Link href="/">
      <div className="flex font-medium text-white items-center gap-2">
        <Image src={LogoWhite} alt="" className="size-[48px]" />
        <h1 className="text-shadow-2 text-[25px]">Lembaran <span className="font-bold">Bayan</span></h1>
      </div></Link>
      <div className="text-shadow-2 lg:flex gap-7 hidden">
        <Link href="/" className="after:w-full after:h-[3px] after:bg-white after:absolute relative after:top-[100%] after:left-0 //after:shadow-[0_0_5px_#000]">Beranda</Link>
        <Link href="/coming-soon" className="after:h-[3px] after:bg-white after:absolute relative after:top-[100%] after:left-0 after:w-[0px] hover:after:w-full after:transition-width after:duration-200">Profil</Link>
        <Link href="/coming-soon" className="after:h-[3px] after:bg-white after:absolute relative after:top-[100%] after:left-0 after:w-[0px] hover:after:w-full after:transition-width after:duration-200">Wisata dan Budaya</Link>
        <Link href="/coming-soon" className="after:h-[3px] after:bg-white after:absolute relative after:top-[100%] after:left-0 after:w-[0px] hover:after:w-full after:transition-width after:duration-200">Kegiatan</Link>
      </div>
    </nav>
  )
}