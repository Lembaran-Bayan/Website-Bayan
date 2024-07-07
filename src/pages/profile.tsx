import Image from "next/image";
import ComingSoon from "./coming-soon";
import KluMap from "@/../public/KluMap.svg";
import SideDeco from "@/components/SideDeco";
import Footer from "@/components/Footer";

export default function ProfilePage() {
  return (
    <main className="bg-white min-h-screen">
      <section className="z-[1] w-full flex flex-col justify-center items-center relative overflow-x-hidden pt-[160px] px-[5%]">
        <h1 data-aos="fade-right" className="text-[26px] md:text-[31px] pb-[18px] text-green-1 text-center">
          Kenali Desa <strong>Bayan</strong> dan Desa <strong>Senaru</strong>
        </h1>
        <div data-aos="fade-left" data-aos-delay="200">
          <Image
            src={KluMap}
            alt="Peta Kecamatan Lombok Utara"
          />
        </div>

        <div className="mt-[30px] w-[90%] max-w-[730px]">
          <h2 data-aos="fade-right" data-aos-delay="400" data-aos-offset="-200" className="text-[22px] md:text-[26px] font-bold text-center mb-[15px] font-poppins text-green-1">Kecamatan Bayan</h2>
          <p data-aos="fade-left" data-aos-delay="600" data-aos-offset="-200" className="text-[16px] md:text-[19px] text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
            qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <SideDeco position={true} />
        <SideDeco position={false} />
      </section>

      <section className="flex flex-col justify-center items-center relative overflow-x-hidden pt-20">
        <h1 data-aos="fade-right" className="text-[26px] md:text-[31px] text-green-1 text-center">
          <strong>Misi</strong> Kecamatan <strong>Bayan</strong>
        </h1>
        <p data-aos="fade-left" data-aos-delay="200" className="text-[20px] md:text-[26px] text-center mt-[30px] w-[90%] max-w-[730px]">
        “Lorem ipsum dolor sit amet. consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”
        </p>
        <SideDeco position={true} />
        <SideDeco position={false} />
      </section>

      <section className="flex flex-col justify-center items-center relative overflow-x-hidden pt-20 pb-[50px] md:pb-[150px]">
        <h1 data-aos="fade-right" data-aos-delay="400" className="text-[26px] md:text-[31px] text-green-1 text-center">
          <strong>Visi</strong> Kecamatan <strong>Bayan</strong>
        </h1>
        <p data-aos="fade-left" data-aos-delay="600" className="text-[20px] md:text-[26px] text-center mt-[30px] w-[90%] max-w-[730px]">
        “Lorem ipsum dolor sit amet. consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”
        </p>
        <SideDeco position={true} />
        <SideDeco position={false} />
      </section>
      <Footer />
    </main>
  );
}
