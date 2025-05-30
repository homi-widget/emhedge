
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
    <section className="py-24 px-4 relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/20 to-slate-100">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Hexagonal Grid */}
        <svg className="absolute top-0 left-0 w-full h-full opacity-8" viewBox="0 0 800 600">
          <defs>
            <pattern id="hexagons" x="0" y="0" width="60" height="52" patternUnits="userSpaceOnUse">
              <polygon points="30,2 50,17 50,35 30,50 10,35 10,17" fill="none" stroke="#e2e8f0" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagons)" />
        </svg>

        {/* Gradient Orbs */}
        <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-br from-blue-200/20 to-purple-200/10 rounded-full blur-2xl" />
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-tl from-slate-200/25 to-indigo-200/15 rounded-full blur-xl" />
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-gradient-to-r from-blue-300/15 to-slate-300/10 rounded-full blur-lg" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-slate-900 mb-6">
            Why Leading VCs Trust EmHedge
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Built on expertise, transparency, and a deep understanding of 
            venture capital's unique challenges in emerging markets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {indicators.map((indicator, index) => (
            <div key={index} className="text-center group">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-white to-slate-50 rounded-full shadow-sm mb-4 border border-slate-200/50 group-hover:shadow-md transition-all duration-300">
                  <indicator.icon className="h-8 w-8 text-slate-700 group-hover:text-blue-600 transition-colors" />
                </div>
                <h3 className="text-lg font-medium text-slate-900 mb-3">
                  {indicator.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
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
