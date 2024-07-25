import Button from "@/components/Button";
import SideDeco from "@/components/SideDeco";
import { useRouter } from "next/router";
import { MdInsertLink } from "react-icons/md";

function ExternalLink() {
  return (
    <button className="bg-white rounded-[8px] shadow-[0_3px_4px_rgba(0,0,0,.4)] flex gap-3 items-center px-3 py-2 font-poppins hover:bg-[#F0F0F0] transition-colors active:bg-[#DEDEDE]">
      <MdInsertLink className="text-[30px]" />
      <span>Sosial Media</span>
    </button>
  );
}

export default function ArticlePage() {
  const router = useRouter();

  return (
    <main className="pt-[200px] pb-[120px] relative overflow-hidden">
      <SideDeco position={true} />
      <SideDeco position={false} />
      <section className="flex flex-col justify-center items-center gap-8 z-[1] relative">
        <div className="flex justify-center items-center font-poppins px-10 py-2 bg-green-1 rounded-full text-white">
          Nama Desa
        </div>

        <div className="w-[90%] max-w-[620px] aspect-[620/415] bg-gradient-to-br from-green-2 from-20% to-yellow-1 rounded-[30px]" />

        <div className="flex flex-col justify-center items-center">
          <h1 className="text-green-1 font-bold text-[29px] md:text-[39px]">Artikel Nomor {router.query.id}</h1>
          <h2 className="text-[16px] md:text-[21px]">Ditulis oleh: Penulis {router.query.id}</h2>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center mt-12 z-[1] relative">
        <p className="text-justify w-[90%] max-w-[844px] text-[22px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat.
        </p>

        <div className="mt-[50px] flex gap-5">
          <ExternalLink />
          <ExternalLink />
          <ExternalLink />
          <ExternalLink />
        </div>

        <Button ariaLabel="Back Button" className="mt-[60px]">Kembali</Button>
      </section>
    </main>
  );
}
