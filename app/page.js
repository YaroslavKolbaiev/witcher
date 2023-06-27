import { Hero, Navbar, About, Explore } from "@/components";

export default function Home() {
  return (
    <div className="bg-black overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Explore />
    </div>
  );
}
