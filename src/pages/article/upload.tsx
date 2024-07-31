import FormDropdown from "@/components/FormDropdown";
import SideDeco from "@/components/SideDeco";
import { FormEvent, useState } from "react";
import { MdInsertLink } from "react-icons/md";
import Facebook from "@/../public/Facebook.png";
import Tiktok from "@/../public/Tiktok.png";
import Youtube from "@/../public/Youtube.png";
import Instagram from "@/../public/Instagram.png";
import Tokopedia from "@/../public/Tokopedia.png";
import Shoppee from "@/../public/Shoppee.png";
import GMaps from "@/../public/Gmap.webp";
import Image, { StaticImageData } from "next/image";
import Button from "@/components/Button";

// Define the type for the keys of the linkIconMap
type SocialMedia = "youtube" | "facebook" | "tiktok" | "instagram" | "tokopedia" | "shopee" | "googlemaps";

// Define the structure of the linkIconMap
const linkIconMap: Record<SocialMedia, { patterns: string[]; icon: StaticImageData }> = {
  youtube: {
    patterns: ["youtube.com", "youtu.be"],
    icon: Youtube,
  },
  facebook: {
    patterns: ["facebook.com", "fb.com"],
    icon: Facebook,
  },
  tiktok: {
    patterns: ["tiktok.com", "vm.tiktok.com"],
    icon: Tiktok,
  },
  instagram: {
    patterns: ["instagram.com", "instagr.am"],
    icon: Instagram,
  },
  tokopedia: {
    patterns: ["tokopedia.com"],
    icon: Tokopedia,
  },
  shopee: {
    patterns: ["shopee.com"],
    icon: Shoppee,
  },
  googlemaps: {
    patterns: ["google.com/maps", "goo.gl/maps", "maps.app.goo.gl"],
    icon: GMaps,
  },
};

function IconLink({ link }: { link: string }) {
  // Find the corresponding icon based on the link
  const iconKey = (Object.keys(linkIconMap) as SocialMedia[]).find((key) =>
    linkIconMap[key].patterns.some((pattern) => link.includes(pattern))
  );

  if (iconKey) {
    return (
      <Image
        src={linkIconMap[iconKey].icon}
        alt={`${iconKey} Logo`}
        className="w-[26px]"
      />
    );
  } else {
    return <MdInsertLink className="text-[30px]" />;
  }
}

export default function UploadArticle() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("Hello World");
  };
  const labelClass = "flex flex-col w-full text-[20px] font-semibold gap-1";
  const inputClass = "outline outline-2 outline-green-2 font-normal px-2 py-1 rounded-[8px]";

  const [desa, setDesa] = useState<null | "Bayan" | "Senaru">(null);
  const [kategori, setKategori] = useState<null | "Wisata" | "UMKM">(null);
  const [link1, setLink1] = useState<string>("");
  const [link2, setLink2] = useState<string>("");
  const [link3, setLink3] = useState<string>("");
  const [link4, setLink4] = useState<string>("");

  return (
    <main className="pt-[200px] pb-[120px] relative overflow-hidden min-h-screen">
      <SideDeco position={true} />
      <SideDeco position={false} />

      <section className="z-[1] flex flex-col justify-center items-center">
        <h1 className="text-green-1 font-bold text-[29px] md:text-[39px]">Ajukan Artikel Baru</h1>

        <form
          className="bg-green-2/10 w-[90%] max-w-[700px] flex flex-col gap-4"
          onSubmit={(e) => handleSubmit(e)}
        >
          <label className={labelClass}>
            Judul Artikel
            <input
              type="text"
              className={inputClass}
              placeholder=""
            />
          </label>
          <label className={labelClass}>
            Nama Penulis
            <input
              type="text"
              className={inputClass}
              placeholder=""
            />
          </label>
          <label className={labelClass}>
            Konten Artikel
            {/* <input type="text" className={inputClass} placeholder=""/> */}
            <textarea className={inputClass + " min-h-[300px]"}></textarea>
          </label>
          <label className={labelClass}>
            Pilih Desa
            <FormDropdown
              options={[
                { display: "Desa Bayan", value: "Bayan" },
                { display: "Desa Senaru", value: "Senaru" },
              ]}
              state={desa}
              setState={(value: "Bayan" | "Senaru") => setDesa(value)}
              placeholder="Pilih Desa"
            />
          </label>
          <label className={labelClass}>
            Pilih Kategori
            <FormDropdown
              options={[
                { display: "Wisata dan Budaya", value: "Wisata" },
                { display: "UMKM", value: "UMKM" },
              ]}
              state={kategori}
              setState={(value: "Wisata" | "UMKM") => setKategori(value)}
              placeholder="Pilih Kategori"
            />
          </label>
          <label className={labelClass}>Link Media Sosial</label>
          <div className="flex items-center gap-2">
            <IconLink link={link1} />
            <input
              className={inputClass + " w-full"}
              type="text"
              value={link1}
              onChange={(e) => setLink1(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <IconLink link={link2} />
            <input
              className={inputClass + " w-full"}
              type="text"
              value={link2}
              onChange={(e) => setLink2(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <IconLink link={link3} />
            <input
              className={inputClass + " w-full"}
              type="text"
              value={link3}
              onChange={(e) => setLink3(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <IconLink link={link4} />
            <input
              className={inputClass + " w-full"}
              type="text"
              value={link4}
              onChange={(e) => setLink4(e.target.value)}
            />
          </div>

          <Button
            type="submit"
            ariaLabel="Submit"
          >
            Ajukan
          </Button>
        </form>
      </section>
    </main>
  );
}
