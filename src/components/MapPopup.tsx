import Image, { StaticImageData } from "next/image";
import Gmap from "@/../public/Gmap.webp";

export default function MapPopup({ name, link, image }: { name: string; link?: string; image: StaticImageData }) {
  return (
    <div className="bg-white/70 md:p-3 rounded-[15px] flex flex-col justify-center items-center outline outline-white p-1">
      <h1 className="text-[20px] font-jakarta font-semibold mb-2">{name}</h1>
      <div className="w-[250px] md:w-[300px] aspect-[5/3] relative">
        <Image
          src={image}
          alt={"Foto " + name}
          className="z-[1] relative"
        />
        <div className="bg-gradient-to-br from-green-2 to-yellow-1 animate-pulse w-full h-full absolute top-0 left-0" />
      </div>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="norel noreferrer"
          className="!text-black"
        >
          <button className="font-jakarta text-[18px] flex items-center justify-center px-4 py-2 mt-2 !bg-white shadow-[0_4px_4px_rgba(0,0,0,.5)] rounded-[8px] gap-2 !w-fit hover:!bg-[#f2f2f2] transition">
            <Image
              src={Gmap}
              alt="Gmaps"
              className="w-[28px]"
            />
            Google Maps
          </button>
        </a>
      )}
    </div>
  );
}
