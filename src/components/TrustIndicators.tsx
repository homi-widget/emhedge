
import { CheckCircle, Globe, Clock, Award } from "lucide-react";

const TrustIndicators = () => {
  const indicators = [
    {
      icon: CheckCircle,
      title: "Regulatory Compliance",
      description: "Fully compliant with global financial regulations and industry standards"
    },
    {
      icon: Globe,
      title: "Global Expertise",
      description: "Deep knowledge of 15+ emerging market currencies and regulatory environments"
    },
    {
      icon: Clock,
      title: "24/7 Monitoring",
      description: "Round-the-clock market surveillance and risk management support"
    },
    {
      icon: Award,
      title: "Proven Track Record",
      description: "5+ years helping VCs navigate complex FX challenges with zero defaults"
    }
  ];

  return (
    <section className="py-24 px-4 relative overflow-hidden bg-gradient-to-br from-[#F6F6F6] via-[#FFCB74]/10 to-[#F6F6F6]">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Hexagonal Grid */}
        <svg className="absolute top-0 left-0 w-full h-full opacity-8" viewBox="0 0 800 600">
          <defs>
            <pattern id="hexagons" x="0" y="0" width="60" height="52" patternUnits="userSpaceOnUse">
              <polygon points="30,2 50,17 50,35 30,50 10,35 10,17" fill="none" stroke="#F6F6F6" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagons)" />
        </svg>

        {/* Gradient Orbs */}
        <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-br from-[#FFCB74]/20 to-[#2F2F2F]/10 rounded-full blur-2xl" />
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-tl from-[#F6F6F6]/25 to-[#FFCB74]/15 rounded-full blur-xl" />
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-gradient-to-r from-[#FFCB74]/15 to-[#2F2F2F]/10 rounded-full blur-lg" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-[#111111] mb-6">
            Why Leading VCs Trust EmHedge
          </h2>
          <p className="text-xl text-[#2F2F2F] max-w-2xl mx-auto">
            Built on expertise, transparency, and a deep understanding of 
            venture capital's unique challenges in emerging markets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {indicators.map((indicator, index) => (
            <div key={index} className="text-center group">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-white to-[#F6F6F6] rounded-full shadow-sm mb-4 border border-[#F6F6F6] group-hover:shadow-md transition-all duration-300">
                  <indicator.icon className="h-8 w-8 text-[#111111] group-hover:text-[#FFCB74] transition-colors" />
                </div>
                <h3 className="text-lg font-medium text-[#111111] mb-3">
                  {indicator.title}
                </h3>
                <p className="text-[#2F2F2F] text-sm leading-relaxed">
                  {indicator.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;
