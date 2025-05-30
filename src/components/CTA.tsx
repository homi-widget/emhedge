
import { ArrowRight, Mail, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const CTA = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden bg-gradient-to-br from-[#111111] via-[#2F2F2F] to-[#111111]">
      {/* Enhanced Background Illustrations */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Multi-layer Golden Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFCB74]/15 via-transparent via-40% to-[#FFCB74]/10" />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#FFCB74]/8 via-70% to-transparent" />
        <div className="absolute inset-0 bg-gradient-radial from-[#FFCB74]/12 via-transparent to-transparent" />
        
        {/* Enhanced Circuit Board Pattern with Golden Traces */}
        <svg className="absolute top-0 left-0 w-full h-full opacity-15" viewBox="0 0 1000 1000">
          <defs>
            <pattern id="enhancedCircuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <rect width="100" height="100" fill="none"/>
              <circle cx="50" cy="50" r="3" fill="#FFCB74" opacity="0.8"/>
              <circle cx="50" cy="50" r="1.5" fill="#F6F6F6"/>
              <line x1="50" y1="0" x2="50" y2="47" stroke="#F6F6F6" strokeWidth="1"/>
              <line x1="50" y1="53" x2="50" y2="100" stroke="#F6F6F6" strokeWidth="1"/>
              <line x1="0" y1="50" x2="47" y2="50" stroke="#F6F6F6" strokeWidth="1"/>
              <line x1="53" y1="50" x2="100" y2="50" stroke="#F6F6F6" strokeWidth="1"/>
              <line x1="25" y1="25" x2="47" y2="47" stroke="#FFCB74" strokeWidth="0.5" opacity="0.6"/>
              <line x1="53" y1="53" x2="75" y2="75" stroke="#FFCB74" strokeWidth="0.5" opacity="0.6"/>
            </pattern>
            <linearGradient id="circuitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor: "#FFCB74", stopOpacity: 0.2}} />
              <stop offset="100%" style={{stopColor: "#F6F6F6", stopOpacity: 0.1}} />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#enhancedCircuit)" />
          <rect width="100%" height="100%" fill="url(#circuitGrad)" />
        </svg>

        {/* Enhanced Gradient Shapes with Golden Glow */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-radial from-[#FFCB74]/25 via-[#FFCB74]/10 to-transparent rounded-full blur-3xl animate-pulse" 
             style={{boxShadow: '0 0 80px rgba(255, 203, 116, 0.2)'}} />
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-conic from-[#FFCB74]/20 via-[#F6F6F6]/10 to-[#FFCB74]/15 rounded-full blur-2xl" 
             style={{boxShadow: '0 0 60px rgba(255, 203, 116, 0.15)'}} />
        
        {/* Enhanced Flowing Lines with Golden Threads */}
        <svg className="absolute bottom-0 left-0 w-full h-32 opacity-25" viewBox="0 0 1000 100">
          <defs>
            <linearGradient id="enhancedGrad3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{stopColor: "#FFCB74", stopOpacity: 0.4}} />
              <stop offset="25%" style={{stopColor: "#F6F6F6", stopOpacity: 0.2}} />
              <stop offset="50%" style={{stopColor: "#FFCB74", stopOpacity: 0.6}} />
              <stop offset="75%" style={{stopColor: "#F6F6F6", stopOpacity: 0.2}} />
              <stop offset="100%" style={{stopColor: "#FFCB74", stopOpacity: 0.4}} />
            </linearGradient>
          </defs>
          <path d="M0,50 Q250,10 500,50 T1000,50 L1000,100 L0,100 Z" fill="url(#enhancedGrad3)"/>
          <path d="M0,30 Q200,5 400,30 T800,30" stroke="#FFCB74" strokeWidth="2" fill="none" opacity="0.6"/>
          <path d="M0,70 Q300,45 600,70 T1000,70" stroke="#FFCB74" strokeWidth="1.5" fill="none" opacity="0.4"/>
        </svg>
        
        {/* Golden Energy Particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 25 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[#FFCB74] rounded-full opacity-60 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${1.5 + Math.random() * 2.5}s`,
                boxShadow: '0 0 6px rgba(255, 203, 116, 0.8)'
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl font-light text-white mb-6">
          Ready to Optimize Your FX Strategy?
        </h2>
        <p className="text-xl text-[#F6F6F6] mb-12 max-w-2xl mx-auto">
          Join the growing number of venture capital firms that trust EmHedge 
          to manage their emerging market currency exposure.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card className="bg-gradient-to-br from-[#2F2F2F] via-[#111111] to-[#2F2F2F] border-[#F6F6F6]/20 hover:border-[#FFCB74]/50 transition-all duration-300 group relative overflow-hidden">
            {/* Card Golden Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#FFCB74]/10 via-transparent to-[#FFCB74]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <CardContent className="p-8 text-center relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#FFCB74]/25 via-[#FFCB74]/15 to-[#F6F6F6]/10 rounded-xl mb-4 group-hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                   style={{boxShadow: '0 0 20px rgba(255, 203, 116, 0.2)'}}>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FFCB74]/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <Calendar className="h-8 w-8 text-[#FFCB74] relative z-10" />
              </div>
              <h3 className="text-xl font-medium text-white mb-3">
                Schedule a Consultation
              </h3>
              <p className="text-[#F6F6F6] mb-6">
                Get a personalized assessment of your FX exposure and risk management needs.
              </p>
              <Button className="bg-gradient-to-r from-[#FFCB74] via-[#FFCB74]/90 to-[#FFCB74]/80 text-[#111111] hover:from-[#FFCB74]/90 hover:via-[#FFCB74]/80 hover:to-[#FFCB74]/70 w-full shadow-xl font-medium relative overflow-hidden group/btn">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700" />
                Book Meeting
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-[#2F2F2F] via-[#111111] to-[#2F2F2F] border-[#F6F6F6]/20 hover:border-[#FFCB74]/50 transition-all duration-300 group relative overflow-hidden">
            {/* Card Golden Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#FFCB74]/10 via-transparent to-[#FFCB74]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <CardContent className="p-8 text-center relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#FFCB74]/25 via-[#FFCB74]/15 to-[#F6F6F6]/10 rounded-xl mb-4 group-hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                   style={{boxShadow: '0 0 20px rgba(255, 203, 116, 0.2)'}}>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FFCB74]/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <Mail className="h-8 w-8 text-[#FFCB74] relative z-10" />
              </div>
              <h3 className="text-xl font-medium text-white mb-3">
                Request Whitepaper
              </h3>
              <p className="text-[#F6F6F6] mb-6">
                Download our comprehensive guide to FX risk management in emerging markets.
              </p>
              <Button variant="outline" className="border-[#F6F6F6]/50 text-white hover:bg-gradient-to-r hover:from-[#FFCB74]/20 hover:to-[#FFCB74]/10 w-full backdrop-blur-sm">
                Download Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-[#F6F6F6] text-sm">
          <p>Trusted by 50+ venture capital firms globally</p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
