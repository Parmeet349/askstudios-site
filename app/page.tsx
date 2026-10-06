import SiteShell from "@/components/layout/SiteShell";
import HeroSection from "@/components/sections/HeroSection";
import ProductsSection from "@/components/sections/ProductsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import AIShowcaseSection from "@/components/sections/AIShowcaseSection";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <SiteShell>
      <HeroSection />
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProductsSection />
        <ServicesSection />
        <AIShowcaseSection />
        <AboutSection />
        <ContactSection />
      </div>
    </SiteShell>
  );
}
