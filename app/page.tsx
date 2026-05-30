import Sidebar from "@/components/Sidebar";
import HeroSection from "@/components/HeroSection";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0e0e0e] text-white selection:bg-[#F5C518] selection:text-black antialiased flex">

      <Sidebar activeLabel="Home" />

      {/* Page body offset from sidebar */}
      <div className="ml-[72px] flex-1 flex flex-col min-h-screen">
        <HeroSection />
      </div>

    </main>
  );
}
