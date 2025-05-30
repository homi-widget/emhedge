
import { TrendingUp, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="h-8 w-8 text-slate-700" />
              <span className="text-xl font-light text-slate-900">FXGuard</span>
            </div>
            <p className="text-slate-600 mb-6 max-w-md">
              Empowering venture capital firms with sophisticated FX risk management 
              solutions for emerging markets.
            </p>
            <div className="flex items-center gap-4">
              <Linkedin className="h-5 w-5 text-slate-500 hover:text-slate-700 cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-slate-500 hover:text-slate-700 cursor-pointer transition-colors" />
              <Mail className="h-5 w-5 text-slate-500 hover:text-slate-700 cursor-pointer transition-colors" />
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
            © 2024 FXGuard. All rights reserved.
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
