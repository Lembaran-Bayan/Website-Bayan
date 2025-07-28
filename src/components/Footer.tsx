import Image from "next/image";
import SideDeco from "./SideDeco";

interface Props {
  className?: string;
}


export default function Footer({className}: Props) {
  return (
    <main>
      <section className={"pt-5 sm:pt-10 pb-[55px] flex flex-col justify-center items-center relative overflow-hidden " + className}>
        <h1
          data-aos="fade-up"
          className="text-center text-[24px] sm:text-[27px]"
        >
          Didukung oleh:
        </h1>

        {/* Single Sponsor Slideshow Strip */}
        <div className="w-full mt-[22px] overflow-hidden bg-white py-6 shadow-lg">
          <div 
            className="flex items-center gap-12"
            style={{
              animation: 'slideLeftToRight 30s linear infinite',
              width: 'max-content'
            }}
          >
            {/* 2025 Year Badge */}
            <div className="flex-shrink-0 bg-blue-600 text-white px-4 py-2 rounded-full font-bold text-sm">
              2025
            </div>

            {/* Sponsor 2025 */}
            {/* Nata Bumi Sinergi - XXL */}
            <div className="w-[300px] h-[180px] flex items-center justify-center flex-shrink-0">
              <img
                src="/sponsors/Nata Bumi Sinergi - Logo.png"
                alt="Nata Bumi Sinergi"
                className="max-w-full max-h-full w-auto h-auto object-contain"
              />
            </div>
            
            {/* PT Tatalogam Lestari - M */}
            <div className="w-[120px] h-[72px] flex items-center justify-center flex-shrink-0">
              <img
                src="/sponsors/PT Tatalogam Lestari.jpg"
                alt="PT Tatalogam Lestari"
                className="max-w-full max-h-full w-auto h-auto object-contain"
              />
            </div>

            {/* Year Separator */}
            <div className="flex-shrink-0 w-px h-16 bg-gray-300 mx-4"></div>
            
            {/* 2024 Year Badge */}
            <div className="flex-shrink-0 bg-gray-500 text-white px-4 py-2 rounded-full font-bold text-sm">
              2024
            </div>

            {/* Sponsor 2024 */}
            {/* Pupuk Kaltim - XXL */}
            <a
              href="https://www.pupukkaltim.com/id/home"
              target="_blank"
              rel="noref noreferrer"
              className="w-[300px] h-[180px] flex items-center justify-center flex-shrink-0"
            >
              <img
                src="/sponsors/PupukKaltim.svg"
                alt="Pupuk Kaltim"
                className="max-w-full max-h-full w-auto h-auto object-contain"
              />
            </a>
            
            {/* EveryPrint - XL */}
            <a
              href="https://www.everyprint.co.id"
              target="_blank"
              rel="noref noreferrer"
              className="w-[240px] h-[144px] flex items-center justify-center flex-shrink-0"
            >
              <img
                src="/sponsors/EveryPrint.svg"
                alt="EveryPrint"
                className="max-w-full max-h-full w-auto h-auto object-contain"
              />
            </a>
            
            {/* Rentokill Initial - M */}
            <a
              href="https://www.rentokil-initial.com"
              target="_blank"
              rel="noref noreferrer"
              className="w-[120px] h-[72px] flex items-center justify-center flex-shrink-0"
            >
              <img
                src="/sponsors/RentoKillInitial.svg"
                alt="Rentokill Initial"
                className="max-w-full max-h-full w-auto h-auto object-contain"
              />
            </a>
            
            {/* Nasa - S */}
            <a
              href="https://www.badaklng.com"
              target="_blank"
              rel="noref noreferrer"
              className="w-[90px] h-[54px] flex items-center justify-center flex-shrink-0"
            >
              <img
                src="/sponsors/Nasa.svg"
                alt="Nasa"
                className="max-w-full max-h-full w-auto h-auto object-contain"
              />
            </a>

            {/* Multiple duplicates for seamless continuous loop */}
            {/* Set 2 */}
            <div className="flex-shrink-0 bg-blue-600 text-white px-4 py-2 rounded-full font-bold text-sm">
              2025
            </div>
            <div className="w-[300px] h-[180px] flex items-center justify-center flex-shrink-0">
              <img src="/Nata Bumi Sinergi - Logo.png" alt="Nata Bumi Sinergi" className="max-w-full max-h-full w-auto h-auto object-contain" />
            </div>
            <div className="w-[120px] h-[72px] flex items-center justify-center flex-shrink-0">
              <img src="/PT Tatalogam Lestari.jpg" alt="PT Tatalogam Lestari" className="max-w-full max-h-full w-auto h-auto object-contain" />
            </div>
            <div className="flex-shrink-0 w-px h-16 bg-gray-300 mx-4"></div>
            <div className="flex-shrink-0 bg-gray-500 text-white px-4 py-2 rounded-full font-bold text-sm">2024</div>
            <a href="https://www.pupukkaltim.com/id/home" target="_blank" rel="noref noreferrer" className="w-[300px] h-[180px] flex items-center justify-center flex-shrink-0">
              <img src="/PupukKaltim.svg" alt="Pupuk Kaltim" className="max-w-full max-h-full w-auto h-auto object-contain" />
            </a>
            <a href="https://www.everyprint.co.id" target="_blank" rel="noref noreferrer" className="w-[240px] h-[144px] flex items-center justify-center flex-shrink-0">
              <img src="/EveryPrint.svg" alt="EveryPrint" className="max-w-full max-h-full w-auto h-auto object-contain" />
            </a>
            <a href="https://www.rentokil-initial.com" target="_blank" rel="noref noreferrer" className="w-[120px] h-[72px] flex items-center justify-center flex-shrink-0">
              <img src="/RentoKillInitial.svg" alt="Rentokill Initial" className="max-w-full max-h-full w-auto h-auto object-contain" />
            </a>
            <a href="https://www.badaklng.com" target="_blank" rel="noref noreferrer" className="w-[90px] h-[54px] flex items-center justify-center flex-shrink-0">
              <img src="/Nasa.svg" alt="Nasa" className="max-w-full max-h-full w-auto h-auto object-contain" />
            </a>

            {/* Set 3 */}
            <div className="flex-shrink-0 bg-blue-600 text-white px-4 py-2 rounded-full font-bold text-sm">
              2025
            </div>
            <div className="w-[300px] h-[180px] flex items-center justify-center flex-shrink-0">
              <img src="/Nata Bumi Sinergi - Logo.png" alt="Nata Bumi Sinergi" className="max-w-full max-h-full w-auto h-auto object-contain" />
            </div>
            <div className="w-[120px] h-[72px] flex items-center justify-center flex-shrink-0">
              <img src="/PT Tatalogam Lestari.jpg" alt="PT Tatalogam Lestari" className="max-w-full max-h-full w-auto h-auto object-contain" />
            </div>
            <div className="flex-shrink-0 w-px h-16 bg-gray-300 mx-4"></div>
            <div className="flex-shrink-0 bg-gray-500 text-white px-4 py-2 rounded-full font-bold text-sm">2024</div>
            <a href="https://www.pupukkaltim.com/id/home" target="_blank" rel="noref noreferrer" className="w-[300px] h-[180px] flex items-center justify-center flex-shrink-0">
              <img src="/PupukKaltim.svg" alt="Pupuk Kaltim" className="max-w-full max-h-full w-auto h-auto object-contain" />
            </a>
            <a href="https://www.everyprint.co.id" target="_blank" rel="noref noreferrer" className="w-[240px] h-[144px] flex items-center justify-center flex-shrink-0">
              <img src="/EveryPrint.svg" alt="EveryPrint" className="max-w-full max-h-full w-auto h-auto object-contain" />
            </a>
            <a href="https://www.rentokil-initial.com" target="_blank" rel="noref noreferrer" className="w-[120px] h-[72px] flex items-center justify-center flex-shrink-0">
              <img src="/RentoKillInitial.svg" alt="Rentokill Initial" className="max-w-full max-h-full w-auto h-auto object-contain" />
            </a>
            <a href="https://www.badaklng.com" target="_blank" rel="noref noreferrer" className="w-[90px] h-[54px] flex items-center justify-center flex-shrink-0">
              <img src="/Nasa.svg" alt="Nasa" className="max-w-full max-h-full w-auto h-auto object-contain" />
            </a>
          </div>
        </div>

        <style jsx global>{`
          @keyframes slideLeftToRight {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-33.33%);
            }
          }
        `}</style>
        <SideDeco position={true} />
        <SideDeco position={false} />
      </section>

      <section className="bg-green-1 py-[20px] text-white px-[5%]">
        <h1 className="text-center">2024 &copy; KKN PPM UGM - Lembaran Bayan</h1>
      </section>
    </main>
  );
}
