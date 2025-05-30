
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F6F6F6]/95 backdrop-blur-sm border-b border-[#2F2F2F]/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Logo className="text-[#111111]" size={32} />
            <span className="text-xl font-light text-[#111111]">EmHedge</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-[#2F2F2F] hover:text-[#111111] transition-colors">
              Services
            </a>
            <a href="#about" className="text-[#2F2F2F] hover:text-[#111111] transition-colors">
              About
            </a>
            <a href="#insights" className="text-[#2F2F2F] hover:text-[#111111] transition-colors">
              Insights
            </a>
            <a href="#contact" className="text-[#2F2F2F] hover:text-[#111111] transition-colors">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <Button variant="ghost" className="hidden md:flex text-[#2F2F2F] hover:text-[#111111] hover:bg-[#F6F6F6]">
              Login
            </Button>
            <Button className="bg-[#FFCB74] hover:bg-[#FFCB74]/80 text-[#111111] font-medium">
              Get Started
            </Button>
            <Button variant="ghost" size="sm" className="md:hidden text-[#2F2F2F]">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
