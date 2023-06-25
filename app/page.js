import { Hero, Navbar, About } from "@/components";

export default function Home() {
  return (
    <div className="bg-black overflow-hidden">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}
