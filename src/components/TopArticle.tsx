/* eslint-disable @next/next/no-img-element */
import { MdMenuBook } from "react-icons/md";
import SideDeco from "./SideDeco";
import Button from "./Button";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

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

export default function TopArticle({ id }: { id: string }) {
  const [article, setArticle] = useState<Article | null>(null);
  useEffect(() => {
    axios
      .get(process.env.NEXT_PUBLIC_API_URL + "/article/" + id)
      .then((res) => {
        setArticle(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <section className="pt-20 pb-10 md:pt-[120px] flex flex-col justify-center items-center relative overflow-hidden">
      <SideDeco position={true} />
      <SideDeco position={false} />
      <div
        // data-aos="fade-up"
        className="flex items-center justify-center gap-[11px]"
      >
        <h1 className="text-green-1 font-semibold text-[25px] md:text-[30px]">Artikel Pilihan</h1>
        <MdMenuBook className="text-[34px] text-green-1" />
      </div>
      <div
        // data-aos="fade-up"
        data-aos-delay="200"
        className={
          "w-[90%] md:max-w-[620px] aspect-[620/325] bg-gradient-to-br from-green-2 from-20% to-yellow-1 rounded-[40px] mt-[60px] flex justify-center items-center text-white text-[24px] md:text-[30px] font-semibold text-shadow-1 overflow-hidden " +
          (article === null ? "animate-pulse" : "")
        }
      >
        {article !== null && (
          <img
            src={process.env.NEXT_PUBLIC_API_URL + "/article/image/" + article?.image}
            className="w-full h-full object-cover object-center"
            alt="Thumbnail Article"
          />
        )}
      </div>
      <div
        // data-aos="fade-up"
        data-aos-delay="400"
        className="flex justify-center items-center gap-5 mt-[30px]"
      >
        <div
          className={
            "bg-green-1 text-white font-poppins text-[18px] px-8 md:px-12 py-2 rounded-full " +
            (article === null ? "animate-pulse h-[40px]" : "")
          }
        >
          <span>{article?.desa}</span>
        </div>
        <div
          className={
            "text-[18px] md:text-[25px] font-semibold " +
            (article === null ? "h-[37px] bg-slate-200 animate-pulse rounded-[8px] w-[120px]" : "")
          }
        >
          {article !== null && new Date(article?.createdAt as string).toLocaleDateString()}
        </div>
      </div>
      <div
        // data-aos="fade-up"
        data-aos-delay="600"
        className="flex justify-center items-center gap-5 mt-[15px] md:mt-[30px] text-center"
      >
        <h1 className="text-[24px] max-w-[30ch] md:text-[30px] font-bold px-[5%]">{article?.title}</h1>
      </div>
      <div
        // data-aos="fade-up"
        data-aos-delay="800"
        className={
          "flex justify-center items-center gap-5 mt-[8px] md:mt-[10px] " +
          (article === null ? "bg-slate-200 animate-pulse h-[200px] w-[90%] max-w-[860px] rounded-[8px]" : "")
        }
      >
        <p
          className={
            "text-[16px] md:text-[18px] w-[90%] max-w-[680px] text-center " + (article === null ? "opacity-0" : "")
          }
        >
          {(article?.paragraphs) && (article.paragraphs[0] !== undefined && article?.paragraphs[0].length < 150
            ? article?.paragraphs[0]
            : article?.paragraphs[0].slice(0, 147) + "...")}
        </p>
      </div>
      {article !== null && (
        <Link href={"/article/" + id}>
          <Button
            ariaLabel="Baca Selengkapnya"
            className="mt-4"
            disabled={false}
          >
            Baca Selengkapnya
          </Button>
        </Link>
      )}
    </section>
  );
}
