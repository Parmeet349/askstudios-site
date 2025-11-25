import Image from "next/image";

import SiteShell from "@/components/layout/SiteShell";
import HeroSection from "@/components/sections/HeroSection";
import ProductsSection from "@/components/sections/ProductsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <SiteShell>
      <HeroSection />
      <ProductsSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
    </SiteShell>
  );
}