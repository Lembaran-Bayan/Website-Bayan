import { MdOutlineSlowMotionVideo } from "react-icons/md";

export default function Film() {
  return (
    <main className="min-h-screen bg-white flex flex-col justify-center items-center">
      <div className="flex items-center justify-center gap-[11px]">
        <h1 className="text-green-1 font-semibold text-[30px]">Film Dokumenter</h1>
        <MdOutlineSlowMotionVideo className="text-[34px]" />
      </div>

      <p className="text-[18px] mt-5">Simak video profil Desa Senaru dan Desa Bayan berikut ini: </p>

      <div className="w-[700px] h-[368px] bg-gradient-to-br from-green-2 from-30% to-yellow-1 rounded-[25px] mt-[60px] animate-pulse" />
    </main>
  );
}
