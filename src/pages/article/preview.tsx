/* eslint-disable @next/next/no-img-element */
import Button from "@/components/Button";
import SideDeco from "@/components/SideDeco";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { MdInsertLink } from "react-icons/md";

import Facebook from "@/../public/Facebook.png";
import Tiktok from "@/../public/Tiktok.png";
import Youtube from "@/../public/Youtube.png";
import Instagram from "@/../public/Instagram.png";
import Tokopedia from "@/../public/Tokopedia.png";
import Shoppee from "@/../public/Shoppee.png";
import GMaps from "@/../public/Gmap.webp";
import Image, { StaticImageData } from "next/image";
import { URL } from "url";

type SocialMedia = "youtube" | "facebook" | "tiktok" | "instagram" | "tokopedia" | "shopee" | "googlemaps";
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
    linkIconMap[key].patterns.some((pattern) => link?.includes(pattern))
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

function ExternalLink({ link }: { link: string }) {
  if (link === null) return;
  const getDomainName = (link: string) => {
    // Regular expression to extract the domain name
    const regex = /^(?:https?:\/\/)?(?:www\.)?([^\/]+)/i;
    const match = link?.match(regex);
    if (match) {
      const domain = match[1].split(".")[0];
      return domain.charAt(0).toUpperCase() + domain.slice(1);
    }
    return "Link";
  };

  const domain = getDomainName(link);
  // console.log(domain);
  return (
    <a
      href={link?.startsWith("http://") || link?.startsWith("https://") ? link : "https://" + link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <button className="bg-white rounded-[8px] shadow-[0_3px_4px_rgba(0,0,0,.4)] flex gap-3 items-center px-3 py-2 font-poppins hover:bg-[#F0F0F0] transition-colors active:bg-[#DEDEDE]">
        <IconLink link={link} />
        <span>{domain}</span>
      </button>
    </a>
  );
}

export default function ArticlePage() {
  const router = useRouter();

  const [title, setTitle] = useState<string>("");
  const [writer, setWriter] = useState<string>("");
  const [paragraphs, setParagraphs] = useState<string[]>([""]);
  const [desa, setDesa] = useState<null | "Bayan" | "Senaru">(null);
  const [kategori, setKategori] = useState<null | "Wisata" | "UMKM">(null);
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [links, setLinks] = useState<string[]>([""]);

  useEffect(() => {
    if (!localStorage.getItem("preview-article")) {
      router.push("/article/upload");
    } else {
      const previewArticle = JSON.parse(localStorage.getItem("preview-article") as string);
      console.log(previewArticle.links)
      setTitle(previewArticle.title);
      setWriter(previewArticle.writer);
      setParagraphs(previewArticle.paragpraphs);
      setDesa(previewArticle.desa);
      setKategori(previewArticle.category);
      setSelectedImage(previewArticle.image);
      setLinks(JSON.parse(previewArticle.links));
    }
  }, [router]);

  return (
    <main className="pt-[200px] pb-[120px] relative overflow-hidden">
      <SideDeco position={true} />
      <SideDeco position={false} />
      <section className="flex flex-col justify-center items-center gap-8 z-[1] relative">
        <div className="flex justify-center items-center font-poppins px-10 py-2 bg-green-1 rounded-full text-white">
          {desa}
        </div>

        <div className="w-[90%] max-w-[620px] aspect-[620/415] rounded-[30px] overflow-hidden relative">
          <img
            src={selectedImage}
            className="w-full h-full object-cover z-[1] relative"
            alt={"foto " + title}
          />
          <div className="bg-gradient-to-br from-green-2 from-20% to-yellow-1 w-full h-full absolute top-0 left-0 animate-pulse " />
        </div>

        <div className="flex flex-col justify-center items-center">
          <h1 className="text-green-1 font-bold text-[29px] md:text-[39px] text-center max-w-[25ch] leading-[120%]">{title}</h1>
          <h2 className="text-[16px] md:text-[21px]">Ditulis oleh: {writer}</h2>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center mt-12 z-[1] relative gap-2">
        {paragraphs?.map((p, index) => {
          return (
            <p
              key={index}
              className="text-justify w-[90%] max-w-[844px] text-[22px]"
            >
              {p}
            </p>
          );
        })}

        <div className="mt-[50px] flex gap-5">
          {links.map((l, index) => {
            return l == "" ? null : <ExternalLink link={l} key={index} />;
          })}
        </div>

        <Button
          ariaLabel="Back Button"
          className="mt-[60px]"
          onClick={() => router.back()}
        >
          Kembali
        </Button>
      </section>
    </main>
  );
}
