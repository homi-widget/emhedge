
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
    <section className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-slate-900 mb-6">
            Comprehensive FX Risk Management
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Three pillars of expertise designed specifically for venture capital firms 
            operating in emerging markets with complex currency dynamics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-slate-200 hover:shadow-lg transition-shadow duration-300 bg-slate-50/50">
              <CardContent className="p-8">
                <div className="mb-6">
                  <service.icon className="h-12 w-12 text-slate-700 mb-4" />
                  <h3 className="text-2xl font-light text-slate-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-slate-700">
                      <div className="w-2 h-2 bg-slate-400 rounded-full mr-3"></div>
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
