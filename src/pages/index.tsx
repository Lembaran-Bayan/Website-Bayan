import Desa from "@/components/Desa";
import Film from "@/components/Film";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="font-jakarta">
      <Navbar />
      <Hero />
      <Film />
      <Desa />
    </main>
  );
}

