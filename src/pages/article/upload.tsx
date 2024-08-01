/* eslint-disable @next/next/no-img-element */
import FormDropdown from "@/components/FormDropdown";
import SideDeco from "@/components/SideDeco";
import { FormEvent, useEffect, useState } from "react";
import { MdClose, MdInsertLink } from "react-icons/md";
import Facebook from "@/../public/Facebook.png";
import Tiktok from "@/../public/Tiktok.png";
import Youtube from "@/../public/Youtube.png";
import Instagram from "@/../public/Instagram.png";
import Tokopedia from "@/../public/Tokopedia.png";
import Shoppee from "@/../public/Shoppee.png";
import GMaps from "@/../public/Gmap.webp";
import Image, { StaticImageData } from "next/image";
import Button from "@/components/Button";
import axios from "axios";
import { Router, useRouter } from "next/router";

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
  const router = useRouter();
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(title, writer, paragraphs, desa, kategori, link1, link2, link3, link4);
    if (!title) return alert("Judul artikel wajib diisi!");
    if (!writer) return alert("Nama penulis wajib diisi!");
    if (!paragraphs) return alert("Konten artikel wajib diisi!");
    if (!desa) return alert("Pilih desa yang terkait dengan isi artikel!");
    if (!kategori) return alert("Pilih kategori yang sesuai dengan isi artikel!");
    if (!selectedImage) return alert("Gambar artikel wajib diisi!");

    const formData = new FormData();
    formData.append("title", title);
    formData.append("paragraphs", JSON.stringify(paragraphs.split("\n")));
    formData.append("writer", writer);
    formData.append("desa", desa);
    formData.append("category", kategori);
    formData.append("links", JSON.stringify([link1, link2, link3, link4]));
    formData.append("image", imageFile);
    console.log(formData);
    if (imageFile.size > 1024 * 1024) {
      return alert("Ukuran maksimal file gambar adalah 1 MB");
    }
    console.log(imageFile);
    axios
      .post(process.env.NEXT_PUBLIC_API_URL + "/article", formData, {
        headers: {
          'Content-Type': "multipart/form-data"
        }
      })
      .then((res) => {
        console.log(res.data);
        alert("Artikel sukses diunggah dan akan menunggu verifikasi admin");
        router.push(kategori == "UMKM" ? "/umkm" : "/wisata-dan-budaya")
      })
      .catch((err) => {
        console.log(err.response.data);
        alert("Gagal mengunggah artikel");
      });
  };
  const labelClass = "flex flex-col w-full text-[20px] font-semibold gap-1";
  const inputClass = "outline outline-2 outline-green-2 font-normal px-2 py-1 rounded-[8px]";
  const [title, setTitle] = useState<string>("");
  const [writer, setWriter] = useState<string>("");
  const [paragraphs, setParagraphs] = useState<string>("");
  const [desa, setDesa] = useState<null | "Bayan" | "Senaru">(null);
  const [kategori, setKategori] = useState<null | "Wisata" | "UMKM">(null);
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [imageFile, setImageFile] = useState<any>(null);
  const [link1, setLink1] = useState<string>("");
  const [link2, setLink2] = useState<string>("");
  const [link3, setLink3] = useState<string>("");
  const [link4, setLink4] = useState<string>("");

  useEffect(() => {
    if (!localStorage.getItem("preview-article")) {
      router.push("/article/upload");
    } else {
      const previewArticle = JSON.parse(localStorage.getItem("preview-article") as string);
      setTitle(previewArticle.title);
      setWriter(previewArticle.writer);
      setParagraphs(previewArticle.paragpraphs.join("\n"));
      setDesa(previewArticle.desa);
      setKategori(previewArticle.category);
      setSelectedImage(previewArticle.image);
      setLink1(previewArticle.links[0]);
      setLink2(previewArticle.links[1]);
      setLink3(previewArticle.links[2]);
      setLink4(previewArticle.links[3]);
    }
  }, [router]);

  return (
    <main className="pt-[120px] lg:pt-[200px] pb-[120px] relative overflow-hidden min-h-screen">
      <SideDeco position={true} />
      <SideDeco position={false} />

      <section className="z-[1] flex flex-col justify-center items-center relative">
        <h1 className="text-green-1 font-bold text-[29px] md:text-[39px]">Ajukan Artikel Baru</h1>

        <form
          className="w-[90%] max-w-[700px] flex flex-col gap-4"
          onSubmit={(e) => handleSubmit(e)}
        >
          <label className={labelClass}>
            Judul Artikel
            <input
              type="text"
              className={inputClass}
              placeholder=""
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label className={labelClass}>
            Nama Penulis
            <input
              type="text"
              className={inputClass}
              placeholder=""
              value={writer}
              onChange={(e) => setWriter(e.target.value)}
            />
          </label>
          <label className={labelClass}>
            Konten Artikel
            {/* <input type="text" className={inputClass} placeholder=""/> */}
            <textarea
              className={inputClass + " min-h-[300px]"}
              value={paragraphs}
              onChange={(e) => setParagraphs(e.target.value)}
            ></textarea>
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
          <label className={labelClass + (selectedImage !== null ? " hidden" : "")}>
            Unggah Gambar
            <input
              type="file"
              className="hidden"
              accept="image/*"
              onChange={(e) => {
                // @ts-ignore
                const file = e?.target?.files[0];
                if (file) {
                  setSelectedImage(URL.createObjectURL(file));
                  setImageFile(file);
                }
              }}
            />
            <div className="text-[18px] flex justify-center items-center outline-dashed outline-green-2 outline-2 rounded-[8px] py-10 hover:bg-[#f2f2f2] cursor-pointer">
              Klik di sini untuk memilih gambar
            </div>
          </label>
          {selectedImage !== null && (
            <div className="flex flex-col gap-2">
              <label className={labelClass}>Unggah Gambar</label>
              <div className="flex gap-2">
                <img
                  className="w-[500px] aspect-[620/415]"
                  src={selectedImage}
                  alt="Uploaded photo"
                />
                <button
                  className="bg-red-500 hover:bg-red-700 text-white rounded-full self-start text-[18px] p-1 flex items-center"
                  onClick={() => setSelectedImage(null)}
                >
                  <MdClose />
                </button>
              </div>
            </div>
          )}
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
            type="button"
            ariaLabel="Submit"
            className="hover:bg-[#f0af06] !bg-[#e8b73c]"
            // disabled={!title || !paragraphs || !selectedImage || (!link1 && !link2 && !link3 && !link4) || !desa || !kategori}
            onClick={() => {
              if (
                !title ||
                !paragraphs ||
                !selectedImage ||
                (!link1 && !link2 && !link3 && !link4) ||
                !desa ||
                !kategori
              ) {
                return alert("Mohon lengkapi data artikel");
              }
              const previewArticle = {
                title,
                paragpraphs: paragraphs.split("\n"),
                image: selectedImage,
                writer,
                links: [link1, link2, link3, link4],
                desa,
                category: kategori,
                status: "Draft",
              };
              localStorage.setItem("preview-article", JSON.stringify(previewArticle));
              router.push("/article/preview");
            }}
          >
            Lihat Pratinjau
          </Button>
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
