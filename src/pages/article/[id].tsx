/* eslint-disable @next/next/no-img-element */
import Button from "@/components/Button";
import SideDeco from "@/components/SideDeco";
import axios from "axios";
import Image, { StaticImageData } from "next/image";
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

type Article = {
  title: string;
  writer: string;
  desa: string;
  status: string;
  category: string;
  links: string[];
  image: string;
  createdAt: string;
  paragraphs: string[];
  _id: string;
};

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
  console.log(domain);
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

  const [article, setArticle] = useState<Article>({
    _id: router.query.id as string,
    category: "",
    createdAt: "",
    desa: "",
    image: "",
    links: [],
    paragraphs: [],
    status: "Verified",
    title: "",
    writer: "",
  });

  useEffect(() => {
    axios
      .get(process.env.NEXT_PUBLIC_API_URL + "/article/" + router.query.id)
      .then((res) => {
        console.log(JSON.parse(res.data.links[0]));
        setArticle({
          ...res.data,
          links: JSON.parse(res.data.links[0]),
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [router.query.id]);

  return (
    <main className="pt-[200px] pb-[120px] relative overflow-hidden">
      <SideDeco position={true} />
      <SideDeco position={false} />
      <section className="flex flex-col justify-center items-center gap-8 z-[1] relative">
        <div
          className={
            "flex justify-center items-center font-poppins px-10 py-2 bg-green-1 rounded-full text-white " +
            (article.desa === "" ? "animate-pulse h-[40px] w-[100px]" : "")
          }
        >
          {article.desa}
        </div>

        <div
          className={
            "w-[90%] max-w-[620px] h-[415px] aspect-[620/415] rounded-[30px] overflow-hidden relative bg-gradient-to-br from-green-2 from-20% to-yellow-1 " +
            (article.image === "" ? "animate-pulse" : "")
          }
        >
          {article.image !== "" && (
            <img
              src={process.env.NEXT_PUBLIC_API_URL + "/article/image/" + article.image}
              alt="Thumbnail"
              className="w-full h-full object-cover"
            />
          )}
          <div className="bg-gradient-to-br from-green-2 from-20% to-yellow-1 animate-pulse h-full w-full absolute z-[1]" />
        </div>

        <div className="flex flex-col justify-center items-center w-full">
          <h1
            className={
              "text-green-1 font-bold text-[29px] md:text-[39px] max-w-[25ch] leading-[120%] text-center " +
              (article.title === "" ? "bg-slate-200 rounded-[8px] animate-pulse h-[40px] w-full" : "")
            }
          >
            {article.title}
          </h1>
          <h2 className={article.writer === "" ? "bg-slate-200 rounded-[8px] animate-pulse h-[27px] mt-3 " : "text-[16px] md:text-[21px] mt-3"}>
            <span className={article.writer === "" ? "opacity-0" :""}>Ditulis oleh: {article.writer}</span>
          </h2>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center mt-12 z-[1] relative gap-2">
        {
          article.paragraphs.length === 0 && (
            <div className="w-[90%] max-w-[844px] bg-slate-200 animate-pulse h-[300px] rounded-[8px]"></div>
          )
        }
        {article.paragraphs?.map((p: string, index: number) => {
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
          {article.links?.map((l: string, index: number) => {
            if (l === "") return;
            return (
              <ExternalLink
                key={index}
                link={l}
              />
            );
          })}
        </div>

        <Button
          ariaLabel="Back Button"
          className="mt-[60px]"
          onClick={() => {
            router.back();
          }}
        >
          Kembali
        </Button>
      </section>
    </main>
  );
}
