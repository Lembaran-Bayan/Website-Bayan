import SideDeco from "@/components/SideDeco";
import axios from "axios";
import { useEffect, useState } from "react";
import { MdCheckBoxOutlineBlank } from "react-icons/md";

export default function AdminPage() {
  const [articles, setArticles] = useState<any>();

  useEffect(() => {
    axios
      .get(process.env.NEXT_PUBLIC_API_URL + "/article")
      .then((res) => {
        setArticles(res.data);
      })
      .catch((err) => {
        console.log(err?.message);
        alert("Gagal mengambil data");
      });
  }, []);
  return (
    <main className="relative min-h-screen overflow-x-hidden flex justify-center pt-[80px] lg:pt-[100px] pb-[120px] w-full">
      <SideDeco position={true} />
      <SideDeco position={false} />
      <section className="w-[90%] max-w-[1500px]">
        <h1 className="text-green-1 font-bold text-[29px] md:text-[39px] text-center">Admin</h1>

        <div className="w-full flex flex-col justify-center items-center mt-10">
          <table className="table-auto w-full">
            <thead className="bg-green-1 text-white">
              <tr>
                <th className="text-center py-3 rounded-l-[10px]">Judul</th>
                <th className="text-center py-3">Penulis</th>
                <th className="text-center py-3">Kategori</th>
                <th className="text-center py-3">Status</th>
                <th className="text-center py-3 rounded-r-[10px] w-[200px]">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {articles?.map((article: any, index: number) => (
                <tr
                  key={index}
                  className="hover:bg-gray-100"
                >
                  <td className="text-left px-4 py-4 font-semibold rounded-l-[10px]">{article.title}</td>
                  <td className="text-center py-4 font-semibold">{article.writer}</td>
                  <td className="text-center py-4 font-semibold">{article.category}</td>
                  <td
                    className={
                      "text-center py-4 font-semibold " +
                      (article.status === "Verified" ? "text-green-600" : "text-red-600")
                    }
                  >
                    {article.status}
                  </td>
                  <td className="flex flex-col justify-center items-center py-4 w-full gap-1 rounded-r-[10px] overflow-x-hidden px-2">
                    <div className="flex justify-center items-center gap-1 w-full">
                      <button
                        className="bg-green-2 text-white px-2 py-1 w-full rounded-full hover:bg-green-2/90 transition"
                        title="Verifikasi"
                      >
                        {article?.status == "Draft" ? "Verifikasi" : "Batalkan"}
                      </button>
                      <button
                        className="bg-red-500 text-white px-2 py-1 w-full rounded-full hover:bg-red-500/90 transition"
                        title="Verifikasi"
                      >
                        Hapus
                      </button>
                    </div>
                    <button
                        className="bg-yellow-500 text-white px-2 py-1 w-full rounded-full hover:bg-yellow-500/90 transition"
                        title="Verifikasi"
                      >
                        Lihat
                      </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
