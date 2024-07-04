import Film from "@/components/Film";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import AOS from "aos";
import { useEffect } from "react";
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 900
    })
  }, [])
  return (
    <main className="font-jakarta">
      <Navbar />
      <Hero />
      {/* <Film /> */}
    </main>
  );
}

