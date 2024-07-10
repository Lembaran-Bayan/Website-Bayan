import Image from "next/image";
import Umkm from "@/../public/Umkm 2.webp";
import TopArticle from "@/components/TopArticle";
import Footer from "@/components/Footer";
import ArticleSlider from "@/components/ArticleSlider";

export default function ProfilePage() {
  return(
    <main className="bg-white min-h-screen">
      <section className="min-h-screen flex flex-col justify-center items-center">
      <div className="absolute w-full h-screen">
        <Image
          priority
          src={Umkm}
          alt=""
          className="object-cover w-full h-full"
        />
        <div className="bg-gradient-to-b from-black/60 to-black/10 to-95% w-full h-full absolute z-[1] top-0 left-0" />
      </div>
      <div className="text-center text-[24px] md:text-[28px] text-shadow-1 text-white font-medium p-5 sm:p-0 z-[2]">
        <h2 data-aos="fade-up">Nadi Ekonomi Negeri,</h2>
        <h2
          data-aos="fade-up"
          data-aos-delay="400"
          className="text-[30px] md:text-[40px]"
        >
          Kenali <span className="font-bold">UMKM</span>
        </h2>
      </div>
      </section>

      <TopArticle />

      <ArticleSlider />

      <Footer />
    </main>
  )
}