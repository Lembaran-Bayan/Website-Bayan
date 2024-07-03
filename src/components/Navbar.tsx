import LogoWhite from "@/../public/LogoWhite.png";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  return(
    <nav className="fixed top-0 py-5 px-[100px] flex w-full justify-between text-white items-center">
      <div className="flex font-medium text-white items-center gap-2">
        <Image src={LogoWhite} alt="" className="size-[48px]" />
        <h1 className="text-shadow-2 text-[25px]">Lembaran <span className="font-bold">Bayan</span></h1>
      </div>
      <div className="text-shadow-2 flex gap-7">
        <Link href="/" className="after:w-full after:h-[3px] after:bg-white after:absolute relative after:top-[100%] after:left-0 //after:shadow-[0_0_5px_#000]">Beranda</Link>
        <Link href="/coming-soon" className="after:h-[3px] after:bg-white after:absolute relative after:top-[100%] after:left-0 after:w-[0px] hover:after:w-full after:transition-width after:duration-200">Profil</Link>
        <Link href="/coming-soon" className="after:h-[3px] after:bg-white after:absolute relative after:top-[100%] after:left-0 after:w-[0px] hover:after:w-full after:transition-width after:duration-200">Wisata dan Budaya</Link>
        <Link href="/coming-soon" className="after:h-[3px] after:bg-white after:absolute relative after:top-[100%] after:left-0 after:w-[0px] hover:after:w-full after:transition-width after:duration-200">Kegiatan</Link>
      </div>
    </nav>
  )
}