import PupukKaltim from "@/../public/PupukKaltim.svg";
import EveryPrint from "@/../public/EveryPrint.svg";
import RentokillInitial from "@/../public/RentoKillInitial.svg";
import Nasa from "@/../public/Nasa.svg";
import Image from "next/image";
import SideDeco from "./SideDeco";

export default function Footer() {
  return (
    <main className="pt-10 pb-[80px] flex flex-col justify-center items-center relative overflow-hidden">
      <h1
        data-aos="fade-up"
        className="text-center text-[24px] sm:text-[27px]"
      >
        Didukung oleh:
      </h1>

      <section
        data-aos="fade-up"
        data-aos-delay="600"
        data-aos-offset="-15"
        className="py-5 px-3 md:px-20 bg-white shadow-[0_8px_7px_rgba(0,0,0,.5)] w-[90%] rounded-[15px] max-w-[965px] flex justify-center gap-4 mt-[22px] flex-wrap"
      >
        <a
          href="https://www.pupukkaltim.com/id/home"
          target="_blank"
          rel="noref noreferrer"
        >
          <Image
            src={PupukKaltim}
            alt="Pupuk Kaltim"
          />
        </a>
        <a
          href="https://www.everyprint.co.id"
          target="_blank"
          rel="noref noreferrer"
        >
          <Image
            src={EveryPrint}
            alt="EveryPrint"
          />
        </a>
        <a
          href="https://www.rentokil-initial.com"
          target="_blank"
          rel="noref noreferrer"
        >
          <Image
            src={RentokillInitial}
            alt="Rentokill Initial"
          />
        </a>
        <a
          href="https://www.badaklng.com"
          target="_blank"
          rel="noref noreferrer"
        >
          <Image
            src={Nasa}
            alt="Nasa"
          />
        </a>
      </section>
      <SideDeco position={true} />
      <SideDeco position={false} />
    </main>
  );
}
