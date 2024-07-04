import { Button } from "@/components/ui/button";
import Image from "next/image";
import Hero from "./sections/Hero";
import Video from "./sections/Video";
import About from "./sections/About";
import Footer from "./sections/Footer";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Video />
      <About />
      <Footer />
    </main>
  );
}
