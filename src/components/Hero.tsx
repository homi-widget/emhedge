
import { ArrowRight, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100 px-4">
      {/* Abstract Background Illustrations */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Geometric Lines */}
        <svg className="absolute top-20 left-10 w-64 h-64 opacity-20" viewBox="0 0 200 200">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor: "#64748b", stopOpacity: 0.3}} />
              <stop offset="100%" style={{stopColor: "#3b82f6", stopOpacity: 0.1}} />
            </linearGradient>
          </defs>
          <path d="M20,20 L180,80 L120,180 L60,120 Z" fill="url(#grad1)" />
          <path d="M40,40 L160,100 L100,160 L80,100 Z" fill="none" stroke="url(#grad1)" strokeWidth="2" />
        </svg>

        {/* Flowing Curves */}
        <svg className="absolute top-32 right-20 w-80 h-80 opacity-15" viewBox="0 0 300 300">
          <defs>
            <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor: "#6366f1", stopOpacity: 0.4}} />
              <stop offset="100%" style={{stopColor: "#8b5cf6", stopOpacity: 0.1}} />
            </linearGradient>
          </defs>
          <path d="M50,150 Q150,50 250,150 T450,150" fill="none" stroke="url(#grad2)" strokeWidth="3" />
          <path d="M30,180 Q130,80 230,180 T430,180" fill="none" stroke="url(#grad2)" strokeWidth="2" />
          <path d="M70,120 Q170,20 270,120 T470,120" fill="none" stroke="url(#grad2)" strokeWidth="1" />
        </svg>

        {/* Grid Pattern */}
        <div className="absolute bottom-20 left-1/4 w-48 h-48 opacity-10">
          <div className="grid grid-cols-8 grid-rows-8 gap-1 h-full">
            {Array.from({ length: 64 }).map((_, i) => (
              <div 
                key={i} 
                className="bg-gradient-to-br from-slate-400 to-blue-400 rounded-sm"
                style={{
                  animationDelay: `${i * 0.1}s`,
                  animation: 'pulse 4s infinite'
                }}
              />
            ))}
          </div>
        </div>

        {/* Abstract Shapes */}
        <div className="absolute top-1/2 right-10 w-32 h-32 bg-gradient-to-tr from-blue-200/20 to-purple-200/20 rounded-full blur-xl" />
        <div className="absolute bottom-32 right-1/3 w-24 h-24 bg-gradient-to-br from-slate-300/20 to-indigo-300/20 rounded-full blur-lg" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-slate-600 mb-6 border border-slate-200/50">
            <TrendingUp className="h-4 w-4" />
            <span>Trusted by leading VCs worldwide</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-light text-slate-900 mb-6 leading-tight">
            Master FX Exposure in
            <span className="block bg-gradient-to-r from-slate-600 to-blue-600 bg-clip-text text-transparent">Emerging Markets</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Navigate illiquid currency hedging with confidence. We provide sophisticated advice, 
            tailored financial solutions, and real-time monitoring for venture capital firms.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 text-white px-8 py-3 h-auto shadow-lg"
          >
            Schedule Consultation
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-3 h-auto backdrop-blur-sm bg-white/80"
          >
            View Case Studies
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white/60 backdrop-blur-sm rounded-lg border border-slate-200/50">
            <div className="text-3xl font-light bg-gradient-to-r from-slate-900 to-blue-600 bg-clip-text text-transparent mb-2">$2.5B+</div>
            <div className="text-slate-600">FX Exposure Managed</div>
          </div>
          <div className="p-6 bg-white/60 backdrop-blur-sm rounded-lg border border-slate-200/50">
            <div className="text-3xl font-light bg-gradient-to-r from-slate-900 to-blue-600 bg-clip-text text-transparent mb-2">15+</div>
            <div className="text-slate-600">Emerging Markets</div>
          </div>
          <div className="p-6 bg-white/60 backdrop-blur-sm rounded-lg border border-slate-200/50">
            <div className="text-3xl font-light bg-gradient-to-r from-slate-900 to-blue-600 bg-clip-text text-transparent mb-2">50+</div>
            <div className="text-slate-600">VC Partners</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
