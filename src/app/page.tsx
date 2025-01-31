import MediaCard from "@/components/layout/carousel";
import FeaturesSection from "@/components/layout/FeaturesSection";
import Footer from "@/components/layout/Footer";
import HomeLayout from "@/components/layout/HomeLayout";
import MissionAndVisionSection from "@/components/layout/MissionAndVisionSection";
import ServicesOffered from "@/components/layout/ServicesOffered";

export default function Home() {
  return (
    <div>
      <HomeLayout />
      <MediaCard />
      <FeaturesSection />
      <MissionAndVisionSection />
      <ServicesOffered />
      <Footer />
    </div>
  );
}
