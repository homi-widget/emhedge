
import { ArrowRight, Mail, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const CTA = () => {
  return (
    <section className="py-24 px-4 bg-slate-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-light text-white mb-6">
          Ready to Optimize Your FX Strategy?
        </h2>
        <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
          Join the growing number of venture capital firms that trust us 
          to manage their emerging market currency exposure.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card className="bg-slate-800 border-slate-700">
            <CardContent className="p-8 text-center">
              <Calendar className="h-12 w-12 text-slate-300 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-white mb-3">
                Schedule a Consultation
              </h3>
              <p className="text-slate-400 mb-6">
                Get a personalized assessment of your FX exposure and risk management needs.
              </p>
              <Button className="bg-white text-slate-900 hover:bg-slate-100 w-full">
                Book Meeting
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-slate-700">
            <CardContent className="p-8 text-center">
              <Mail className="h-12 w-12 text-slate-300 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-white mb-3">
                Request Whitepaper
              </h3>
              <p className="text-slate-400 mb-6">
                Download our comprehensive guide to FX risk management in emerging markets.
              </p>
              <Button variant="outline" className="border-slate-600 text-white hover:bg-slate-700 w-full">
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
