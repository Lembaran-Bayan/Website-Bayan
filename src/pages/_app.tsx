import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 900
    })
  }, [])
  
  return (
    <>
    <Head>
      <link rel="icon" href="/Logo.png" />
      <link rel="preload" href="/Rinjani.webp" as="image"></link>
      <title>Lembaran Bayan</title>
    </Head>
    <Component {...pageProps} />
    </>
  );
}
