import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 900,
    });
  }, []);

  return (
    <main className="font-jakarta">
      <Head>
        <link
          rel="icon"
          href="/Logo.png"
        />
        <link
          rel="preload"
          href="/Rinjani.webp"
          as="image"
        ></link>
        <link rel="preload" href="/Budaya.webp" as="image"></link>
        <link rel="preload" href="/Umkm 2.webp" as="image"></link>
        <link rel="preload" href="/Kegiatan.webp" as="image"></link>
        <title>Lembaran Bayan</title>
        <meta
          name="description"
          content="Website Kecamatan Bayan oleh tim KKN PPM UGM Lembaran Bayan 2024. Temukan budaya yang kaya, pemandangan menakjubkan, dan semangat komunitas di Kecamatan Bayan, Kabupaten Lombok Utara, Provinsi Lombok Utara. Jelajahi atraksi lokal, acara, dan layanan yang disediakan untuk penduduk dan pengunjung. Tetap terinformasi dan terhubung dengan berita dan pembaruan terbaru dari komunitas kami."
        />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </main>
  );
}

