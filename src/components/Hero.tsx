
import { ArrowRight, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-white px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full text-sm text-slate-600 mb-6">
            <TrendingUp className="h-4 w-4" />
            <span>Trusted by leading VCs worldwide</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-light text-slate-900 mb-6 leading-tight">
            Master FX Exposure in
            <span className="block text-slate-600">Emerging Markets</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Navigate illiquid currency hedging with confidence. We provide sophisticated advice, 
            tailored financial solutions, and real-time monitoring for venture capital firms.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            size="lg" 
            className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 h-auto"
          >
            Schedule Consultation
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-3 h-auto"
          >
            View Case Studies
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="text-3xl font-light text-slate-900 mb-2">$2.5B+</div>
            <div className="text-slate-600">FX Exposure Managed</div>
          </div>
          <div className="p-6">
            <div className="text-3xl font-light text-slate-900 mb-2">15+</div>
            <div className="text-slate-600">Emerging Markets</div>
          </div>
          <div className="p-6">
            <div className="text-3xl font-light text-slate-900 mb-2">50+</div>
            <div className="text-slate-600">VC Partners</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
