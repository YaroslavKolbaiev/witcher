import {
  Hero,
  Navbar,
  About,
  Explore,
  Schools,
  World,
  Monsters,
} from "@/components";

export default function Home() {
  return (
    <div className="bg-black overflow-hidden">
      <Navbar />
      <Hero />
      <div className="relative">
        <div className="gradient-02 z-0" />
        <About />
        <div className="gradient-03 z-0" />
        <Explore />
      </div>
      <div className="relative">
        <Schools />
        <div className="gradient-04 z-0" />
      </div>
      <World />
      <div className="relative">
        <Monsters />
        <div className="gradient-04 z-0" />
      </div>
    </div>
  );
}
