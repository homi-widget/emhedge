
import { ArrowRight, Mail, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const CTA = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Background Illustrations */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Circuit Board Pattern */}
        <svg className="absolute top-0 left-0 w-full h-full opacity-10" viewBox="0 0 1000 1000">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <rect width="100" height="100" fill="none"/>
              <circle cx="50" cy="50" r="2" fill="#64748b"/>
              <line x1="50" y1="0" x2="50" y2="48" stroke="#64748b" strokeWidth="1"/>
              <line x1="50" y1="52" x2="50" y2="100" stroke="#64748b" strokeWidth="1"/>
              <line x1="0" y1="50" x2="48" y2="50" stroke="#64748b" strokeWidth="1"/>
              <line x1="52" y1="50" x2="100" y2="50" stroke="#64748b" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>

        {/* Gradient Shapes */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-tr from-slate-400/15 to-indigo-400/10 rounded-full blur-2xl" />
        
        {/* Flowing Lines */}
        <svg className="absolute bottom-0 left-0 w-full h-32 opacity-20" viewBox="0 0 1000 100">
          <path d="M0,50 Q250,10 500,50 T1000,50 L1000,100 L0,100 Z" fill="url(#grad3)"/>
          <defs>
            <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{stopColor: "#3b82f6", stopOpacity: 0.3}} />
              <stop offset="50%" style={{stopColor: "#8b5cf6", stopOpacity: 0.2}} />
              <stop offset="100%" style={{stopColor: "#3b82f6", stopOpacity: 0.3}} />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl font-light text-white mb-6">
          Ready to Optimize Your FX Strategy?
        </h2>
        <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
          Join the growing number of venture capital firms that trust EmHedge 
          to manage their emerging market currency exposure.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card className="bg-gradient-to-br from-slate-800 to-slate-700 border-slate-600 hover:border-slate-500 transition-all duration-300 group">
            <CardContent className="p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-slate-700 to-slate-600 rounded-xl mb-4 group-hover:shadow-lg transition-shadow">
                <Calendar className="h-8 w-8 text-slate-300" />
              </div>
              <h3 className="text-xl font-medium text-white mb-3">
                Schedule a Consultation
              </h3>
              <p className="text-slate-400 mb-6">
                Get a personalized assessment of your FX exposure and risk management needs.
              </p>
              <Button className="bg-gradient-to-r from-white to-slate-100 text-slate-900 hover:from-slate-100 hover:to-white w-full shadow-lg">
                Book Meeting
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-slate-800 to-slate-700 border-slate-600 hover:border-slate-500 transition-all duration-300 group">
            <CardContent className="p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-slate-700 to-slate-600 rounded-xl mb-4 group-hover:shadow-lg transition-shadow">
                <Mail className="h-8 w-8 text-slate-300" />
              </div>
              <h3 className="text-xl font-medium text-white mb-3">
                Request Whitepaper
              </h3>
              <p className="text-slate-400 mb-6">
                Download our comprehensive guide to FX risk management in emerging markets.
              </p>
              <Button variant="outline" className="border-slate-500 text-white hover:bg-slate-600/50 w-full backdrop-blur-sm">
                Download Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-slate-400 text-sm">
          <p>Trusted by 50+ venture capital firms globally</p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
