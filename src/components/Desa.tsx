import { useState } from "react";
import SideDeco from "./SideDeco";

export default function Desa() {
  const [activeVillage, setActiveVillage] = useState<null | "bayan" | "senaru">(null);

  return (
    <main className="//min-h-screen bg-white relative overflow-x-hidden flex justify-center items-center font-jakarta pb-[100px]">
      <section className="z-[1] w-full flex flex-col justify-center items-center">
        <h1 className="text-[31px] pb-[18px] text-green-1">
          Kenali Desa <strong>Bayan</strong> dan Desa <strong>Senaru</strong>
        </h1>

        <div className="flex w-fit px-[200px] justify-center items-center overflow-visible gap-10 py-[150px] bg-gradient-to-br from-green-2 to-yellow-1 rounded-[25px]">
          <button
            onClick={() => setActiveVillage("senaru")}
            className={
              "bg-green-1 px-4 py-2 text-white text-[24px] rounded-[10px] " +
              (activeVillage === "senaru" ? "outline outline-green-1 outline-offset-4" : "")
            }
          >
            Senaru
          </button>
          <button
            onClick={() => setActiveVillage("bayan")}
            className={
              "bg-green-1 px-4 py-2 text-white text-[24px] rounded-[10px] " +
              (activeVillage === "bayan" ? "outline outline-green-1 outline-offset-4" : "")
            }
          >
            Bayan
          </button>
        </div>

        <div className="mt-[30px] w-[90%] max-w-[730px]">
          <h2 className="text-[26px] font-bold text-center mb-[15px] font-poppins text-green-1">Kecamatan Bayan</h2>
          <p className="text-[19px] text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
      </section>
      <SideDeco position={true} />
      <SideDeco position={false} />
    </main>
  );
}
