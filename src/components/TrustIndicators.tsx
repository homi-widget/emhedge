
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
    <section className="py-24 px-4 bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-slate-900 mb-6">
            Why Leading VCs Trust Us
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Built on expertise, transparency, and a deep understanding of 
            venture capital's unique challenges in emerging markets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {indicators.map((indicator, index) => (
            <div key={index} className="text-center">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-sm mb-4">
                  <indicator.icon className="h-8 w-8 text-slate-700" />
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
