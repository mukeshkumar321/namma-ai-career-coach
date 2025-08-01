import FeatureSection from "@/components/feature-section";
import HeroSection from "@/components/hero";

export default function Home() {
  return (
    <div className="relative">
      <div className="grid-background" />
      <HeroSection />
      <FeatureSection />
    </div>
  );
}
