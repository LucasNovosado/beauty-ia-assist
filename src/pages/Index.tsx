import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import BenefitsSection from "../components/BenefitsSection";
import HowItWorksSection from "../components/HowItWorksSection";
import TestimonialsSection from "../components/TestimonialsSection";
import FAQSection from "../components/FAQSection";
import PlansSection from "../components/PlansSection";
import LastCTA from "../components/LastCTA";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <BenefitsSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <FAQSection />
        <PlansSection />
        <LastCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;