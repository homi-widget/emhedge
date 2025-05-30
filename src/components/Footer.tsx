import { TrendingUp, Linkedin, Twitter, Mail } from "lucide-react";
import Logo from "@/components/Logo";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-slate-100 border-t border-slate-200 py-16 px-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute bottom-0 left-0 w-full h-32 opacity-5" viewBox="0 0 1000 100">
          <defs>
            <pattern id="waves" x="0" y="0" width="200" height="20" patternUnits="userSpaceOnUse">
              <path d="M0,10 Q50,0 100,10 T200,10" fill="none" stroke="#64748b" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#waves)" />
        </svg>
        
        <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-blue-200/10 to-slate-200/20 rounded-full blur-xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Logo className="text-slate-700" size={32} />
              <span className="text-xl font-light text-slate-900">EmHedge</span>
            </div>
            <p className="text-slate-600 mb-6 max-w-md">
              Empowering venture capital firms with sophisticated FX risk management 
              solutions for emerging markets.
            </p>
            <div className="flex items-center gap-4">
              <div className="p-2 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg hover:shadow-md transition-all cursor-pointer">
                <Linkedin className="h-5 w-5 text-slate-600 hover:text-slate-800 transition-colors" />
              </div>
              <div className="p-2 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg hover:shadow-md transition-all cursor-pointer">
                <Twitter className="h-5 w-5 text-slate-600 hover:text-slate-800 transition-colors" />
              </div>
              <div className="p-2 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg hover:shadow-md transition-all cursor-pointer">
                <Mail className="h-5 w-5 text-slate-600 hover:text-slate-800 transition-colors" />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-slate-900 font-medium mb-4">Services</h3>
            <ul className="space-y-3 text-slate-600">
              <li><a href="#" className="hover:text-slate-900 transition-colors">FX Advisory</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Risk Monitoring</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Custom Solutions</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Market Intelligence</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-slate-900 font-medium mb-4">Company</h3>
            <ul className="space-y-3 text-slate-600">
              <li><a href="#" className="hover:text-slate-900 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Team</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Press</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm mb-4 md:mb-0">
            © 2024 EmHedge. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-slate-500 text-sm">
            <a href="#" className="hover:text-slate-700 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-700 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-700 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
