import CaseStudyCard from "../ui/CaseStudyCard";

export default function ResultsSection() {
  return (
    <section className="bg-black text-white py-20 px-6">
      
      {/* HEADER */}
      <div className="max-w-6xl mx-auto mb-12">
        <span className="text-xs border px-3 py-1 rounded-full opacity-70">
          CLIENT SUCCESS
        </span>

        <h2 className="text-3xl md:text-5xl font-semibold mt-4">
          Real Results for <br /> Real Properties
        </h2>

        <p className="text-gray-400 mt-4 text-sm">
          Trusted by leading hospitality brands across North America
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto space-y-6">

        {/* LARGE CARD */}
        <CaseStudyCard
          large
          image="/assets/images/resort-1.png"
          location="Malibu, California"
          title="Oceanview Resort"
          description="Complete brand refresh and AI-optimized web experience for a luxury coastal resort."
          stat="+180% Direct Bookings"
        />

        {/* SMALL CARDS */}
        <div className="grid md:grid-cols-2 gap-6">
          <CaseStudyCard
            image="/assets/images/resort-2.png"
            location="Aspen, Colorado"
            title="Mountain Lodge Collection"
            description="AI-powered content strategy featured in ChatGPT recommendations"
            stat="250% Monthly Leads"
          />

          <CaseStudyCard
            image="/assets/images/resort-3.png"
            location="Turks & Caicos"
            title="Paradise Bay Resort"
            description="Integrated marketing ecosystem driving sustainable direct booking growth"
            stat="65% OTA Reduction"
          />
        </div>

      </div>
    </section>
  );
}