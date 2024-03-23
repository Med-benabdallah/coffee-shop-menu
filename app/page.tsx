import { Hero } from "@/components/hero/hero";
import { ScrollAreaBar } from "@/components/scroll-area/scroll-area";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center">
      <Hero />
    </div>
  );
}
