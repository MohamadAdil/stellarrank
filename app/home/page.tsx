// import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import ExpandOnScrollSection from "../components/sections/AboutStackMotionSection";
import BenefitsSection from "../components/sections/BenefitsSection";
import ContactSection from "../components/sections/ContactSection";
import FAQSection from "../components/sections/FAQSection";
import Hero from "../components/sections/Hero";
import ServicesSection from "../components/sections/ServicesSection";
import TestimonialSection from "../components/sections/TestimonialSection";
import WorksSection from "../components/sections/WorksSection";
export default function ComingSoonHome() {
  return (
    <>
    <Header/>
      <Hero />
      <ExpandOnScrollSection />
      <BenefitsSection />
      <WorksSection />
      <ServicesSection />
      <TestimonialSection />
      <FAQSection />
      <ContactSection />
      <Footer/>
    </>
  );
}
