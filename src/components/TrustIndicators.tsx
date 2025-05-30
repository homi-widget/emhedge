
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
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Multi-layer Golden Mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFCB74]/12 via-transparent via-50% to-[#FFCB74]/8" />
        <div className="absolute inset-0 bg-gradient-to-tl from-[#FFCB74]/6 via-transparent via-30% to-[#F6F6F6]/15" />
        <div className="absolute inset-0 bg-gradient-radial from-[#FFCB74]/8 via-transparent to-transparent" />
        
        {/* Enhanced Hexagonal Grid with Golden Highlights */}
        <svg className="absolute top-0 left-0 w-full h-full opacity-12" viewBox="0 0 800 600">
          <defs>
            <pattern id="enhancedHexagons" x="0" y="0" width="60" height="52" patternUnits="userSpaceOnUse">
              <polygon points="30,2 50,17 50,35 30,50 10,35 10,17" fill="none" stroke="#F6F6F6" strokeWidth="1"/>
              <polygon points="30,8 44,19 44,33 30,44 16,33 16,19" fill="none" stroke="#FFCB74" strokeWidth="0.5" opacity="0.6"/>
              <circle cx="30" cy="26" r="1" fill="#FFCB74" opacity="0.8"/>
            </pattern>
            <linearGradient id="hexGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor: "#FFCB74", stopOpacity: 0.2}} />
              <stop offset="100%" style={{stopColor: "#F6F6F6", stopOpacity: 0.1}} />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#enhancedHexagons)" />
          <rect width="100%" height="100%" fill="url(#hexGrad)" />
        </svg>

        {/* Enhanced Gradient Orbs with Golden Glow */}
        <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-radial from-[#FFCB74]/30 via-[#FFCB74]/15 to-transparent rounded-full blur-2xl animate-pulse" 
             style={{boxShadow: '0 0 60px rgba(255, 203, 116, 0.2)'}} />
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-conic from-[#FFCB74]/25 via-[#F6F6F6]/20 to-[#FFCB74]/15 rounded-full blur-xl" 
             style={{boxShadow: '0 0 40px rgba(255, 203, 116, 0.15)'}} />
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-gradient-to-r from-[#FFCB74]/20 via-[#F6F6F6]/15 to-[#FFCB74]/10 rounded-full blur-lg animate-pulse" />
        
        {/* Golden Thread Network */}
        <svg className="absolute inset-0 w-full h-full opacity-15" viewBox="0 0 1000 800">
          <defs>
            <linearGradient id="threadGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor: "#FFCB74", stopOpacity: 0.6}} />
              <stop offset="50%" style={{stopColor: "#F6F6F6", stopOpacity: 0.2}} />
              <stop offset="100%" style={{stopColor: "#FFCB74", stopOpacity: 0.4}} />
            </linearGradient>
          </defs>
          <path d="M100,100 Q300,200 500,150 T900,200" stroke="url(#threadGrad)" strokeWidth="2" fill="none" />
          <path d="M200,300 Q400,100 600,250 T800,300" stroke="url(#threadGrad)" strokeWidth="1.5" fill="none" />
          <path d="M150,500 Q350,400 550,450 T750,500" stroke="url(#threadGrad)" strokeWidth="1" fill="none" />
          <circle cx="300" cy="200" r="3" fill="#FFCB74" opacity="0.8" />
          <circle cx="600" cy="250" r="2" fill="#FFCB74" opacity="0.6" />
          <circle cx="550" cy="450" r="2.5" fill="#FFCB74" opacity="0.7" />
        </svg>
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
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-white via-[#F6F6F6] to-white rounded-full shadow-lg mb-4 border border-[#FFCB74]/30 group-hover:border-[#FFCB74]/60 group-hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FFCB74]/10 via-transparent to-[#FFCB74]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <indicator.icon className="h-8 w-8 text-[#111111] group-hover:text-[#2F2F2F] transition-colors relative z-10" />
                  
                  {/* Golden Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FFCB74]/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
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
