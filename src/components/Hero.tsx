
import { ArrowRight, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#F6F6F6] via-white to-[#F6F6F6] px-4">
      {/* Enhanced Abstract Background Illustrations */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Golden Gradient Mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFCB74]/10 via-transparent via-30% to-[#FFCB74]/5 opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#FFCB74]/8 via-60% to-transparent" />
        
        {/* Enhanced Geometric Lines with Golden Glow */}
        <svg className="absolute top-20 left-10 w-64 h-64 opacity-30" viewBox="0 0 200 200">
          <defs>
            <linearGradient id="goldGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor: "#FFCB74", stopOpacity: 0.6}} />
              <stop offset="50%" style={{stopColor: "#2F2F2F", stopOpacity: 0.3}} />
              <stop offset="100%" style={{stopColor: "#FFCB74", stopOpacity: 0.4}} />
            </linearGradient>
            <linearGradient id="goldGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor: "#FFCB74", stopOpacity: 0.8}} />
              <stop offset="100%" style={{stopColor: "#111111", stopOpacity: 0.2}} />
            </linearGradient>
          </defs>
          <path d="M20,20 L180,80 L120,180 L60,120 Z" fill="url(#goldGrad1)" />
          <path d="M40,40 L160,100 L100,160 L80,100 Z" fill="none" stroke="url(#goldGrad2)" strokeWidth="3" />
          <circle cx="100" cy="100" r="5" fill="#FFCB74" opacity="0.8" />
        </svg>

        {/* Enhanced Flowing Curves with Multiple Gradients */}
        <svg className="absolute top-32 right-20 w-80 h-80 opacity-25" viewBox="0 0 300 300">
          <defs>
            <linearGradient id="flowGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor: "#FFCB74", stopOpacity: 0.7}} />
              <stop offset="30%" style={{stopColor: "#F6F6F6", stopOpacity: 0.3}} />
              <stop offset="70%" style={{stopColor: "#FFCB74", stopOpacity: 0.5}} />
              <stop offset="100%" style={{stopColor: "#2F2F2F", stopOpacity: 0.2}} />
            </linearGradient>
            <radialGradient id="flowGrad2" cx="50%" cy="50%" r="50%">
              <stop offset="0%" style={{stopColor: "#FFCB74", stopOpacity: 0.6}} />
              <stop offset="100%" style={{stopColor: "#111111", stopOpacity: 0.1}} />
            </radialGradient>
          </defs>
          <path d="M50,150 Q150,50 250,150 T450,150" fill="none" stroke="url(#flowGrad1)" strokeWidth="4" />
          <path d="M30,180 Q130,80 230,180 T430,180" fill="none" stroke="url(#flowGrad1)" strokeWidth="3" />
          <path d="M70,120 Q170,20 270,120 T470,120" fill="none" stroke="url(#flowGrad1)" strokeWidth="2" />
          <circle cx="150" cy="150" r="20" fill="url(#flowGrad2)" />
        </svg>

        {/* Enhanced Grid Pattern with Golden Accents */}
        <div className="absolute bottom-20 left-1/4 w-48 h-48 opacity-20">
          <div className="grid grid-cols-8 grid-rows-8 gap-1 h-full">
            {Array.from({ length: 64 }).map((_, i) => (
              <div 
                key={i} 
                className={`rounded-sm ${
                  i % 9 === 0 
                    ? "bg-gradient-to-br from-[#FFCB74] to-[#FFCB74]/50" 
                    : "bg-gradient-to-br from-[#2F2F2F]/30 to-[#F6F6F6]/20"
                }`}
                style={{
                  animationDelay: `${i * 0.1}s`,
                  animation: 'pulse 4s infinite'
                }}
              />
            ))}
          </div>
        </div>

        {/* Enhanced Abstract Shapes with Golden Glow */}
        <div className="absolute top-1/2 right-10 w-32 h-32 bg-gradient-radial from-[#FFCB74]/30 via-[#FFCB74]/10 to-transparent rounded-full blur-xl" />
        <div className="absolute bottom-32 right-1/3 w-24 h-24 bg-gradient-conic from-[#FFCB74]/25 via-[#F6F6F6]/15 to-[#FFCB74]/20 rounded-full blur-lg" />
        <div className="absolute top-20 right-1/2 w-16 h-16 bg-gradient-to-r from-[#FFCB74]/20 to-[#2F2F2F]/10 rounded-full blur-md animate-pulse" />
        
        {/* Golden Particle Effect */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[#FFCB74] rounded-full opacity-40 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-white/90 via-[#F6F6F6]/80 to-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-[#2F2F2F] mb-6 border border-[#FFCB74]/20 shadow-lg">
            <TrendingUp className="h-4 w-4 text-[#FFCB74]" />
            <span>Trusted by leading VCs worldwide</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-light text-[#111111] mb-6 leading-tight">
            Master FX Exposure in
            <span className="block bg-gradient-to-r from-[#2F2F2F] via-[#FFCB74] to-[#111111] bg-clip-text text-transparent drop-shadow-sm">Emerging Markets</span>
          </h1>
          <p className="text-xl text-[#2F2F2F] mb-8 max-w-2xl mx-auto leading-relaxed">
            Navigate illiquid currency hedging with confidence. We provide sophisticated advice, 
            tailored financial solutions, and real-time monitoring for venture capital firms.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-[#FFCB74] via-[#FFCB74]/90 to-[#FFCB74]/80 hover:from-[#FFCB74]/90 hover:via-[#FFCB74]/80 hover:to-[#FFCB74]/70 text-[#111111] px-8 py-3 h-auto shadow-xl font-medium relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            Schedule Consultation
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-[#2F2F2F] text-[#2F2F2F] hover:bg-gradient-to-r hover:from-[#F6F6F6]/80 hover:to-[#FFCB74]/10 px-8 py-3 h-auto backdrop-blur-sm bg-gradient-to-r from-white/80 to-[#F6F6F6]/60"
          >
            View Case Studies
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-gradient-to-br from-white/80 via-[#F6F6F6]/60 to-white/70 backdrop-blur-sm rounded-lg border border-[#FFCB74]/30 shadow-lg">
            <div className="text-3xl font-light bg-gradient-to-r from-[#111111] via-[#FFCB74] to-[#2F2F2F] bg-clip-text text-transparent mb-2 drop-shadow-sm">$2.5B+</div>
            <div className="text-[#2F2F2F]">FX Exposure Managed</div>
          </div>
          <div className="p-6 bg-gradient-to-br from-white/80 via-[#F6F6F6]/60 to-white/70 backdrop-blur-sm rounded-lg border border-[#FFCB74]/30 shadow-lg">
            <div className="text-3xl font-light bg-gradient-to-r from-[#111111] via-[#FFCB74] to-[#2F2F2F] bg-clip-text text-transparent mb-2 drop-shadow-sm">15+</div>
            <div className="text-[#2F2F2F]">Emerging Markets</div>
          </div>
          <div className="p-6 bg-gradient-to-br from-white/80 via-[#F6F6F6]/60 to-white/70 backdrop-blur-sm rounded-lg border border-[#FFCB74]/30 shadow-lg">
            <div className="text-3xl font-light bg-gradient-to-r from-[#111111] via-[#FFCB74] to-[#2F2F2F] bg-clip-text text-transparent mb-2 drop-shadow-sm">50+</div>
            <div className="text-[#2F2F2F]">VC Partners</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
