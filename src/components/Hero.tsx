import Image from "next/image";
import Rinjani from "@/../public/images/backgrounds/Rinjani.webp";

export default function Hero() {
  return (
    <main className="min-h-screen //bg-[url('/Rinjani.webp')] bg-cover bg-center flex justify-center items-center relative overflow-hidden">
      <div className="absolute w-full h-full">
        <Image
          priority
          src={Rinjani}
          alt=""
          className="object-cover w-full h-full"
        />
        <div className="bg-gradient-to-b from-black/20 from-10% via-transparent to-white/0 w-full h-full absolute z-[1] top-0 left-0" />
      </div>
      <div className="text-center text-[24px] md:text-[28px] text-shadow-1 text-white font-medium p-5 sm:p-0 z-10 relative">
        <h2 data-aos="fade-up">Memulai Lembaran</h2>
        <h2
          data-aos="fade-up"
          data-aos-delay="400"
          className="text-[30px] md:text-[40px]"
        >
          Dengan Keindahan <span className="font-bold">Bayan</span>
        </h2>
      </div>

      {/* Sponsor Section in Hero */}
      <div className="absolute bottom-8 left-0 right-0 z-10">
        <div className="text-center mb-4">
          <p className="text-white text-shadow-1 text-sm font-medium">Didukung oleh:</p>
        </div>
        <div className="overflow-hidden bg-transparent py-4">
          <div 
            className="flex items-center gap-6"
            style={{
              animation: 'heroSlide 25s linear infinite',
              width: 'max-content'
            }}
          >
            {/* 2025 Year Badge */}
            <div className="flex-shrink-0 bg-blue-600/90 backdrop-blur-sm text-white px-3 py-1 rounded-full font-bold text-xs shadow-md">
              2025
            </div>

            {/* 2025 Sponsors */}
            <div className="w-[200px] h-[120px] flex items-center justify-center flex-shrink-0 bg-white/90 backdrop-blur-sm rounded-lg shadow-md">
              <img
                src="/sponsors/Nata Bumi Sinergi - Logo.png"
                alt="Nata Bumi Sinergi"
                className="max-w-full max-h-full w-auto h-auto object-contain p-2"
              />
            </div>
            
            <div className="w-[80px] h-[48px] flex items-center justify-center flex-shrink-0 bg-white/90 backdrop-blur-sm rounded-lg shadow-md">
              <img
                src="/sponsors/PT Tatalogam Lestari.jpg"
                alt="PT Tatalogam Lestari"
                className="max-w-full max-h-full w-auto h-auto object-contain p-1"
              />
            </div>

            {/* Year Separator */}
            <div className="flex-shrink-0 w-px h-12 bg-white/40 mx-2"></div>
            
            {/* 2024 Year Badge */}
            <div className="flex-shrink-0 bg-gray-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full font-bold text-xs shadow-md">
              2024
            </div>

            {/* 2024 Sponsors */}
            <a
              href="https://www.pupukkaltim.com/id/home"
              target="_blank"
              rel="noref noreferrer"
              className="w-[200px] h-[120px] flex items-center justify-center flex-shrink-0 bg-white/90 backdrop-blur-sm rounded-lg shadow-md hover:bg-white/95 transition-all"
            >
              <img
                src="/sponsors/PupukKaltim.svg"
                alt="Pupuk Kaltim"
                className="max-w-full max-h-full w-auto h-auto object-contain p-2"
              />
            </a>
            
            <a
              href="https://www.everyprint.co.id"
              target="_blank"
              rel="noref noreferrer"
              className="w-[160px] h-[96px] flex items-center justify-center flex-shrink-0 bg-white/90 backdrop-blur-sm rounded-lg shadow-md hover:bg-white/95 transition-all"
            >
              <img
                src="/sponsors/EveryPrint.svg"
                alt="EveryPrint"
                className="max-w-full max-h-full w-auto h-auto object-contain p-2"
              />
            </a>
            
            <a
              href="https://www.rentokil-initial.com"
              target="_blank"
              rel="noref noreferrer"
              className="w-[80px] h-[48px] flex items-center justify-center flex-shrink-0 bg-white/90 backdrop-blur-sm rounded-lg shadow-md hover:bg-white/95 transition-all"
            >
              <img
                src="/sponsors/RentoKillInitial.svg"
                alt="Rentokill Initial"
                className="max-w-full max-h-full w-auto h-auto object-contain p-1"
              />
            </a>
            
            <a
              href="https://www.badaklng.com"
              target="_blank"
              rel="noref noreferrer"
              className="w-[60px] h-[36px] flex items-center justify-center flex-shrink-0 bg-white/90 backdrop-blur-sm rounded-lg shadow-md hover:bg-white/95 transition-all"
            >
              <img
                src="/sponsors/Nasa.svg"
                alt="Nasa"
                className="max-w-full max-h-full w-auto h-auto object-contain p-1"
              />
            </a>

            {/* End separator before loop */}
            <div className="flex-shrink-0 w-px h-12 bg-white/40 mx-2"></div>

            {/* Duplicates for seamless loop */}
            {/* 2025 Year Badge - Duplicate */}
            <div className="flex-shrink-0 bg-blue-600/90 backdrop-blur-sm text-white px-3 py-1 rounded-full font-bold text-xs shadow-md">
              2025
            </div>
            
            <div className="w-[200px] h-[120px] flex items-center justify-center flex-shrink-0 bg-white/90 backdrop-blur-sm rounded-lg shadow-md">
              <img src="/sponsors/Nata Bumi Sinergi - Logo.png" alt="Nata Bumi Sinergi" className="max-w-full max-h-full w-auto h-auto object-contain p-2" />
            </div>
            <div className="w-[80px] h-[48px] flex items-center justify-center flex-shrink-0 bg-white/90 backdrop-blur-sm rounded-lg shadow-md">
              <img src="/sponsors/PT Tatalogam Lestari.jpg" alt="PT Tatalogam Lestari" className="max-w-full max-h-full w-auto h-auto object-contain p-1" />
            </div>
            
            {/* Year Separator - Duplicate */}
            <div className="flex-shrink-0 w-px h-12 bg-white/40 mx-2"></div>
            
            {/* 2024 Year Badge - Duplicate */}
            <div className="flex-shrink-0 bg-gray-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full font-bold text-xs shadow-md">
              2024
            </div>
            
            <a href="https://www.pupukkaltim.com/id/home" target="_blank" rel="noref noreferrer" className="w-[200px] h-[120px] flex items-center justify-center flex-shrink-0 bg-white/90 backdrop-blur-sm rounded-lg shadow-md hover:bg-white/95 transition-all">
              <img src="/sponsors/PupukKaltim.svg" alt="Pupuk Kaltim" className="max-w-full max-h-full w-auto h-auto object-contain p-2" />
            </a>
            <a href="https://www.everyprint.co.id" target="_blank" rel="noref noreferrer" className="w-[160px] h-[96px] flex items-center justify-center flex-shrink-0 bg-white/90 backdrop-blur-sm rounded-lg shadow-md hover:bg-white/95 transition-all">
              <img src="/sponsors/EveryPrint.svg" alt="EveryPrint" className="max-w-full max-h-full w-auto h-auto object-contain p-2" />
            </a>
            <a href="https://www.rentokil-initial.com" target="_blank" rel="noref noreferrer" className="w-[80px] h-[48px] flex items-center justify-center flex-shrink-0 bg-white/90 backdrop-blur-sm rounded-lg shadow-md hover:bg-white/95 transition-all">
              <img src="/sponsors/RentoKillInitial.svg" alt="Rentokill Initial" className="max-w-full max-h-full w-auto h-auto object-contain p-1" />
            </a>
            <a href="https://www.badaklng.com" target="_blank" rel="noref noreferrer" className="w-[60px] h-[36px] flex items-center justify-center flex-shrink-0 bg-white/90 backdrop-blur-sm rounded-lg shadow-md hover:bg-white/95 transition-all">
              <img src="/sponsors/Nasa.svg" alt="Nasa" className="max-w-full max-h-full w-auto h-auto object-contain p-1" />
            </a>

            {/* End separator before loop - Duplicate */}
            <div className="flex-shrink-0 w-px h-12 bg-white/40 mx-2"></div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes heroSlide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </main>
  );
}
