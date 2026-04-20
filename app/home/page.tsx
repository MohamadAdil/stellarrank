// import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import ExpandOnScrollSection from "../components/sections/AboutStackMotionSection";
import BenefitsSection from "../components/sections/BenefitsSection";
import ContactConsultation from "../components/sections/ContactConsultation";
import ContactSection from "../components/sections/ContactSection";
import FAQSection from "../components/sections/FAQSection";
import Hero from "../components/sections/Hero";
import ServicesSection from "../components/sections/ServicesSection";
import TestimonialSection from "../components/sections/TestimonialSection";
import WorksSection from "../components/sections/WorksSection";
import FeatureCard from "../components/ui/FeatureCard";
import { LuBrain } from "react-icons/lu";
import { FiHeart } from "react-icons/fi";
import ResultsSection from "../components/sections/ResultsSection";
import AiFutureSection from "../components/sections/AiFutureSection";
export default function ComingSoonHome() {
  return (
    <>
      <Header />
      <Hero />
      <ExpandOnScrollSection />
      <BenefitsSection />
      <WorksSection />
      {/* <ServicesSection /> */}
      {/* <TestimonialSection />
      <FAQSection />
      <ContactSection /> */}
      <AiFutureSection />
      <ResultsSection/>
      <section className="grid md:grid-cols-2">

        {/* LEFT - SMART */}
        <FeatureCard
          variant="dark"
          title="Smart"
          icon={<LuBrain />}
          description="AI-powered technology that learns, optimizes, and delivers results while you sleep."
          points={[
            "Machine learning algorithms optimize campaigns in real-time",
            "Predictive analytics forecast booking trends",
            "Automated workflows streamline operations",
            "AI assistants engage guests 24/7",
          ]}
        />

        {/* RIGHT - HUMAN */}
        <FeatureCard
          variant="light"
          title="Human"
          icon={<FiHeart />}
          description="Strategic thinking, creative design, and genuine hospitality expertise from real people."
          points={[
            "Dedicated strategists who understand your brand",
            "Creative directors with luxury hospitality experience",
            "Personal account managers, not ticket systems",
            "Thoughtful design that reflects your story",
          ]}
        />

      </section>
      <ContactConsultation />
      <Footer />
    </>
  );
}
