import LogoWhite from "@/../public/LogoWhite.png";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return(
    <nav className="fixed top-0 py-5 px-[100px] flex w-full justify-between text-white items-center">
      <div className="flex font-medium text-white items-center gap-2">
        <Image src={LogoWhite} alt="" className="size-[48px]" />
        <h1 className="text-shadow-2 text-[25px]">Lembaran <span className="font-bold">Bayan</span></h1>
      </div>
      <div className="text-shadow-2 flex gap-6">
        <Link href="/coming-soon">Beranda</Link>
        <Link href="/coming-soon">Profil</Link>
        <Link href="/coming-soon">Wisata dan Budaya</Link>
        <Link href="/coming-soon">Kegiatan</Link>
      </div>
    </nav>
  )
}