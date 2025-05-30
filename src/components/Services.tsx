
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
      {/* Background Illustrations */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Diagonal Lines Pattern */}
        <svg className="absolute top-0 left-0 w-full h-full opacity-5" viewBox="0 0 1000 1000">
          <defs>
            <pattern id="diagonalHatch" patternUnits="userSpaceOnUse" width="40" height="40">
              <path d="M0,40 L40,0" stroke="#2F2F2F" strokeWidth="1"/>
              <path d="M0,0 L40,40" stroke="#FFCB74" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonalHatch)" />
        </svg>

        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 right-20 w-16 h-16 bg-gradient-to-br from-[#FFCB74]/30 to-[#2F2F2F]/20 rotate-45 rounded-lg" />
        <div className="absolute bottom-40 left-16 w-12 h-12 bg-gradient-to-tr from-[#F6F6F6]/40 to-[#FFCB74]/30 rotate-12 rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-gradient-to-r from-[#FFCB74]/25 to-[#2F2F2F]/25 rotate-45" />
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
            <Card key={index} className="border-[#F6F6F6] hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-white to-[#F6F6F6]/50 backdrop-blur-sm group">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#F6F6F6] to-[#FFCB74]/10 rounded-xl shadow-sm mb-4 group-hover:shadow-md transition-shadow">
                    <service.icon className="h-8 w-8 text-[#111111]" />
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
                      <div className="w-2 h-2 bg-gradient-to-r from-[#FFCB74] to-[#2F2F2F] rounded-full mr-3"></div>
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
