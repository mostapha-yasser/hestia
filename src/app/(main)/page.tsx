import CategoriesSection from "@/components/home/CategoriesSection";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";


function Home() {
  return (
    <div className="min-h-screen w-full  mx-auto py-20 space-y-36">
      <HeroSection />
      <CategoriesSection/>
      <ServicesSection/>
      <TestimonialsSection/>
    </div>
  );
}

export default Home;
