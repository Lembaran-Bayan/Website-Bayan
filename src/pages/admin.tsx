import Button from "@/components/Button";
import SideDeco from "@/components/SideDeco";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { MdCheckBoxOutlineBlank } from "react-icons/md";

type Article = {
  title: string;
  status: string;
  writer: string;
  category: string;
  _id: string;
  image: string;
  paragraphs: string[];
  links: string[];
  desa: string;
};

export default function AdminPage() {
  const [articles, setArticles] = useState<any>();
  const [refetchTrigger, setRefetchTrigger] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");

  const labelClass = "flex flex-col w-full text-[20px] font-semibold gap-1";
  const inputClass = "outline outline-2 outline-green-2 font-normal px-2 py-1 rounded-[8px]";

  const refetch = () => {
    setRefetchTrigger(!refetchTrigger);
  };

  useEffect(() => {
    localStorage.removeItem("preview-article");
    if (sessionStorage.getItem("authToken")) {
      axios
        .post(process.env.NEXT_PUBLIC_API_URL + "/validate-token", { token: sessionStorage.getItem("authToken") })
        .then((res) => {
          // console.log(res);
          if (res.data.valid) {
            setIsLoggedIn(true);
          }
        })
        .catch((err) => {
          console.log(err?.message);
        });
    }
    if (isLoggedIn) {
      axios
        .get(process.env.NEXT_PUBLIC_API_URL + "/article")
        .then((res) => {
          setArticles(res.data);
        })
        .catch((err) => {
          console.log(err?.message);
          alert("Gagal mengambil data");
        });
    }
  }, [refetchTrigger, isLoggedIn]);

  return !isLoggedIn ? (
    <main className="relative min-h-screen overflow-x-hidden flex flex-col justify-center items-center pt-[80px] lg:pt-[100px] pb-[120px] w-full">
      <SideDeco position={true} />
      <SideDeco position={false} />{" "}
      <h1 className="text-green-1 font-bold text-[29px] md:text-[39px] text-center mb-5">Admin</h1>
      <form
        className="w-[90%] max-w-[500px]"
        onSubmit={(e) => {
          e.preventDefault();
          axios
            .post(process.env.NEXT_PUBLIC_API_URL + "/login", { password })
            .then((res) => {
              // console.log(res);
              alert(res.data.message);
              sessionStorage.setItem("authToken", res.data.token);
              setIsLoggedIn(true);
            })
            .catch((err) => {
              // console.log(err);
              alert(err?.response?.data?.message);
            });
        }}
      >
        <label className={labelClass}>
          Masukkan Password
          <input
            type="password"
            className={inputClass}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <Button
          ariaLabel="Log In"
          className="w-full mt-4"
          type="submit"
        >
          Masuk
        </Button>
      </form>
    </main>
  ) : (
    <main className="relative min-h-screen overflow-x-hidden flex justify-center pt-[80px] lg:pt-[100px] pb-[120px] w-full">
      <SideDeco position={true} />
      <SideDeco position={false} />
      <section className="w-[90%] max-w-[1500px]">
        <h1 className="text-green-1 font-bold text-[29px] md:text-[39px] text-center">Admin</h1>

        <div className="w-[90%] flex flex-col justify-center items-center mt-10 overflow-auto mx-auto">
          <table className="table-auto min-w-[700px]">
            <thead className="bg-green-1 text-white">
              <tr>
                <th className="text-center p-3 rounded-l-[10px]">Judul</th>
                <th className="text-center p-3">Penulis</th>
                <th className="text-center p-3">Kategori</th>
                <th className="text-center p-3">Status</th>
                <th className="text-center p-3 rounded-r-[10px] w-[200px]">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {articles?.map((article: any) => (
                <ArticleTableRow
                  article={article}
                  key={article._id}
                  refetch={refetch}
                />
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}

function ArticleTableRow({ article, refetch }: { article: Article; refetch: () => void }) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  return (
    <tr className="hover:bg-gray-100">
      <td className="text-left p-4 font-semibold rounded-l-[10px] max-w-[60ch]">{article.title}</td>
      <td className="text-center p-4 font-semibold">{article.writer}</td>
      <td className="text-center p-4 font-semibold">{article.category}</td>
      <td
        className={
          "text-center py-4 font-semibold " + (article.status === "Verified" ? "text-green-600" : "text-red-600")
        }
      >
        {article.status}
      </td>
      <td className="flex flex-col justify-center items-center py-4 w-full gap-1 rounded-r-[10px] overflow-x-hidden px-2">
        <div className="flex justify-center items-center gap-1 w-full">
          <button
            className="bg-green-2 text-white px-2 py-1 w-full rounded-full hover:bg-green-2/90 transition disabled:cursor-not-allowed disabled:animate-pulse"
            title="Verifikasi"
            disabled={isLoading}
            onClick={() => {
              setIsLoading(true);
              axios
                .patch(process.env.NEXT_PUBLIC_API_URL + "/article/" + article._id)
                .then(() => {
                  if (article.status == "Draft") {
                    alert(`article dengan id ${article._id} berhasil diverifikasi`);
                  } else {
                    alert(`article dengan id ${article._id} dibatalkan verifikasinya`);
                  }
                  refetch();
                })
                .catch((err) => {
                  console.log(err);
                  alert("Gagal mengubah status artikel");
                })
                .finally(() => {
                  setIsLoading(false);
                });
            }}
          >
            {article?.status == "Draft" ? "Verifikasi" : "Batalkan"}
          </button>
          <button
            className="bg-red-500 text-white px-2 py-1 w-full rounded-full hover:bg-red-500/90 transition disabled:cursor-not-allowed disabled:animate-pulse"
            title="Verifikasi"
            disabled={isLoading}
            onClick={async () => {
              if (isLoading) return;
              if (window.confirm(`Apakah yakin ingin menghapus artikel \"${article.title}\"?`)) {
                setIsLoading(true);
                try {
                  await axios.delete(process.env.NEXT_PUBLIC_API_URL + "/article/" + article._id);
                  alert("Berhasil menghapus artikel");
                  refetch();
                } catch (err) {
                  console.log(err);
                  alert("Gagal menghapus artikel");
                } finally {
                  setIsLoading(false);
                }
              }
            }}
          >
            Hapus
          </button>
        </div>
        <Link href={"/article/" + article._id} className="w-full">
          <button
            className="bg-yellow-500 text-white px-2 py-1 w-full rounded-full hover:bg-yellow-500/90 transition"
            title="Verifikasi"
          >
            Lihat
          </button>
        </Link>
      </td>
    </tr>
  );
}
