
import { Shield, BarChart3, Users, Monitor } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: "Strategic Advisory",
      description: "Expert guidance on FX risk management strategies tailored to your portfolio's emerging market exposure.",
      features: ["Risk Assessment", "Hedging Strategies", "Market Intelligence"]
    },
    {
      icon: BarChart3,
      title: "Financial Solutions",
      description: "Innovative instruments and structures designed for illiquid currency markets where traditional hedging fails.",
      features: ["Custom Derivatives", "Structured Products", "Liquidity Solutions"]
    },
    {
      icon: Monitor,
      title: "Real-time Monitoring",
      description: "Comprehensive tracking and analytics platform providing instant visibility into your FX exposure across all positions.",
      features: ["Live Dashboards", "Risk Alerts", "Performance Analytics"]
    }
  ];

  return (
    <section className="py-24 px-4 relative overflow-hidden bg-gradient-to-b from-white via-[#F6F6F6]/50 to-[#F6F6F6]/30">
      {/* Enhanced Background Illustrations */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Multi-layer Golden Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFCB74]/15 via-transparent via-40% to-[#FFCB74]/8" />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#FFCB74]/12 via-70% to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-bl from-[#FFCB74]/5 via-transparent to-[#F6F6F6]/20" />
        
        {/* Enhanced Diagonal Lines Pattern with Golden Threads */}
        <svg className="absolute top-0 left-0 w-full h-full opacity-10" viewBox="0 0 1000 1000">
          <defs>
            <pattern id="enhancedDiagonalHatch" patternUnits="userSpaceOnUse" width="40" height="40">
              <path d="M0,40 L40,0" stroke="#2F2F2F" strokeWidth="1"/>
              <path d="M0,0 L40,40" stroke="#FFCB74" strokeWidth="1.5" opacity="0.8"/>
              <path d="M20,40 L40,20" stroke="#FFCB74" strokeWidth="0.5" opacity="0.6"/>
              <path d="M0,20 L20,0" stroke="#FFCB74" strokeWidth="0.5" opacity="0.6"/>
            </pattern>
            <linearGradient id="patternGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor: "#FFCB74", stopOpacity: 0.3}} />
              <stop offset="100%" style={{stopColor: "#2F2F2F", stopOpacity: 0.1}} />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#enhancedDiagonalHatch)" />
          <rect width="100%" height="100%" fill="url(#patternGrad)" />
        </svg>

        {/* Enhanced Floating Geometric Shapes with Golden Glow */}
        <div className="absolute top-20 right-20 w-16 h-16 bg-gradient-to-br from-[#FFCB74]/40 via-[#FFCB74]/20 to-[#2F2F2F]/15 rotate-45 rounded-lg shadow-lg" 
             style={{boxShadow: '0 0 20px rgba(255, 203, 116, 0.3)'}} />
        <div className="absolute bottom-40 left-16 w-12 h-12 bg-gradient-to-tr from-[#FFCB74]/50 via-[#F6F6F6]/30 to-[#FFCB74]/25 rotate-12 rounded-full shadow-lg animate-pulse" 
             style={{boxShadow: '0 0 15px rgba(255, 203, 116, 0.2)'}} />
        <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-gradient-to-r from-[#FFCB74]/40 to-[#2F2F2F]/20 rotate-45 shadow-md" />
        
        {/* Golden Particle Constellation */}
        <div className="absolute inset-0">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gradient-to-r from-[#FFCB74] to-[#FFCB74]/60 rounded-full opacity-50 animate-pulse"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
                boxShadow: '0 0 4px rgba(255, 203, 116, 0.5)'
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-[#111111] mb-6">
            Comprehensive FX Risk Management
          </h2>
          <p className="text-xl text-[#2F2F2F] max-w-3xl mx-auto">
            Three pillars of expertise designed specifically for venture capital firms 
            operating in emerging markets with complex currency dynamics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-[#FFCB74]/30 hover:border-[#FFCB74]/60 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white/90 via-[#F6F6F6]/50 to-white/80 backdrop-blur-sm group relative overflow-hidden">
              {/* Card Golden Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FFCB74]/5 via-transparent to-[#FFCB74]/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <CardContent className="p-8 relative z-10">
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#F6F6F6] via-[#FFCB74]/15 to-[#F6F6F6] rounded-xl shadow-lg mb-4 group-hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#FFCB74]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <service.icon className="h-8 w-8 text-[#111111] relative z-10 group-hover:text-[#2F2F2F] transition-colors" />
                  </div>
                  <h3 className="text-2xl font-light text-[#111111] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-[#2F2F2F] leading-relaxed">
                    {service.description}
                  </p>
                </div>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-[#2F2F2F]">
                      <div className="w-2 h-2 bg-gradient-to-r from-[#FFCB74] via-[#FFCB74]/80 to-[#2F2F2F]/50 rounded-full mr-3 shadow-sm" 
                           style={{boxShadow: '0 0 4px rgba(255, 203, 116, 0.4)'}}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
