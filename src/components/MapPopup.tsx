import Image, { StaticImageData } from "next/image";
import Gmap from "@/../public/Gmap.webp";

export default function MapPopup({
  name,
  link,
  image,
  kegiatans,
}: {
  name: string;
  link?: string;
  image?: string;
  kegiatans?: string[];
}) {
  return (
    <div className="md:p-3 rounded-[15px] flex flex-col justify-center items-center p-2 !w-fit !translate-x-0 font-jakarta">
      <h1 className="text-[20px] font-jakarta font-semibold w-[250px] md:w-[300px]">{name}</h1>
      {image && (
        <div className="w-[250px] md:w-[300px] aspect-[5/3] relative flex justify-center items-center overflow-hidden mt-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            // src={(process.env.NEXT_PUBLIC_ENV == "dev" ? "http://localhost:3000" : "https://lembaran-bayan.id") + image}
            src={image}
            alt={"Foto " + name}
            className="z-[1] relative object-cover w-full h-full"
          />
          <div className="bg-gradient-to-br from-green-2 to-yellow-1 animate-pulse w-full h-full absolute top-0 left-0" />
        </div>
      )}
      {link && (
        <a
          href={link}
          target="_blank"
          rel="norel noreferrer"
          className="!text-black"
        >
          <button className="font-jakarta text-[18px] flex items-center justify-center px-4 py-2 mt-2 !bg-white shadow-[0_4px_4px_rgba(0,0,0,.5)] rounded-[8px] gap-2 !w-fit hover:!bg-[#f2f2f2] transition mb-1">
            <Image
              src={Gmap}
              alt="Gmaps"
              className="w-[28px]"
            />
            Google Maps
          </button>
        </a>
      )}
      {kegiatans && <h1 className="font-jakarta w-full mt-2 font-semibold text-[17px]">Kegiatan:</h1>}
      <ul className={kegiatans ? "flex flex-col justify-start w-full !list-disc pl-5 pt-1 text-[15px]" : "hidden"}>
        {kegiatans?.map((kegiatan, index) => {
          return (
            <li
              key={index}
              className="!w-full"
            >
              {kegiatan}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
